// scriptActividades.js
// Acordeón: solo 1 abierto a la vez
document.addEventListener('DOMContentLoaded', () => {
  const dayCards = Array.from(document.querySelectorAll('.day-card'));

  function closeAllExcept(activeCard) {
    dayCards.forEach(card => {
      const btn = card.querySelector('.toggle-btn');
      const panel = card.querySelector('.day-panel');
      if (card !== activeCard) {
        btn.setAttribute('aria-expanded', 'false');
        if (panel) panel.hidden = true;
      }
    });
  }

  dayCards.forEach(card => {
    const btn = card.querySelector('.toggle-btn');
    const panel = card.querySelector('.day-panel');

    const panelId = btn.getAttribute('aria-controls');
    if (panel && panelId && !panel.id) panel.id = panelId;

    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      if (expanded) {
        btn.setAttribute('aria-expanded', 'false');
        if (panel) panel.hidden = true;
      } else {
        closeAllExcept(card);
        btn.setAttribute('aria-expanded', 'true');
        if (panel) panel.hidden = false;
        if (panel) panel.focus();
      }
    });
  });

  // ✅ Función del botón "Cerrar Sesión"
  const logoutBtn = document.querySelector('.btn-logout');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      // Redirigir al login
      window.location.href = 'login.html';
    });
  }
});

