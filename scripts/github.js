class Github {

  async getProfiles(lang, devLocation, minRepos) {

    const url = `https://api.github.com/search/users?q=language:${lang}+location:${devLocation}+repos:%3E${minRepos}`
    const response = await fetch(url);

    const responseJSON = await response.json();

    return {
      profiles: responseJSON
    };
  }
}