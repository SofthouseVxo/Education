### Version Control</h3>
##### With Git</h5>


---

#### What is Git?
* Version control system
* Created by Linus Torvalds (Linux)
* Why git?
  * Easy to learn
  * Free and open source
  * Widely used


---

#### What is a version control system?
* Manage software changes to source code over time.
* Keeps track of every change in the code in a special kind of database.
* If a mistake is made, developers can turn back the clock and compare earlier versions of the code to help fix the mistake.


---

#### How my projects use to look

<img style="height: 550px" src="/media/general-images/general-3/files.png" alt="old folder structure">



---

#### Confusion
* How do I know what differs in the project versions
* What changes were done when?
* Who made the changes?

<img style="height: 300px" src="/media/general-images/general-3/maps.png" alt="map difference">



---

#### Clarity
* Using version control systems we can see:
  * Exactly what changes were made between versions.
  * Who did the changes?
  * Going back and fourth between versions.
<img style="height: 300px" src="/media/general-images/general-3/github.png" alt="map difference">



---

#### Distributed Version Control
* Is a form of version control in which the complete codebase, its full history, is mirrored on every developer's computer.
* Git is a Distributed Version Control system

<img style="height: 400px" src="/media/general-images/general-3/distributed.png" alt="distributed version control">



---

#### Different version control systems
* Apache Subversion
* Mercurial SCM
* Git (The most popular and what we will use)



---

#### So what does Git do?
* It is a program that tracks changes made to files.
* For example, when you edit a file, git can help you determine exactly what changed, who changed it, and why.
* It makes it easier for multiple people to coordinate work and tracking progress over time.
* If two developers make changes in the same file, Git offers functionality for us to handle these conflicts.



---

#### Git and Github is not the same thing
* Git is the version control system.
* Github is a hosting service for git repositories. A website for hosting projects that use git.
* Git is the tool, GitHub is the service.



---

#### Git & The Command Line
* We will use Git from the command line.
* Terminal (Mac) Command Prompt (Windows).
* Why? Using bash is a nice skill to have.
* Alternatives exist (SourceTree, Github desktop etc).
* You can also open the terminal inside your IDE.

<img style="height: 300px" src="/media/general-images/general-3/cmd.png" alt="cmd">



---

#### A Git Repository(Repo)
* The Repository is usually the project folder.
* By making a folder a Repository it becomes a folder which git keeps track of.

<img style="height: 400px" src="/media/general-images/general-3/repo.png" alt="repo">



---

#### Repository
* When making a folder a Repository a hidden .git folder is created inside of it.
* Inside this folder is all the information about the history and tracking of the Repository.
* Delete this and it's not a git repository anymore.

<img style="height: 400px" src="/media/general-images/general-3/githidden.png" alt="githidden">



---

#### Repositories
* **Local** repository = the folder on your machine.
* **Remote** repository = the one on Github(or other service).



---

#### git commit
* A commit is a snapshot of your project at specific time.
* Each commit is a SHA-1 Hash containing:
  * Content
  * Timestamp
  * Parents
  * Author
            
* For each commit you write a commit message, usually describing what you have done.



---

#### Commits
* Commits gives you the ability to go back to these snapshots.
* If you fuck it up, you can just go back and do it differently.
* Commit often!



---

#### git commit
<img src="/media/general-images/general-3/commits.png" alt="commits">


---

#### Structure
<img src="/media/general-images/general-3/structure.png" alt="structure">


---

#### Real world git - Going shopping
* Workspace - Select what to buy
* Git add - Put it in the cart
* Git commit - Checkout, paying for it
* Git push - Bring groceries home.


---

<img src="/media/general-images/general-3/structure2.png" alt="structure2">


---

### More advanced</h3>


---

#### Getting started
* Create a new repo on github.
* Create a new folder on your machine and paste in the commands beneath "…or create a new repository on the command line" in the screen showing after github repo creation.


---

#### Current state
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

#### Current state
<img style="height: 400px" src="/media/general-images/general-3/git2.png" alt="git2">


---

####  Push changes to remote

```shell
$ git push
```



---

#### Current state
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

#### Current state
<img style="height: 400px" src="/media/general-images/general-3/git4.png" alt="git4">


---

####  Checkout second commit

1. Checkout the second commit to see how the code looked at that version

```shell
$ git checkout <commit-hash>
```



---

#### Current state
<img style="height: 400px" src="/media/general-images/general-3/git5.png" alt="git5">


---

####  Go back to latest commit

```shell
$ git checkout master
```



---

#### Current state
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

#### Current state
<img style="height: 400px" src="/media/general-images/general-3/git6.png" alt="git6">


---

####  Push changes to remote

```shell
$ git push
```



---

#### Current state
<img style="height: 400px" src="/media/general-images/general-3/git7.png" alt="git7">


---

####  Make another commit

1. Edit code inside index.js
1. Stage & commit changes

```shell
$ git commit -am"fifth commit"
```



---

#### Current state
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

#### Current state
<img style="height: 400px" src="/media/general-images/general-3/git7.png" alt="git7">


---

####  Checkout previous commit

1. Checkout the previous commit

```shell
$ git checkout <commit-hash>
```



---

#### Current state
<img style="height: 400px" src="/media/general-images/general-3/git9.png" alt="git9">


---

####  Create a new branch

* We name our new branch "newBranch" but you can choose whatever name.

```shell
$ git switch -c newBranch
```



---

#### Current state
<img style="height: 400px" src="/media/general-images/general-3/git9.png" alt="git9">


---


####  Make a new commit in the new branch

1. Edit code inside index.js
1. Stage & commit changes

```shell
$ git commit -am"sixth commit"
```



---


#### Current state
<img style="height: 400px" src="/media/general-images/general-3/git10.png" alt="git10">


---

####  Go back to master branch

```shell
$ git checkout master
```



---


#### Current state
<img style="height: 400px" src="/media/general-images/general-3/git11.png" alt="git11">


---

####  Merge newBranch into master

```shell
$ git merge newBranch
```



---


#### Current state
<img style="height: 400px" src="/media/general-images/general-3/git12.png" alt="git12">


---


####  Delete newBranch

```shell
$ git branch -D newBranch
```



---


#### Current state
<img style="height: 400px" src="/media/general-images/general-3/git13.png" alt="git13">


---

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

#### Check github and make a pull request
<img src="/media/general-images/general-3/git14.png" alt="git14">