function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    const logShout = string.toUpperCase();
    console.log(logShout);
  }
function logWhisper(string) {
    const logWhisper = string.toLowerCase();
    console.log(logWhisper);
}
function sayHiToHeadphonedRoommate(string) {
    if (string.toLowerCase() === string) {
      return "I can't hear you!";
    } else {
      return "YES INDEED!";
    }
  }
  function sayHiToHeadphonedRoommate(string) {
    if (string.toLowerCase() === "let's have dinner together!") {
      return "I would love to!";
    } else if (string.toLowerCase() === string) {
      return "I can't hear you!";
    } else {
      return "YES INDEED!";
    }
  }