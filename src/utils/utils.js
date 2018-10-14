// För att inte få med html tags . 
export const setHtml = (content) => {
    return {__html: content}
}

export const fetchData = (url) => {
    return fetch(url)
        .then((resp) => {
            return resp.json();
        }).then((data) => data)
}