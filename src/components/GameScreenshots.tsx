import { Col, Image, Row } from "antd";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;
  if (error) throw error;

  return (
    <Row gutter={[8, 8]} style={{ marginTop: "20px" }}>
      {data?.results.map((file) => (
        <Col key={file.id} xs={24} sm={24} md={12}>
          <Image preview={false} src={file.image} key={file.id} />
        </Col>
      ))}
    </Row>
  );
};

export default GameScreenshots;
