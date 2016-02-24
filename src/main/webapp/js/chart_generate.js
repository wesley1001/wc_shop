var seriesData = [ [], [],[] ];
var random = new Rickshaw.Fixtures.RandomData(30);

for (var i = 0; i < 30; i++) {
  random.addData(seriesData);
}

// instantiate our graph!

var graph = new Rickshaw.Graph( {
  element: document.getElementById("history"),
  renderer: 'bar',
  series: [
    {
      color: "#33577B",
      data: seriesData[0],
      name: '订单数'
    }, {
      color: "#77BBFF",
      data: seriesData[1],
      name: '访问量'
    } ,{
      color: "#C1E0FF",
      data: seriesData[2],
      name: '销售额'
    }
  ]
} );

graph.render();

var hoverDetail = new Rickshaw.Graph.HoverDetail( {
  graph: graph,
  formatter: function(series, x, y) {
    var date = '<span class="date">' + new Date(x * 1000).toUTCString() + '</span>';
    var swatch = '<span class="detail_swatch" style="background-color: ' + series.color + '"></span>';
    var content = swatch + series.name + ": " + parseInt(y) + '<br>' + date;
    return content;
  }
} );
