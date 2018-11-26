const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let i = 0;

function init() {
  document.body.addEventListener('keydown', function (e) {
    const key = e.key;

    if (key === codes[i]) {
      i++;
      if (i === codes.length) {
        alert("Bam! You got the code right");
        i = 0;
      }
    } else {
      index = 0;
    }
  });
}

