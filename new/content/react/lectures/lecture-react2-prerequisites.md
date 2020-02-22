<!doctype html>
<html>
	<head>
		<title>1. React Introduction

					<h3>2. React</h3>
					<h5>Prerequisites</h5>

---


	#### Single Page & Multi page applications</h4>
	---
	
				 <section>
#### Multi page website/application</h4>
					<ul>
						<li>Consists of multiple html pages <a href="https://www.blocket.se">https://www.blocket.se</a></li>
						<li>Page reloads when page change (scroll example)</li>
						<li>For example when a html form is submitted to server. Then a new page is returned from the server and loaded in the browser.</li>
					</ul>

---
	

#### Cons - multi page applications</h4>
					<ul>
						<li>Updating a website can be more timeconsuming, need to update all sites</li>
						<li>If there is a lot of content on each page, this will result in long loading times</li>
						<li>It is harder to adapt to mobile, since mobiles have less screen sizes, then there is more scrolling and reloading a page when scrolled to the bottom will result in the user being thrown to the top again.</li>
					</ul>

---
	

#### Single Page website/Application (SPA)</h4>
					<ul>
						<li>Consists of a single html page (Gmail, Netflix)</li>
						<li>It only gets loaded once, no page loading</li>
						<li>Usually no need to render pages on server side</li>
						<li>It is easier to debug</li>
						<li>Cache local storage effectively. Works offline with correct setup</li>
					</ul>

---
	

#### Cons - Single page applications</h4>
					<ul>
						<li>SEO optimization is tricky (indexing pages)</li>
						<li>Can be slow to download due to loading frameworks and libs all at once.</li>
						<li>Requires Javascript to be enabled.</li>
						<li>Can be less secure (Cross site scripting) if implemented carelessly.</li>
					</ul>

---
	

#### Libraries & Frameworks</h4>

---
	

#### What is a library?</h4>
					<ul>
						<li>Library of Pre-written JavaScript</li>
						<li>Purpose is to help out with specific areas or tasks</li>
						<li>Results in easier development</li>
						<li>Examples -> Moment.js, Redux, Jquery</li>
					</ul>

---
	

					<p>"Jquery - It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers." - Jquery Documentation</p>

---
	

#### What is a framework?</h4>
					<ul>
						<li>Consistent starting point & Organizational structure (important for large applications)</li>
						<li>Web frameworks -> standard way to build and deploy web applications</li>
						<li>Frameworks often use different libraries</li>
						<li>Web frameworks -> database access, templating, session management and code reuse.</li>
					</ul>

---
	

#### Why use a Framework?</h4>
					<ul>
						<li>Time</li>
						<li>Reusing code</li>
						<li>Consistent structure</li>
						<li>Community</li>
						<li>Maintenance</li>
					</ul>

---
	

#### Framework vs library metaphor</h4>
					<p>"A <b>library</b> is like going to Ikea. You already have a home, but you need a bit of help with furniture. You don’t feel like making your own table from scratch. Ikea allows you to pick and choose different things to go in your home. You are in control." - <a href="https://www.freecodecamp.org/news/the-difference-between-a-framework-and-a-library-bd133054023f/">Freecodecamp, 2019</a></p>
					<p>"A <b>framework</b>, on the other hand, is like building a model home. You have a set of blueprints and a few limited choices when it comes to architecture and design. Ultimately, the contractor and blueprint are in control. And they will let you know when and where you can provide your input." - <a href="https://www.freecodecamp.org/news/the-difference-between-a-framework-and-a-library-bd133054023f/">Freecodecamp, 2019</a></p>

---
	

#### Angular vs React vs Vue</h4>
					<ul>
						<li>Angular & Vue are frameworks</li>
						<li>React is a library, third party modules -> framework</li>
						<li>Solves the same problems, a bit different</li>
						<li><a href="https://insights.stackoverflow.com/survey/2019">Usage 2019</a></li>
					</ul>

---
	

