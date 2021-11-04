import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";
import axios from "axios";

Vue.config.productionTip = false;

export const client = axios.create({
  baseURL: "https://petibleapi.lifelinks.nl/api/v1/",
  json: true,
});
export const authclient = axios.create({
  baseURL: "https://petibleauth.lifelinks.nl/",
  json: true,
});

var firebaseConfig = {
  apiKey: "AIzaSyCUCz3zW6Q21Qf4tuKmCL9vYT6AlygCH1M",
  authDomain: "petible-4ec74.firebaseapp.com",
  databaseURL: "https://petible-4ec74.firebaseio.com",
  projectId: "petible-4ec74",
  storageBucket: "petible-4ec74.appspot.com",
  messagingSenderId: "358947158406",
  appId: "1:358947158406:web:70b410d809f11964da1407",
  measurementId: "G-5GXYZSDQP5",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
