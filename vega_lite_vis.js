var vg_1 = "bump_chart.vg.json";
vegaEmbed("#bump_chart", vg_1).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "word_cloud.vg.json";
vegaEmbed("#word_cloud", vg_2).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vega.setRandom(vega.randomLCG(12));