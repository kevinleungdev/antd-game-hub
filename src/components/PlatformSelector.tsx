import { Select } from "antd";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
  const { data: platforms, error } = usePlatforms();

  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);

  if (error) return null;

  return (
    <Select
      placeholder="Platforms"
      style={{ width: 150 }}
      options={platforms?.results.map((platform) => ({
        label: platform.name,
        value: platform.id,
      }))}
      onChange={(platformId) => setSelectedPlatformId(platformId)}
      defaultValue={selectedPlatformId}
    ></Select>
  );
};

export default PlatformSelector;
