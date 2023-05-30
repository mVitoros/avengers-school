import { useEffect, useState } from "react";

type FetchProps = {
  url: string;
};

type ErrorType = {
  message: string;
  status: boolean;
};

const ErrorInitialState: ErrorType = {
  message: "",
  status: false,
};

function useFetchData<T>({ url }: FetchProps) {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState<ErrorType>(ErrorInitialState);

  useEffect(() => {
    const RequestData = async () => {
      setIsLoading(true);
      setHasError(ErrorInitialState);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(
            `An error has occured. Error status: ${response.status}`
          );
        }
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setHasError({ message: (error as Error).message, status: true });
        setIsLoading(false);
      }
    };

    RequestData();
  }, [url]);

  return { data, isLoading, hasError };
}

export default useFetchData;
