import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';

interface UseFetchState<T> {
  data: T | null;
  loading: boolean;
  error: AxiosError | null;
}

export const useFetch = <T,>(url: string): UseFetchState<T> => {
  const [state, setState] = useState<UseFetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setState({ data: response.data, loading: false, error: null });
      } catch (error) {
        setState({ data: null, loading: false, error: error as AxiosError });
      }
    };

    fetchData();
  }, [url]);

  return state;
};
