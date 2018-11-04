const baseUrl = 'http://localhost:8888/index.php/wp-json/wp/v2'

export const URL = {
    POST: baseUrl + '/posts',
    MEDIA: baseUrl + '/media',
    ABOUTPAGE: baseUrl + '/posts?tags=2',
    TAG: baseUrl + '/tags'
}