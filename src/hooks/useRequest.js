import { useState, useEffect } from "react";

export const useRequest = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch(endpoint);
      const data = await response.json();
      setData(data);
      setLoading(false);
    };
    loadData();
  }, [endpoint]);

  return { data, loading };
};
