### 12. Backend APIs
#### Introduction to Cloud Services

---

#### Purpose and Scope

* What is public cloud
* Comparing Cloud Providers
* What is Managed Services
* Maybe a bit of docker and kubernetes



---

#### What is “Public Cloud”
It’s globally distributed compute connected via networks.
<img src="/new-structure/media/backend-api-images/backend-api-12/public.png" alt="public cloud">

---

#### Public Cloud Providers

A comparison between the biggest providers

* All providers offer similar services
  * Each service built based on the needs of the company that built it
* Amazon Web Services (AWS)
  * Amazon: A marketplace of managed and 3rd party services
* Azure
  * Microsoft: Provides a great integrated experience for developing microsoft services
* Google Cloud Platform (GCP)
  * Google: Data processing and machine learning at a global scale
* IBM Cloud
  * Enterprise cloud service that drives buying professional services (consultants) from IBM


---


#### Public Cloud vs. Private Cloud

Everything is a cloud nowadays...
* Private cloud isn’t cloud at all
  * Rebranding of services running on-premise
* Public cloud is shared between many users
* Geographically distributed
* Provides Infrastructure, Platforms and Software as services


---

#### Managed Services
Services are available on demand using APIs
<img src="/new-structure/media/backend-api-images/backend-api-12/services.png" alt="services">

---

#### On Premises

Run your own datacenter
* Servers run on the premises (place) of the owners
* You purchase servers, cooling electricity, hire personnel
* Capacity planning (how much will i need)
* Handle life cycle of hardware, plan for Mean Time to Failure (MTTF)


---

#### Infrastructure as a Service (IAAS)

Run virtual machines.
* Request a machine instance using APIs
* Runs on one or more machines provided by someone else
* Behaves like a single physical server
* Install operating system, applications, patching etc


---
				

#### Platform as a Service (PAAS)

Specialized hosting to do one thing only.

* You focus on writing your application
* Runs software without exposing underlying hardware
* Commonly has additional APIs for providing common features
* Limitations on languages used and access to machine resources
* Examples
  * Heroku: Builds and deploys software, add plugins
  * Google App engine: Deploy autoscaling node.js, python, go applications
  * Azure We Apps


---

#### Software as a Service (SAAS)

A Service you use, or provide.

* Like Gmail, google Maps, Dropbox or office 365
* Basically a hosted web service providing APIs and/or Frontends
* You manage nothing, just use the service
* Generally use API keys to get access


---

#### Docker

Containers

* Define how to build and run your software, hiding what’s inside
* Can run any (linux based) technology stack
* Provides a recipe, Dockerfile, how to build and run the application
* Standardized way to build and run software
* Portable images between local machines and cloud
* Just provide resources, CPU, RAM, disk etc
* Run and expose service port to access the service
```Shell
docker run -d -p 27017:27017 mongo
```


---

#### Kubernetes

Container Orchestration Platform

* Runs containers across multiple machines
* Everything controlled through a single API
* Provides CPU, RAM, disk etc to containers
* Hides the server nodes, can add machines when more resources are needed
* Configure how container services interact to provide your solution
* Single definition of your entire service



---

#### Conclusion

* Public Cloud services is just globally distributed compute and networking
* No single cloud provider is the same
* Pick the one, or ones that provide your needs the best
* The more managed the service, the less you do, and the more you pay
* IAAS, PAAS and SAAS is about how managed a service is
* Cloud services offer a premium service that can be too pricey for your needs
* Containers is a standardisation of how to run and build software
* Kubernetes orchestrate container services together into a solution


---

#### 

Windows: choco install gcloudsdk (admin cmd)
MacOS: brew cask install google-cloud-sdk
Linux: don’t use the package manager: https://cloud.google.com/sdk/install


---

#### Cloud Code-along
* Tools: Gcloud SDK (gcloud CLI)
* Installation:
  * MacOS: ```$ brew cask install google-cloud-sdk```
  * Windows: ```$ choco install gcloudsdk (admin cmd)```
  * Linux: Don’t use the package manager: [https://cloud.google.com/sdk/install](https://cloud.google.com/sdk/install)

Create an account at:
* [https://console.cloud.google.com](https://console.cloud.google.com)

ACTIVATE FREE TRIAL


---	

#### <a href="https://cloud.google.com/appengine/docs/standard/nodejs/quickstart" target="blank">https://cloud.google.com/appengine/docs/standard/nodejs/quickstart</a>