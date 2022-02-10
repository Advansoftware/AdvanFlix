import { Card, CardActionArea, CardMedia, Container, Grid } from "@mui/material";
import styled from 'styled-components';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import IconButton from '@mui/material/IconButton';

const Items = () => {
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
        <Grid item xs={2} sx={{ mt: 3 }}>
            <Card>
                <CardActionArea>
                    <OpenInfoCase>
                        <IconButton color="primary" aria-label="add an alarm">
                            <PlayArrowIcon fontSize="large" />
                        </IconButton>
                    </OpenInfoCase>
                    <CardMedia
                        component="img"
                        image="http://advansoftware.tech:8096/Items/427e095e3762c269b2f83a614c271b65/Images/primary?fillHeight=178&fillWidth=317"
                        alt="green iguana"
                    />
                </CardActionArea>
            </Card>
        </Grid>
    );
}
export default Items;