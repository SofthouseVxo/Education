### Fredag :D

##### Projekt info & git intro

---

### Projekt info

---

### Start

- Sprintplanering:
  - Backlog:n
  - User story:s
  - Estimering
  - Prioritering
  - Definition of Done (DoD)
- Produktägare (Vem?).
- Trello (skicka länken).
- Github repo (skicka länken).
- Daily möten = varje dag (Max 15min).
- Retrospektiv i slutet av vajre sprint.
- Demo i slutet av varje sprint.

---

### Projekt info

- 3 Sprint:ar
  - Vecka 49, 50, 51.
  - Vecka 52 (rapportskrivning).
- Växjö Deadline 2020-12-22
- Malmö Deadline 2020-12-23
- Retrospektiv dokumenteras (Skriv i Trello).

---

### Tänk på:

- Varje gruppmedlem skall ha bidragit med commits.
- Single Page Applikation (en HTML sida).
- Endast en ska lämna in (applikationen & gemensamma rapporten).
- Gör inte det för stort men inte för enkelt heller.
- kodkvalitet & hantering av resurser.
- Kod är strukturerad med indentations (Tip: prettier)

---

### Trello Example

---

### Version Control

##### With Git

---

#### What is Git?

- Version control system
- Created by Linus Torvalds (Linux)
- Why git?
  - Easy to learn
  - Free and open source
  - Widely used

---

#### What is a version control system?

- Manage software changes to source code over time.
- Keeps track of every change in the code in a special kind of database.
- If a mistake is made, developers can turn back the clock and compare earlier versions of the code to help fix the mistake.

---

#### How my projects use to look

<img height="550" src="/media/general-images/general-3/files.png" alt="old folder structure">

---

#### Confusion

- How do I know what differs in the project versions
- What changes were done when?
- Who made the changes?

<img height="300" src="/media/general-images/general-3/maps.png" alt="map difference">

---

#### Clarity

- Using version control systems we can see:
  - Exactly what changes were made between versions.
  - Who did the changes?
  - Going back and fourth between versions.
    <img height="300" src="/media/general-images/general-3/github.png" alt="map difference">

---

#### So what does Git do?

- It is a program that tracks changes made to files.
- For example, when you edit a file, git can help you determine exactly what changed, who changed it, and why.
- It makes it easier for multiple people to coordinate work and tracking progress over time.
- If two developers make changes in the same file, Git offers functionality for us to handle these conflicts.

---

#### Git and Github is not the same thing

- Git is the version control system.
- Github is a hosting service for git repositories. A website for hosting projects that use git.
- Git is the tool, GitHub is the service.

---

#### Git & The Command Line

- We will use Git from the command line.
- Terminal (Mac) Command Prompt (Windows).
- Why? Using bash is a nice skill to have.
- Alternatives exist (SourceTree, Github desktop etc).
- You can also open the terminal inside your IDE.

<img height="300" src="/media/general-images/general-3/cmd.png" alt="cmd">

---

#### A Git Repository(Repo)

- The Repository is usually the project folder.
- By making a folder a Repository it becomes a folder which git keeps track of.

<img height="400" src="/media/general-images/general-3/repo.png" alt="repo">

---

#### Repository

- When making a folder a Repository a hidden .git folder is created inside of it.
- Inside this folder is all the information about the history and tracking of the Repository.
- Delete this and it's not a git repository anymore.

<img height="400" src="/media/general-images/general-3/githidden.png" alt="githidden">

---

#### Repositories

- **Local** repository = the folder on your machine.
- **Remote** repository = the one on Github(or other service).

---

#### Basic Commands:

- git clone: clone repo into a new directory.
- git add: add file to index (Staging)
- git status: check status of working tree.
- git commit: commit changes in index.
- git pull: pull latest from remote repo.
- git push: push to remote repo.
- git branch: create snapshot of your changes.
- git checkout: change branch.

---

#### Git clone

- Clone repo into a new directory.

```git

git clone https://github.com/link-to-repo.git

```

---

#### Git status:

- Check status of working tree, what files has changed and which are staged.

```git

git status

```

---

#### Git add:

- add file to index (Staging).

```git

git add filename
//or
git add *

```

---

#### Git commit:

- A commit is a snapshot of your project at specific time.
- For each commit you write a commit message, usually describing what you have done.

```git

git commit -m "I have done this...."

```

---

#### Git push:

- Push changes (commit) to remote repo.

```git

git push

//or

git push origin branchname

```

---

#### Git pull:

- pull latest from remote repo to local repo (update).

```git

git pull

```

---

#### Git branch & checkout:

- create snapshot of your changes (line of development).

```git

git branch
// to create a new branch
git checkout -b branchname

```

---

#### Real world git - Going shopping

- Workspace - Select what to buy
- Git add - Put it in the cart
- Git commit - Checkout, paying for it
- Git push - Bring groceries home.

---

#### How do i work with git in a project?

##### Git Feature Branch Workflow

1. git pull (you should be in master branch).
2. git checkout -b branch-name (you switch to new branch)
3. git add and commit your changes.
4. git push origin branch-name (upload the branch to github).

---

#### What is next? (On github)

1. Create a new pull request (branch-name -> master)
2. Add reviwers.
3. Reviewers review code and merge it to master.

---

### Questions ?
