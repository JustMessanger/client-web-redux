import { config } from './../config/config.json';

export function loginApi(data) {
    return fetch(`${config.serverURL}login`, {
        method: 'post',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            login: data.login,
            password: data.password,
        }),
    })
        .then(response => response.json());
}
