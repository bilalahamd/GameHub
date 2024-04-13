import { useQuery } from "@tanstack/react-query";
import ApiClient, { Platform } from "../services/api-client";
const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

const usePlatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
  });
export default usePlatform;
