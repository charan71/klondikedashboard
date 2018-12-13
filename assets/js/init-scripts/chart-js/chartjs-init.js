( function ( $ ) {
    "use strict";

    // Bootstrapping jQuery
    $(document).ready(function() {

    //Bubble chart
    var ctx = document.getElementById( "bubble-chart" );
    ctx.height = 150;
    var myChart = new Chart( ctx, {
        type: 'bubble',
        data: {
            datasets: [{
                label: ['Profits'],
                data: [{
                    x: 100,
                    y: 0,
                    r: 10
                }, {
                    x: 60,
                    y: 30,
                    r: 20
                }, {
                    x: 40,
                    y: 60,
                    r: 25
                }, {
                    x: 80,
                    y: 80,
                    r: 50
                }, {
                    x: 20,
                    y: 30,
                    r: 25
                }, {
                    x: 0,
                    y: 100,
                    r: 5
                }],
                backgroundColor: "rgba(153, 102, 255, 0.7)",
                hoverBackgroundColor: "rgba(153, 102, 255, 0.5)",
                hoverBorderColor: "rgba(153, 102, 255, 1)",
                hoverBorderWidth: 2,
                hoverRadius: 2
            }, {
                label: ['Investments'],
                data: [{
                    x: 73,
                    y: 20,
                    r: 10
                }, {
                    x: 43,
                    y: 72,
                    r: 14
                }, {
                    x: 12,
                    y: 80,
                    r: 29
                }, {
                    x: 92,
                    y: 60,
                    r: 2
                }, {
                    x: 9,
                    y: 30,
                    r: 3
                }, {
                    x: 35,
                    y: 20,
                    r: 5
                }],
                backgroundColor: "rgba(0, 142, 255, 0.7)",
                hoverBackgroundColor: "rgba(0, 142, 255, 0.6)",
                hoverBorderColor: "rgba(0, 142, 255, 1)",
                hoverBorderWidth: 2,
                hoverRadius: 2
            }]
        },
        options: {
            responsive: true,
            tooltips: {
                mode: 'index',
                titleFontSize: 12,
                titleFontColor: '#000',
                bodyFontColor: '#000',
                backgroundColor: '#fff',
                titleFontFamily: 'Montserrat',
                bodyFontFamily: 'Montserrat',
            },
        }
    } );

    //Team chart
    var ctx = document.getElementById( "team-chart" );
    ctx.height = 150;
    var myChart = new Chart( ctx, {
        type: 'line',
        data: {
            labels: [ "2010", "2011", "2012", "2013", "2014", "2015", "2016" ],
            type: 'line',
            defaultFontFamily: 'Montserrat',
            datasets: [ {
                data: [ 0, 7, 3, 5, 2, 10, 7 ],
                label: "Expense",
                backgroundColor: 'rgba(0,103,255,.15)',
                borderColor: 'rgba(0,103,255,0.5)',
                borderWidth: 3.5,
                pointStyle: 'circle',
                pointRadius: 5,
                pointBorderColor: 'transparent',
                pointBackgroundColor: 'rgba(0,103,255,0.5)',
                    }, ]
        },
        options: {
            responsive: true,
            tooltips: {
                mode: 'index',
                titleFontSize: 12,
                titleFontColor: '#000',
                bodyFontColor: '#000',
                backgroundColor: '#fff',
                titleFontFamily: 'Montserrat',
                bodyFontFamily: 'Montserrat',
                cornerRadius: 3,
                intersect: false,
            },
            legend: {
                display: false,
                position: 'top',
                labels: {
                    usePointStyle: true,
                    fontFamily: 'Montserrat',
                },


            },
            scales: {
                xAxes: [ {
                    display: true,
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    scaleLabel: {
                        display: false,
                        labelString: 'Month'
                    }
                        } ],
                yAxes: [ {
                    display: true,
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Value'
                    }
                        } ]
            },
            title: {
                display: false,
            }
        }
    } );


    //Sales chart
    var ctx = document.getElementById( "sales-chart" );
    ctx.height = 150;
    var myChart = new Chart( ctx, {
        type: 'line',
        data: {
            labels: [ "2010", "2011", "2012", "2013", "2014", "2015", "2016" ],
            type: 'line',
            defaultFontFamily: 'Montserrat',
            datasets: [ {
                label: "Foods",
                data: [ 0, 30, 10, 120, 50, 63, 10 ],
                backgroundColor: 'transparent',
                borderColor: 'rgba(220,53,69,0.75)',
                borderWidth: 3,
                pointStyle: 'circle',
                pointRadius: 5,
                pointBorderColor: 'transparent',
                pointBackgroundColor: 'rgba(220,53,69,0.75)',
                    }, {
                label: "Electronics",
                data: [ 0, 50, 40, 80, 40, 79, 120 ],
                backgroundColor: 'transparent',
                borderColor: 'rgba(40,167,69,0.75)',
                borderWidth: 3,
                pointStyle: 'circle',
                pointRadius: 5,
                pointBorderColor: 'transparent',
                pointBackgroundColor: 'rgba(40,167,69,0.75)',
                    } ]
        },
        options: {
            responsive: true,

            tooltips: {
                mode: 'index',
                titleFontSize: 12,
                titleFontColor: '#000',
                bodyFontColor: '#000',
                backgroundColor: '#fff',
                titleFontFamily: 'Montserrat',
                bodyFontFamily: 'Montserrat',
                cornerRadius: 3,
                intersect: false,
            },
            legend: {
                display: false,
                labels: {
                    usePointStyle: true,
                    fontFamily: 'Montserrat',
                },
            },
            scales: {
                xAxes: [ {
                    display: true,
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    scaleLabel: {
                        display: false,
                        labelString: 'Month'
                    }
                        } ],
                yAxes: [ {
                    display: true,
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Value'
                    }
                        } ]
            },
            title: {
                display: false,
                text: 'Normal Legend'
            }
        }
    } );







    //line chart
    var ctx = document.getElementById( "lineChart" );
    ctx.height = 150;
    var myChart = new Chart( ctx, {
        type: 'line',
        data: {
            labels: [ "January", "February", "March", "April", "May", "June", "July" ],
            datasets: [
                {
                    label: "My First dataset",
                    borderColor: "rgba(0,0,0,.09)",
                    borderWidth: "1",
                    backgroundColor: "rgba(0,0,0,.07)",
                    data: [ 22, 44, 67, 43, 76, 45, 12 ]
                            },
                {
                    label: "My Second dataset",
                    borderColor: "rgba(0, 123, 255, 0.9)",
                    borderWidth: "1",
                    backgroundColor: "rgba(0, 123, 255, 0.5)",
                    pointHighlightStroke: "rgba(26,179,148,1)",
                    data: [ 16, 32, 18, 26, 42, 33, 44 ]
                            }
                        ]
        },
        options: {
            responsive: true,
            tooltips: {
                mode: 'index',
                intersect: false
            },
            hover: {
                mode: 'nearest',
                intersect: true
            }

        }
    } );

    //bar chart ajax call
    $(function() {
        $.ajax({
            url: "http://localhost:9200/mklondike_201810/doc/currdayssince_central_division_sub",
            type: "GET",
            data: "",
            contentType: "application/JSON",
            success: function(response) {
                displayHistogramData(response);
            }
        });
    });

    function displayHistogramData(d) {
        // console.log(d);
        // console.log(d._source.histogram);
        // console.log(Object.keys(d._source.histogram));
        // console.log(Object.values(d._source.histogram));
        // console.log(d._source.histogram[14111.692]);

        //bar chart
        var ctx = document.getElementById( "barChart" );
        ctx.height = 160;
        var myChart = new Chart( ctx, {
            type: 'bar',
            data: {
                // labels: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October" ],
                labels: Object.keys(d._source.histogram),
                datasets: [
                    {
                        label: [ "Histogram" ],
                        // data: [ 65, 59, 80, 81, 56, 55, 40, 33, 78, 56 ],
                        data: Object.values(d._source.histogram),
                        borderColor: [
                            "red",
                            "green",
                            "blue",
                            "orange",
                            "purple",
                            "cyan",
                            "magenta",
                            "violet",
                            "lightblue",
                            "orangered"
                        ],
                        borderWidth: "0",
                        backgroundColor: [
                            "rgba(255, 0, 0, 0.2)",
                            "rgba(0, 255, 0, 0.2)",
                            "rgba(0, 0, 255, 0.2)",
                            "rgba(255, 165, 0, 0.2)",
                            "rgba(128, 0, 128, 0.2)",
                            "rgba(0, 255, 255, 0.2)",
                            "rgba(255, 0, 255, 0.2)",
                            "rgba(238, 130, 238, 0.2)",
                            "rgba(173, 216, 230, 0.2)",
                            "rgba(255, 69, 0, 0.2)"
                        ]
                    }
                ]
            },
            options: {
                scales: {
                    yAxes: [ {
                        ticks: {
                            beginAtZero: true
                        }
                    } ]
                }
            }
        } );
    }

    // Table using ajax call
    $(function() {
        $.ajax({
            url: "http://localhost:9200/mklondike_201810/doc/currdayssince_central_division_sub",
            type: "GET",
            data: "",
            contentType: "application/JSON",
            success: function(response) {
                displayTopTenData(response);
            }
        });
    });

    function displayTopTenData(d) {

        $("#topTenTable thead").not(".header").remove();
        var i = 0;
        var str = "<tr>";
        // Iterating keys
        while(i < d._source.top10.length) {
            str += "<td scope='col'>" + Object.keys(d._source.top10[i]) + "</td>";
            i++;
        }
        str += "</tr>";
        $("#topTenTable thead").append(str);
        
        var j = 0;
        var str1 = "<tr>";
        // Iterating values
        while(j < d._source.top10.length) {
            str1 += "<td scope='col'>" + Object.values(d._source.top10[j]) + "</td>";
            j++;
        }
        // str1 += "<td>" + Object.keys(d._source.top10[j]) + "</td>";
        str1 += "</tr>";
        $("#topTenTable thead").append(str1);
    }




    //radar chart
    var ctx = document.getElementById( "radarChart" );
    ctx.height = 160;
    var myChart = new Chart( ctx, {
        type: 'radar',
        data: {
            labels: [ [ "Eating", "Dinner" ], [ "Drinking", "Water" ], "Sleeping", [ "Designing", "Graphics" ], "Coding", "Cycling", "Running" ],
            datasets: [
                {
                    label: "My First dataset",
                    data: [ 65, 59, 66, 45, 56, 55, 40 ],
                    borderColor: "rgba(0, 123, 255, 0.6)",
                    borderWidth: "1",
                    backgroundColor: "rgba(0, 123, 255, 0.4)"
                            },
                {
                    label: "My Second dataset",
                    data: [ 28, 12, 40, 19, 63, 27, 87 ],
                    borderColor: "rgba(0, 123, 255, 0.7",
                    borderWidth: "1",
                    backgroundColor: "rgba(0, 123, 255, 0.5)"
                            }
                        ]
        },
        options: {
            legend: {
                position: 'top'
            },
            scale: {
                ticks: {
                    beginAtZero: true
                }
            }
        }
    } );


    //pie chart
    var ctx = document.getElementById( "pieChart" );
    ctx.height = 300;
    var myChart = new Chart( ctx, {
        type: 'pie',
        data: {
            datasets: [ {
                data: [ 45, 25, 20, 10 ],
                backgroundColor: [
                                    "rgba(0, 123, 255,0.9)",
                                    "rgba(0, 123, 255,0.7)",
                                    "rgba(0, 123, 255,0.5)",
                                    "rgba(0,0,0,0.07)"
                                ],
                hoverBackgroundColor: [
                                    "rgba(0, 123, 255,0.9)",
                                    "rgba(0, 123, 255,0.7)",
                                    "rgba(0, 123, 255,0.5)",
                                    "rgba(0,0,0,0.07)"
                                ]

                            } ],
            labels: [
                            "green",
                            "green",
                            "green"
                        ]
        },
        options: {
            responsive: true
        }
    } );

    //doughut chart
    var ctx = document.getElementById( "doughutChart" );
    ctx.height = 150;
    var myChart = new Chart( ctx, {
        type: 'doughnut',
        data: {
            datasets: [ {
                data: [ 45, 25, 20, 10 ],
                backgroundColor: [
                                    "rgba(0, 123, 255,0.9)",
                                    "rgba(0, 123, 255,0.7)",
                                    "rgba(0, 123, 255,0.5)",
                                    "rgba(0,0,0,0.07)"
                                ],
                hoverBackgroundColor: [
                                    "rgba(0, 123, 255,0.9)",
                                    "rgba(0, 123, 255,0.7)",
                                    "rgba(0, 123, 255,0.5)",
                                    "rgba(0,0,0,0.07)"
                                ]

                            } ],
            labels: [
                            "green",
                            "green",
                            "green",
                            "green"
                        ]
        },
        options: {
            responsive: true
        }
    } );

    //polar chart
    var ctx = document.getElementById( "polarChart" );
    ctx.height = 150;
    var myChart = new Chart( ctx, {
        type: 'polarArea',
        data: {
            datasets: [ {
                data: [ 15, 18, 9, 6, 19 ],
                backgroundColor: [
                                    "rgba(0, 123, 255,0.9)",
                                    "rgba(0, 123, 255,0.8)",
                                    "rgba(0, 123, 255,0.7)",
                                    "rgba(0,0,0,0.2)",
                                    "rgba(0, 123, 255,0.5)"
                                ]

                            } ],
            labels: [
                            "green",
                            "green",
                            "green",
                            "green"
                        ]
        },
        options: {
            responsive: true
        }
    } );

    // single bar chart
    var ctx = document.getElementById( "singelBarChart" );
    ctx.height = 150;
    var myChart = new Chart( ctx, {
        type: 'bar',
        data: {
            labels: [ "Sun", "Mon", "Tu", "Wed", "Th", "Fri", "Sat" ],
            datasets: [
                {
                    label: "My First dataset",
                    data: [ 40, 55, 75, 81, 56, 55, 40 ],
                    borderColor: "rgba(0, 123, 255, 0.9)",
                    borderWidth: "0",
                    backgroundColor: "rgba(0, 123, 255, 0.5)"
                            }
                        ]
        },
        options: {
            scales: {
                yAxes: [ {
                    ticks: {
                        beginAtZero: true
                    }
                                } ]
            }
        }
    } );


    });


} )( jQuery );