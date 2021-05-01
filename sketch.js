var song;
var slider;
var sliderRate;
var sliderPan;
var button;

function setup() {
  createCanvas(200,200);
  song = loadSound("Twisted Tea_11_11_20.mp3", loaded);
  button = createButton("play");
  button.mousePressed(togglePlaying);
  slider = createSlider(0, 1, 0.5, 0.01);
  sliderRate = createSlider(0, 2, 1, 0.01);
  sliderPan = createSlider(-1, 1, 0, 0.01);
}

function loaded() {
  song.play();
}

function togglePlaying() {
  if (!song.isPlaying()) {
  song.play();
  button.html("pause");
} else {
  song.pause();
  button.html("play");
}
}

function draw() {
  background(255);
  textSize(18);
  text('Volume left', 10, 30);
  text('Rate center', 10, 80);
  text('Pan right', 10, 130);
  song.setVolume(slider.value());
  song.rate(sliderRate.value());
  song.pan(sliderPan.value());
}
