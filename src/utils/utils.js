function getRepositories(query) {
  return fetch(`https://api.github.com/search/repositories?q=${query}&per_page=10`)
    .then(res => res.ok ? res.json() : Promise.resolve(res.statusText))
    .then(res => {
      const results = [];
      res.items.forEach(repo => {
        results.push({
          name: repo.name,
          url: repo.html_url,
          description: repo.description,
          language: repo.language,
          owner: repo.owner.login,
          ownerAvatar: repo.owner.avatar_url,
        })
      })
      return results;
    })
}

export { getRepositories };