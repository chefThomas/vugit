
// materialize select field
document.addEventListener('DOMContentLoaded', () => {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);
});

// UI DOM elements
const lang = document.getElementById('select-language'); // lang select
const devLocation = document.getElementById('devLocation'); // location text
const minimumRepos = document.getElementById('min-repo'); // min number repo
const submitButton = document.getElementById('submit-button');

// // test
// console.log (lang.value); 
// console.log(devLocation.value); 
// console.log(minRepos.value);
// // check

// listen for submit button click
submitButton.addEventListener('click', searchParams);

// // test submit button event listener
// function testSubmit() {
//   console.log("submit button clicked");
// }
// // check 

// process API requests
const apiRequest = new Github;

// build UI from github response
const uiResults = new Ui;

// grab search params from UI
function searchParams() {
  let searchLang = lang.value;
  let devLoc = devLocation.value;
  let minRepo = minimumRepos.value;

  // test
  // console.log(searchLang);
  // console.log(devLoc);
  // console.log(minRepo);
  //check

  // validate client request data here with Joi 
  // make API request

  // 
  apiRequest.getProfiles(searchLang, devLoc, minRepo)
    .then(data => {

      uiResults.renderResults(data);

    });

}











