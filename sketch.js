var song;
var slider;
var sliderRate;
var sliderPan;

function setup() {
  createCanvas(200,200);
  song = loadSound("My Sound.mp3", loaded);
  slider = createSlider(0, 1, 0.5, 0.01);
  sliderRate = createSlider(0, 2, 0.5, 0.01);
  sliderPan = createSlider(-1, 1, 0, 0.01);
}

function loaded() {
  song.play();
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
