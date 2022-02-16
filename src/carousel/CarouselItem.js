import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Grid, Typography } from '@mui/material'
import styled from 'styled-components';

export default function CarouselItem(props) {
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

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
                    items.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>
        </div>
    )
}

function Item(props) {
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
            <SlideItem src='https://advansoftware.tech:8443/jellyfin/Items/ad9af8a15314561f5ee8544594dcfb23/Images/Backdrop' />
            <PaperItem>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="flex-start"
                    spacing={3}
                >
                    <Grid item xs={12}>
                        <LogoItem src="https://advansoftware.tech:8443/jellyfin/Items/ad9af8a15314561f5ee8544594dcfb23/Images/logo?fillHeight=178&fillWidth=317" />
                    </Grid>
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