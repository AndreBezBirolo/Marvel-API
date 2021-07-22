const FetchCharacters = async () => {
    const GET = await fetch(API_URL);
    if (GET.ok) {
        const JSON = await GET.json();
        return JSON.data
    } else {
        console.log('Algo está errado na API, dê uma olhada.')
    }
}