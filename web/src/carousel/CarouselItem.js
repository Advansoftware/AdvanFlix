/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import styled from "styled-components";
import { Apiget } from "../helpers/ApiServices";
import useAuth from "../hooks/useAuth";

export default function CarouselItem(props) {
  const [itemdata, setItemData] = useState(null);
  const [items, setItems] = useState(null);

  const getData = useCallback(async () => {
    try {
      const data = await Apiget("Movies/Recommendations", "categoryLimit=6");
      data.data.forEach((item) => {
        item.Items.forEach((element) => {
          console.log(element.Id);
        });
      });

      setItemData(data.data[0].Items);
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  async function f(element, dados) {
    try {
      dados.push({
        name: element.Name,
        logo:
          "http://app.advansoftware.shop:8096/Items/" +
          element.Id +
          "/Images/Backdrop",
        image:
          "http://app.advansoftware.shop:8096/Items/" +
          element.Id +
          "/Images/Primary",
        description: element.description,
        id: element.Id,
      });
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    let dados = [];
    if (!!itemdata) {
      itemdata.forEach((element) => {
        f(element, dados);
      });
    }
    if (!!dados.length > 0) {
      setItems(dados);
    }
  }, [itemdata]);

  if (!items) {
    return null;
  }
  return (
    <div
      style={{
        marginTop: "-1rem",
        color: "#494949",
      }}
    >
      <Carousel indicators={false}>
        {items.map((item, i) => {
          return (
            <>
              {" "}
              <Item key={i} item={item} />
            </>
          );
        })}
      </Carousel>
    </div>
  );
}

function Item(props) {
  const { userId } = useAuth();

  const [itemDetails, setItemDetails] = useState();
  const getData = useCallback(async () => {
    try {
      let getInfoElement = await Apiget(
        `Users/${userId}/Items/${props.item.id}`
      );
      setItemDetails(getInfoElement.data);
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);
  const matches = useMediaQuery("(max-width:600px)");
  const PaperItem = styled.div`
    border-radius: 0px;
    position: absolute;
    width: 40%;
    top: 0;
    left: 0;
    height: 100%;
    background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.9) 80%,
      rgba(0, 0, 0, 0) 100%
    );
    border: 0px solid;
    z-index: 3 !important;
    display: flex;
    gap: 1;
    align-content: center;
    align-items: center;
    padding-left: 5rem;
  `;

  const SlideItem = styled.img`
    width: 100%;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 100%;
    filter: brightness(0.9);
  `;
  const LogoItem = styled.img`
    max-width: 250px;
    max-height: 120px;
  `;

  return (
    <Paper
      sx={{
        height: "98vh",
      }}
    >
      <SlideItem src={matches ? props.item.image : props.item.logo} />
      <PaperItem>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          spacing={3}
        >
          <Grid item xs={12}>
            <LogoItem
              src={
                "http://app.advansoftware.shop:8096/Items/" +
                itemDetails?.Id +
                "/Images/Logo"
              }
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4">{props.item.name}</Typography>
            <p>{itemDetails?.Overview}</p>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" fullWidth>
              assistir
            </Button>
          </Grid>
        </Grid>
      </PaperItem>
    </Paper>
  );
}
