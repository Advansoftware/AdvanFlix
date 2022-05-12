import CarouselItem from "../carousel/CarouselItem"
import Items from "../components/Items";
import { Container, Grid } from "@mui/material";
import styled from 'styled-components';
import Footer from "../Footer";

import { useEffect, useState } from "react";
import axios from 'axios';

const Home = () => {
    const [data, setData] = useState(null);
    const ContainerItem = styled.div`
    width: 100%;
    `;
    let options = {
        method: 'get',
        url: 'http://localhost:3333/listAll',
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Authorization",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
            "Content-Type": "application/json;charset=UTF-8"
        },
    };

    useEffect(() => {
        axios.request(options).then(function (response) {
            setData(response.data)
        }).catch(function (error) {
            console.error(error);
        });
    }, []);
    console.log(data)
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
                            <Items data={data} />
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