<!doctype html>
<html>
	<head>
    <title>Solving Puzzles</title>
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

### Solving Puzzles</h3>
##### As a developer</h5>

---


#### What it's like being a developer</h4>
          <ul>
            <li>Solving puzzles is your job.</li>
            <li>It's not uncommon that your puzzles is are new puzzles.</li>
            <li>Puzzles you have never seen before, with missing pieces and it will probably no turn out like in the picture.</li>
            <li>Often the rules of the puzzles is out of your control.</li>
          </ul>

---


#### However. It's always your choice how you will respond and act upon it.</h4>
          <ul>
            <li>If it feels impossible, because it will at some point.</li>
            <li>Will you:</li>
            <ul>
              <li>Get angry? Blaming the code, shitty 3rd party libs, colleagues, boss?</li>
              <li>Drop dead? Procrastinate and being passive and waiting for other to do it?</li>
              <li>Grind it out, 24h hours sweating, eating crisps, not showering, listening to hardstyle until you think in 150bpm. Just to find out you could have done it in 2h the next day.</li>
            </ul>
          </ul>

---


#### Or will you do it smart?</h4>
          <ul>
            <li>Plan your work. - Doing the right stuff at the right time</li>
            <li>Thinking Objectively. (what exactly is the problem?) - Overwhelmed</li>
            <li>Taking a step back, seeing the big picture. - Focusing on the right stuff</li>
            <li>Grind smart! Knowing when to grind. - Not getting burnt</li>
            <li>We are using our brains, not legs. - Learn faster and solve things faster</li>
          </ul>

---


#### Tips</h4>
          <ul>
            <li>Never be afraid or too proud to show your code</li>
            <li>Use your subconscious - take breaks!</li>
            <li>When pair programming - switch it up - writer or partner!</li>
            <li>When stuck, grinding isn't always the answer.</li>
            <li>You can't do or know it all at once</li>
            <li>Focus on learning instead of worrying about the internship</li>
          </ul>

---


#### Steps to take when starting working with a task/puzzle</h4>
          <ol>
            <li>Identify What?</li>
            <li>Plan structure (components, functionality)</li>
            <li>Identify needed resources</li>
          </ol>

---


#### Identify what?</h4>
          <ul>
            <li>What should I do?</li>
            <li>What problems to solve?</li>
            <li>Split the task into minor tasks</li>
            <li>Grab a colleague and tell them about all your tasks</li>
            <li>Make a checklist where you can mark when something is done</li>
          </ul>

---


#### Plan structure</h4>
          <ul>
            <li>What screens do I have? (components)</li>
            <li>How can I divide my functionality? (components, classes, methods, properties)</li>
            <li>Write down the purpose of these</li>
            <li>Document results! Be creative, DRAW!</li>
          </ul>

---



#### Identify needed resources</h4>
          <ul>
            <li>Go through all your material and identify the things you don't know how to solve</li>
            <li>In what order do you need to solve them? Solving 1 task can lead to making it easier to solve another</li>
            <li>Identify what you need to learn</li>
            <li>Identify where you could access the knowledge</li>
          </ul>

---


#### Login feature example</h4>
          <ul>

          </ul>

---


  #### What? Bigger tasks</h4>
            <ul>
            <li>An interface needs to be created for the user to interact with</li>
            <ul>
              <li>Popup modal</li>
              <li>Input -  Validation</li>
              <li>Submission</li>
            </ul>
            <li>Frontend & Backend needs to have logic</li>
            <li>Frontend sends a request - backend receives and sends back answer - Frontend needs to handle response</li>
          </ul>

---

  
  #### What? Minor tasks</h4>
            <ol>
              <li>Create login modal interface</li>
              <ul>
                <li>1. Create form<li>
                  <ul>
                    <li>User inputs</li>
                    <li>Submission</li>
                    <li>Description</li>
                    <li>Error messages</li>
                  </ul>
              </ul>
            </ol>
  ---
  
            <ol>
              <li>Send request</li>
              <ul>
                <li>Handle user input</li>
                <li>Validation</li>
                <li>Send request</li>
              </ul>
              <li>Receive response</li>
              <ul>
                <li>Control if correct response</li>
                <li>Set state to logged in user</li>
                <li>Navigate</li>
              </ul>
            </ol>
  ---

  
  #### Planning</h4>
            <ol>
              <li>What can I reuse?</li>
              <ul>
                <li>Modal</li>
                <li>Api calls</li>
                <li>Validation</li>
              </ul>
              <li>What can i seperate?</li>
              <ul>
                <li>Modal</li>
                <li>Form</li>
                <li>Validation</li>
              </ul>
            </ol>
  ---
  
            <ol>
              <li>What tasks is there in each component?</li>
              <ul>
                <li>Login</li>
                <li>Change user</li>
                <li>Navigate</li>
              </ul>
            </ol>
  ---

  
  #### Identify needed resources</h4>
            <ol>
              <li>Setting up a React project (Lectures, Examples, react.js, google, ask)</li>
              <li>Creating components (Lectures, Examples, react.js, google, ask)</li>
              <li>Rendering JSX in components (Lectures, Examples, react.js, google, ask)</li>
              <li>Handle user input events (OLD Lectures, Examples, react.js, google, ask)</li>
              <li>Validate user input (Lectures, Examples, react.js, google, ask)</li>
              <li>Send input to backend (OLD Lectures, Examples, react.js, google, ask)</li>
            </ol>
  ---

  
  #### Lectures aren't meant to only be looked at once, feedback to make the slides clearer is always appreciated.</h4>
  ---
 ---
			</div>
    </div>

		<script src="../../libs/reveal/js/reveal.js"></script>
		<script src="../../initialize.js"></script>
	</body>
</html>
