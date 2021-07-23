// This function clean the code of list or pagination, individually
const resetList = (type) => {
    if (type === 'list') {
        const listContainer = document.querySelector('.list-container');
        listContainer.querySelectorAll('li').forEach((item) => {
            item.remove();
        })
    } else if (type === 'pagination') {
        const itemsPagination = document.querySelectorAll('.pagination-container a');
        itemsPagination.forEach((item) => {
            item.remove();
        })
    } else if (type === 'popup') {
        const popup = document.querySelector('.popup-container')
        if (popup) {
            popup.remove()
        }
    }
}
