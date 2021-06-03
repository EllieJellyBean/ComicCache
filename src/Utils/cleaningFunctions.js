const filterComicData = comicData => {
  const filteredComicData = comicData.results.books.map(comic => {
    return {
      'rank': comic.rank,
      'author': comic.author,
      'title': comic.title,
      'book_image': comic.book_image,
      'description': comic.description,
      'buy_links': comic.buy_links[0],
      'publisher': comic.publisher
    }
  });
  return filteredComicData;
}

export { filterComicData };