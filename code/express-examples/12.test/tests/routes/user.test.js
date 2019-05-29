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

describe('User Integration tests', function () {

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

		// Given
		sinon
			.mock(User)
			.expects('find')
			.chain('exec')
			.resolves(expected);

			// When
		it('Should return an array of all users', (done) => {
			agent
			.get('/users')
			.expect(200)
			.end((err,res) => {
			// Then
				expect(res.body).to.eql(expected);
				done();
			});
		});
		
	});
});