const express = require('express');
const path = require('path');
const Nightmare = require('nightmare');
const expect = require('chai').expect;
const axios = require('axios');
const chai = require('chai');
const chaiHttp = require('chai-http');


let nightmare;
chai.use(chaiHttp);
const app = express();
app.use(express.static(path.join(__dirname, '/../public')));

app.listen(8888);

const url = 'http://localhost:8888';


describe('express', () => {
  beforeEach(() => {
    nightmare = new Nightmare();
  });

  it('returns the correct status code', () => axios.get(url)
    .then(response => expect(response.status === 200)));

  it("should have an <h1> thats says 'Welcome to Shootsta", (done) => {
    nightmare
      .goto(url)
      .evaluate(() => document.querySelecot('h1 #title').innerText)
      .then(text => expect(text).to.equal('Welcome to jh'))
    done()
  })
});
