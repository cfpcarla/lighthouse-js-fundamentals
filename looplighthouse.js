function loop() {
  for (var i = 100; i <= 200; i++) {
    if ((i % 3 === 0) && (i % 4 === 0)) {
      console.log("LoopyLighthouse");
    } else if (i % 3 === 0) {
      console.log("Loopy");
    } else if (i % 4 === 0) {
      console.log("Lighthouse");
    } else {
      console.log(i);
    }
  }
  return;
}

loop(100, 200);

// Assignment: Loopy Lighthouse 2

function loopyLighthouse(range, multiples, words) {
  for (var i = range[0]; i <= range[1]; i++) {
    if ((i % multiples[0] === 0) && (i % multiples[1] === 0)) {
      console.log(words[0] + words[1]);
    } else if (i % multiples[0] === 0) {
      console.log(words[0]);
    } else if (i % multiples[1] === 0) {
      console.log(words[1]);
    } else {
      console.log(i);
    }
  }
  return;
}
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);