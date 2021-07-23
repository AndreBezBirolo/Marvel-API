const FetchCharacters = async (search, offset) => {
    let GET
    if (search && search !== '') {
        GET = await fetch(API_URL + search)
    } else if (offset && offset !== '') {
        GET = await fetch(API_URL + offset)
    } else {
        GET = await fetch(API_URL)
    }

    if (GET.ok) {
        const JSON = await GET.json();
        return JSON.data
    } else {
        console.log('Algo está errado na API, dê uma olhada.')
    }

}