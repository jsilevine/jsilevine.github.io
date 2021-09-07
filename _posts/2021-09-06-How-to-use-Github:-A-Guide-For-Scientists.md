# How to use Github

This is a basic startup guide for Levine Lab members who are either a) new to Github or b) who need a refresher on basic functions. Github itself has [great documentation](https://docs.github.com/en) if you would like to learn to use more advanced features. 

## 1. Connecting your computer to github with ssh

Github has a [detailed guide](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh) on this, though I will go through the basics for mac users (I think a majority of us) just so this is all in one place. 

SSH stands for "Secure SHell," and is a network protocol for securely connecting over an unsecured network. It works through cryptographic elements called "keys", which are unique to your device and must be generated in the command line. If you do remote computing you likely have an ssh key generated on your computer.

Once set up, ssh will allow you to integrate work on your local computer with the lab Github page with minimal hassle. 

#### 1.1 Checking for existing keys

1. Open terminal (or your preferred shell program)

2. Enter `ls -al ~/.ssh`

3. Check if the directory lists a public ssh key. Should be something like: "id_rsa.pub". If you already have a key, skip to section 1.4

#### 1.2 Generating an ssh key

1. Open terminal

2. Enter `ssh-keygen -t ed25519 -C "your_email@example.com"` , but substitute the email address associated with your github account. 

    The terminal should return: `> Generating public/private ed25519 key pair.`

3. When asked to "Enter a file in which to save a key", press enter.

4. Terminal will ask you to type a secure passphrase, choose something secure and write it down. 

#### 1.3 Adding your ssh key to the ssh-agent

1. Open terminal

2. Enter `eval "$(ssh-agent -s)"`

3. If you have macOS Sierra 10.12.2 or later you have to do some extra stuff.

    a. Check if a `~/.ssh/config` file exists by entering `open ~/.ssh/config`
    
    b. If the file doesn't exist, create it by entering: `touch ~/.ssh/config`
    
    c. Open the file by entering `open ~/.ssh/config`. A blank texteditor file should open.
    
    d. Copy the following into the opened file, then save and close the text editor. Note: you can also do this within terminal by typing `nano ~/.ssh/config`.
    
        Host *
            AddKeysToAgent yes
            UseKeychain yes
            IdentityFile ~/.ssh/id_ed25519
            
4. Add your ssh private key to the ssh-agent and store your passphrase in the keychain. To do so enter `ssh-add -K ~/.ssh/id_ed25519`

#### 1.4 Add ssh key to your github account

1. Copy ssh public key to your clipboard by entering `pbcopy < ~/.ssh/id_ed25519.pub`

2. On the github website, click on your profile photo in the upper right and click "Settings"

3. In the sidebaar select "SSH and GPG keys"

4. Click "New SSH key"

5. Add a title, maybe something like: "Jacob's Macbook Pro"

6. Paste your key into the "key field"

7. Click "Add SSH key"


## 2. Creating and cloning repositories

Github pages are made up of repositories. Repositories are essentially folders, hosted both on github and locally on your computer, that contain files relevent to a given project. Locally, git (the version control system github is based on) is used to track changes to files and maintain a log of previous versions. By connecting your local repository to Github, you both create a cloud-stored copy of you work, and allow for collaboration across devices. The integration of version control, storage and well-regulated collaboration is what makes Github so powerful. 

First, lets learn how to create a new repository. 

#### 2.1 Creating a new repository on Github

1. To create a new repository within the LevineEcology page, first navigate to the Group's home page. Then, click the green-highlighted "New" button.

2. Name the repository, and enter that name into the "Repository name" entry box. For example, this repository is called "How-to-use-Github". This name will be used in the link accessing this repository, i.e. "https://github.com/LevineEcology/How-to-use-Github".

3. Add a description of the repository, so that future lab members will know what is contained there. 

4. Select the visibility of the repository, either public or private. Public repositories are openly available to anybody with the link, whereas private repositories are only visible to members of the organization. For example, this how-to repository is public, whereas my "SedgwickWaterCompetition" repo is private. Once published, I will likely make that repository public and link to it so that others may use my data and replicate my results -- another benefit of Github. 

5. Select "Add a README file". This is technically optional, but a README is generally a good idea and should be the place where you include general information and metadata about the repository so that others can make use of it without much headache. README's are typically written in the (very intuitive) [markdown language](https://www.markdownguide.org/cheat-sheet/) and have the ".md" file extension. This file is written in markdown, for example. 

6. Select "create repository".

#### 2.2 Cloning a repository to your local device 

Now that you have created a repository, it is time to create a copy of it on your local device (called "cloning") and begin adding to it. 

1. Navigate to the main page of your new repository.

2. Click the green "Code" button.

3. Select "SSH" at the top of the dropdown

4. Click the little clipboard icon to the right of the link, which should be something like: `git@github.com:LevineEcology/How-to-use-Github.git`in order to copy the link to your clipboard. 

5. Open terminal

6. Type `git clone`, and then paste the URL you just copied i.e. `git clone git@github.com:LevineEcology/How-to-use-Github.git`. Press enter. 


## 3. Working on a repository -- Commits and Pushes

#### 3.1 Adding Github account info to your local machine

You will first want to give your Github account information to your local machine so that Github can recognize your interactions. 

1. Open terminal

2. Enter `git config --global user.name "YOUR_USERNAME"`

3. Enter `git config --global user.email YOUR_EMAIL@EMAIL.COM`

#### 3.2 The basic Git/Github workflow

What follows is the basic workflow for adding to or working on your repository. Essentially, you will make any changes or additions locally on your computer, in the folder you just cloned. You can create new .R files and save them to the folder, add word or excel documents, or create a nested folder structure. Then, when you are ready to save your changes/additions, you will do what is called a commit. When you perform a commit, git registers a new version of the repository that you can revert to at a later date if you need to. It is similar to saving a document in Word, for example, except that you create a permanent record of the document at each save point. 

After you commit your work, you must also perform what is called a push. A push is what takes your changes from your local machine to the Github page. Without pushing, the only record of your commit is on your computer. 

If using the command line is unappealing/scary etc. you can download and use Githubs GUI [here](https://desktop.github.com/), though I have never used it. If you are unfamiliar with command line interaction it can be a bit weird/slow at first, but eventually it becomes fast and second nature. 

Here is an example workflow, where we will make a simple edit to your repo's README.md file.

1. Navigate to your repository folder in terminal using `cd` (change directory), i.e. `cd ~/Documents/How-to-use-Github`

2. Type `ls` into terminal and press enter to list the files in your repository. One of them should be called README.md

2. Open your README.md file in your favorite text editor (e.g. nano, vim, emacs, atom, TextEdit, etc). Nano is simplest for demonstration so I will do that here but the protocol is basically the same anywhere. To open with nano type: `nano README.md`

3. Edit the README.md file by typing: "Hello!", and then save the file. 

4. At any time you can check git's status by typing `git status` in terminal, provided you are currently cd'd into your repository. If you type `git status` after modifying the README.md file, it should list it in red under "Changes not staged for Commit". This means that if you performed a commit now, it would not include the changes you made to the README. To include those changes you need to first "add" the file to the commit.

5. Enter `git add README.md`

6. Retype `git status`. README.md should now be listed in green under "Changed to be committed". In general you need to "add" any files you wish to be a part of your next commit in this way, you can add entire folders at a time if you would like using `git add ~insert folder name~`.

7. To commit your changes use the command `git commit`. All commits must be supplied with a message, or you will get an error -- usually this is just a brief description of your changes. 

Enter `git commit -m "My first commit"` into terminal.

Git should display a message summarizing the changes made in the commit. 

8. Now it is time to push your commit to Github. To do so simply type `git push` into your terminal window and press enter.

Congrats! You now know the basics of Github use. One thing I did not cover in this document is how to collaborate on a project using branches and pull requests. These are essential elements of Github, that I may later write sections on, but for now Github has some good tutorials available [on their site](https://docs.github.com/en/github/collaborating-with-pull-requests/getting-started/about-collaborative-development-models)



