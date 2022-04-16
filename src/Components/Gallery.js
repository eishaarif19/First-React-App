import * as React from 'react';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from "@material-ui/core/CardContent";

import { makeStyles } from '@material-ui/core/styles'

import 'fontsource-lora';

const useStyles = makeStyles({
    typ: {

        color: 'white',
        padding: '15px',
        fontFamily: 'Lora'
    },
    gridCon: {
        padding: '3.5vw',
        margin: '0 auto',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    CardInd: {
        backgroundColor: 'transparent',
        marginBottom: '6px'
    },
    CardCont: {
        backgroundColor: '#5B6B8A'

    },
    CardTyp: {
        color: 'white',
        padding: '1px',
        fontFamily: 'Lora',
        fontSize: '20px',

    }
});


function Gallery() {

    const classes = useStyles();

    return (
        <div id='Gallery'>
            <Grid container spacing={4} justify="center" className={classes.gridCon}>
                <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                    <Typography className={classes.typ} variant='h4'>Gallery</Typography>

                    <Typography className={classes.typ} variant='body1'>This section containes several images in a Card Grid display. Each image is picked from a different domain exhibiting some unique idea.</Typography>

                </Grid>
                <Grid item xs={12} sm={4} md={8} lg={8} xl={8}>
                    <Grid container>
                        {itemData.map((item) => (
                            <Grid item key={item.img}>
                                <Card className={classes.CardInd}>
                                    <img
                                        src={`${item.img}?w=200&h=200&fit=crop&auto=format`}
                                        srcSet={`${item.img}?w=200&h=200&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                    <CardContent className={classes.CardCont}>
                                        <Typography variant="subtitle1" className={classes.CardTyp} >
                                            {item.title}
                                        </Typography >
                                    </CardContent>
                                </Card>

                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>

        </div>

    );
}

export default Gallery;

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
    }
];

/* <ImageList sx={{ width: 800, height: 650 }} cols={3} rowHeight={250}>
    {itemData.map((item) => (
        <ImageListItem key={item.img}>
            <img
                src={`${item.img}?w=250&h=250&fit=crop&auto=format`}
                srcSet={`${item.img}?w=250&h=250&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
            />
        </ImageListItem>
    ))}
</ImageList> */