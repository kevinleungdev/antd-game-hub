import { Input } from "antd";
import useGameQueryStore from "../store";

const SearchInput = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);

  return (
    <Input.Search
      style={{ width: "85%" }}
      placeholder="Search games..."
      onSearch={(value) => setSearchText(value)}
    />
  );
};

export default SearchInput;
