// This function active the pagination items to make them clickable and realize the fetch with offset
const activePagination = () => {
    // Get all pagination items
    const itemsPagination = document.querySelectorAll('.pagination-container a');
    itemsPagination.forEach((item) => {
        let offset = item.dataset.offset
        item.addEventListener('click', () => {
            // Realize the fetch
            displayList('', `&offset=${offset}`)
            // Update the page in cache
            window.localStorage.setItem('page', item.dataset.page)
            window.scroll('0', '0')
        })
    })
}
