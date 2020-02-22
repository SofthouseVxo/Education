<!doctype html>
<html>
	<head>
		<title>2.HTML & CSS - Basic Network & the web</title>
		<meta charset="utf-8">
		<meta name="robots" content="noindex, nofollow">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

		<link rel="stylesheet" href="../../libs/reveal/css/reset.css">
		<link rel="stylesheet" href="../../libs/reveal/css/reveal.css">
		<link rel="stylesheet" href="../../libs/reveal/css/theme/softhouse.css">

		<link rel="stylesheet" href="../../libs/bootstrap/css/bootstrap.min.css">
		<link rel="stylesheet" href="../../style.css">

		<script src="../../libs/jquery/jquery.min.js"></script>
		<script src="../../libs/bootstrap/js/bootstrap.min.js"></script>

		
		<!-- Theme used for syntax highlighting of code -->
		<link rel="stylesheet" href="../../libs/reveal/lib/css/monokai.css">
	</head>
	<body>
		<nav class="navbar navbar-expand-lg  navbar-dark bg-dark fixed-top shadow-lg">
			<a class="navbar-brand" href="https://www.softhouse.se">
				<?xml version="1.0" encoding="utf-8"?>
				<!-- Generator: Adobe Illustrator 22.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
				<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					viewBox="0 0 928 179" style="enable-background:new 0 0 928 179;" xml:space="preserve">
				<style type="text/css">
					.st0{fill:#FFFFFF;}
				</style>
				<g>
					<path class="st0" d="M795,121.4c-9.5,4.3-6.3,24.8-15.8,31.6c-5.3,3.8-31,4-34.3-3.8c-4.7-11.1,30.2-28.8,23.5-38.9
						c-8.6-12.9-58.5-8.8-61.6-18c-1-3.1,7-17.5,17.7-18.8c11.8-1.9,31.6,19.9,48.2,19.4c32.2-1.1,34.9-51.8,58.5-58
						c20.7-5.4,37.6-1.6,38.8,7.3c2.2,17.3-59.7,45.1-55.8,59.8c4.9,18.6,74.6,26.4,73.8,41.5c-0.4,7.2-13.7,12.5-25.1,9.6
						C840.6,147.4,818.1,111,795,121.4 M866.5,166.7c20.8,6.4,53.4,1.7,54.2-13.4c1.5-30.6-93.3-36.1-99.1-53
						c-3.8-11.2,85.4-49.2,83.1-73.3c-1.4-15.1-33.7-18-62.2-12.1C787.6,26,807.3,84,772.8,86.7c-14.9,1.2-32.8-26.1-54.2-26.1
						c-13.9,0-33,25.6-30.3,33.2c5.8,16.9,63.6,6.4,73.2,20.1c5.8,8.2-36,26.9-27.8,45.2c4.6,10.2,40.9,14.6,52.1,5
						c9.3-7.9,4.9-34.5,12.1-37.7C814.7,119,839.5,158.4,866.5,166.7"/>
					<path class="st0" d="M62.8,101.3H21.3v9.8h30.5c9.3,0,12.2,2.2,12.2,11v6.4c0,8.7-2.9,11-12.2,11H11v-8.7h42.7l0-10.7H23.3
						c-9.2,0-12.3-2.2-12.3-11v-5.1c0-8.8,3.1-11,12.3-11h39.4V101.3z"/>
					<path class="st0" d="M571.8,101.3h-41.4v9.8h30.5c9.3,0,12.2,2.2,12.2,11v6.4c0,8.7-2.9,11-12.2,11H520v-8.7h42.7v-10.7h-30.4
						c-9.2,0-12.3-2.2-12.3-11v-5.1c0-8.8,3.1-11,12.3-11h39.4V101.3z"/>
					<path class="st0" d="M81.5,103.9v24.5c0,8.8,2.9,11,12.2,11H130c9.2,0,12.2-2.2,12.2-11v-24.5c0-8.9-3-11-12.2-11H93.7
						C84.5,92.9,81.5,95,81.5,103.9 M93,101.5h37.9v29H93V101.5z"/>
				</g>
				<polygon class="st0" points="159.8,92.9 209.3,92.9 209.3,101.3 171.3,101.3 171.3,113.4 197.2,113.4 197.2,122.1 171.3,122.1
					171.3,139.5 159.8,139.5 "/>
				<polygon class="st0" points="256.5,139.5 245.1,139.5 245.1,101.3 222.6,101.3 222.6,92.9 279.3,92.9 279.3,101.3 256.5,101.3 "/>
				<polygon class="st0" points="292.5,92.9 304,92.9 304,110.6 339.7,110.6 339.7,92.9 351.2,92.9 351.2,139.5 339.7,139.5
					339.7,119.9 304,119.9 304,139.5 292.5,139.5 "/>
				<g>
					<path class="st0" d="M368.6,103.9v24.5c0,8.8,2.9,11,12.2,11h36.3c9.2,0,12.2-2.2,12.2-11v-24.5c0-8.9-3-11-12.2-11h-36.3
						C371.6,92.9,368.6,95,368.6,103.9 M380.1,101.5h37.8v29h-37.8V101.5z"/>
					<path class="st0" d="M458.3,130.8H491V92.9h11.5v35.5c0,8.7-3,11-12.3,11h-31.1c-9.3,0-12.2-2.3-12.2-11V92.9h11.4V130.8z"/>
				</g>
				<polygon class="st0" points="590.5,92.9 640.9,92.9 640.9,101.2 602.1,101.2 602.1,111.3 627.1,111.3 627.1,119.4 602.1,119.4
					602.1,130.8 641.5,130.8 641.5,139.5 590.5,139.5 "/>
				</svg>
			</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav m-auto">
					<script src="../../navigation.js"></script>
				</ul>
			</div>
		</nav>

		<div class="reveal">
			<div class="slides">


					<h3>2.HTML & CSS</h3>
					<h5>Basic Network & the web</h3>

---


#### What is a computer network?</h4>
					<ul>
						<li>A computer network is basically computers communicating (sending text, files).</li>
						<li>The most basic computer network is two desktop computers connected via cable.</li>
					</ul>
					<img style="width: 600px;" src="../../media/html-css-images/html-css-2/basic2.png" alt="client server communication">

---


#### Protocols</h4>
						<ul>
							<li>A Protocol is a standard.</li>
							<li>A set of rules or guidelines for how computers communicate (sending data).</li>
							<li>Examples are: TCP/IP, HTTP, HTTPS, FTP.</li>
						</ul>
					<img style="width: 600px;" src="../../media/html-css-images/html-css-2/basic.png" alt="client server communication">

---


#### Local network</h4>
					<img style="width: 600px;" src="../../media/html-css-images/html-css-2/local.png" alt="client server communication">

---


#### What is the internet?</h4>
					<ul>
						<li>The internet is a global system of interconnected computer networks.</li>
						<li>It uses the Internet protocol suite (TCP/IP).</li>
					</ul>
					<img style="width: 600px;" src="../../media/html-css-images/html-css-2/internet.png" alt="client server communication">

---


#### Web servers</h4>
					<ul>
						<li>A web server is a computer that's directly connected to the internet.</li>
						<li>It supports data interchange with other devices connected to the web.</li>
						<li>A HTTP server is piece of software that understands URLs (web addresses) and HTTP (the protocol your browser uses to view webpages).</li>
						<li>Web servers store software and a website's component files like: <b>HTML documents, Images, CSS stylesheets, JavaScript files</b></li>
						<li>When you ask your browser for a web page, the request is sent across the internet to a web server.</li>
					</ul>

---


#### Clients</h4>
					<ul>
						<li>A client is a piece of computer hardware or software that accesses a service on a server.</li>
						<li>It could be on a Desktop computer, tablet, phone etc.</li>
					</ul>

					<img style="width: 600px;"  src="../../media/html-css-images/html-css-2/client.png" alt="client server communication">

---


#### IP adresses</h4>
					<img style="width: 600px;" src="../../media/html-css-images/html-css-2/ip.png" alt="client server communication">

---


#### TCP/IP</h4>
					<ul>
						<li>The TCP/IP protocols define the process for which of the following:
							<ul>
								<li>Splitting the data into packets.</li>
								<li>Sending them where they need to go.</li>
								<li>putting the packets back together again at the destination.</li>
							</ul>
						</li>

						<li><b>TCP - The Transmission Control Protocol</b> - splits data up into packets and puts them back together at their destination.</li>
						<li><b>IP - The Internet Protocol</b> - tells the packets where to go and where they should return to.</li>
					</ul>

---


#### Domain Name System DNS</h4>
					<img style="width: 600px;" src="../../media/html-css-images/html-css-2/dns.png" alt="client server communication">

---


#### DNS</h4>
					<ul>
						<li>DNS is a protocol within the set of standards for how computers exchange data on the Internet and on many private networks.</li>
						<li>Its basic job is to turn a user-friendly domain name like <b>"www.softhouse.com"</b> into an Internet Protocol (IP) address like <b>70.42.251.42</b> that computers use to identify each other on the network.</li>
						<li>It's like your computer's GPS for the Internet.</li>
					</ul>

---


#### Routers</h4>
					<p>$ traceroute www.google.se</p>
					<img style="width: 600px;" src="../../media/html-css-images/html-css-2/routers.png" alt="client server communication">

---


#### Routers</h4>
					<ul>
						<li>Routers are networking devices.</li>
						<li>They forward data packets between computer networks.</li>
						<li>Routers directs the traffic.</li>
						<li>Data such as web pages or emails(in the form of data packets) are forwarded from router to router through the internet until it reaches its destination.</li>
					</ul>

---


#### WWW (World Wide Web)</h4>
					<ul>
						<li>The WWW is <b>NOT</b> the internet</li>
						<li><a href="https://www.youtube.com/watch?v=J8hzJxb0rpc">Twila Camp Explains</a></li>
					</ul>

---


#### URL (internetaddress)</h4>
					<ul>
						<li>URL stands for Uniform Resource Locator.</li>
						<li>A URL is a string that identifies a unique resource on the web</li>
						<li>Every web page has its own URL.</li>
						<li>A URL can also be used to locate a file on the computer</li>
					</ul>
					<img style="width: 700px;" src="../../media/html-css-images/html-css-2/url.png" alt="client server communication">

---


#### Running a site locally</h4>
					<ul>
						<li>Will display the local file path (the path to the file on your computer</li>
					</ul>
					<img src="../../media/html-css-images/html-css-2/localFilepath.png" alt="local filepath">

---


#### Webpages, websites definitions</h4>
					<ul>
						<li>Webbsida (webpage) är en sida på en webbplats <a href="https://www.blocket.se/bostad/saljes">www.blocket.se/bostad/saljes</a></li>
						<li>Webbplats (website) är allt innehåll på exempelvis <a href="http://www.blocket.se">www.blocket.se</a></li>
						<li>Hemsida (homepage) är den första sida du kommer till när du kommer till <a href="http://www.blocket.se">www.blocket.se</a></li>
					</ul>

---


#### Web Browsers</h4>
					<ul>
						<li>Web browsers are used to access websites.</li>
						<li>They interpret and display the documents accessed from servers.</li>
						<li>Examples of browsers are Chrome, Firefox, Safari, Opera, Internet Explorer, Edge, IOS Safari, Android Browser.</li>
						<li>Updates for these are released regularly, but it is up to the user to update theirs.</li>
						<li><a href="https://caniuse.com/#search=css">caniuse.com</a> is a site where you can check which functionality is implemented and working on each browser.</li>
					</ul>

---


#### Browser devtools</h4>
					<ul>
						<li>All browsers have tools and functionality to help when developing websites.</li>
						<li>This is called developer tools (devtools).</li>
						<li>The functionality in browsers are similiar but different.</li>
					</ul>

---

