import { IconType } from "react-icons";
import { BsGlobe } from "react-icons/bs";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNiconico } from "react-icons/si";
import Platform from "../entities/Platform";
import { Space } from "antd";
import Icon from "@ant-design/icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNiconico,
    mac: FaApple,
    ios: MdPhoneIphone,
    android: FaAndroid,
    linux: FaLinux,
    web: BsGlobe,
  };

  return (
    <Space>
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          component={iconMap[platform.slug]}
          color="#bfbfbf"
        ></Icon>
      ))}
    </Space>
  );
};

export default PlatformIconList;
