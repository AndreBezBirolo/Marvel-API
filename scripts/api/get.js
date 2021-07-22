const FetchCharacters = async (search) => {
    let GET
    if (search) {
        GET = await fetch(API_URL+search);
    } else {
        GET = await fetch(API_URL);
    }
    if (GET.ok) {
        const JSON = await GET.json();
        return JSON.data
    } else {
        console.log('Algo está errado na API, dê uma olhada.')
    }

}