import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Grid, Typography, useMediaQuery } from '@mui/material'
import styled from 'styled-components';
import axios from 'axios';

export default function CarouselItem(props) {
    const [itemdata, setItemData] = useState(null);
    const [items, setItems] = useState(null);

    const options = {
        method: 'GET',
        url: 'http://localhost:3333/listcarousel',
    };

    useEffect(() => {
        axios.request(options).then(function (response) {
            setItemData(response.data)

        }).catch(function (error) {
            console.error(error);
        });
    }, []);

    async function f(element, dados) {
        try {
            dados.push(
                {
                    name: element.name,
                    logo: element.logo,
                    image: element.image,
                    description: element.description,
                });
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        let dados = [];
        if (!!itemdata) {
            itemdata.forEach(element => {
                f(element, dados);
            });
        }
        if (!!dados.length > 0) {
            setItems(dados);
        }
    }, [itemdata]);
    console.log(items)
    if (!items) {
        return null;
    }
    return (
        <div
            style={{
                marginTop: '-1rem',
                color: "#494949"
            }}
        >
            <Carousel
                indicators={false}
            >
                {
                    items.map((item, i) => { return (<> <Item key={i} item={item} /></>) })
                }
            </Carousel>
        </div >
    )
}

function Item(props) {
    const matches = useMediaQuery('(min-width:600px)');
    const PaperItem = styled.div`
    border-radius: 0px;
    position: absolute;
    width: 40%;
    top: 0;
    left: 0;
    height: 100%;
    background: rgb(2, 0, 36);
    background: linear-gradient(90deg, rgba(0, 0, 0, .90) 80%, rgba(0, 0, 0, 0) 100%);
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
        <Paper sx={{
            height: '98vh',
        }}>
            <SlideItem src={matches ? props.item.image : props.item.logo} />
            <PaperItem>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="flex-start"
                    spacing={3}
                >
                    {/* <Grid item xs={12}>
                        <LogoItem src={props.item.image} />
                    </Grid> */}
                    <Grid item xs={12}>
                        <Typography variant='h4'>{props.item.name}</Typography>
                        <p>{props.item.description}</p>
                    </Grid>
                    <Grid item xs={3} >
                        <Button variant='contained' fullWidth>
                            assistir
                        </Button>
                    </Grid>
                </Grid>
            </PaperItem>

        </Paper>
    )
}