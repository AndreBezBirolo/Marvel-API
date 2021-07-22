document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    searchInput.onkeyup = (e) => {
        let valueSearch = searchInput.value;
        if (valueSearch) {
            resetList()
            displayList(`&name=${valueSearch}`)
        } else {
            displayList()
        }
    }
})
