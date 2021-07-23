class createPopup {
    constructor(name, thumbnailPath, thumbnailExtension, otherLinks) {
        this.thumbnailPath = thumbnailPath
        this.thumbnailExtension = thumbnailExtension
        this.name = name
        this.otherLinks = otherLinks
    }

    generateHTML() {
        const popupContainer = document.createElement('div')
        popupContainer.classList.add('popup-container', 'flex', 'center-full')
        popupContainer.dataset.id = this.id

        const imageContainer = document.createElement('div')
        imageContainer.classList.add('image-container')

        const image = document.createElement('img')
        image.src = this.thumbnailPath+'.'+this.thumbnailExtension
        image.classList.add('image')
        image.width = 48
        image.height = 48
        image.alt = this.name
        popupContainer.appendChild(image)
    }
}