const fetchImg = async () => {
  const r = await fetch('https://ibb.co/cW8t1qc');
  const html = await r.text();
  const match = html.match(/<meta property="og:image" content="([^"]+)"/);
  console.log(match ? match[1] : 'not found');
};
fetchImg();
