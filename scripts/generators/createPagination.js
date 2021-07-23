// This function just create the HTML pagination
const generatePagination = (page, limit, offset, total) => {
    let pageCount = total / limit
    pageCount = pageCount.toFixed(0)
    const paginationContainer = document.querySelector('.pagination-container')
    const limitPagination = 5
    let actualPage = Number(window.localStorage.getItem('page'))

    // Clean the list of pagination items
    resetList('pagination')

    // Pagination arrows back
    if (actualPage > 1) {
        if (actualPage > 2) {
            const prevAll = document.createElement('a')
            prevAll.innerHTML = '<<'
            prevAll.title = 'Voltar ao início'
            prevAll.classList.add('back-to-first', 'font-bold', 'fast')
            prevAll.dataset.offset = 0
            prevAll.dataset.page = 1
            paginationContainer.appendChild(prevAll)
        }
        const prevOne = document.createElement('a')
        prevOne.classList.add('back-one', 'font-bold', 'fast')
        prevOne.innerHTML = '<'
        prevOne.title = 'Voltar um'
        prevOne.dataset.offset = offset * actualPage
        prevOne.dataset.page = actualPage - 1
        paginationContainer.appendChild(prevOne)
    }


    let start = actualPage - 2
    let finish
    if (start < 2) {
        start = 1
        finish = 5
    } else if (actualPage >= (pageCount - 1)) {
        finish = pageCount
    } else {
        start = actualPage - 2
        finish = actualPage + 2
    }

    // Pagination items
    for (start; start <= finish; start++) {
        let skip = offset * start
        const aContainer = document.createElement('a')
        if (start === actualPage) {
            aContainer.classList.add('pagination-number', 'active')
        } else {
            aContainer.classList.add('pagination-number')
        }
        aContainer.dataset.offset = skip
        aContainer.dataset.page = start
        aContainer.title = `Ir para a página ${start}`
        aContainer.innerHTML = start
        paginationContainer.appendChild(aContainer)
    }

    // Arrows to advance
    if (actualPage < pageCount) {
        const advanceOne = document.createElement('a')
        advanceOne.classList.add('advance-one', 'font-bold', 'fast')
        advanceOne.innerHTML = '>'
        advanceOne.title = 'Avançar um'
        advanceOne.dataset.offset = offset * actualPage
        advanceOne.dataset.page = actualPage + 1
        paginationContainer.appendChild(advanceOne)
        if (actualPage <= (pageCount - 2)) {
            const advanceAll = document.createElement('a')
            advanceAll.innerHTML = '>>'
            advanceAll.title = 'Ir para o final'
            advanceAll.classList.add('advance-to-finish', 'font-bold', 'fast')
            advanceAll.dataset.offset = offset * pageCount
            advanceAll.dataset.page = pageCount
            paginationContainer.appendChild(advanceAll)

        }
    }
}
