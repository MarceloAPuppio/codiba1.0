//Selector
export const $ = (element) => document.querySelector(element);
//Fx talk
export const talk = (text) => {
  let speech = new SpeechSynthesisUtterance();
  speech.lang = "es";
  speech.text = text;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
};
