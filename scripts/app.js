// // Example query
// // https://api.github.com/search/users?q=language:javascript+location:seattle

document.addEventListener('DOMContentLoaded', () => {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);
});

// UI DOM elements
const lang = document.getElementById('select-language'); // lang select
const devLocation = document.getElementById('location'); // location text
const minRepos = document.getElementById('min-repo'); // min number repo
const submitButton = document.getElementById('submit-button'); 

// // test
// console.log (lang.value); 
// console.log(devLocation.value); 
// console.log(minRepos.value);
// // check

// listen for submit button click
submitButton.addEventListener('click', gitRequest);

// // test submit button event listener
// function testSubmit() {
//   console.log("submit button clicked");
// }
// // check 

// Github class contains methods for 
const request = new Github;







