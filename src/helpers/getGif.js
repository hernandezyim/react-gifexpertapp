

export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=uHtrTF8vLJg1j1k8gJAQC5ffMzaPdvcT&q=${ encodeURI(category) }&limit=10`;
    const res = await fetch(url);
    const { data } = await res.json();

    const gifs = data.map(element => {

        return {
            id: element.id,
            title: element.title,
            url: element.images.original.url,
        }
    })
    return gifs;
} 