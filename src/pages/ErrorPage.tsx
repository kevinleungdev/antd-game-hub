import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Typography } from "antd";

const ErrorPage = () => {
  const error = useRouteError();

  const { Title, Text } = Typography;

  return (
    <>
      <NavBar />
      <div style={{ padding: "0.5em" }}>
        <Title level={2}>Oops</Title>
        <Text type="danger">
          {isRouteErrorResponse(error)
            ? "This page does not exist."
            : "An unexpected error has occurred."}
        </Text>
      </div>
    </>
  );
};

export default ErrorPage;
