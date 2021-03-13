var element = document.getElementById('myChart').getContext('2d');

var chartType = 'bar'; // The type of chart we want to create

// The data for our dataset
var chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'Scores of my favourite team',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [450, 710, 525, 322, 620, 630, 245]
    }]
};

// Configuration options go here
var chartOptions = {
        layout: {
            padding: {
                left: 50,
                right: 0,
                top: 0,
                bottom: 0
            }
        }
    }

// new Chart(x, y) creates a new chart object where:
// x is the object for the html element.
// y is JSON object of type {a,b,c} see below.

var chart = new Chart(element, {type:chartType, data: chartData, options: chartOptions});
