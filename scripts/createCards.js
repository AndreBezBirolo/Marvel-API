class heroCard {
    constructor(thumbnailPath, thumbnailExtension, name, series, events) {
        this.thumbnailPath = thumbnailPath
        this.thumbnailExtension = thumbnailExtension
        this.name = name
        this.series = series
        this.events = events
    }

    generateHTML() {
        const cardContainer = document.createElement('li')
        cardContainer.classList.add('character-card','flex','center-y-row')

        const imgObject = document.createElement('img')
        imgObject.src = this.thumbnailPath+'.'+this.thumbnailExtension
        imgObject.classList.add('image')
        imgObject.width = 48
        imgObject.height = 48
        imgObject.alt = this.name
        cardContainer.appendChild(imgObject)

        const nameObject = document.createElement('p')
        nameObject.classList.add('name', 'font-bold')
        nameObject.innerHTML = this.name
        cardContainer.appendChild(nameObject)

        const seriesObject = document.createElement('p')
        seriesObject.classList.add('series', 'hide-from-phone')
        seriesObject.innerHTML = this.series
        cardContainer.appendChild(seriesObject)

        const eventsObject = document.createElement('p')
        eventsObject.classList.add('events', 'hide-from-phone')
        eventsObject.innerHTML = this.events
        cardContainer.appendChild(eventsObject)

        return cardContainer
    }

}