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
            console.log(response.data);
            console.log(response.data.length);
            return response.data
        }
        catch(error) {
            // handle error
            console.error(error);
            return error
        };
    }
}
