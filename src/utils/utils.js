import { URL } from '../domain/urls';

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

//Filter out the correct tag ID from provided tag name.
export const fetchDataOnTag = (tagName) => {
    const data = fetchData(URL.POST);
    const tagData = fetchData(URL.TAG)

    return Promise.all([data, tagData]).then((item) => {
        
        const getTagId = item[1].filter((tags) => tags.name === tagName);
        
        return item[0].filter((item) => {
            return item.tags[0] === getTagId[0].id;
        })
    });
}