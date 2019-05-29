/*"use strict";

var should = require('should'),
	request = require('supertest'),
	app = require('../../server.js'),
	mongoose = require('mongoose'),
	Todo = mongoose.model('Todo'),
	agent = request.agent(app);

describe('Todo CRUD integration testing', function () {

	describe('Get all todo', function () {

		before(function (done) {



			var newTodo = { todo: "Todo from hooks" };
			agent
			.post('/api/todos')
			.end(function(){
				done();
			})
		});

		it('Should get status equal success and array of todo', function (done) {
			agent
			.get('/api/todos')
			.expect(200)
			.end(function(err, results){
				results.body.status.should.equal(true);
				done();
			});
		});
		
	});
	
	describe('Post a todo', function () {
		it('Should allow post to post a todo and return _id', function (done) {
			var params = { todo: "Todo fro testing" };
			agent
			.post('/api/todos')
			.send(params)
			.expect(200)
			.end(function(err, results){
				results.body.todo.completed.should.equal(false);
				results.body.todo.should.have.property('_id');
				done();
			});
		});
	});
	
	describe('Delete a todo', function () {
		var id;
		before(function (done) {
			var params = { todo: "Todo from hooks to delete" };
			agent
			.post('/api/todos')
			.send(params)
			.end(function(err, result){
				id = result.body.todo._id;
				done();
			})
		});

		it('Should delete the todo by _id', function (done) {
			agent
			.delete('/api/todos/'+id)
			.end(function(err, result){
				result.body.status.should.equal(true);
				done();
			})
			
		});

	});

	describe('Update a todo', function () {
		var id;
		before(function (done) {
			var newTodo = { todo: "Todo from hooks to update" };
			agent
			.post('/api/todos')
			.send(newTodo)
			.end(function(err, result){
				id = result.body.todo._id;
				done();
			})
		});

		it('Should update the completed status of todo by _id to true', function (done) {
			var params = { completed: true };
			agent
			.put('/api/todos/'+id)
			.send(params)
			.end(function(err, result){
				result.body.status.should.equal(true);
				done();
			})
			
		});
	});

});
*/