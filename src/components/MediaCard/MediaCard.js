import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function MediaCard(props) {
    let priceInfo
    let color
    if(props.price<=200){
        priceInfo="promo";
        color="red";
    }
    else if (props.price>200 && props.price<=500){
        priceInfo="regular price"; color="blue";
    }
    else {priceInfo="xxx"; color="green"}
    return (
        <Card sx={{ maxWidth: 345}}>
            <CardMedia
                component="img"
                image={props.image}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button sx={{backgroundColor:"green"}} variant={"contained"} size="small">{props.price}</Button>
                <Button sx={{backgroundColor:color}} size="small">{priceInfo}</Button>
            </CardActions>
        </Card>
    );
}
