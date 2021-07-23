document.addEventListener('DOMContentLoaded', () => {
    // Realize the fetch and set the first page on cache
    displayList();
    window.localStorage.setItem('page', '1');
});