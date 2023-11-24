import { CircularProgress, experimentalStyled } from "@mui/material";
import logo from "../logo.png";
import styled from "styled-components";
const SplashScreen = ({ pageLoading }) => {
  const LayoutWrapper = experimentalStyled("div")(({ theme }) => ({
    display: "flex",
    flex: "1 1 auto",
    position: "fixed",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    overflow: "hidden",
    margin: 0,
    padding: 0,
    backgroundColor: "#010810",
    zIndex: 100,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  }));
  const LogoImage = styled.img`
    max-width: 40vh;
    max-height: 10vh;
    margin: 1rem;
  `;
  return (
    <LayoutWrapper>
      <LogoImage src={logo} />
      <CircularProgress color="error" />
    </LayoutWrapper>
  );
};
export default SplashScreen;
