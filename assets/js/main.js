// Script simple pour le menu mobile et le formulaire de contact
document.addEventListener('DOMContentLoaded', function () {
  // Mettre l'année dans le footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Toggle nav mobile
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  navToggle && navToggle.addEventListener('click', function () {
    if (mainNav) mainNav.classList.toggle('open');
  });

  // Formulaire (simulation). Remplace endpoint pour envoyer réellement.
  const form = document.getElementById('contactForm');
  const notice = document.getElementById('formNotice');
  if (form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      const fd = new FormData(form);
      const data = Object.fromEntries(fd.entries());
      if (!data.name || !data.email || !data.message) {
        notice.textContent = 'Merci de remplir tous les champs.';
        return;
      }
      notice.textContent = 'Envoi en cours…';

      // Exemple : envoyer à Formspree (remplacer YOUR_FORM_ID)
      // const endpoint = 'https://formspree.io/f/YOUR_FORM_ID';
      // try {
      //   const res = await fetch(endpoint, { method: 'POST', body: fd });
      //   if (res.ok) {
      //     notice.textContent = 'Message envoyé, merci !';
      //     form.reset();
      //   } else {
      //     notice.textContent = 'Erreur lors de l\'envoi.';
      //   }
      // } catch (err) {
      //   notice.textContent = 'Erreur réseau.';
      // }

      // Simulation locale
      setTimeout(() => {
        notice.textContent = 'Message simulé envoyé. Remplacez par un vrai endpoint pour la production.';
        form.reset();
      }, 700);
    });
  }
});
