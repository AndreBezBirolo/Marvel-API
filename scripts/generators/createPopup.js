class heroPopup {
    constructor(name, thumbnailPath, thumbnailExtension, otherLinks) {
        this.thumbnailPath = thumbnailPath
        this.thumbnailExtension = thumbnailExtension
        this.name = name
        this.otherLinks = otherLinks
    }

    generateHTML() {
        const popupSection = document.createElement('div')
        popupSection.classList.add('popup-container')

        const popupContainer = document.createElement('div')
        popupContainer.classList.add('container', 'flex', 'center-full')
        popupSection.appendChild(popupContainer)

        const imageContainer = document.createElement('div')
        imageContainer.classList.add('image-container')

        const image = document.createElement('img')
        image.src = this.thumbnailPath+'.'+this.thumbnailExtension
        image.classList.add('image')
        image.width = 300
        image.height = 300
        image.alt = this.name
        imageContainer.appendChild(image)
        popupContainer.appendChild(imageContainer)

        const linksContainer = document.createElement('div')
        linksContainer.classList.add('links-container')
        linksContainer.appendChild(this.otherLinks)
        popupContainer.appendChild(linksContainer)

        return popupSection
    }
}