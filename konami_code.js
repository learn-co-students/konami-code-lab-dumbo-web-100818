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
  let counter = 0;
  document.body.addEventListener('keydown', function(e){
    let key = e.key;
    console.log(key===codes[counter])
    if (key === codes[counter]){
      ++counter
      if (counter === codes.length){
        window.alert('Holla Hollaaa')
        counter = 0
      }} else{
        counter = 0
      }

  });
}


// function init() {
//  var index = 0;
//  document.body.addEventListener('keydown', function (e) {
//    var key = e.key;
//  // console.log(key===codes[index])
//    if (key === codes[index]){
//      ++index
//      // console.log('index',index)
//      if (index === codes.length){
//        window.alert('Secret Solved!')
//        index = 0;
//        // console.log('index2',index)
//      }
//         } else {
//        index = 0
//      }
// })
// }

// THANK YOU TRAVISSS
