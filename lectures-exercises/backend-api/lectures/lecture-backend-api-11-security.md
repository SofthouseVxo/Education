### 11. Backend APIs
##### Web API Security

---

#### Purpose and Scope
	
* Understand the Concepts involved
* The value of security
* Best practice recommendations
* //TODO: supply chain security NPM
* //TODO: Paswordless login

---

#### Concepts

---

#### Authentication vs. Authorization

---

#### Authentication
Proof of whom you are:

* Provide credentials</li>
  * Password + username/email</li>
  * API key</li>
	
* Social media login</li>

<img style="width: 400px; margin-left: 50px;" src="/media/backend-api-images/backend-api-11/front.png" alt="drivers license">
---

#### Authorization
What are you allowed to do:

* Drive a car and a moped class 2.</li>
* Roles and Access to a system.</li>


<img style="width: 400px; margin-left: 50px;" src="/media/backend-api-images/backend-api-11/back.png" alt="drivers license">
---

#### Hashing vs. Encryption
---

#### Hashing
	
Turns a string into a fixed size value that is distributed so a small change in the input doesn’t correlate with the output.
* Destructive, cannot be reversed
* Passwords are compared by comparing hashes never the clear text password
* Rainbow Table is a list of calculated hashes for a certain algorithm
* Salting means adding random value to the hashing function so rainbow tables won’t match


---

#### Encryption
	
The process of encoding a message or information in such a way that only authorized parties can access it.

* Can be reversed (decrypted)
* Symmetrical key means same key encrypts and decrypts.
* Asymmetrical or Public key means there are two keys:
  * Private key decrypts public key encrypted.
  * Public key decrypts private key encrypted.
    * Can “sign” by encrypting with private key and recipient decrypts with your public key.

---

#### The Value of Security
---

#### The Value of security
	
It’s only an added expense until there’s a breach
	
* A Breach has a cost
  * badwill, share prices and customer churn
  * data loss or leak
  * system availability
* Risk of a breach
  * Oportunity
  * Threat identitification
  * Value to an attacker
* Risk * Cost is a simple evaluation
	
---

#### Best Practices for Web APIs
---


#### Keep it simple
	
Every time you make the solution more complex “unnecessarily”, you are also likely to leave a hole.
* Don’t write unnecessary code
* Don’t add dependencies you don’t actually need
			

---

#### Always Use HTTPS
	
HTTPS is HTTP with the communication protocol is encrypted using Transport Layer Security (TLS),
* Encrypted communication, can’t be intercepted
* Certificate Validation
  * Server authentication (hostname validation)
  * Client authentication (certificate as credentials)
		

---

#### Use Password Hash

Never ever, ever store clear text passwords.
* People tend to use the same password in multiple places.
* Hash and salt passwords, then compare.

---

#### Never expose information on URLs

URL are stored web server logs, making them a credentials library.
* No credentials as query or path parameters.
* Headers is the way to go for api keys.
	

---

#### Consider OAuth

Grant websites or applications access to their information on other websites but without giving them the passwords.

* Social media login (facebook, google, microsoft)
* Provides Authentication “claims” as JSON web tokens (JWT)
* No locally stored passwords
* No lost password support
* Identity Provider (IDP)
  * 3rd party authenticates the user and provides the identity
  * OpenID
  * SAML

---

#### Oauth Example

Three legged login

* Client (browser) authenticates towards oauth provider
* Server then validates auth code and provides access token
* Happens every time you log in to or authenticate using facebook/google
	
---

#### Oauth Example

<img style="width: 600px" src="/media/backend-api-images/backend-api-11/oauth.png" alt="oauth">
---

#### Consider Adding Timestamp in Request

A replay attack is when a data transmission is maliciously or fraudulently repeated or delayed.

* Sending someone else’s requests as your own.
* May get a valid session back!.
* Timestamp validation prevents replaying old requests.

---

#### Input Parameter Validation

Validation is the process of ensuring data have undergone data cleansing to ensure they have data quality, that is, that they are both correct and useful.
* Prevents possible harmful requests from being further processed
* Can also provide useful error information to users


---

#### Conclusion

* Authentication and Authorization
* Encryption and Hashing
* Security is about protecting business value