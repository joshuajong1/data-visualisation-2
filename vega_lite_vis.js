
var vg_1 = "bump_chart.vg.json";
vegaEmbed("#bump_chart", vg_1).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "donut_chart.vg.json";
vegaEmbed("#donut_chart", vg_2).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vega.setRandom(vega.randomLCG1(4));

