import CarouselItem from "../carousel/CarouselItem"
import Items from "../components/Items";
import { Container, Grid } from "@mui/material";
import styled from 'styled-components';
import Footer from "../Footer";
const Home = () => {
    const ContainerItem = styled.div`
    width: 100%;
    `;

    return (
        <ContainerItem>
            <Grid container>
                <Grid item xs={12}>
                    <CarouselItem />
                </Grid>
                <Grid item xs={12} container>
                    <Container>
                        <Grid
                            spacing={2}
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                        >
                            <Items />
                        </Grid>
                    </Container>
                </Grid>
                <Grid item xs={12} container>
                    <Footer />
                </Grid>
            </Grid>
        </ContainerItem>
    );
};
export default Home;