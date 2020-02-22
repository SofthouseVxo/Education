<!doctype html>
<html>
	<head>
		<title>8. Backend APIs - Microservices

					<h3>8. Backend APIs</h3>
					<h5>Microservices</h5>

---


#### A Brief History of APIs and Service composition</h4>

---


						#### Purpose and Scope
						
						Why are we listening to this, and what is the takeaway:
						* It’s required by the curriculum
						* Understand that software evolves over time and due to business needs
						* Understand that technology is created to solve specific problems
						* Understand what kind of problems current technologies address
						
						* Keep Calm and Carry on! One foot in front of the other!
						


---


#### Static HTML</h4>

					<p>Simple request response</p>
					<ul>
						<li>Just GET</li>
						<li>“Hello World”</li>
						<li>Can still run javascript</li>
					</ul>

						<img style="position: absolute; top: 50px; right: 50px;" src="/new/media/backend-api-images/backend-api-8/one.png" alt="history">

---


#### Dynamic HTML with Database</h4>

					<p>HTML contents rendered data in database</p>
					<ul>
						<li>HTML rendered based on database contents</li>
						<li>Lack of separation made a mess:</li>
						<ul>
							<li>All code runs in the browser</li>
							<li>Code could only be obfuscated, no secrets!</li>
							<li>No separation of Business logic and view</li>
							<li>SQL injection</li>
						</ul>
					</ul>	

					<img style="position: absolute; top: 50px; right: 50px;" src="/new/media/backend-api-images/backend-api-8/two.png" alt="history">

---


#### Separation of Concerns</h4>

					<p>Model View Controller</p>
					<ul>
						<li>Simple pattern separating concerns:</li>
						<li>Model:</li>
						<ul>
							<li>Responsible for managing the data of the application.</li> 
							<li>It receives user input from the controller.</li>
						</ul>
						<li>View:</li>
						<ul>
							<li>Presentation of the model in a particular format.</li>
						</ul>						
						<li>Controller:</li>
						<ul>
							<li>Responds to the user input</li> 
							<li>Performs interactions on the data model objects.</li>
						</ul>
					</ul>

					<img style="position: absolute; top: 50px; right: 30px;" src="/new/media/backend-api-images/backend-api-8/three.png" alt="history">

---



#### Application programming interface (API)</h4>

					<p>The classic frontend backend solution.</p>
					<ul>
						<li>More Separation of concerns</li>
						<ul>
							<li>Backend focuses on data</li>
							<li>Frontend on presentation</li>
							<li>Client (browser) handles  both</li>
						</ul>
						<li>Replace the view with ex. REST</li>
						<ul>
							<li>Representational State Transfer (REST):</li>
							<li>HTTP protocol same as frontend</li>
							<li>Body in JSON, XML or other</li>
							<li>HTTP methods to view and change data</li>
							<li>Resources identified with URIs</li>
						</ul>					
					</ul>

---


#### Application programming interface (API)</h4>

					<ul>
						<li>APIs can have multiple consumers</li>
						<ul>
							<li>Admin View</li>
							<li>User View</li>
							<li>System-to-system communication</li>
						</ul>				
					</ul>

					<img style="position: absolute; top: 50px; right: 30px;" src="/new/media/backend-api-images/backend-api-8/four.png" alt="history">

---




#### It’s not Just About Users</h4>

					<p>How do we spread responsibility across a large monolithic (single piece) application?</p>

					<ul>
						<li>A lot of time wasted on synchronization</li>
						<ul>
							<li>Planning takes forever</li>
							<li>Which team has mandate to do what</li>
							<li>Functional responsibility (database, protocol) etc does not map to user features.</li>
						</ul>				
					</ul>

---


#### It’s not Just About Users</h4>

					<ul>
						<li>Libraries for Commonly used Code</li>
						<ul>
							<li>Same lib used in different ways (inflexible)</li>
							<li>Creates coupling between unrelated features</li>
						</ul>
						<li>Conway’s Law</li>
						<ul>
							<li>Need to communicate to write software</li>
							<li>Communication boundaries between teams</li>
							<li>Software architecture should reflect Organizational Structure</li>
						</ul>	
					</ul>

---


#### It’s not Just About Users</h4>
					
					<img src="/new/media/backend-api-images/backend-api-8/five.png" alt="history">

---


#### Service Oriented Architecture (SOA)</h4>

					<p>Many small services, one Team Per Service</p>
					<ul>
						<li>Small focused services</li>
						<li>Team responsible for entire service</li>
						<ul>
							<li>Frontend and Backend (API)</li>
							<li>Provides support to other teams</li>
							<li>Also responsible for deployment and operations of the service (DevOps)</li>
						</ul>
						<li>Great for Large organisations</li>
						<ul>
							<li>Pioneered at Amazon</li>
							<li>1 (American sized) pizza team</li>
						</ul>
						<li>Great for Large organisations</li>
						<ul>
							<li>You’re not amazon - Can you afford team per service?</li>
						</ul>	
					</ul>

---



#### Service Oriented Architecture (SOA)</h4>

					<img src="/new/media/backend-api-images/backend-api-8/six.png" alt="history">

---


#### Microservices and Service Discovery</h4>

					<p>Provide business needs (bounded domains) using a collection of small services with a clear responsibility.</p>
					<ul>
						<li>API gateway or Load Balancer in front</li>
						<ul>
							<li>Presents a single solution hiding services</li>
							<li>Host or Path mapping to services (/email)</li>
							<li>May provides authentication and authorization to services</li>
						</ul>
						<li>Enables horizontal scaling</li>
						<ul>
							<li>Add additional service instances</li>
							<li>Add additional compute nodes</li>
							<li>Services register with service discovery so other services can find them</li>
						</ul>
						<li>Looks like “a single” API from the gateway</li>
					</ul>

---



#### Microservices and Service Discovery</h4>

					<img src="/new/media/backend-api-images/backend-api-8/six.png" alt="history">

---

				

						#### Purpose and Scope
						
Software is about managing complexity:
* All software starts out simple
* Software always grows to handle more complexity
* As software grows, complexity needs to be broken into manageable sizes
* “Technical Debt” is when technology isn’t helping us manage complexity
* Business, users, developers and operations all have needs to address

* Standing on the shoulder of giants, it may feel like a lot to take in - but
* You don’t need to understand all at once, just one service at a time...


---
				

