Highcharts.chart('container', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Así sería el incremento de las pensiones <br>si se promulga la ley'
    },
    subtitle: {
        text: 'Fuente: Ministerio de Defensa-mayo 2017. /'
    },
    xAxis: {
        categories: ['General de División/ <br> Vicealmirante/ Teniente General', 
        			'General de Brigada/ <br> Contralmirante/ Mayor General', 
        			'Coronel EP/ <br> Capitán de Navío/ Coronel FAP', 
        			'Teniente Coronel EP/ <br> Capitán de Fragata/ Comandante FAP',
        			'Mayor EP/ <br> Capitán de Corbeta/ Mayor FAP',
        			'Capitán EP/ Teniente 1°/ Capitán FAP',
        			'Teniente EP/ Teniente 2°/ Teniente FAP',
        			'Sub Teniente EP/ Alférez de Fragata/ Alférez FAP',

        			'uperior 1 EP/ Técnico Superior1/ Técnico Superior Primero FAP',
        			'Técnico Jefe EP/ Técnico Superior 2/ Técnico Inspector FAP',
        			'Técnico 1',
        			'Técnico 2',
        			'Técnico 3',
        			'Suboficial 1 EP/ Oficial de Mar 1/ Suboficial 1 FAP',
        			'Suboficial 2 EP/ Oficial de Mar2/ Suboficial 2 FAP',
        			'Suboficial 3 EP/ Oficial de Mar 3/ Suboficial 3 FAP'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 1000,
        title: {
            text: 'Sueldo (Soles)',
            align: 'high'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
            }
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: 'Soles'
    },
    plotOptions: {
       series: {
            stacking: 'Soles',
            pointFormat: 'Total: {point.stackTotal}'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'bottom',
        x: 5,
        y: -70,
        floating: true,
        borderWidth: 1,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundImage) || '#FFFFFF'),
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Al retiro después <br> del 10/12/2012 <br> pensión subirá a',
        data: [405, 372, 254, 705, 589, 515, 444, 445, 533, 486, 454, 392, 382, 731, 368,364],
        color: '#578848'  
    },
    {
        name: 'Pensión que perciben <br> al retiro antes del <br> 09/12/2012',
        data: [8168, 7990, 6656, 3574, 2665, 2190, 1814, 1759,  2135, 2075, 1928, 1836, 1722, 1672, 1637, 1612],
        color: '#B6C29A'
    },]
});



