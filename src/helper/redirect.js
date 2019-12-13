import { history } from "./history"
const Redirect = (path) => {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        history.push(path)
    }
}

export default Redirect;