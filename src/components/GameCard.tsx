import { Card, Flex, Typography } from "antd";
import Game from "../entities/Game";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const { Title } = Typography;

const GameCard = ({ game }: Props) => {
  return (
    <Card
      hoverable
      styles={{ body: { padding: "12px" } }}
      cover={
        <img
          src={getCroppedImageUrl(game.background_image)}
          alt={game.background_image}
        />
      }
    >
      <Flex vertical gap="small">
        <Flex justify="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </Flex>
        <Title level={4} style={{ margin: 0 }}>
          <Link to={`/games/${game.slug}`} style={{ color: "inherit" }}>
            {game.name}
          </Link>
        </Title>
        <Emoji rating={game.rating_top} />
      </Flex>
    </Card>
  );
};

export default GameCard;
