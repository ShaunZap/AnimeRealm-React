import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const CreateCard = ({ cardInfo }) => {
  console.log(cardInfo);
  return (
    <Grid container spacing={2}>
      {cardInfo &&
        cardInfo.data.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 300 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image={item.attributes.posterImage.medium}
                  alt={item.attributes.canonicalTitle}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {item.attributes.canonicalTitle}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
};

export default CreateCard;
