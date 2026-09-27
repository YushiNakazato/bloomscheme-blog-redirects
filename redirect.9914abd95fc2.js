(() => {
  const url = new URL("https://bloomscheme.hatenablog.com");
  let path = location.pathname;
  if (path.endsWith('/index.html')) path = path.slice(0, -10);
  else if (path !== '/' && path.endsWith('/')) path = path.slice(0, -1);
  url.pathname = path;
  url.search = location.search;
  url.hash = location.hash;
  const meta = document.querySelector('meta[http-equiv="refresh"]');
  if (meta) meta.content = '0; url=' + url.href;
  location.replace(url.href);
})();
