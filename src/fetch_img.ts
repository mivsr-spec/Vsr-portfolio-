const fetchImg = async () => {
  for (const url of ['https://imgbox.com/VB34pURF']) {
    const r = await fetch(url);
    const html = await r.text();
    const match = html.match(/<meta property="og:image" content="([^"]+)"/) || html.match(/<img[^>]+src="([^"]+)"[^>]*id="img"/);
    console.log(match ? match[1] : 'not found');
  }
};
fetchImg();
