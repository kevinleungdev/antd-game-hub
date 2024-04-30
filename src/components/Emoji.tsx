import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Image } from "antd";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: any } = {
    3: { src: meh, alt: "meh", width: "25px", height: "25px" },
    4: { src: thumbsUp, alt: "recommended", width: "25px", height: "25px" },
    5: { src: bullsEye, alt: "exceptional", width: "25px", height: "25px" },
  };

  return <Image {...emojiMap[rating]} preview={false} />;
};

export default Emoji;
