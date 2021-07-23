const FetchCharacters = async (search, offset, id) => {
    let GET

    // Set params, if is search or is offset
    if (search && search !== '') {
        GET = await fetch(API_LIST_URL + search)
    } else if (offset && offset !== '') {
        GET = await fetch(API_LIST_URL + offset)
    } else if (id && id !== '') {
        GET = await fetch(API_CHARACTER_URL + id + CONFIG_API)
    } else {
        GET = await fetch(API_LIST_URL)
    }
    if (GET.ok) {
        console.log('GET: ', GET)
        const JSON = await GET.json();
        console.log('JSON: ', JSON.data)
        // Return object data
        return JSON.data
    } else {
        // Return a description general if was a error
        console.log('Algo está errado na API, dê uma olhada.')
    }

}