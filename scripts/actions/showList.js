const objectToString = (object) => {
    if (object.returned !== 0) {
        let string = ''
        object.items.forEach((item) => {
            string += item.name + '<br>'
        })
        return string
    } else {
        return 'No items'
    }
}
const displayList = (search) => {
    const listContainer = document.querySelector('.list-container');
    FetchCharacters(search).then((data) => {
        const results = data.results
        results.map((hero) => {
            const series = objectToString(hero.series)
            const events = objectToString(hero.events)
            const card = new heroCard(hero.thumbnail.path, hero.thumbnail.extension, hero.name, series, events, hero.urls[0].url).generateHTML()
            listContainer.appendChild(card)
        })
    });
}
