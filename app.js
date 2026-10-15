// Toggle menu navbar pada layar mobile
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const hidden = menu.classList.toggle('hidden');
    btn.setAttribute('aria-expanded', String(!hidden));
  });
});