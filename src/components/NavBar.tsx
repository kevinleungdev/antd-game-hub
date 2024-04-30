import { Flex, Image } from "antd";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Flex justify="space-between" align="center">
      <Link to="/">
        <Image src={logo} width="50px" preview={false}></Image>
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </Flex>
  );
};

export default NavBar;
