// <!-- Created by Duncan on 12.28.2016 -->
import Vue from 'vue';
import Utils from '../../client/js/utils.js';

//!!!! These tests must be run without hot reload running!!!!

describe('Utils.send should', () => {

  let data = {
    userName: 'Test',
    originalUserName: 'Test123!',
    email: 'test@me.com',
    password: 'fish',
    secret: 'newuser'
  }
  let sendStat;

  beforeEach((done) => {
    Utils.send(JSON.stringify(data), (res) => {
      sendStat = res.status;
      done();
    });
  });

  it('be defined', () => {
    expect(Utils.send).toBeDefined();
  });

  it('send should send data, with response 202', () => {
    expect(sendStat).toBe(202);
  });
});

describe('Utils.send should', () => {

  let fetchStat;

  beforeEach((done) => {
    Utils.fetch((res) => {
      fetchStat = res.status;
      done();
    });
  });

  it('be defined', () => {
    expect(Utils.fetch).toBeDefined();
  });

  it('fetch should reveive data, with response 202', () => {
    expect(fetchStat).toBe(202);
  });
});
