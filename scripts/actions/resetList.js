const resetList = () => {
    const listContainer = document.querySelector('.list-container');
    listContainer.querySelectorAll('li').forEach((item) => {
        item.remove();
    })
}
document.querySelector('.button-cb').addEventListener('click', function(e) {
    e.preventDefault()
    resetList()
})
