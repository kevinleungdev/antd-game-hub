import { useQuery } from "@tanstack/react-query";
import Platform from "../entities/Platform";
import ApiClient from "../services/api-client";

const apiClient = new ApiClient<Platform>("/platforms");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
  });

export default usePlatforms;
