import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
  setSearchText: (searchText: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setGenreId: (genreId) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, genreId: genreId } })),
  setPlatformId: (platformId) =>
    set((state) => ({
      gameQuery: { ...state.gameQuery, platformId: platformId },
    })),
  setSortOrder: (sortOrder) =>
    set((state) => ({
      gameQuery: { ...state.gameQuery, sortOrder: sortOrder },
    })),
  setSearchText: (searchText) => set({ gameQuery: { searchText: searchText } }),
}));

if (import.meta.env.DEV) {
  mountStoreDevtool("GameQuery Store", useGameQueryStore);
}

export default useGameQueryStore;
