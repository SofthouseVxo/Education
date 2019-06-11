// Mongoose and mocking requests
const sinon = require('sinon');

const mongoose = require('mongoose')
mongoose.set('debug', true)
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

beforeEach(() => {
	console.log("beforeEach")
	userMock.restore(); // Unwraps the spy
});

afterEach( () => {
	console.log("afterEach")
	userMock.verify();
});


describe('User Integration tests', () => {

	// Our test data
	const request = {
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
		"name": "My Name",
		"username": "coolz",
		"email": "coolz@gmail.com",
	}

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
			.withArgs(request)
			.chain('exec')
			.resolves(expected);

			// When (someting happens)
			agent
			.post('/users/')
			.send(request)
			.end((err,res) => {
			// Then (something should happen)
				expect(res.status).to.equal(201);
				expect(res.body).to.eql(expected);
				done();
			});
		});
	})

	describe('users.put', ()  => { 
		it('Should be able to create a user', (done) => {
			// Given (preconditions)
			userMock
			.expects('updateOne')
			.withArgs({ _id: "5cecf112a66bc43a217dfda3" }, request)
			.chain('exec')
			.resolves({ n: 1,
				nModified: 0,
				upserted: [ { index: 0, _id: "5cecf112a66bc43a217dfda3" } ],
				ok: 1 });

			// When (someting happens)
			agent
			.put('/users/5cecf112a66bc43a217dfda3')
			.send(request)
			.end((err,res) => {
			// Then (something should happen)
				expect(res.status).to.equal(201);
				done();
			});
		});

		xit('Should be able to update a user', (done) => {
			// Given (preconditions)
			userMock
			.expects('updateOne')
			.withArgs({ _id: "5cecf112a66bc43a217dfda3" }, request)
			.chain('exec')
			.resolves({ n: 1,
				nModified: 1,
				ok: 1 });

			// When (someting happens)
			agent
			.put('/users/5cecf112a66bc43a217dfda3')
			.send(request)
			.end((err,res) => {
			// Then (something should happen)
				expect(res.status).to.equal(200);
				done();
			});
		});
		

		xit('Should return 204 when not updating a user', (done) => {
			// Given (preconditions)
			userMock
			.expects('updateOne')
			.withArgs({ _id: "5cecf112a66bc43a217dfda3" }, request)
			.chain('exec')
			.resolves({ n: 1,
				nModified: 0,
				ok: 1 });

			// When (someting happens)
			agent
			.put('/users/5cecf112a66bc43a217dfda3')
			.send(request)
			.end((err,res) => {
			// Then (something should happen)
				expect(res.status).to.equal(204);
				done();
			});
		});

	});
});
