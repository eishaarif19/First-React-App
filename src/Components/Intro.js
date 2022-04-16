import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles'

import 'fontsource-lora';

const useStyles = makeStyles({
    typ: {

        color: 'white',
        padding: '15px',
        fontFamily: 'Lora'
    },
    gridCon: {
        padding: '6vw 5vw',
        margin: '1.5vw 0 auto auto',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    }
});

function Intro() {

    const classes = useStyles();

    return (
        <div id='Intro'>
            <Grid container spacing={3} justify="center" className={classes.gridCon}>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Typography className={classes.typ} variant='h4'>Welcome to Eisha's Enterprise!</Typography>
                    <Typography className={classes.typ} variant='subtitle1'>The platform where Intelligence meets Art and Technology...</Typography>
                    <Typography className={classes.typ} variant='body1'>Innovation is the unrelenting drive to break the status quo and develop anew where few have dared to go. Intelligence is not to make no mistakes, but quickly to see how to make them good. Technology like art is a soaring exercise of the human imagination.</Typography>

                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <img style={{ height: 400, width: '75%', borderRadius: 15, justifyContent: 'center' }} src='https://cdn.mwallpapers.com/photos/wallpapers/animals-birds/cool-cat-android-iphone-desktop-hd-backgrounds-wallpapers-1080p-4khd-wallpapers-desktop-background-android-iphone-1080p-4k-yyx3o.jpg' />
                </Grid>
            </Grid>
        </div>
    )

}

export default Intro;