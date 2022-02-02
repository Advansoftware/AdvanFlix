import { experimentalStyled } from "@mui/material";
import Header from "./Header";
import Login from "./login/Login";


const LayoutRoot = experimentalStyled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
}));
const LayoutWrapper = experimentalStyled('div')(({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: '64px',
}));
const Layout = () => {
    return (
        <LayoutRoot>
            <Header />
            <LayoutWrapper>
                <Login />
            </LayoutWrapper>
        </LayoutRoot>
    );
}
export default Layout;