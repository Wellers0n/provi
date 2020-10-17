import React, { useEffect, useRef, useContext } from 'react';
import Highcharts from 'highcharts'
import MyContext from 'context/withContext'
import { drawChart } from './../util'
import { Skeleton } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

const ChartSkeleton: React.FC = () => {
  const classes = useStyles();

  return (
    <div>
      <Skeleton>
        {<div className={classes.chart} />}
      </Skeleton>
    </div>
  )
}

const Chart: React.FC = () => {
  const chartRef = useRef(null)
  const [contextState, setContextState] = useContext(MyContext) as [Data, Function]

  useEffect(() => {
    if (chartRef?.current, !contextState.loading) {
      drawChart(contextState.installments, chartRef)
    }
  }, [contextState.loading])

  return (
    <div>
      {
        contextState.loading ? <ChartSkeleton /> : (
          <div ref={chartRef} />
        )
      }
    </div>
  )
}

export default Chart;

const useStyles = makeStyles((theme) => ({
  chart: {
    height: 240
  }

}));