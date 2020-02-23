<!doctype html>
<html>
	<head>
		<title>Introduction to Git</title>
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

### Version Control</h3>
##### With Git</h5>

---


#### What is Git?</h4>
          <ul>
            <li>Version control system</li>
            <li>Created by Linus Torvalds (Linux)</li>
            <li>Why git?</li>
            <ul>
              <li>Easy to learn</li>
              <li>Free and open source</li>
              <li>Widely used</li>
            </ul>
          </ul>

---


#### What is a version control system?</h4>
          <ul>
            <li>Manage software changes to source code over time.</li>
            <li>Keeps track of every change in the code in a special kind of database.</li>
            <li>If a mistake is made, developers can turn back the clock and compare earlier versions of the code to help fix the mistake.</li>
          </ul>

---


#### How my projects use to look</h4>

  <img style="height: 550px" src="/media/general-images/general-3/files.png" alt="old folder structure">

---


#### Confusion</h4>
          <ul>
            <li>How do I know what differs in the project versions</li>
            <li>What changes were done when?</li>
            <li>Who made the changes?</li>
          </ul>

  <img style="height: 300px" src="/media/general-images/general-3/maps.png" alt="map difference">

---


#### Clarity</h4>
          <ul>
            <li>Using version control systems we can see:</li>
            <ul>
              <li>Exactly what changes were made between versions.</li>
              <li>Who did the changes?</li>
              <li>Going back and fourth between versions.</li>
            </ul>
          </ul>
  <img style="height: 300px" src="/media/general-images/general-3/github.png" alt="map difference">

---


#### Distributed Version Control</h4>
          <ul>
            <li>Is a form of version control in which the complete codebase, its full history, is mirrored on every developer's computer.</li>
            <li>Git is a Distributed Version Control system</li>
          </ul>

  <img style="height: 400px" src="/media/general-images/general-3/distributed.png" alt="distributed version control">

---


#### Different version control systems</h4>
          <ul>
            <li>Apache Subversion</li>
            <li>Mercurial SCM</li>
            <li>Git (The most popular and what we will use)</li>
          </ul>

---


#### So what does Git do?</h4>
          <ul>
            <li>It is a program that tracks changes made to files.</li>
            <li>For example, when you edit a file, git can help you determine exactly what changed, who changed it, and why.</li>
            <li>It makes it easier for multiple people to coordinate work and tracking progress over time.</li>
            <li>If two developers make changes in the same file, Git offers functionality for us to handle these conflicts.</li>
          </ul>

---


#### Git and Github is not the same thing</h4>
          <ul>
            <li>Git is the version control system.</li>
            <li>Github is a hosting service for git repositories. A website for hosting projects that use git.</li>
            <li>Git is the tool, GitHub is the service.</li>
          </ul>

---


#### Git & The Command Line</h4>
          <ul>
            <li>We will use Git from the command line.</li>
            <li>Terminal (Mac) Command Prompt (Windows).</li>
            <li>Why? Using bash is a nice skill to have.</li>
            <li>Alternatives exist (SourceTree, Github desktop etc).</li>
            <li>You can also open the terminal inside your IDE.</li>
          </ul>
  <img style="height: 300px" src="/media/general-images/general-3/cmd.png" alt="cmd">

---


#### A Git Repository(Repo)</h4>
          <ul>
            <li>The Repository is usually the project folder.</li>
            <li>By making a folder a Repository it becomes a folder which git keeps track of.</li>
          </ul>
  <img style="height: 400px" src="/media/general-images/general-3/repo.png" alt="repo">

---


#### Repository</h4>
          <ul>
            <li>When making a folder a Repository a hidden .git folder is created inside of it.</li>
            <li>Inside this folder is all the information about the history and tracking of the Repository.</li>
            <li>Delete this and it's not a git repository anymore.</li>
          </ul>
  <img style="height: 400px" src="/media/general-images/general-3/githidden.png" alt="githidden">

---


#### Repositories</h4>
          <ul>
            <li><b>Local</b> repository = the folder on your machine.</li>
            <li><b>Remote</b> repository = the one on Github(or other service).</li>
          </ul>

---


#### git commit</h4>
          <ul>
            <li>A commit is a snapshot of your project at specific time.</li>
            <li>Each commit is a SHA-1 Hash containing:
              <ul>
                <li>Content</li>
                <li>Timestamp</li>
                <li>Parents</li>
                <li>Author</li>
              </ul>
            </li>
            <li>For each commit you write a commit message, usually describing what you have done.</li>
          </ul>

---


#### Commits</h4>
          <ul>
            <li>Commits gives you the ability to go back to these snapshots.</li>
            <li>If you fuck it up, you can just go back and do it differently.</li>
            <li>Commit often!</li>
          </ul>

---
        

#### git commit</h4>
  <img  src="/media/general-images/general-3/commits.png" alt="commits">

---


#### Structure</h4>
  <img  src="/media/general-images/general-3/structure.png" alt="structure">

---


#### Real world git - Going shopping</h4>
          <ul>
            <li>Workspace - Select what to buy</li>
            <li>Git add - Put it in the cart</li>
            <li>Git commit - Checkout, paying for it</li>
            <li>Git push - Bring groceries home.</li>
          </ul>

---


  <img src="/media/general-images/general-3/structure2.png" alt="structure2">

