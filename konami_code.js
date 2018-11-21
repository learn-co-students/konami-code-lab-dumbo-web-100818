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

function init() {
  const body = document.body;
  const pressedKeys = [];

  function onKeyDownHandler(event) {
    const key = event.key;
    pressedKeys.push(key);
    let keys = pressedKeys.slice(-10);
    if (pressedKeys.length === 10 && checkPressedKeys(keys)) alert("Hurray!");
  }

  function checkPressedKeys(keys) {
    for (let i = 0; i < codes.length; i++) {
      if (codes[i] !== pressedKeys[i]) return false;
    };
    return true;
  }

  body.addEventListener("keydown", onKeyDownHandler);
}
