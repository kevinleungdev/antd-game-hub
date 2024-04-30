import { useQuery } from "@tanstack/react-query";
import Genre from "../entities/Genre";
import ApiClient from "../services/api-client";
import genres from "../data/genres";

const apiClient = new ApiClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60_000_000,
    initialData: genres,
  });

export default useGenres;
