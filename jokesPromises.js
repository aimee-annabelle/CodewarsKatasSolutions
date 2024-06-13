function sayJoke(apiUrl, jokeId) {
  let promise = new Promise(function (resolve, reject) {
    fetch(apiUrl)
      .then((response) => response.json())
      .catch(() => new Error("No jokes at url: {url}"))
      .then((data) => {
        let jokes = data.jokes;
        resolve(jokes.filter((o) => o.id === jokeId));
      })
      .catch(() => new Error("No jokes found id: {jokeId}"));
  });
  return promise;
}
