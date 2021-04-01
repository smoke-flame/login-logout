let firstData = [0, 8, 6, 14, 6, 9, 0];
let secondData = [0, 4, 4, 7, 4, 12, 0];


// Create the chart
Highcharts.chart('container', {
    chart: {
        type: 'areaspline'
    },
    title: {
        text: ''
    },
    credits: {
        enabled: false
    },

    colors: ['#ed4785', '#ffb82c'],
    colorAxis: [{
        gridLineWidth: 20,
        minorGridLineWidth: 5
    }],
    credits: {
        enabled: false
    },
    yAxis: {
        title: ''
    },
    xAxis: {
        categories: [
            'Jen',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul'
        ]
    },
    tooltip: {
        enabled: false,
    },
    plotOptions: {
        areaspline: {
            fillOpacity: 0.3
        }
    },
    series: [{
        name: '',
        data: firstData
    }, {
        name: '',
        data: secondData
    }]
});


//////////////////circle
let statItem1 = {
    name: 'Youtube',
    percent: 55
}
let statItem2 = {
    name: 'Facebook',
    percent: 33
}

let statItem3 = {
    name: 'Direct Search',
    percent: 12
}

// Build the chart
Highcharts.chart('container1', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    credits: {
        enabled: false,
        text: ''
    },
    title: {
        text: ''
    },

    tooltip: {
        enabled: false,
    },

    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            colors: ['#ed4785', '#865fc0', '#ffb82a'],
            dataLabels: {
                enabled: true,
                format: '',
                distance: -50,
                filter: {
                    property: 'percentage',
                    operator: '>',
                    value: 4
                }
            }
        }
    },
    series: [{
        name: 'Share',
        data: [{
                name: statItem1.name,
                y: statItem1.percent
            },
            {
                name: statItem2.name,
                y: statItem2.percent
            },
            {
                name: statItem3.name,
                y: statItem3.percent
            }
        ]
    }]
});

//////////////////////////


Highcharts.chart('card-2', {
    chart: {
        type: 'area'
    },
    yAxis: {
        title: {
            text: ''
        }
    },
    colors: ['#8778cb'],

    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    credits: {
        enabled: false,
    },

    tooltip: {
        enabled: false,
    },
    plotOptions: {
        area: {
            pointStart: 1940,
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        }
    },
    series: [{
        name: 'USA',
        data: [400, 500, 600, 600, 500, 500, 600, 700, 700, 600, 600, 700, 800, 900, 900, 800, 700, 700, 600, 600, 500, 500]
    }]
});

// card
Highcharts.chart('card-3', {

    title: {
        text: ''
    },

    subtitle: {
        text: ''
    },
    credits: {
        enabled: false,
    },

    yAxis: {
        title: {
            text: ''
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: ''
        }
    },


    colors: ['#fff'],

    series: [{
        name: '',
        data: [6, 8, 4, 6, 4, 6, 3]
    }],

});

//1,4 card

Highcharts.chart('card-1', {
    series: [{
        name: '',
        data: [60, 40, 44, 14, 3, 23, 33, 64]
    }],
    credits: {
        enabled: false,
    },
    chart: {
        type: 'column'
    },
    colors: ['#fff'],
    title: {
        text: ''
    },
    yAxis: {
        allowDecimals: false,
        title: {
            text: ''
        }
    },
    tooltip: {
        enabled: false,
    }
});
Highcharts.chart('card-4', {
    series: [{
        name: '',
        data: [60, 40, 44, 14, 3, 23, 33, 64]
    }],
    credits: {
        enabled: false,
    },
    chart: {
        type: 'column'
    },
    colors: ['#fff'],
    title: {
        text: ''
    },
    yAxis: {
        allowDecimals: false,
        title: {
            text: ''
        }
    },
    tooltip: {
        enabled: false,
    }
});