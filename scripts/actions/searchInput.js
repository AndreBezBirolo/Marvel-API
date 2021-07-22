document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    searchInput.onkeyup = (e) => {
        let valueSearch = searchInput.value;
        if (valueSearch ) {
            if (valueSearch === ' ') {
                searchInput.value = ''
                alert('Seu campo está vazio!')
            } else {
                resetList()
                displayList(`&name=${valueSearch}`)
            }
        } else {
            displayList()
        }
    }
})
