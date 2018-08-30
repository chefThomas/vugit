class Ui {

  constructor() {
    this.resultsDiv = document.getElementById('results');
  }

  renderResults(gitResponse) {
    const userArr = gitResponse.profiles.items; // results as object array

    this.resultsDiv.innerHTML = '';
    // pull from each user
    // login  card title
    // repos_url
    // organization
    // followers
    // url (link for github favicon)


    let i = false;

    for (let user of userArr) {
      // test
      // console.log(user.login); // check
      let login = user.login;
      let repos = user.repos_url;
      let org = user.organization;
      let followers = user.followers;
      let gitHubUrl = user.html_url;

      // alternate card color
      let r, g, b;

      if (!i) {
        r = 214;
        g = 243;
        b = 164;
        i = true;
      } else {
        r = 132;
        g = 187;
        b = 195;
        i = false;
      }
      // make card
      let cardHTML = `<div class="card card-result">
      <div class="card-content">
        <span class="card-title">${login}</span>
        
      </div>
      <div class="card-action" style="background-color: rgb(${r},${g},${b})">

        <a href="${gitHubUrl}"><img src="./images/GitHub-Mark-32px.png" alt="GitHub Octocat icon"></a>
        <a href="#"></a>
      </div>
    </div>`;

      this.resultsDiv.innerHTML += cardHTML;


    }

  }

}
