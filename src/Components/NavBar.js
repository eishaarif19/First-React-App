import Appbar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import FitbitIcon from '@mui/icons-material/Fitbit';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import 'fontsource-lora'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        backgroundColor: 'lightgrey',
        border: 0,
        borderRadius: '5px',
        color: 'white',
        padding: '5px 20px'
    },
    tob: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    icnbtn: {
        padding: '5px 1.5vw',
        fontSize: "5vw"
    },
    typ: {
        padding: '5px 10px',
        fontSize: "2vw",
        fontFamily: 'Lora'
    },
    btn: {
        padding: '8px 2vw',
        fontSize: "1.5vw",
        fontFamily: 'Lora'
    }
})

function NavBar() {

    const classes = useStyles();

    return (
        <div>
            <Appbar className={classes.root}>
                <Toolbar className={classes.tob}>
                    <IconButton className={classes.icnbtn}>
                        <FitbitIcon fontSize="large" color="success" />
                        <Typography variant='h4' className={classes.typ}>
                            Eisha's Enterprise
                        </Typography>
                    </IconButton>

                    <ButtonGroup variant="text" aria-label="text button group">
                        <Button className={classes.btn} onclick="document.getElementById('Intro').scrollIntoView({ behavior: 'smooth' })" >Home</Button>
                        <Button className={classes.btn} onclick="document.getElementById('About').scrollIntoView({ behavior: 'smooth' })" >About</Button>
                        <Button className={classes.btn} onclick="document.getElementById('Gallery').scrollIntoView({ behavior: 'smooth' })" >Gallery</Button>
                    </ButtonGroup>
                </Toolbar>


            </Appbar>

        </div>
    )
}

export default NavBar;