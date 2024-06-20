const play = str => {
 document.getElementById("display").innerHTML = `You played the ${str} sound!`
 let audio = document.getElementById(str);
 audio.play();
};

window.document.onkeyup = (event) => {
 const keystroke = event.key.toUpperCase();
 const validKeys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
if (validKeys.includes(keystroke)) {
  play(keystroke);
 }
}