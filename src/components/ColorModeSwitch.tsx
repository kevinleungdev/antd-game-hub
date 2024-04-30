import { Space, Switch, Typography } from "antd";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";

const { Text } = Typography;

const ColorModeSwitch = () => {
  return (
    <Space>
      <Switch
        checkedChildren={<MoonOutlined />}
        unCheckedChildren={<SunOutlined />}
        defaultChecked
      />
      <Text>Dark Mode</Text>
    </Space>
  );
};

export default ColorModeSwitch;
