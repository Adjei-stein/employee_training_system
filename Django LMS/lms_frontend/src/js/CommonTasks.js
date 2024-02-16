import axios from 'axios';

const baseURL = "http://127.0.0.1:8000"


export default class CommonTasks {

    async getData(directory) {
        let token = localStorage.getItem('token');
        if (token){
            try {
                const response = await axios.get(baseURL + '/api/' + directory, {
                    headers: {
                        Authorization: 'Token ' + token
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
        else {
            window.location.href = '/';
        }
        
    }

    async postData(directory, payload) {
        let token = localStorage.getItem('token');
        if (token){
            try {
                const response = await axios.post(baseURL + '/api/' + directory + "/", payload, {
                    headers: {
                        Authorization: 'Token ' + token
                    }
                })
                return response
            }
            catch(error) {
                // handle error
                console.error(error);
                return error
            };
        }
        else {
            window.location.href = '/';
        }
    }

    async loginUser (username, password) {
        try {
            const response = await axios.post(baseURL + '/api/login/', { username, password });
            this.token = response.data.token;
            
            // You can save the token in localStorage or sessionStorage for future use
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('username', username);
            //localStorage.setItem('token', response.data.token);

            // Set the token as a cookie
            //document.cookie = `token=${token}; path=/`;
            //console.log(this.token)

            window.location.href = '/home';
            return null
        } catch (error) {
            return 'Invalid username or password'
            
        }
    }

    async logoutUser() {
        let token = localStorage.getItem('token');
        try {
            const response = await axios.delete(baseURL + '/api/logout/', {
                headers: {
                    Authorization: 'Token ' + token
                }
            });
            localStorage.removeItem('token');
            window.location.href = '/';
            /* const response = await axios.delete(baseURL + '/api/logout/', {
                headers: {
                    'Authorization': `Token ${token}` // Include the user's token for authentication
                }
            }); */
            console.log(response.data.message);
        } catch (error) {
            console.error('Error logging out:', error);
            // Handle errors, such as displaying an error message to the user
        }
    }

    async loginUser2(username, password) {
        // Create an object representing the login credentials
        const credentials = {
            username: username,
            password: password
        };
    
        // Make a POST request to the login endpoint
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // You may need to include additional headers if required by your backend
            },
            body: JSON.stringify(credentials) // Convert the credentials object to JSON
        })
        .then(response => {
            if (response.ok) {
                // If the response is successful, redirect the user to the dashboard or any other authenticated page
                window.location.href = '/home';
            } else {
                // If the response is not successful, display an error message to the user
                alert('Invalid username or password');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle any errors that occur during the fetch request
            alert('An error occurred. Please try again later.');
        });
    }

    async postBookmarkedCourse(course, user) {
        let token = localStorage.getItem('token');
        if (token){
            let payload = {
                "user_id": user,
                "course_id": course
            }
            try {
                const response = await axios.post(baseURL + '/api/courses/bookmarks/', payload, {
                    headers: {
                        Authorization: 'Token ' + token
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
        else {
            window.location.href = '/';
        }
    }

    async deleteBookmarkedCourse(course, user) {
        let token = localStorage.getItem('token');
        if (token){
            try {
                const response = await axios.delete(baseURL + '/api/courses/bookmarked/' + course + "/" + user, {
                    headers: {
                        Authorization: 'Token ' + token
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
        else {
            window.location.href = '/';
        }
    }
}
