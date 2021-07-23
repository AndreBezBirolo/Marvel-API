const activePagination = () => {
    const itemsPagination = document.querySelectorAll('.pagination-container .pagination-number');
    itemsPagination.forEach((item) => {
        let offset = item.dataset.offset
        item.addEventListener('click', () => {
            displayList('', `&offset=${offset}`)
            window.localStorage.setItem('page', item.dataset.page)
        })
    })
    console.log('Ativou a páginação!')
}
