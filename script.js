    // Mobile navigation
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    menuToggle.addEventListener('click', () => {
      const open = mainNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(open));
      menuToggle.textContent = open ? '×' : '☰';
    });
    mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.textContent = '☰';
    }));

    // Upcoming / past event switcher
    const tabs = document.querySelectorAll('.tab');
    const eventCards = document.querySelectorAll('.event-card');
    tabs.forEach(tab => tab.addEventListener('click', () => {
      const filter = tab.dataset.filter;
      tabs.forEach(item => {
        const active = item === tab;
        item.classList.toggle('active', active);
        item.setAttribute('aria-selected', String(active));
      });
      eventCards.forEach(card => { card.hidden = card.dataset.kind !== filter; });
    }));

    // Front-end form demonstration only; this does not send or store data.
    document.getElementById('enquiryForm').addEventListener('submit', event => {
      event.preventDefault();
      document.getElementById('formMessage').style.display = 'block';
      event.target.reset();
    });
