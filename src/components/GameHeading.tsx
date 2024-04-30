import { Typography } from "antd";
import useGameQueryStore from "../store";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

const GameHeading = () => {
  const { Title } = Typography;

  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const heading = `${genre?.name || ""} ${platform?.name || ""} Games`;

  return (
    <Title level={1} style={{ marginTop: 0 }}>
      {heading}
    </Title>
  );
};

export default GameHeading;
