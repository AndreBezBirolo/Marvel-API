const loading = (param) => {
    const loadingItem = document.querySelector('.loading')
    param === 'on' ? loadingItem.classList.add('visible') : loadingItem.classList.remove('visible')
}