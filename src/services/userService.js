import axios from "axios"

export const userService = {
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete
};

async function login(username, password) {

    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
    const filterValue = data.filter((val) => val.username === username && val.email === password);
    const user = filterValue[0];
    //console.log("Filter Data ::: ", filterValue[0])
    return user;
}


function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

async function getAll() {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
    return data;
}

function getById(id) {

}

function register(user) {

}

function update(user) {

}


async function _delete(id) {
    const response = await axios.delete("https://jsonplaceholder.typicode.com/users/" + id);
    return response;
}

async function getUser(userId) {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
    return data;
}
