// Hamburger Menu Functionality
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Skills Tabs
function initSkillsTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabContents.forEach(content => {
    content.style.display = content.id === 'languages' ? 'block' : 'none';
  });

  tabs.forEach(tab => {
    if (tab.getAttribute('data-tab') === 'languages') {
      tab.classList.add('btn-color-1');
      tab.classList.remove('btn-color-2');
    } else {
      tab.classList.remove('btn-color-1');
      tab.classList.add('btn-color-2');
    }

    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('btn-color-1');
        t.classList.add('btn-color-2');
      });
      tab.classList.add('btn-color-1');
      tab.classList.remove('btn-color-2');

      tabContents.forEach(content => {
        content.style.display = content.id === tab.getAttribute('data-tab') ? 'block' : 'none';
      });
    });
  });
}

window.addEventListener('DOMContentLoaded', () => {
  initSkillsTabs();
});

// Modal functionality
document.querySelectorAll('[data-modal-target]').forEach(container => {
  container.addEventListener('click', () => {
    const modalId = container.getAttribute('data-modal-target');
    const modal = document.querySelector(modalId);
    modal.style.display = 'block';
  });
});

document.querySelectorAll('.close-button').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.modal').style.display = 'none';
  });
});

window.addEventListener('click', e => {
  document.querySelectorAll('.modal').forEach(modal => {
    if (e.target === modal) modal.style.display = 'none';
  });
});
