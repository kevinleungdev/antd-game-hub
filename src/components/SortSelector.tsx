import { Input, Select, Space } from "antd";
import useGameQueryStore from "../store";

const SortSelector = () => {
  const options = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const selectedSortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const setSelectedSortOrder = useGameQueryStore((s) => s.setSortOrder);

  return (
    <Space.Compact>
      <Input
        style={{
          width: 90,
          borderRight: 0,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          paddingRight: 0,
        }}
        placeholder="Order by:"
        disabled
      />
      <Select
        style={{ width: 120 }}
        defaultValue={selectedSortOrder}
        options={options}
        onChange={(value) => setSelectedSortOrder(value)}
      />
    </Space.Compact>
  );
};

export default SortSelector;
