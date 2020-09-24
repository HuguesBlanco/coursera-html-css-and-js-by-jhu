/* 
helloSpeaker Object
Use the function helloSpeaker.speak(name) for logging "Hello name" in the console.   
*/
(function (window) {

  var helloSpeaker = {};

  var speakWord = "Hello";

  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  }

  window.helloSpeaker = helloSpeaker;

})(window);
