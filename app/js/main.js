$(document).ready(function () {
  $('[rel=tooltip]').tooltip();
  InitSvg.init();
});


var InitSvg = {
  init: function () {
    var width = $(document).width();
    var height = $(document).height();

    var vertices = d3.range(100).map(function(d) {
      return [Math.random() * width, Math.random() * height];
    });

    var voronoi = d3.geom.voronoi()
        .clipExtent([[0, 0], [width, height]]);

    var svg = d3.select("body").append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr('id', 'svg-bg')
        .on("mousemove", function() { vertices[0] = d3.mouse(this); redraw(); });

    var path = svg.append("g").selectAll("path");

    redraw();

    function redraw() {
      path = path
          .data(voronoi(vertices), polygon);

      path.exit().remove();

      path.enter().append("path")
          .attr("class", function(d, i) { return "q" + (i % 3) + "-3"; })
          .attr("d", polygon);

      path.order();
    }

    function polygon(d) {
      return "M" + d.join("L") + "Z";
    }
  }
}