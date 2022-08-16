document.getElementById('btn-copyText').addEventListener('click', () => {
     const content = document.getElementById('sidebar-container__text').textContent;
     navigator.clipboard.writeText(content);
});

