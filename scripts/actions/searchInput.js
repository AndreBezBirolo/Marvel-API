document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    searchInput.onkeyup = (e) => {
        console.log('Digitou algo')
        let valueSearch = searchInput.value;
        if (valueSearch ) {
            if (valueSearch === ' ') {
                searchInput.value = ''
                alert('Seu campo está vazio!')
            } else {
                displayList(`&name=${valueSearch}`)
            }
        } else {
            displayList()
        }
    }
    console.log('Search Input')
})
