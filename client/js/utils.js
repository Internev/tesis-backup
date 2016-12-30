// Created by Duncan on 12.29.2016
import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

const url = 'http://127.0.0.1:2727'

module.exports = {
  fetch(cb) {
    Vue.http.get(url + '/get?secret=allusers')
    .then((res) => {
      cb(res);
    }).then((res) => {
      throw res;
    });
  },
  send(data, cb) {
    Vue.http.post(url + '/post', data)
    .then((res) => {
      cb(res);
    }).then((res) => {
      throw res;
    });
  }
};