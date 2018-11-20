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
  let code_inp = []
  document.body.addEventListener('keydown', function(event) {

    code_inp.push(event.key)

    if(JSON.stringify(code_inp) == JSON.stringify(codes)) {
      window.alert('YAS!');
    }

  });
}