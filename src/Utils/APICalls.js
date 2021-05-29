export const baseURL = 'https://api.nytimes.com/svc/books/v3/lists';

export const checkForError = (response) => {
  if(!response.ok) {
    return 'Oops! Something went wrong! Please try again later.'
  } else {
    return response.json()
  }
}

export const fetchAllComics = () => {
  return fetch(`${baseURL}/manga.json?api-key=EGWgT37pIzbpuPsACX0SnMd3wKAwXhD9`)
  .then(checkForError)
}
