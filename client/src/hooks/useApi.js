import { useState, useEffect, useRef, useCallback } from 'react';

const useApi = (apiFn) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const stableFn = useRef(apiFn);
  stableFn.current = apiFn;

  const execute = useCallback(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    stableFn.current()
      .then(res => { if (!cancelled) setData(res.data); })
      .catch(err => { if (!cancelled) setError(err?.response?.data?.message || 'Failed to load data'); })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    return execute();
  }, [execute]);

  return { data, loading, error };
};

export default useApi;
