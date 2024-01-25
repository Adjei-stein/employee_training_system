import axios from 'axios';

//host server IP
export const baseURL = "http://127.0.0.1:8000"

//Get any data with this
export const getData = (directory) => {
    axios.get(baseURL + '/api/' + directory, {
        headers: {
            Authorization: 'Token 911de59a37d99b815aa63c486d7e63cdb8b3db0a'
        }
    })
    .then((response) => {
        // handle success
        console.log(response.data);
    })
    .catch((error) => {
        // handle error
        console.error(error);
    });
}
