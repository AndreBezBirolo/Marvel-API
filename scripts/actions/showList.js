// Transform names in object to a string
const objectToString = (object) => {
    if (object.returned !== 0) {
        let string = ''
        object.items.forEach((item) => {
            string += item.name + '<br>'
        })
        return string
    } else {
        return 'Nenhum dado informado'
    }
}

// Shows list in front
const displayList = async (search, offset) => {
    const listContainer = document.querySelector('.list-container');
    let totalItems
    loading('on')
    await FetchCharacters(search, offset).then((data) => {
        resetList('list')
        totalItems = data.total
        const results = data.results
        results.map((hero) => {
            const series = objectToString(hero.series)
            const events = objectToString(hero.events)
            const card = new heroCard(hero.thumbnail.path, hero.thumbnail.extension, hero.name, series, events, hero.urls[0].url, hero.id).generateHTML()
            listContainer.appendChild(card)
        })
        generatePagination(0, 10, 10, totalItems)
    });
    await activePagination()
    await heroesDetails()
    await loading('off')

}

