import logo from './logo.png';
import styled from 'styled-components';
import { Grid } from '@mui/material';

const Header = () => {
    const LogoImage = styled.img`
    max-width: 230px;
    margin: 1rem;
    `;
    const HeaderItem = styled.div`
    position: fixed;
    background: rgb(2, 0, 36);
    background: linear-gradient(180deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%);
    z-index: 4;
    top: 0;
    left: 0;
    right: 0;
    `;

    return (
        <HeaderItem>
            <Grid
                container
                spacing={2}
                alignItems='center'
                justifyContent='space-between'
            >
                <Grid item xs={3}>
                    <LogoImage src={logo} />
                </Grid>
            </Grid>
        </HeaderItem>
    );
}
export default Header;