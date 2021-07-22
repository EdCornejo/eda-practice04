let data;

function preload() {

  data = loadTable("./js/iris.csv", "csv", "header");
  // data = loadTable("./js/uscities.csv", "csv", "header");
}

function setup() {
  createCanvas(500, 300);
  background(0);

  let numRows = data.getRowCount();
  print(numRows);

  let sepalLength = data.getColumn("sepal_length");
  let sepalWidth = data.getColumn("sepal_width");
  let petalLength = data.getColumn("petal_length");
  let petalWidth = data.getColumn("petal_width");
  let classification = data.getColumn("class");

  for (let i = 0; i < numRows; i++) {
    console.log(sepalLength[i], sepalWidth[i], petalLength[i], petalWidth[i], classification[i]);
  }

  // let lng = data.getColumn("lng");
  // let lat = data.getColumn("lat");

  // let maxLng = max(lng);
  // let minLng = min(lng);
  // print(minLng, maxLng);

  // let maxLat = max(lat);
  // let minLat = min(lat);
  // print(minLat, maxLat);

  // for (let i = 0; i < numRows; i++) {

  //   //Bounding Box Site -178.0,10.7,-44.8,72.5
  //   let mapLng = map(lng[i], minLng, maxLng, 0, width);
  //   let mapLat = map(lat[i], minLat, maxLat, height, 0);

  //   stroke(255,50);
  //   strokeWeight(0.25);
  //   point(mapLng, mapLat);
  // }

}