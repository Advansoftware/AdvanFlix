import { Card, CardActionArea, CardMedia, Grid } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import IconButton from '@mui/material/IconButton';
import styled from 'styled-components';

const Poster = ({ item, index }) => {
    const OpenInfoCase = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    align-items: center;
    z-index: 3;
    opacity: 0;
    display: flex;
    transition: .2s;
    font-size: 4rem;
    vertical-align: middle;
    align-items: center;
    justify-content: center;
    
    &:hover{
        background-color: rgba(0, 0, 0, .8);
        color: red;
        opacity: 1;
        transition: .2s;
    }
    `;
    return (
        <>
            <Grid Grid item md={2} xs={4} sx={{ mt: 3 }} key={index}>
                <CardActionArea>
                    <Card sx={{ height: '100%' }}>

                        <OpenInfoCase>
                            <IconButton color="primary" aria-label="add an alarm">
                                <PlayArrowIcon fontSize="large" />
                            </IconButton>
                        </OpenInfoCase>
                        <CardMedia
                            component="img"
                            image={item.image}
                            alt={item.name}
                        />
                    </Card>
                </CardActionArea>
            </Grid>
        </>
    )
}
export default Poster;