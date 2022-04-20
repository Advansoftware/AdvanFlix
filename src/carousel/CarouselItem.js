import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Grid, Typography } from '@mui/material'
import styled from 'styled-components';
import Api from '../services/Api';

export default function CarouselItem(props) {
    const [itemdata, setItemData] = useState(null);
    const [items, setItems] =useState(null);

    useEffect(()=> {
        Api.get(`Users/e27bbb6b9a1a468a80b17e216cec3909/Items/Latest?api_key=f13ed9c8b0fb4c5c8df3ae63c0105535`)
        .then(data => setItemData(data.data))
        .catch(err => console.error(err));
      }, []);
       async function f(element, dados) {
        try{
            let data = await Api.get(`Users/e27bbb6b9a1a468a80b17e216cec3909/Items/${element.Id}?api_key=f13ed9c8b0fb4c5c8df3ae63c0105535`);
            
            dados.push(
                {
                    id: element.Id,
                    name: element.Name,
                    logo: `https://advansoftware.tech:8443/jellyfin/Items/${element.Id}/Images/logo?fillHeight=178&fillWidth=317`,
                    image: `https://advansoftware.tech:8443/jellyfin/Items/${element.Id}/Images/Backdrop`,
                    description: data.data.Overview,
                });
        }catch(err){
            console.log(err);
        }
    }

      useEffect(()=> {
            let dados=[];
            if(!!itemdata){
                itemdata.forEach(element => {
                    f(element,dados);
                });  
            }
            if(!!dados.length>0){
                setItems(dados);  
            } 
            console.log('size',dados.length);
            
      },[itemdata]);
      if(!items){
          return null;
      }
      console.log(items);
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
                    items.map((item, i) => {<>{console.log(item)}<Item key={i} item={item} /></>})
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