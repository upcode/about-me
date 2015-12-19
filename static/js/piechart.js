var chart = AmCharts.makeChart( "chartdiv", {
  "type": "pie",
  "theme": "light",
  "dataProvider": [ {
    "words": "Reflection",
    "litres": 501.9
  }, {
    "words": "Big-picture thinking",
    "litres": 301.9
  }, {
    "words": "Learning orientation",
    "litres": 201.1
  }, {
    "words": "Developing ideas",
    "litres": 165.8
  }, {
    "words": "Competency-oriented",
    "litres": 139.9
  }, {
    "words": "Conflict resolution",
    "litres": 128.3
  }, {
    "words": "Emotional intelligence",
    "litres": 99
  }, {
    "words": "Goal setting",
    "litres": 60
  }, {
    "words": "Critical and analytic thinking",
    "litres": 50
  } ],
  "valueField": "litres",
  "titleField": "words",
   "balloon":{
   "fixedPosition":true
  },
  "export": {
    "enabled": true
  }
} );