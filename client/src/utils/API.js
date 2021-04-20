import axios from "axios";

export default {
  login: function (username, password) {
    return axios.post("api/users/login", { username, password });
  },
};

// export default {
//     signUp: function (username, email, password, confirmPassword) {
//         return axios.post("api/users/signUp", { username,email,password,confirmPassword });
//     },
// }