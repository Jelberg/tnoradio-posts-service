import assert from 'assert';
import request from 'supertest';
import app from '../app.js';
import  response  from 'express';



/**
 * Groups tests
 *//*
describe("Express app", () => {
    it("Handles GET request /api/greeting", done => {
        request(app)
        .get('/api/greeting')
        .end((err, response) => {
            assert(response.body.greeting === 'Hi Users');
            done();
        });        
    });
});*/