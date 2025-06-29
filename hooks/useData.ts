import { server } from "@/misc/axios";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";

const useData = <T>({
  url,
  method,
  deps = [],
  params = {},
}: {
  url: string;
  method: string;
  deps?: any[];
  params?: Record<string, any>;
}) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await server.request<T>({
          method,
          url,
          params,
        });
        setData(res.data);
        setLoading(false);
      } catch (err) {
        if (err instanceof AxiosError) setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [...deps, ...Object.values(params), url]);

  return [data, loading, error] as [T | null, boolean, string | null];
};

export default useData;
