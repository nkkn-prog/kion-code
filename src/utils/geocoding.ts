export interface GoogleGeocodingResult {
  place_id: string;
  formatted_address: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
  address_components: Array<{
    long_name: string;
    short_name: string;
    types: string[];
  }>;
}

export interface GoogleGeocodingResponse {
  results: GoogleGeocodingResult[];
  status: string;
}

export interface LocationSuggestion {
  place_id: string;
  description: string;
  main_text: string;
  secondary_text: string;
}

export async function searchLocationsByText(query: string): Promise<GoogleGeocodingResult[]> {
  if (!query.trim()) {
    return [];
  }

  try {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_GEOCODING_API_KEY;
    if (!apiKey) {
      throw new Error('Google Geocoding API key is not configured');
    }

    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(query)}&key=${apiKey}&language=ja&region=jp`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch geocoding data');
    }

    const data: GoogleGeocodingResponse = await response.json();
    
    if (data.status !== 'OK') {
      console.warn('Geocoding API returned status:', data.status);
      return [];
    }

    return data.results.slice(0, 5); // Limit to 5 results
  } catch (error) {
    console.error('Error fetching geocoding data:', error);
    return [];
  }
}

export function formatLocationForDisplay(result: GoogleGeocodingResult): LocationSuggestion {
  const addressComponents = result.address_components;
  
  // Extract main area (locality, administrative_area_level_1)
  const locality = addressComponents.find(component => 
    component.types.includes('locality')
  )?.long_name;
  
  const adminLevel1 = addressComponents.find(component => 
    component.types.includes('administrative_area_level_1')
  )?.long_name;
  
  const country = addressComponents.find(component => 
    component.types.includes('country')
  )?.long_name;

  const mainText = locality || adminLevel1 || result.formatted_address.split(',')[0];
  const secondaryText = adminLevel1 && locality ? adminLevel1 : country || '';

  return {
    place_id: result.place_id,
    description: result.formatted_address,
    main_text: mainText,
    secondary_text: secondaryText,
  };
}