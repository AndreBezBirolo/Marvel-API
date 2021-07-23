const heroesDetails = () => {
    const heroes = document.querySelectorAll('.list-container .character-card');
    let heroID
    heroes.forEach((hero) => {
        hero.addEventListener('click', () => {
            heroID = hero.dataset.id
            createPopup();
            displayPopup(heroID);
        })
    })
}


