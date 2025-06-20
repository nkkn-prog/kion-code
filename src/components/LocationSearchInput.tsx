'use client';

import { TextInput, Loader, Menu, Text, Group, Box } from '@mantine/core';
import { useState, useEffect, useRef } from 'react';
import { searchLocationsByText, formatLocationForDisplay, type LocationSuggestion } from '@/utils/geocoding';
import { useDebouncedValue } from '@mantine/hooks';

interface LocationSearchInputProps {
  placeholder?: string;
  value?: string;
  onChange: (value: string) => void;
  onLocationSelect?: (location: LocationSuggestion) => void;
  error?: string;
}

export function LocationSearchInput({ 
  placeholder, 
  value = '', 
  onChange, 
  onLocationSelect,
  error 
}: LocationSearchInputProps) {
  const [suggestions, setSuggestions] = useState<LocationSuggestion[]>([]);
  const [loading, setLoading] = useState(false);
  const [opened, setOpened] = useState(false);
  const [debouncedValue] = useDebouncedValue(value, 500);
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const fetchSuggestions = async () => {
      // Cancel previous request
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      if (!debouncedValue.trim() || debouncedValue.length < 2) {
        setSuggestions([]);
        setOpened(false);
        return;
      }

      setLoading(true);
      abortControllerRef.current = new AbortController();

      try {
        const results = await searchLocationsByText(debouncedValue);
        const formattedSuggestions = results.map(formatLocationForDisplay);
        
        setSuggestions(formattedSuggestions);
        setOpened(formattedSuggestions.length > 0);
      } catch (error) {
        console.error('Error fetching location suggestions:', error);
        setSuggestions([]);
        setOpened(false);
      } finally {
        setLoading(false);
        abortControllerRef.current = null;
      }
    };

    fetchSuggestions();

    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [debouncedValue]);

  const handleSuggestionClick = (suggestion: LocationSuggestion) => {
    onChange(suggestion.main_text);
    onLocationSelect?.(suggestion);
    setOpened(false);
    setSuggestions([]);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    onChange(newValue);
    
    if (!newValue.trim()) {
      setSuggestions([]);
      setOpened(false);
    }
  };

  return (
    <Menu opened={opened} onChange={setOpened} position="bottom-start" width="target">
      <Menu.Target>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          error={error}
          rightSection={loading ? <Loader size="xs" /> : null}
          onFocus={() => {
            if (suggestions.length > 0) {
              setOpened(true);
            }
          }}
          onBlur={() => {
            // Delay closing to allow for suggestion clicks
            setTimeout(() => setOpened(false), 200);
          }}
        />
      </Menu.Target>

      <Menu.Dropdown>
        {suggestions.map((suggestion) => (
          <Menu.Item
            key={suggestion.place_id}
            onClick={() => handleSuggestionClick(suggestion)}
          >
            <Group gap="xs">
              <Box>
                <Text size="sm" fw={500}>
                  {suggestion.main_text}
                </Text>
                {suggestion.secondary_text && (
                  <Text size="xs" c="dimmed">
                    {suggestion.secondary_text}
                  </Text>
                )}
              </Box>
            </Group>
          </Menu.Item>
        ))}
        
        {suggestions.length === 0 && !loading && debouncedValue.length >= 2 && (
          <Menu.Item disabled>
            <Text size="sm" c="dimmed">
              該当する場所が見つかりません
            </Text>
          </Menu.Item>
        )}
      </Menu.Dropdown>
    </Menu>
  );
}