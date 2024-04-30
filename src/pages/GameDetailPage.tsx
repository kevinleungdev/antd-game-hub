import { Flex, Spin, Typography } from "antd";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameScreenshots from "../components/GameScreenshots";
import GameTrailer from "../components/GameTrailer";
import useGame from "../hooks/useGame";

const { Title } = Typography;

const baseStyles: React.CSSProperties = {
  width: "50%",
};

const GameDetailPage = () => {
  const params = useParams();
  const { data: game, error, isLoading } = useGame(params.slug!);

  if (isLoading) return <Spin />;
  if (error || !game) throw error;

  return (
    <Flex wrap="wrap">
      <Flex vertical style={{ ...baseStyles }}>
        <Title level={2}>{game.name}</Title>
        <ExpandableText content={game.description_raw} />
      </Flex>
      <Flex vertical style={{ ...baseStyles, marginTop: "25px" }}>
        <GameTrailer gameId={game.id} />
        <GameScreenshots gameId={game.id} />
      </Flex>
    </Flex>
  );
};

export default GameDetailPage;
