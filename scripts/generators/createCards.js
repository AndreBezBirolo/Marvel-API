// This class create a HTML componente of hero
class heroCard {
    constructor(thumbnailPath, thumbnailExtension, name, series, events, url, id) {
        this.thumbnailPath = thumbnailPath
        this.thumbnailExtension = thumbnailExtension
        this.name = name
        this.series = series
        this.events = events
        this.url = url
        this.id = id
    }

    generateHTML() {
        const cardContainer = document.createElement('li')
        cardContainer.classList.add('character-card', 'flex')
        cardContainer.dataset.id = this.id


        const urlContainer = document.createElement('a')
        urlContainer.classList.add('flex','center-y-row')
        urlContainer.href = 'Javascript:;'
        cardContainer.appendChild(urlContainer)

        const imgObject = document.createElement('img')
        imgObject.src = this.thumbnailPath+'.'+this.thumbnailExtension
        imgObject.classList.add('image')
        imgObject.width = 48
        imgObject.height = 48
        imgObject.alt = this.name
        urlContainer.appendChild(imgObject)

        const nameObject = document.createElement('p')
        nameObject.classList.add('name', 'font-bold')
        nameObject.innerHTML = this.name
        urlContainer.appendChild(nameObject)

        const seriesObject = document.createElement('p')
        seriesObject.classList.add('series', 'hide-from-phone')
        seriesObject.innerHTML = this.series
        urlContainer.appendChild(seriesObject)

        const eventsObject = document.createElement('p')
        eventsObject.classList.add('events', 'hide-from-phone')
        eventsObject.innerHTML = this.events
        urlContainer.appendChild(eventsObject)

        return cardContainer
    }

}