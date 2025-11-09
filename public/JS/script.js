(() => {
  'use strict'

  const forms = document.querySelectorAll('.needs-validation')

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

document.addEventListener('DOMContentLoaded', () => {
  const searchToggle = document.getElementById('navSearchToggle');
  const searchOverlay = document.getElementById('navbarSearchOverlay');
  const searchClose = document.getElementById('navSearchClose');
  const navbarCollapse = document.getElementById('navbarNavAltMarkup');

  if (searchToggle && searchOverlay) {

    searchToggle.addEventListener('click', (e) => {
      const navbarEl = document.querySelector('.navbar');
      const isOpen = searchOverlay.classList.contains('active');
      if (isOpen) {
        searchOverlay.classList.remove('active');
        if (navbarEl) navbarEl.classList.remove('search-active');
        setTimeout(() => {
          searchOverlay.classList.remove('d-flex');
          searchOverlay.classList.add('d-none');
        }, 240);
      } else {
       
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
          const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse);
          bsCollapse.hide();
        }
        
        searchOverlay.classList.remove('d-none');
        searchOverlay.classList.add('d-flex');
          
          if (searchClose) searchClose.classList.add('d-none');       
        setTimeout(() => searchOverlay.classList.add('active'), 10);
        if (navbarEl) navbarEl.classList.add('search-active');
        const input = searchOverlay.querySelector('.search-input');
        if (input) input.focus();
      }
    });
  }

  if (searchClose && searchOverlay) {
    searchClose.addEventListener('click', () => {
      searchOverlay.classList.remove('active');
      document.querySelector('.navbar').classList.remove('search-active');
      setTimeout(() => {
        searchOverlay.classList.remove('d-flex');
        searchOverlay.classList.add('d-none');
        if (searchClose) searchClose.classList.remove('d-none');
      }, 240);
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchOverlay && searchOverlay.classList.contains('active')) {
      searchOverlay.classList.remove('active');
      document.querySelector('.navbar').classList.remove('search-active');
      setTimeout(() => {
        searchOverlay.classList.remove('d-flex');
        searchOverlay.classList.add('d-none');
        if (searchClose) searchClose.classList.remove('d-none');
      }, 240);
    }
  });

  document.addEventListener('click', (e) => {
    if (!searchOverlay || searchOverlay.classList.contains('d-none')) return;
    const form = searchOverlay.querySelector('form');
    const toggleBtn = document.getElementById('navSearchToggle');
    if (form && !form.contains(e.target) && toggleBtn && !toggleBtn.contains(e.target)) {
      searchOverlay.classList.remove('active');
      document.querySelector('.navbar').classList.remove('search-active');
      setTimeout(() => {
        searchOverlay.classList.remove('d-flex');
        searchOverlay.classList.add('d-none');
        if (searchClose) searchClose.classList.remove('d-none');
      }, 240);
    }
  });

  const searchForm = document.getElementById('navSearchForm');
  if (searchForm) {
    searchForm.addEventListener('submit', () => {
      setTimeout(() => {
        if (searchOverlay) {
          searchOverlay.classList.remove('active');
          setTimeout(() => {
            searchOverlay.classList.remove('d-flex');
            searchOverlay.classList.add('d-none');
            if (searchClose) searchClose.classList.remove('d-none');
          }, 240);
        }
      }, 200);
    });
  }

  const navbarToggler = document.querySelector('.navbar-toggler');
  if (navbarToggler && navbarCollapse) {
    navbarToggler.addEventListener('click', (e) => {
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse);
      bsCollapse.toggle();
      if (searchOverlay && searchOverlay.classList.contains('active')) {
        searchOverlay.classList.remove('active');
        document.querySelector('.navbar').classList.remove('search-active');
        setTimeout(() => {
          searchOverlay.classList.remove('d-flex');
          searchOverlay.classList.add('d-none');
          if (searchClose) searchClose.classList.remove('d-none');
        }, 240);
      }
    });
  }
});