---


### More advanced</h3>

---


#### Getting started</h4>
          <ul>
            <li>Create a new repo on github.</li>
            <li>Create a new folder on your machine and paste in the commands beneath "…or create a new repository on the command line" in the screen showing after github repo creation.</li>
          </ul>

---


#### Current state</h4>
  <img style="height: 400px" src="/media/general-images/general-3/git1.png" alt="git1">

---


           #### Create another commit

1. create an index.js file
1. add some code into it
1. stage changes
1. and commit changes
1. log to see that everything worked, you shall now se another commit

            ```shell
            $ git add index.js
            $ git commit -m"second commit"
            $ git log
            ```


---


#### Current state</h4>
  <img style="height: 400px" src="/media/general-images/general-3/git2.png" alt="git2">

---


####  Push changes to remote

            ```shell
            $ git push
            ```


---


#### Current state</h4>
  <img style="height: 400px" src="/media/general-images/general-3/git3.png" alt="git3">

---


####  Make another commit

            1. Edit code inside index.js
            1. Stage changes
            1. Commit changes

            ```shell
            $ git add -A
            $ git commit -m"third commit"
            ```


---


#### Current state</h4>
  <img style="height: 400px" src="/media/general-images/general-3/git4.png" alt="git4">

---


####  Checkout second commit

            1. Checkout the second commit to see how the code looked at that version

            ```shell
            $ git checkout <commit-hash>
            ```


---


#### Current state</h4>
  <img style="height: 400px" src="/media/general-images/general-3/git5.png" alt="git5">

---


####  Go back to latest commit

            ```shell
            $ git checkout master
            ```


---


#### Current state</h4>
  <img style="height: 400px" src="/media/general-images/general-3/git4.png" alt="git4">

---


####  Revert to previous commit

* revert does not remove the latest commit.
* It creates a new commit which looks like the same as the one you are reverting to.
* By using HEAD we revert to the previous (adding the commit hash can get you further back).

            ```shell
            $ git revert HEAD
            ```


---


#### Current state</h4>
  <img style="height: 400px" src="/media/general-images/general-3/git6.png" alt="git6">

---


####  Push changes to remote

            ```shell
            $ git push
            ```


---


#### Current state</h4>
  <img style="height: 400px" src="/media/general-images/general-3/git7.png" alt="git7">

---


####  Make another commit

            1. Edit code inside index.js
            1. Stage & commit changes

            ```shell
            $ git commit -am"fifth commit"
            ```


---


#### Current state</h4>
  <img style="height: 400px" src="/media/general-images/general-3/git8.png" alt="git8">

---


####  Reset latest commit

* Using reset deletes the commit 
* What you place after the ~ is the nr of commit you wants to reset
* Whatever changes that you had from resetted branches will be "staged".

            ```shell
            $ git reset HEAD~1
            ```


---


#### Current state</h4>
  <img style="height: 400px" src="/media/general-images/general-3/git7.png" alt="git7">

---


####  Checkout previous commit

            1. Checkout the previous commit

            ```shell
            $ git checkout <commit-hash>
            ```


---


#### Current state</h4>
  <img style="height: 400px" src="/media/general-images/general-3/git9.png" alt="git9">

---


####  Create a new branch

* We name our new branch "newBranch" but you can choose whatever name.

            ```shell
            $ git switch -c newBranch
            ```


---


#### Current state</h4>
  <img style="height: 400px" src="/media/general-images/general-3/git9.png" alt="git9">

---


        <section data-markdown>
            <script type="text/template">
  ####  Make a new commit in the new branch
  
              1. Edit code inside index.js
              1. Stage & commit changes
  
              ```shell
              $ git commit -am"sixth commit"
              ```
  
  ---
  
  
  #### Current state</h4>
    <img style="height: 400px" src="/media/general-images/general-3/git10.png" alt="git10">
  ---

          <section data-markdown>
            <script type="text/template">
  ####  Go back to master branch
  
              ```shell
              $ git checkout master
              ```
  
  ---
  
  
  #### Current state</h4>
    <img style="height: 400px" src="/media/general-images/general-3/git11.png" alt="git11">
  ---

          <section data-markdown>
            <script type="text/template">
  ####  Merge newBranch into master
  
              ```shell
              $ git merge newBranch
              ```
  
  ---
  
  
  #### Current state</h4>
    <img style="height: 400px" src="/media/general-images/general-3/git12.png" alt="git12">
  ---
        
          <section data-markdown>
            <script type="text/template">
  ####  Delete newBranch
  
              ```shell
              $ git branch -D newBranch
              ```
  
  ---
  
  
  #### Current state</h4>
    <img style="height: 400px" src="/media/general-images/general-3/git13.png" alt="git13">
  ---

          <section data-markdown>
            <script type="text/template">
  ####  Create another new branch
              
              1. Create another branch
              1. Checkout new branch
              1. Make changes in index.js
              1. Stage and commit changes
              1. Push changes
              1. Set new upstream

              ```shell
              $ git branch anotherBranch
              $ git checkout anotherBranch
              $ git commit -am"commit in new branch"
              $ git push
              $ git push --set-upstream origin anotherBranch
              ```
  
  ---

  
  #### Check github and make a pull request</h4>
    <img src="/media/general-images/general-3/git14.png" alt="git14">

  ---


