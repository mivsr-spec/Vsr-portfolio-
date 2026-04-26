const fetchImg = async () => {
  const r = await fetch('https://imgbox.com/GjNE1NkX');
  const html = await r.text();
  const match = html.match(/<meta property="og:image" content="([^"]+)"/) || html.match(/<img[^>]+src="([^"]+)"[^>]*id="img"/);
  console.log(match ? match[1] : 'not found');
};
fetchImg();
