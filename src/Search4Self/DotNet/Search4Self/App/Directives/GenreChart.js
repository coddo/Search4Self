﻿(function () {
    'use strict';

    angular
        .module('Search4Self')
        .directive('genreChart',
        function () {
            return {
                restrict: 'E',
                //replace: true,
                scope: {
                    genres: '=genres',
                    data: '=data'
                },
                template: '<div id="chartdiv-genre-chart" style="min-width: 310px; height: 500px; margin: 0 auto"></div>',
                link: function (scope, element, attrs) {

                    scope.$watch('genres', function (newValue, oldValue) {
                        initChart();
                        console.log(newValue);
                    });


                    var chart = false;

                    var initChart = function () {
                        if (chart) chart.destroy();

                        var genres = ['rock', 'classic'];
                        if (scope.genres && scope.genres.length > 0)
                            genres = scope.genres;

                        var data = [
                            {
                                "date": "2014-03-01",
                                "rock": 18,
                                "classic": 15
                            },
                            {
                                "date": "2014-03-02",
                                "rock": 8,
                                "classic": 5
                            },
                        ];
                        if (scope.data && scope.data.length > 0)
                            data = scope.data;

                        var config = {
                            "type": "serial",
                            "categoryField": "date",
                            "dataDateFormat": "YYYY-MM-DD",
                            "theme": "light",
                            "categoryAxis": {
                                "parseDates": true
                            },
                            "chartScrollbar": {
                                "graph": "g1",
                                "oppositeAxis": false,
                                "offset": 30,
                                "scrollbarHeight": 80,
                                "backgroundAlpha": 0,
                                "selectedBackgroundAlpha": 0.1,
                                "selectedBackgroundColor": "#888888",
                                "graphFillAlpha": 0,
                                "graphLineAlpha": 0.5,
                                "selectedGraphFillAlpha": 0,
                                "selectedGraphLineAlpha": 1,
                                "autoGridCount": true,
                                "color": "#AAAAAA"
                            },
                            "chartCursor": {
                                "pan": true,
                                "valueLineEnabled": true,
                                "valueLineBalloonEnabled": true,
                                "cursorAlpha": 1,
                                "cursorColor": "#258cbb",
                                "limitToGraph": "g1",
                                "valueLineAlpha": 0.2,
                                "valueZoomable": true
                            },
                            "chartScrollbar": {
                                "graph": "g1",
                                "oppositeAxis": false,
                                "offset": 30,
                                "scrollbarHeight": 80,
                                "backgroundAlpha": 0,
                                "selectedBackgroundAlpha": 0.1,
                                "selectedBackgroundColor": "#888888",
                                "graphFillAlpha": 0,
                                "graphLineAlpha": 0.5,
                                "selectedGraphFillAlpha": 0,
                                "selectedGraphLineAlpha": 1,
                                "autoGridCount": true,
                                "color": "#AAAAAA"
                            },
                            "chartCursor": {
                                "pan": true,
                                "valueLineEnabled": true,
                                "valueLineBalloonEnabled": true,
                                "cursorAlpha": 1,
                                "cursorColor": "#258cbb",
                                "limitToGraph": "g1",
                                "valueLineAlpha": 0.2,
                                "valueZoomable": true
                            },
                            "trendLines": [],
                            "graphs": [
                                //{
                                //    "bullet": "round",
                                //    "id": "AmGraph-1",
                                //    "title": "graph 1",
                                //    "valueField": "column-1",
                                //    "balloon": {
                                //        "drop": true,
                                //        "adjustBorderColor": false,
                                //        "color": "#ffffff"
                                //    },
                                //    "bulletBorderAlpha": 1,
                                //    "bulletColor": "#FFFFFF",
                                //    "bulletSize": 5,
                                //    "hideBulletsCount": 50,
                                //    "lineThickness": 2,
                                //    "useLineColorForBulletBorder": true,
                                //},

                            ],
                            "guides": [],
                            "valueAxes": [
                                //{
                                //    "id": "ValueAxis-1",
                                //    "title": "Axis title"
                                //}
                            ],
                            "allLabels": [],
                            "balloon": {
                                "borderThickness": 1,
                                "shadowAlpha": 0
                            },
                            "legend": {
                                "enabled": true,
                                "useGraphSettings": true
                            },
                            "titles": [
                                {
                                    "id": "Title-1",
                                    "size": 15,
                                    "text": "Genres over time"
                                }
                            ],
                            "dataProvider": [
                                //{
                                //    "date": "2014-03-01",
                                //    "column-1": 8,
                                //    "column-2": 5
                                //}
                            ]
                        };

                        var i = 1;
                        genres.forEach(function (genre) {
                            config.graphs.push({
                                "bullet": "round",
                                "id": "AmGraph-" + i,
                                "title": genre,
                                "valueField": "column-" + genre,
                                "balloon": {
                                    "drop": true,
                                    "adjustBorderColor": false,
                                    "color": "#ffffff"
                                },
                                "bulletBorderAlpha": 1,
                                "bulletColor": "#FFFFFF",
                                "bulletSize": 5,
                                "hideBulletsCount": 50,
                                "lineThickness": 2,
                                "useLineColorForBulletBorder": true,
                            });
                            i++;
                        });

                        data.forEach(function (d) {
                            var element = {
                                date: d.date
                            };
                            genres.forEach(function (genre) {
                                element['column-' + genre] = d[genre];
                            });
                            config.dataProvider.push(element);
                        });


                        chart = AmCharts.makeChart("chartdiv-genre-chart", config);


                    };
                    initChart();

                   
                }//end watch           
            }
        });



})();