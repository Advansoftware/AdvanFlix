import { Card, CardActionArea, CardMedia, Grid } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import IconButton from "@mui/material/IconButton";
import styled from "styled-components";
import { useEffect, useState } from "react";

const Poster = ({ item, index }) => {
  const [image, setImage] = useState(null);
  useEffect(() => {
    setImage(
      "http://app.advansoftware.shop:8096/Items/" + item.Id + "/Images/Primary"
    );
  }, [item]);
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
    transition: 0.2s;
    font-size: 4rem;
    vertical-align: middle;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: rgba(0, 0, 0, 0.8);
      color: red;
      opacity: 1;
      transition: 0.2s;
    }
  `;
  return (
    <>
      <Grid Grid item md={2} xs={4} sx={{ mt: 3 }} key={index}>
        <CardActionArea>
          <Card sx={{ height: "100%" }}>
            <OpenInfoCase>
              <IconButton color="primary" aria-label="add an alarm">
                <PlayArrowIcon fontSize="large" />
              </IconButton>
            </OpenInfoCase>
            <CardMedia component="img" image={image} alt={item.Name} />
          </Card>
        </CardActionArea>
      </Grid>
    </>
  );
};
export default Poster;
