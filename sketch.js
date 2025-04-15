//paramentri indipendenti
let numero_parti = 333;
let parola = "333";

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
  textSize(altezza_parti * 2);
}

function draw() {
  background("black");

  orbitControl();

  translate(0, -height / 2);

  for (let i = 0; i < numero_parti; i++) {
    push();
    let x = map(cos(frameCount / 330 + i / 5), -1, 1, -333, 333);
    translate(x, 0, 0);
    let y = map(cos(frameCount / 330 + i / 5), -1, 1, -333, 333);
    translate(0, y, 0);
    let z = map(cos(frameCount / 330 + i / 3), -1, 1, -333, 333);
    translate(300, 30, z);

    let y_parte = i * altezza_parti;
    let x_parola = 0;
    let y_parola = y_parte + altezza_parti - textDescent();

    text(parola, x_parola, y_parola);
    pop();
  }
}
