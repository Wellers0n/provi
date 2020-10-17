import { createBrowserHistory } from 'history';
import Highcharts from 'highcharts'

export const history = createBrowserHistory();

export const drawChart = (data: Array<Ments>, ref) => {
    const settingsChart = {
        chart: {
            type: 'line',
            height: 240
        },
        title: {
            text: 'Parcelamento'
        },
        subtitle: {
            text: 'Todos os valores para pagar ao mês'
        },
        xAxis: {
            categories: data?.map(({dueDate, payd}) => !payd ? dueDate : 0)
        },
        yAxis: {
            title: {
                text: 'Valor (R$)'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: 'Pagamentos pendentes',
            data: data?.map(({payd, value}) => !payd ? value : 0),
            color: 'red'
        }]
    }

    if (settingsChart) {
        Highcharts.chart(ref?.current, settingsChart)
    }
}