document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    searchInput.onkeyup = (e) => {
        let valueSearch = searchInput.value;
        if (valueSearch) {
            // Prevent space search's
            if (valueSearch === ' ') {
                searchInput.value = ''
                alert('Seu campo está vazio!')
            } else {
                // The search
                displayList(`&name=${valueSearch}`)
            }
        } else {
            // This return the list again when the value is empty
            displayList()
        }
    }
})
