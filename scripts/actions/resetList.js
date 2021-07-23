const resetList = (type) => {
    if (type === 'list') {
        const listContainer = document.querySelector('.list-container');
        listContainer.querySelectorAll('li').forEach((item) => {
            item.remove();
        })
    } else if (type === 'pagination') {
        const itemsPagination = document.querySelectorAll('.pagination-container .pagination-number');
        itemsPagination.forEach((item) => {
            item.remove();
        })
    }


}
