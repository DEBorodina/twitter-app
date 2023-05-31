import { useEffect, useState } from 'react';

export const useFirebaseHelper = <DataType>(
  fetchData: () => Promise<DataType[]>
): [DataType[], boolean, () => Promise<void>] => {
  const [data, setData] = useState<DataType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const submit = async () => {
    setIsLoading(true);
    const twits = await fetchData();
    setIsLoading(false);
    setData(twits);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [data, isLoading, submit];
};
