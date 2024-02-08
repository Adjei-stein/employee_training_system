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

    async postBookmarkedCourse(course, user) {

        let payload = {
            "user_id": user,
            "course_id": course
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
            return response.status
        }
        catch(error) {
            // handle error
            console.error(error);
            return error
        };
    }

    async deleteBookmarkedCourse(course, user) {

        try {
            const response = await axios.delete(baseURL + '/api/courses/bookmarked/' + course + "/" + user, {
                headers: {
                    Authorization: 'Token 911de59a37d99b815aa63c486d7e63cdb8b3db0a'
                }
            })
            // handle success
            /* console.log(response.data);
            console.log(response.data.length); */
            console.log(response)
            return response.status
        }
        catch(error) {
            // handle error
            console.error(error);
            return error
        };
    }
}
