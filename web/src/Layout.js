import { experimentalStyled } from "@mui/material";
import Header from "./Header";
import RoutesItem from "./RoutesItem";
import SplashScreen from "./components/SplashScreen";
import useSplashScreen from "./hooks/useSplashScreen";

const LayoutRoot = experimentalStyled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  display: "flex",
  height: "100%",
  overflow: "hidden",
  width: "100%",
  margin: 0,
  padding: 0,
}));
const LayoutWrapper = experimentalStyled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  overflow: "hidden",
  margin: 0,
  padding: 0,
}));
const Layout = () => {
  const { showSplashScreen } = useSplashScreen();
  return (
    <LayoutRoot>
      {showSplashScreen && <SplashScreen pageLoading />}
      <Header />
      <LayoutWrapper>
        <RoutesItem />
      </LayoutWrapper>
    </LayoutRoot>
  );
};
export default Layout;
