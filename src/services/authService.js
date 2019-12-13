import axios from "axios"

export const authService = async () => {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
    return data;
}

