import './style.css'
import * as Tone from "tone";

const synth = new Tone.Synth().toDestination();

//document.querySelector('[data-note="C4"]').addEventListener('click', () => playNote('C4'))

let keys = document.querySelectorAll('.key')
for (let key of keys) {
    let noteToPlay = key.getAttribute('data-note')
    key.addEventListener('click', () => playNote(noteToPlay))
}

function playNote(note) {
    synth.triggerAttackRelease(nota, "8n");
}