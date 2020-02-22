<!doctype html>
<html>
	<head>
		<title>7. Backend APIs - API Design

					<h3>7. Backend APIs</h3>
					<h5>API Design</h5>

---
        

#### What constitutes a good API?</h4>

---


						#### Purpose and Scope
						
* Why do we have APIs?
* What do we mean by API Design?
* Why is API Design important?
* Different API Protocols and Principles?
  * SOAP?
  * RPC
  * GraphQL
  * REST
* How to Design a REST API
* Rest with links - HATEOAS


---
        

#### Why do we Have APIs</h4>
					<p>A good API makes it easier to develop a computer program by providing all the building blocks, which are then put together by the programmer.</p>

					<ul>
						<li>APIs add flexibility between presentation and provided business functionality.</li>
            <li>APIs can be used by more than one client.</li>
            <li>Selling access to APIs have become big business.</li>
            <ul>
              <li>Called API monetization.</li>
              <li>You want others to use your API!</li>
            </ul>
					</ul>

---


						#### Ease of Use - How do we communicate
						
* Be consistent in all services
  * Understand and follow any existing styles and policies!
  * Presentation format: camelCase, spine-case, date time and numbering schemes
  * Use Business Domain language (ex. teacher, lecturer - pick the one used in daily communication in the organisation)
  * Resource Identification, paths should make sense
* Use the entire protocol
  * body, headers, paths, status codes
* Provide Documentation
* API First
  * Design APIs first, then write the code and implement consumers


---


						#### API Design - Design is about consumption

* How do we make APIs easy to use?
* As many opinions as there are People
* Protocols impose design considerations
  * SOAP  (Simple Object Access Protocol)
  * RPC (Remote procedure call) 
  * REST (Representational state transfer)
* Different protocols ask questions in different ways
  * Influences how developers think systems should communicate


---


						#### Protocols - Simple Object Access Protocol (SOAP)

Protocol specification for exchanging structured information in XML format
* Information Exchange
* Still in used by (primarily Microsoft based) web services
* Uses HTTP POST or SMTP (email) protocols

```XML
<?xml version="1.0"?>
<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope/"
  soap:encodingStyle="http://www.w3.org/2003/05/soap-encoding">
  <soap:Header></soap:Header>
  <soap:Body><soap:Fault>
  </soap:Fault>
  </soap:Body>
</soap:Envelope>
```


---


						#### Remote Procedure Call (RPC)

Calling a procedure of function to execute in a different address space (commonly on another computer on a shared network
* Call functions on other machines
* Invented in ~1980
* Making a comeback due to gRPC
  * Open source remote procedure call (RPC) system initially developed at Google
  * Uses binary (non-human readable) protocol buffer (protobuf) format
* Can be translated to and from REST


---


						#### GraphQL

* GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.
* Gives clients the power to ask for exactly what they need and nothing more.
* Makes it easier to evolve APIs over time, and enables powerful developer tools.
* Get many resources in a single request instead of having to load multiple URLs.

```JavaScript
{
  user {
    id
    name
    age
  }
}
```


---



						#### Representational State Transfer (REST)

A software architectural style that defines a set of constraints to be used for creating Web services.
            
* Is more what you call guidelines, than actual rules
* Uses HTTP Protocol
* body in JSON, XML (Depends on Content-type/Accept headers)
* Resources identified using URIs
* Recommendations for status codes exist
            
<a href="https://restfulapi.net/http-status-codes/" target="_blank">HTTP Status codes</a>


---


						#### REST Architectural Constraints

REST defines 6 architectural constraints which make a true RESTful API

* **Uniform interface:** Be consistent across your API.
* **Client–server:** Client and server must be able to evolve separately.
* **Stateless:** No Client state stored between requests.
* **Cacheable:** Provide Caching headers when possible.
  * Used by clients and caching intermediaries.
* **Layered system:** A client cannot ordinarily tell what it’s connected to.
* **Code on demand (optional):** Servers may return code.


---


  <img src="../../media/backend-api-images/backend-api-7/crud.png" alt="crud">

---


						#### Hypermedia as the Engine of Application State (HATEOAS)

Use hypermedia links in the response contents so that the client can dynamically navigate to the appropriate resource.

* Add Links to REST responses, either body or Header.
* Makes it easier to find resources in your api.

```Shell
curl localhost/person:
links: [
   { rel: "self", method: "GET", href: 'http://localhost' },
   { rel: "create", method: "POST", title: 'Create Person', href: 'http://localhost/person' }
]
```


---


						#### Conclusion

REST is popular because it’s flexible. The flexibility means that REST doesn’t mean the same in different organisations.

* Be Consistent with the existing API implementations and principles.
* Understand the REST Architectural constraints.
* Understand the HTTP protocol.
            


---



