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
        padding: '5vw',
        margin: '0 auto',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    }
});

function About() {

    const classes = useStyles();

    return (
        <div id='About'>
            <Grid container spacing={3} justify="center" className={classes.gridCon}>

                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <img style={{ height: 400, width: '75%', borderRadius: 15, justifyContent: 'center' }} src='https://wallpapercave.com/wp/wp4527822.jpg' />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Typography className={classes.typ} variant='h4'>About</Typography>
                    <Typography className={classes.typ} variant='body1'>Mold your Innovation with the Lastest Tips and Tools</Typography>
                    <Typography className={classes.typ} variant='body1'>It's only when you risk failure that you discover things. When you play it safe, you're not expressing the utmost of your human experience. A Journey of a Thousand Miles Begins with a Single Step...</Typography>

                </Grid>

            </Grid>
        </div>
    )

}

export default About;