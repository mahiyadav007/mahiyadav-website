/* Shared: theme toggle + mobile nav + sticky nav */
(function () {
  var root = document.documentElement;
  var saved = localStorage.getItem('my_th') || 'dark';
  root.setAttribute('data-theme', saved);

  document.addEventListener('DOMContentLoaded', function () {
    var nav = document.querySelector('.nav');
    var themeBtn = document.getElementById('themeBtn');
    var hb = document.getElementById('hb');
    var drawer = document.getElementById('mobDrawer');

    function syncIcon() {
      if (themeBtn) themeBtn.textContent = root.getAttribute('data-theme') === 'dark' ? '☀' : '☾';
    }
    syncIcon();

    if (themeBtn) themeBtn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('my_th', next);
      syncIcon();
    });

    if (hb && drawer) hb.addEventListener('click', function () {
      hb.classList.toggle('open');
      drawer.classList.toggle('open');
    });
    if (drawer) drawer.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { hb.classList.remove('open'); drawer.classList.remove('open'); });
    });

    if (nav) {
      var onScroll = function () { nav.classList.toggle('sc', window.scrollY > 16); };
      onScroll();
      window.addEventListener('scroll', onScroll);
    }
  });
})();
