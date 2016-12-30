// Created by Duncan on 12.29.2016
import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

const url = 'http://127.0.0.1:1337'

module.exports = {
  // Fetches data from database
  fetch(cb) {
    Vue.http.get(url + '/db')
    .then((res) => {
      cb(res);
    }).then((res) => {
      throw res;
    });
  },
  send(data, cb) {
    Vue.http.post(url + '/db', data)
    .then((res) => {
      cb(res);
    }).then((res) => {
      throw res;
    });
  },
  update(data, cb) {
    Vue.http.put(url + '/db', data)
    .then((res) => {
      cb(res);
    }).then((res) => {
      throw res;
    });
  },
  remove(data, cb) {
    Vue.http.delete(url + '/db', data)
    .then((res) => {
      cb(res);
    }).then((res) => {
      throw res;
    });
  }
};