const heroesDetails = () => {
    const heroes = document.querySelectorAll('.list-container .character-card');
    const main = document.querySelector('main')
    let heroID
    heroes.forEach((hero) => {
        hero.addEventListener('click', async () => {
            heroID = hero.dataset.id

            await FetchCharacters('', '', heroID).then(async ({results}) => {
                const hero = results[0];
                const name = hero.name
                const thumbnailPath = hero.thumbnail.path
                const thumbnailExtension = hero.thumbnail.extension
                const storiesObject = hero.stories.items
                const groupStoryHTML = document.createElement('div')
                groupStoryHTML.classList.add('flex', 'column')
                if (storiesObject.length === 0) {
                    const storyHTML = document.createElement('a')
                    storyHTML.innerHTML = 'Nenhum dado informado'
                    storyHTML.href = MARVEL_URL
                    groupStoryHTML.appendChild(storyHTML)
                } else {
                    storiesObject.map((story) => {
                        const storyHTML = document.createElement('a')
                        storyHTML.classList.add('story-item')
                        storyHTML.href = story.resourceURI+CONFIG_API
                        storyHTML.innerHTML = story.name
                        storyHTML.target = '_blank'

                        groupStoryHTML.appendChild(storyHTML)
                    })
                }
                // Create popup HTML
                const popupCard = new heroPopup(name, thumbnailPath, thumbnailExtension, groupStoryHTML).generateHTML()
                // Reset if have any popup open
                await resetList('popup')
                // Show de popup in front
                main.appendChild(popupCard)
            })
        })
    })
}


