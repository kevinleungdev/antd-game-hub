import { Flex, Layout, Space } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import GenreList from "../components/GenreList";
import GameHeading from "../components/GameHeading";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import GameGrid from "../components/GameGrid";

const HomePage = () => {
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider theme="light" breakpoint="lg" collapsedWidth="0">
          <GenreList />
        </Sider>
        <Layout>
          <Content style={{ backgroundColor: "#ffffff" }}>
            <Flex gap="small" vertical>
              <GameHeading />
              <Space wrap>
                <PlatformSelector />
                <SortSelector />
              </Space>
              <GameGrid styles={{ marginTop: "30px" }} />
            </Flex>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default HomePage;
