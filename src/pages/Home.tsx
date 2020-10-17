import React from 'react';
import Header from 'components/Header'
import Footer from 'components/Footer'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Logo from './../assets/provi_logo.png'

const Home: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header title={'Home'} />
            <main className={classes.main}>
                <img src={Logo} alt="Provi" className={classes.img} />
                <Typography variant="h2" style={{ color: 'white' }}>
                    Challenge Provi
                </Typography>
            </main>
            <Footer />
        </div>
    )
}

export default Home;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        width: '100%',

    },
    main: {
        paddingTop: '70px',
        height: '95vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'

    },
    img: {
        marginBottom: '25px',
        borderRadius: '50%',
    }

}));