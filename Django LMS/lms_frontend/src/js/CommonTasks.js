import React, { Component } from 'react';
import axios from 'axios';

const baseURL = "http://127.0.0.1:8000"

export default class CommonTasks {

    async getData(directory) {

        try {
            const response = await axios.get(baseURL + '/api/' + directory, {
                headers: {
                    Authorization: 'Token 911de59a37d99b815aa63c486d7e63cdb8b3db0a'
                }
            })
            // handle success
            /* console.log(response.data);
            console.log(response.data.length); */
            return response.data
        }
        catch(error) {
            // handle error
            console.error(error);
            return error
        };
    }

    async postBookmarkedCourse() {

        let payload = {
            "user_id": "1",
            "course_id": "2"
        }
        try {
            const response = await axios.post(baseURL + '/api/courses/bookmarks/', payload, {
                headers: {
                    Authorization: 'Token 911de59a37d99b815aa63c486d7e63cdb8b3db0a'
                }
            })
            // handle success
            /* console.log(response.data);
            console.log(response.data.length); */
            console.log(response)
        }
        catch(error) {
            // handle error
            console.error(error);
            //return error
        };
    }
}
