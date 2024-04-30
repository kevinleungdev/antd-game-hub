import { Col, Row, Spin, Typography } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const { Text } = Typography;

interface Props {
  styles?: React.CSSProperties;
}

const GameGrid = ({ styles }: Props) => {
  const { data, error, fetchNextPage, hasNextPage } = useGames();

  if (error) return <Text type="danger">{error.message}</Text>;

  const fetchedGameCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <>
      <InfiniteScroll
        dataLength={fetchedGameCount}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spin />}
        style={{ ...styles, overflow: "hidden" }}
      >
        <>
          {data?.pages.map((page, index) => (
            <Row key={index} gutter={[32, 32]}>
              {page.results.map((game) => (
                <Col key={game.id} sm={24} md={12} lg={8} xl={6}>
                  <GameCard game={game} />
                </Col>
              ))}
            </Row>
          ))}
        </>
      </InfiniteScroll>
    </>
  );
};

export default GameGrid;
