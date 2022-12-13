(function (w, d, i, j) {
  (w[i] || (w[i] = [])).push(() => w.Ya.Site.Results.init());
  w.onload = () => d.getElementById(j).style.opacity = '1';
})(window, document, 'yandex_site_callbacks', 'ya-site-results');

