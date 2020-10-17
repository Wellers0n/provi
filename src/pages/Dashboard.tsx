import React, { useState, useEffect, useContext } from 'react';
import Header from 'components/Header'
import Footer from 'components/Footer'
import { makeStyles } from '@material-ui/core/styles';
import MyContext from 'context/withContext'
import Card from 'components/Card'
import getData from 'services/getData'
import Chart from 'components/Chart'

const Dashboard: React.FC = () => {
  const [stateContext, setStateContext] = useContext(MyContext);
  const classes = useStyles();

  useEffect(() => {
    async function request() {
      setStateContext({loading: true})
      const result = await getData()
      setStateContext({...result, loading: false})
    }

    request()
  }, [])

  return (
    <div>
      <Header title={'Dashboard'} />
      <main className={classes.main}>
        <div className={classes.wrapper}>
          <div className={classes.chart}><Chart/></div>
          <Card />
        </div>

      </main>
      <Footer />
    </div>
  );
}

export default Dashboard;

const useStyles = makeStyles((theme) => ({
  main: {
    paddingTop: '70px',
    height: '95vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'

  },
  wrapper: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '2.7fr 1fr',
  },
  chart: {
    height: 240,
    background: 'white',
    margin: '0 30px',
  },
  card: {

    height: 240,
    background: 'white',
    marginRight: '30px',
  }

}));