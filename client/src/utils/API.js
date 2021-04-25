import axios from "axios";

export default {
  login: function (username, password) {
    return axios.post("/api/users/login", { username, password });
  },

  logout: function () {
    return axios.get("/api/users/logout");
  },

  // Gets all users
  getUsers: function () {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: function (id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function (id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveUser: function (userData) {
    return axios.post("/api/users", userData);
  },
  // Update a user
  updateUser: function (id, userData) {
    return axios.put("/api/users/" + id, userData);
  },
};
