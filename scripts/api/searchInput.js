document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    searchInput.onkeyup = (e) => {
        let valueSearch = searchInput.value;
        // FetchCharacters(`?nameStartsWith=${valueSearch}`)
    }
})
