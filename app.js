const tempoDisplay = document.querySelector('.tempo');
const tempoText = document.querySelector('.tempo-text');
const decreaseTempoBtn = document.querySelector('.decrease-tempo');
const increaseTempoBtn = document.querySelector('.increase-tempo');
const tempoSlider = document.querySelector('.slider');
const startStopBtn = document.querySelector('.start-stop');
const subtractBeats = document.querySelector('.subtract-beats');
const addBeats = document.querySelector('.add-beats');
const measureCount = document.querySelector('.measure-count');

const click1 = new Audio('LDSS6.wav');
const click2 = new Audio('LDSS8.wav');

let bpm = 140;
let beatsPerMeasure = 4;
let tempoTextString = 'Medium';

decreaseTempoBtn.addEventListener('click', () => {
    if (bpm <= 20) { return };
    bpm--;
    validateTempo();
    updateMetronome();
});
increaseTempoBtn.addEventListener('click', () => {
    if (bpm >= 280) { return };
    bpm++;
    validateTempo();
    updateMetronome();
});
tempoSlider.addEventListener('input', () => {
    bpm = tempoSlider.value;
    validateTempo();
    updateMetronome();
});
subtractBeats.addEventListener('click', () => {
    if (beatsPerMeasure <= 1) { return };
    beatsPerMeasure--;
    measureCount.textContent = beatsPerMeasure;
});
addBeats.addEventListener('click', () => {
    if (beatsPerMeasure >= 24) { return };
    beatsPerMeasure++;
    measureCount.textContent = beatsPerMeasure;
});

function updateMetronome() {
    tempoDisplay.textContent = bpm;
    tempoSlider.value = bpm;

    if (bpm <= 40) { tempoTextString = "Very, Very Slow" };
    if (bpm > 40 && bpm < 80) { tempoTextString = "Very Slow" };
    if (bpm > 80 && bpm < 120) { tempoTextString = "Slow" };
    if (bpm > 120 && bpm < 180) { tempoTextString = "Moderate" };
    if (bpm > 180 && bpm < 220) { tempoTextString = "Moderately Fast" };
    if (bpm > 220 && bpm < 240) { tempoTextString = "Fast" };
    if (bpm > 240 && bpm < 260) { tempoTextString = "VERY Fast" };
    if (bpm > 260 && bpm <= 280) { tempoTextString = "VERY, VERY FAST" };

    tempoText.textContent = tempoTextString;
}
function validateTempo() {
    if (bpm <= 20) { return };
    if (bpm >= 280) { return };
}