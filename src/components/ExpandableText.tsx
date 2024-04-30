import { Button, Typography } from "antd";
import { useState } from "react";

interface Props {
  content: string;
}

const { Text } = Typography;

const ExpandableText = ({ content }: Props) => {
  const [expended, setExpanded] = useState(false);
  const limit = 300;

  if (content.length < limit) return <Text>{content}</Text>;

  const summary = expended ? content : content.substring(0, limit) + "...";

  return (
    <Text>
      {summary}{" "}
      <Button
        type="primary"
        size="small"
        onClick={() => setExpanded(!expended)}
      >
        {expended ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
