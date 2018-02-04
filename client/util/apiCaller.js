import fetch from 'isomorphic-fetch';
import Config from '../../server/config';

export const API_URL = (typeof window === 'undefined' || process.env.NODE_ENV === 'test') ? // 'typeof window...' tests if we're not in browser
    process.env.BASE_URL || (`http://localhost:${process.env.PORT || Config.port}/api`) : // we dont know the environment so we give 3 possibilities
    '/api';




/* 
Request represents a HTTP request to be performed via fetch(). 
Typically a Request doesn't need to be constructed manually, as it's instantiated internally when fetch() is called.
czyli chyba w momencie wywolania callApi addpostrequest wysyla do serwera nowego posta i zapisuje go na ${API_URL}/posts
*/    
export default function callApi(endpoint, method = 'get', body) {
    
    return fetch(`${API_URL}/${endpoint}`, {
        headers: { 'content-type': 'application/json' },
        method,
        body: JSON.stringify(body),
    })
        .then(response => response.json().then(json => ({ json, response })))
        .then(({ json, response }) => {
            if (!response.ok) {
                return Promise.reject(json);
            }

            return json;
        })
        .then(
        response => response,
        error => error
        );
}
