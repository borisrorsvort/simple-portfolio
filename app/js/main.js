$(document).ready(function () {
  $('[rel=tooltip]').tooltip();
  $('a[rel*="external"]').attr('target', '_blank');
  InitSvg.init();
})
$(window).on("resize", function () {
  InitSvg.init();
});


var InitSvg = {
  init: function () {
    $('svg').remove();
    var width = $(document).outerWidth();
    var height = $(".home-wrapper").outerHeight();

    var vertices = d3.range(100).map(function(d) {
      return [Math.random() * width, Math.random() * height];
    });

    var voronoi = d3.geom.voronoi()
        .clipExtent([[0, 0], [width, height]]);

    var svg = d3.select(".home-wrapper").append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr('id', 'svg-bg')
        // .on("mousemove", function() { vertices[0] = d3.mouse(this); redraw(); });

    var path = svg.append("g").selectAll("path");

    function redraw() {
      console.log('efwef');
      var vertices = d3.range(100).map(function(d) {
        return [Math.random() * width, Math.random() * height];
      });

      path = path.data(voronoi(vertices), polygon);

      path.exit().remove();

      path.enter()
          .append("path")
          .transition()
          .duration(750)
          .ease("linear")
          .attr("class", function(d, i) { return "q" + (i % 3) + "-3"; })
          .attr("d", polygon);

      path.order();
    }

    function polygon(d) {
      return "M" + d.join("L") + "Z";
    }

    redraw()

    // http://www.jasondavies.com/voroboids/
    // http://www.jasondavies.com/voroboids/
  }
}