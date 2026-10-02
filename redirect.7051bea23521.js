(() => {
  const target = "https://singularitynatives.com/blog/";
  const meta = document.querySelector('meta[http-equiv="refresh"]');
  if (meta) meta.content = '0; url=' + target;
  location.replace(target);
})();
