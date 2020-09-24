/* 
byeSpeaker Object
Use the function byeSpeaker.speak(name) for logging "Good Bye name" in the console.   
*/
(function (window) {

  var byeSpeaker = {};

  var speakWord = "Good Bye";

  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  }

  window.byeSpeaker = byeSpeaker;

 })(window);

