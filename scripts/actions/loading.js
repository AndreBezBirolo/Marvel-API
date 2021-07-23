const loading = (param) => {
    const loadingItem = document.querySelector('.loading')
    if (param === 'on') {
        loadingItem.classList.add('visible')
    } else {
        loadingItem.classList.remove('visible')
    }
}