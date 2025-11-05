const btn = document.getElementById('toggleRail');
btn.addEventListener('click', () => {
  const expanded = document.body.classList.toggle('sidebar-expanded');
  if (expanded) {
    document.body.classList.remove('sidebar-collapsed');
    btn.setAttribute('aria-expanded', 'true');
    btn.setAttribute('aria-label', 'Collapse sidebar');
  } else {
    document.body.classList.add('sidebar-collapsed');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', 'Expand sidebar');
  }
});