#### Which one to choose?</h4>
					<ul>
						<li>If you start working at a company you will probably not be the one deciding when you start.</li>
						<li>Learn one and others will be easier to master.</li>
						<li>It is very complex and expensive to port a platform to a different framework. (that's why a lot of companies use older frameworks and versions).</li>
						<li>Different parts of an application can be using different tools.</li>
					</ul>

---
	

#### Node.js & Npm</h4>

---
	

					<h3>Node.js</h3>
					<ul>
						<ol><a href="https://nodejs.org/en/">Documentation</a></ol>
					</ul>

---
	

				 <h3>Node.js</h3>
				 <ul>
					 <li>Runs Javascript on your local machine and on server</li>
					 <li>Uses v8 engine</li>
					 <li>Node compiles JavaScript code into native code</li>
				 </ul>
			 </section>
	
			 <section>
				 <h3>Test it</h3>
				 <ul>
					 <ol>$ node -v</ol>
					 <ol>$ npm -v</ol>
					 <ol>$ npm install npm@latest -g</ol>
					 <ol>Open in terminal and test</ol>
				 </ul>
			 </section>
	

					<h3>Npm</h3>
#### Node Package Manager</h4>
					<h5><a href="https://www.npmjs.com/">Web page</a></h5>

---
	

					<p>"NPM is a package manager for Node.js packages, or modules if you like. www.npmjs.com hosts thousands of free packages to download and use.The NPM program is installed on your computer when you install Node.js" - <a href="https://www.w3schools.com/nodejs/nodejs_npm.asp">W3Schools</a></p>

---
	

					<h3>Npm</h3>
					<ul>
						<li>Takes care of your node modules</li>
						<li>Handles which modules are dependent on which</li>
						<li>Imports modules in correct order</li>
					</ul>

---
	

					<h3>Basic Npm commands</h3>
						<ul>
							<li>npm init</li>
							<li>npm install</li>
							<li>npm install --save -dev</li>
							<li>npm -v</li>
						</ul>

---
	

					<h3>Semantic versioning</h3>
					<img src="/new/media/general-images/general-3/semantic.png" alt="semantic versioning">

---
	

					<ul>
						<li>package.json - is a JSON file containing which modules that are needed in your project along with other information
						<li>/node_modules - folder where your modules are stored</li>
					</ul>

---
	

					<h3>But why not CDN?</h3>
					<ul>
						<li>What if the code fetched from the link changes?</li>
						<li>Easier to see the code when using Npm</li>
						<li>Using a CDN means another request to the server, you might have multiple.</li>
					</ul>

---
	

					<h3>npm</h3>
					<ul>
						<li>You can create your own npm package and host on npm.js</li>
						<li>Download other packages</li>
						<li>Every package/module gets its own npm page, with a read me and GitHub link, + additional information about the package moment.js</li>
					</ul>

---
	

					<h3>npm - tips</h3>
					<ul>
						<li>Do not use modules for everything</li>
						<li><a href="https://www.npmjs.com/package/is-odd">is-odd</a>, <a href="https://www.npmjs.com/package/is-even">is-even</a></li>
						<li>Most modules have dependencies, and need to be maintained</li>
					</ul>

---
	

					<h2>Webpack</h2>

---
	

					<h3>Webpack</h3>
					<ul>
						<li>Is a module bundler</li>
						<li>Takes all your javascript modules and builds the project.</li>
						<li>Import - Export</li>
						<li><a href="https://webpack.js.org/">Documentation</a></li>
					</ul>

---


#### create-react-app</h4>

---


#### create-react-app</h4>
          <ul>
            <li>Used to Create React apps with no build configuration.</li>
            <li>You don't need to install or configure tolis like Webpack or Babel. They are preconfigured and hidden so that you can focus on the code.</li>
            <li><a href="https://www.npmjs.com/package/react-scripts">react-scripts</a></li>
            <li>React-scripts includes scripts and configuration used by Create-react-app.</li>
            <li><a href="https://facebook.github.io/create-react-app/">create-react-app Documentation</a></li>
          </ul>

---


#### create-react-app scripts</h4>
          <ul>
            <li>$ npm start</li>
            <li>$ npm run test</li>
            <li>$ npm run build</li>
            <li>$ npm run eject</li>
          </ul>

---
				

#### npx</h4>
					<ul>
						<li>NPM package runner.</li>
						<li>npx makes it easy to use CLI tools and other executables hosted on the registry.</li>
						<li>Calling npx <command> when <command> isn’t already in your $PATH will automatically install a package with that name from the NPM registry for you, and invoke it. When it’s done, the installed package won’t be anywhere in your globals, so you won’t have to worry about pollution in the long-term. - <a href="https://www.bram.us/2017/07/15/introducing-npx-an-npm-package-runner/" target="_blank">Bram.us</a></li>
					</ul>

---
        

#### React developer tools</h4>
          <ul>
            <li>Is an extension that you can install in your browser</li>
            <li><a href="https://chrome.google.com/webstore/detail/react-developer-tolis/fmkadmapgofadopljbjfkapdkoienihi">Chrome</a></li>
            <li><a href="https://addons.mozilla.org/sv-SE/firefox/addon/react-devtolis/">Mozilla</a></li>
            <li>In the extension you can investigate the virtual DOM, components state, props etc.</li>
          </ul>

---
				

