import getNoteFromkey from './noteUtils';
import './style.css'
import * as Tone from "tone";

//const synth = new Tone.Synth().toDestination();
const synth = new Tone.Sampler({
    urls: {
        C4: "C4.mp3",
        "C#4": "Ds4.mp3",
        "F#4": "Fs4.mp3",
        A4: "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
}).toDestination();


let keys = document.querySelectorAll('.key')
for (let key of keys) {
    let noteToPlay = key.getAttribute('data-note')
    key.addEventListener('mousedown', () => playNote(noteToPlay))
    key.addEventListener('mouseup', () => stopNote())
    key.addEventListener('mouseleave', () => stopNote())
}
document.addEventListener('keypress', ctrlTeclado)
document.addEventListener('keyup', stopNote)

function ctrlTeclado(event) {
    let keyName = event.key


    let note = getNoteFromkey(keyName)
    let key =document.querySelector('[data-note='+note+']')
    key&& key.classList.add('pressed')
    playNote(note)
}

function playNote(note) {
    synth.triggerAttackRelease(note);
}

function stopNote() {
    synth.triggerRelease();
    let keyName = event.key


    let note = getNoteFromkey(keyName)
    let key =document.querySelector('[data-note='+note+']')
    key&& key.classList.remove('pressed')
}