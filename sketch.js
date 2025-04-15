//paramentri indipendenti
let numero_parti = 100;
let parola = "chi legge è scemo";

let font;
function preload() {
  font = loadFont("./Blacker-Sans-Pro-Extrabold.otf");
}

//codice

let altezza_parti;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  //con webgl attivo modalità 3d

  textFont(font);
  textAlign(CENTER);

  altezza_parti = height / numero_parti;
  textSize(altezza_parti);
}

function draw() {
  background("blue");

  orbitControl();

  translate(0, -height / 2);

  for (let i = 0; i < numero_parti; i++) {
    push();
    let x = map(cos(frameCount / 30 + i / 2), -1, 1, -500, 200);
    translate(0, 0, x);
    let y = map(cos(frameCount / 20 + i / 2), -1, 1, -500, 200);
    translate(0, 0, y);
    let z = map(cos(frameCount / 10 + i / 2), -1, 1, -200, 200);
    translate(0, 0, z);

    let y_parte = i * altezza_parti;
    let x_parola = 0;
    let y_parola = y_parte + altezza_parti - textDescent();

    text(parola, x_parola, y_parola);
    pop();
  }
}
