const burgerBtn = document.getElementById('burgerBtn');
const mainNav = document.getElementById('mainNav');

if (burgerBtn && mainNav) {
  burgerBtn.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });
}

const toggleButtons = document.querySelectorAll('.toggle-btn');

toggleButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    toggleButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const view = btn.dataset.view;

    if (view === 'mobile') {
      document.body.classList.add('is-mobile');
    } else {
      document.body.classList.remove('is-mobile');
    }
  });
});

let manualOverride = false;

toggleButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    manualOverride = true;
    setTimeout(() => { manualOverride = false; }, 3000);
  });
});

window.addEventListener('resize', () => {
  if (manualOverride) return;

  const isMobile = window.innerWidth < 768;
  document.body.classList.toggle('is-mobile', isMobile);

  toggleButtons.forEach(btn => {
    const view = btn.dataset.view;
    if (view === 'mobile' && isMobile) {
      toggleButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    } else if (view === 'desktop' && !isMobile) {
      toggleButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    }
  });
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    if (mainNav) mainNav.classList.remove('open');
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    e.target.classList.add('active');
  });
});

const searchForm = document.getElementById('searchForm');
if (searchForm) {
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Поиск туров запущен!');
  });
}