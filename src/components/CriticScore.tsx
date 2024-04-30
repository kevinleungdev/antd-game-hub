import { Badge } from "antd";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "#52c41a" : score > 60 ? "#ffec3d" : "";

  return <Badge color={color} count={score} showZero />;
};

export default CriticScore;
