// Mongoose and mocking requests
const mongoose = require('mongoose')
const sinon = require('sinon');
require('sinon-mongoose')

// initialize the app and models
const app = require('../../index.js')

// sending requests
const agent = require('supertest').agent(app);
// validating results
const expect = require('chai').expect;

// get the model
const User = mongoose.model('User')


var userMock = sinon.mock(User)
before(() => {
});

afterEach( () => {
	userMock.verify();
	userMock.restore(); // Unwraps the spy
});


describe('User Integration tests', () => {

	// Our test data
	const expected = {
		"address": {
			"geo": {
				"lat": 1,
				"lng": 2
			},
			"street": "My Stree",
			"suite": "My Suite",
			"city": "My City",
			"zipcode": "Zip"
		},
		"_id": "5cecf112a66bc43a217dfda3",
		"name": "My Name",
		"username": "coolz",
		"email": "coolz@gmail.com",
		"__v": 0
	}

	describe('users.get', ()  => {

		it('Should return an array of all users', (done) => {

			// Given (preconditions)
			userMock
			.expects('find')
			.chain('exec')
			.resolves([expected]);

			// When (someting happens)
			agent
			.get('/users')
			.end((err,res) => {
			// Then (something should happen)
				expect(res.status).to.equal(200);
				expect(res.body).to.eql([expected]);
				done();
			});
		});

		it('Should get a user by name', (done) => {

			// Given (preconditions)
			userMock
			.expects('findOne')
			.withArgs({"username": "coolz"})
			.chain('exec')
			.resolves(expected);

			// When (someting happens)
			agent
			.get('/users?username=coolz')
			.end((err,res) => {
			// Then (something should happen)
				expect(res.status).to.equal(200);
				expect(res.body).to.eql(expected);
				done();
			});
		});
	});

	describe('users.post', ()  => {
		it('Should be able to create a user', (done) => {
			// Given (preconditions)
			userMock
			.expects('create')
			.chain('exec')
			.resolves(expected);

			// When (someting happens)
			agent
			.post('/users/')
			.send(expected)
			.end((err,res) => {
			// Then (something should happen)
				expect(res.status).to.equal(201);
				expect(res.body).to.eql(expected);
				done();
			});
		});
	})
});