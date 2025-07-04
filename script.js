function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function initSkillsTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  // Hide all tab contents except the one for 'languages'
  tabContents.forEach(content => {
    content.style.display = content.id === 'languages' ? 'block' : 'none';
  });

  // Set initial active tab (languages)
  tabs.forEach(tab => {
    if (tab.getAttribute('data-tab') === 'languages') {
      tab.classList.add('btn-color-1');
      tab.classList.remove('btn-color-2');
    } else {
      tab.classList.remove('btn-color-1');
      tab.classList.add('btn-color-2');
    }

    // Add click listeners to switch tabs
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
