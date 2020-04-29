### 2. Backend APIs
#### Installing tools

---

#### We will be using various software tools

We'll need:

- Package Manager (chocolatey, brew, apt)
- Command Line Terminal (bash)
- Version Control (git)
- Web Request tools (browser, curl, wget, postman)
- json formatter (jq, online json formatter)
- Editor (vscode)
- node.js
- mongodb

---

#### Package Manager

- What and Why:
  - Installs software as command line terminal commands
  - Easier to document and less hassle during installation
- How:
  - MacOS: <a href="https://brew.sh/index_sv" target="blank">https://brew.sh/index_sv</a>
  - Windows: <a href="https://chocolatey.org/docs/installation" target="_blank">https://chocolatey.org/docs/installation</a>
  - Linux: apt, pacman, snap depending on distro

---

#### Command Line Terminal

- What and Why:
  - Enter commands as text instead of clicking
  - Easier to document consistently, and developers don't click
- How:
  - MacOS: Terminal is bash/zsh
  - Windows: choco install git (git bash)
  - Linux: Duh

---

#### Versionshantering

- What and Why:
  - Store snapshots of working code
  - Go back to a working state when you've broken your code
  - Neccesary knowledge as a developer
- How:
  - Is available in all above command line terminals
  - GUIs are available but you need to know the git command first

---

#### Web requests - Browser

- What and Why:
  - Can be used for backend requests too
- Installation:
  - Chrome/Firefox, you know how...

---

#### Web requests - Terminalverktyg (curl)

- What and Why:
  - Easier to document consistently
  - Very clear what kind of requests are being sent
- Installation:
  - included in terminals
- Done when

```sh
curl resp wget https://www.smp.se/
```

---

#### JSON formatter

- What and Why:
  - Easier to format (and query JSON)
- Installation:
  - MacOS: ```$ brew install jq```
  - Windows: ```$ choco install jq```

- Done when

```sh
curl -s https://jsonplaceholder.typicode.com/todos/1 | jq .
```

---

#### Postman

- What and Why:
  - Visual tool to test and understand web requests
  - Commonly used at companies
- Installation:
  - MacOS: ```$ cask install postman``` 
  - Windows: ```$ choco install postman```

---

#### Mongodb

- What and Why:
  - Database that stores JSON-like documents
  - Free, implicit conversion to and from JSON, so no glue required
- Installation:
  - MacOS:
    ```sh
    brew tap mongodb/brew
    brew install mongodb-community
    brew services start mongodb-community
    ```
  - Windows: 
    ```
    choco install mongodb
    setx /M PATH "%PATH%;C:\program files\mongodb\4.2\server\bin"
    ```
  - Linux: ```$ apt install mongodb-ce```
- Done when
  - execute ```mongo``` in a terminal and get a prompt

---

#### Editor (VScode)

- What and Why:
  - Integrated Development Environment (IDE) for developing code
  - Free, has LiveShare plugin for remote pair/mob programming

- Installation:
  - MacOS: ```$ brew install visual-studio-code```
  - Windows: ```$ choco install vscode```
  - Linux https://code.visualstudio.com/download
- Done when
  - Grab a buddy and start a live share session <https://visualstudio.microsoft.com/services/live-share/>
