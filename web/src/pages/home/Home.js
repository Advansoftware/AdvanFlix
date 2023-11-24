import CarouselItem from "../../carousel/CarouselItem";
import Items from "../../components/Items";
import { Container, Grid } from "@mui/material";
import styled from "styled-components";
import Footer from "../../Footer";

import { useCallback, useEffect, useState } from "react";
import { Apiget } from "../../helpers/ApiServices";

const Home = () => {
  const [data, setData] = useState(null);
  const ContainerItem = styled.div`
    width: 100%;
  `;

  const getData = useCallback(async () => {
    try {
      const data = await Apiget("Movies/Recommendations", "categoryLimit=6");
      let items = [];
      data.data.forEach((element) => {
        element.Items.forEach((item) => {
          items.push(item);
        });
      });
      setData(items);
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <ContainerItem>
      <Grid container>
        <Grid item xs={12}>
          <CarouselItem />
        </Grid>
        <Grid item xs={12}>
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
