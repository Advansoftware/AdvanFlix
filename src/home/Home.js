import CarouselItem from "../carousel/CarouselItem"
import Items from "../components/Items";
import { Container, Grid } from "@mui/material";
import styled from 'styled-components';
import Footer from "../Footer";
import Api from "../services/Api";
import { useEffect, useState } from "react";
const Home = () => {
    const [data, setData] = useState(null);
    const ContainerItem = styled.div`
    width: 100%;
    `;
    useEffect(()=> {
        Api.get("Users/e27bbb6b9a1a468a80b17e216cec3909/Items?IncludeItemTypes=movie&ImageTypes=Backdrop&ParentId=af92f2d68eea947c7f9df41836afb987&api_key=f13ed9c8b0fb4c5c8df3ae63c0105535&userId=020893e85cae4fbba93d4e1ea1c0db6e&StartIndex=0&Limit=30")
        .then(data => setData(data.data.Items))
        .catch(err => console.error(err));
      }, []);
      
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
                            <Items data={data}/>
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