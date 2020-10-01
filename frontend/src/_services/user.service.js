import authHeader from '../_helpers/auth-header'
import  {API_URL} from  '../config/url'
export const userService = {
    login,
    logout,
    register
};
function login(username, password){
    const requestOptions = {
        method: 'POST',
        headers: {
         'Content-Type': 'application/json' ,
         'Access-Control-Allow-Origin':'*'
        },
        body: JSON.stringify({ username, password })
    };

    return fetch(`${API_URL}/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}



function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: {
             'Content-Type': 'application/json' ,
             'Access-Control-Allow-Origin':'*'
        },
        body: JSON.stringify(user)
    };

    return fetch(`${API_URL}/users`, requestOptions).then(handleResponse);
}


function handleResponse(response) {

    return response.user

}