import { useState, useEffect, useRef } from 'react';

const useApi = (apiFn, deps = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiFnRef = useRef(apiFn);
  apiFnRef.current = apiFn;

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    apiFnRef.current()
      .then(res => { if (!cancelled) setData(res.data); })
      .catch(err => { if (!cancelled) setError(err?.response?.data?.message || 'Failed to load data'); })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
    // deps are intentionally passed by the caller
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { data, loading, error };
};

export default useApi;
