import { useCallback } from 'react';

const useHttp = () => {
  const get = useCallback(async (path: string, params?: Record<string, string>) => {
    const url = new URL(`/api/${path}`, window.location.origin);
    
    if (params) {
      Object.keys(params).forEach(key => {
        url.searchParams.append(key, params[key]);
      });
    }
    
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  }, []);

  const post = useCallback(async (path: string, body: unknown) => {
    const response = await fetch(`/api/${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  }, []);

  return { get, post };
};

export default useHttp;
