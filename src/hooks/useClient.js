import { useEffect, useState } from "react";

const useClient = () => {
  const [client, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
  }, []);
  return client;
};
export default useClient;
