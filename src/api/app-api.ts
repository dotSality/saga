export const getLatestNewsApi = async () => {
  const req = await fetch('https://hn.algolia.com/api/v1/search?query=react&hitsPerPage=10');
  return req.json();
}

export const getPopularNewsApi = async () => {
  const req = await fetch('https://hn.algolia.com/api/v1/search?hitsPerPage=10');
  return req.json();
}