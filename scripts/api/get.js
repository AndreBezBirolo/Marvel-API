const FetchCharacters = async (search, offset) => {
    let GET

    // Set params, if is search or is offset
    if (search && search !== '') {
        GET = await fetch(API_URL + search)
    } else if (offset && offset !== '') {
        GET = await fetch(API_URL + offset)
    } else {
        GET = await fetch(API_URL)
    }

    if (GET.ok) {
        const JSON = await GET.json();
        // Return object data
        return JSON.data
    } else {
        // Return a description general if was a error
        console.log('Algo está errado na API, dê uma olhada.')
    }

}