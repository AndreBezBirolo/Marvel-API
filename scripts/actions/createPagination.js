const generatePagination = (page, limit, offset, total) => {
    let pageCount = total / limit
    pageCount = pageCount.toFixed(0)
    const paginationContainer = document.querySelector('.pagination-container')
    const limitPagination = 5
    let actualPage = Number(window.localStorage.getItem('page'))

    resetList('pagination')


    // if (actualPage > 2 && actualPage < 5) {
    //     const prevAll = document.createElement('a')
    //     prevAll.innerHTML = '<<'
    //     prevAll.title = 'Voltar ao início'
    //     prevAll.classList.add('back-to-first', 'font-bold', 'fast')
    //     paginationContainer.appendChild(prevAll)
    //     const prevOne = document.createElement('a')
    //     prevOne.classList.add('back-one', 'font-bold', 'fast')
    //     prevOne.innerHTML = '<'
    //     prevOne.title = 'Voltar um'
    //     paginationContainer.appendChild(prevOne)
    // } else if (actualPage === (limitPagination-1)){
    //     const prevOne = document.createElement('a')
    //     prevOne.classList.add('back-one', 'font-bold', 'fast')
    //     prevOne.innerHTML = '<'
    //     prevOne.title = 'Voltar um'
    //     paginationContainer.appendChild(prevOne)
    // }


    let start = actualPage - 2
    let finish
    if (start < 2) {
        start = 1
        finish = 5
    } else {
        start = actualPage - 2
        finish = actualPage + 2
    }

    for (start; start <= finish; start++) {
        let skip = offset * (start - 1)
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

    // if (actualPage <= limitPagination) {
    //     const advanceOne = document.createElement('a')
    //     advanceOne.classList.add('advance-one', 'font-bold', 'fast')
    //     advanceOne.innerHTML = '>'
    //     advanceOne.title = 'Avançar um'
    //     paginationContainer.appendChild(advanceOne)
    //     const advanceAll = document.createElement('a')
    //     advanceAll.innerHTML = '>>'
    //     advanceAll.title = 'Ir para o final'
    //     advanceAll.classList.add('advance-to-finish', 'font-bold', 'fast')
    //     paginationContainer.appendChild(advanceAll)
    // } else if (actualPage === (limitPagination-1)) {
    //     const advanceOne = document.createElement('a')
    //     advanceOne.classList.add('advance-one', 'font-bold', 'fast')
    //     advanceOne.innerHTML = '>'
    //     advanceOne.title = 'Avançar um'
    //     paginationContainer.appendChild(advanceOne)
    // }


}
