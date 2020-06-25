/**
 * ----- What is GIT? -----
 * GIT is a version control system. It is responsible for tracking the changes in
 * computer files or set of files in a particular project. 
 * Why do programmers need some sort of version control system to track changes?
 * If a programmer makes a lot of changes, it is almost difficult to revert to a stable
 * state of a programmer. 
 * Eg: Say we are trying to make Facebook. It is a huge application.
 * If you were a web developer and had to create Facebook, and had some issues
 * after creating Register and authentication model but crashes at the posting 
 * module. Because you made so many changes and can't revert back, you would be in
 * a lot of trouble. Pre Git, programmers made their own version control. This is very
 * cumbersome. This is what many programmers and graphic artists did before an automated
 * version system like Git was created. Can make a lot of errors, may get lost as to
 * which version represents which module, and WASTING SO MUCH SPACE!! So tedious,
 * so manual. Gets the job done but this is just not stable.
 * Git tracks the versions for you. GIT IS NOT GITHUB. 
 * Git is the version control software, and Github is a git repository hosting service
 * which offers all of the source code management provided in git. 
 * Git is the version control you install on your machine, and start tracking the files
 * on this project. Github is not a version control software, it is just a way for you
 * to back up your git projects on the cloud.
 * 
 * ------ Distributed Development ------
 * Git allows you to promote and allow multiple people working on the project and
 * each have their different code set and different files simultaneously. Does this
 * with a hosting service like Github or Gitbucket. 
 * Without version control, you would not be able to work on the same file as 
 * someone else as one of your changes could overwrite the other's code when committing.
 * 
 * ------ Safeguard ------
 * Everything saved in git is accessible at some later point. Even if you delete it.
 * There is always a record of your save history. Thus it is tough to corrupt your 
 * code whether it occurs accidentally or maliciously. If you accidentally delete a 
 * folder, you can go back in time and get that file back.
 * 
 * ------ CORE CONCEPTS OF GIT ------
 * Need to know:
 * The repository or repo
 * commits
 * branches - we will do this on another day because of the complexity
 * 
 * ------ What is a Repository? ------
 * It is the container for Git
 * This is typically your website or web applicaiton or project folder.
 * Git doesn't operator on your entire file system. It is limited to just one
 * directory, and all the directories that are recursively in that directory.
 * If it was not limited to just one directory, it would be very hazardous. Cannot 
 * execute git commands without creating a repo (the container) for those commands.
 * In the root of the repository is the .git folder, which stores all of git's 
 * internal files. 
 * You run the -- git init -- command to initialize a given website or project folder
 * as a git repo
 * **** Note - in order to initialize a git project, you must have git installed on
 * your machine ****
 * By default, GIT IS A CLI - COMMAND LINE INTERFACE. Means that you open up
 * your command line (command prompt), you can execute git commands. 
 * To see version: type git --version
 * If don't see the version, then git is not installed.
 * Always better to learn the commands first without using a GUI
 * 
 * ------ Commits ------
 * A commit is a snapshot of a state of a repository. It stores the contents of 
 * every file as they are at the moment of a commit.
 * Committing changes will happen frequently throughout the development of your
 * site or application.
 * Frequent commits means you can track the progress of development and roll back if 
 * changes to the project or major bugs make it necessary
 * Your commits make up the history of your application and will be visible to
 * anyone viewing your public remote repository.
 * Usually, we make commits when a logical unit of work is done. We are not going
 * to commit every single line
 * 
 * ----- Process Flow of Commits -----
 * Imagine you commit f1 and f2. Then you commit again after editing f1. Then,
 * commiting once again, realize the application is not working. But you know that
 * before commit c, you had a stable program. So you can go back to commit b or 
 * commit a where you know you had a working program.
 * 
 * ----- 3 areas of a Git Repo -----
 * Working tree
 * Staging Area
 * Local Repository (history)
 * 
 * A lot of people use git but don't have a strong understanding of the above three
 * areas. 
 * READ THROUGH THE GIT POWERPOINT!!
 * 
 * ----- Working Tree ----- 
 * The working tree is the area where you are currently working.That is where the
 * physical files are. 
 * It is where your files live. This area is also known as the "untracked" area of git.
 * Any changes to files will be marked and seen in the Working Tree.
 * Here if you make changes and do not explicitly save them to git, you will lose
 * the changes made to your files. 
 * This loss of change occurs because git is not aware of the files or changes
 * in the Working tree until you tell it to pay attention to them.
 * If you make changes to files in your wokring tree, git will regonize that they are
 * modified, but until you tell git "hey pay attention to these files", it won't
 * save anything that goes on in them.
 * In order to actually track your files, you need to get to 
 * the staging area. 
 * 
 * ---- Staging Area ----
 * The staging area is when git starts tracking and saving 
 * changes that occur in files.
 * These saved changes reflect in the .git directory.
 * You tell git that I want to track these specific files, then
 * git says okay and moves them from your Working Tree to the 
 * staging area and says "cool, I know about this file in
 * its entirety"
 * However, if you make any more additional changes after adding
 * a file to the Staging Area, git will not know about those
 * specific changes until you tell it to see them. You
 * explicitly have to tell git to notice the edits in your files.
 * Only the changes in the staging area are put in the next commit
 * Run git status. This command shows you what is in the staging
 * area
 * git add filename - this adds a particular file to the staging
 * area
 * git add . -this adds all files from the working tree to the
 * staging area with the exclusion of what is inside the
 * .gitignore file
 * 
 * ----- STEPS -----
 * 1. Create the folder. Then within that directory,
 * type git init
 * This creates the git repo, which allows you to run 
 * subsequent git commands. Can't run git commands without 
 * an initial repository. 
 * If you go to the folder, it shows .git folder. This is by default
 * normally an invisible folder. This folder only exists if
 * you have initialized a git repository. If you delete this
 * folder, you will not be able to run git commands. 
 * The working tree is the actual physical file you are seeing. Eg
 * the working tree here is server.js right now. 
 * In order to track your files, you need to get to the staging
 * area. Only files added to the staging area are tracked.
 * By default, all files in the folder are untracked because
 * there are some files in the folder that you may not want
 * being tracked. you will understand why and the significance
 * of when to do that and why. 
 * All files are untracked until you add them to the staging
 * area. 
 * How to add files to the staging area? 
 * Type git add . (add all files) or git add name_of_file 
 * name_of_file is the name of the file you want to track. 
 * Every file you add by default wants to be tracked.
 * In this example, we will add the index.html file to the staging
 * area: 
 * git add index.html
 * A means Added (to the staging area).
 * When change the file, the A turns to an M (modified)
 * U means untracked - files not in the staging area. 
 * 
 * The working tree has the current file that you are seeing
 * live. The staging area is an invisible area happening
 * behind the scenes for git. only the files in the staging
 * area can be tracked and only these files can be commited. 
 * Cannot commit a file that is NOT in the staging area. 
 * When you perform a commit, you can create a history. 
 * Now, to perform a command git: 
 * git commit -m "Website with Header"
 * -m stands for message. Want to add a message so you can 
 * add a label. You want to give it a message so you would
 * know what that commit means. If looking through messages,
 * can see that this commit was the one that added a website with
 * header. Always want to put a message to make each commit
 * meaningful and easier for you when you look back on the commit. 
 * HOWEVER - ALWAYS RUN git status BEFORE RUNNING git commit
 * git status gives you a status of the working tree. Tells
 * you which files are in the staging area and which files were
 * modified since being in the staging area.
 * Changes to be commited: these files are in the staging area. 
 * Despite the fact that these files were added to the staging
  area and you can commit them, git is telling you that 
  you have modified the files since adding them to the staging
  area. 
  When you add something to the staging area and you commit that,
  all of those changes and the structure of that file will be
  stored within the git repository. 
  Run another git add .
  run git status again - no red, only green. 
  Means all those files were not modified yet since being brought
  to the staging area. So that means if you perform a commit now,
  the files as is for this file will be saved. 
  If you make another change an run git status again, you will
  get red again. It will give you a warning first. If you perform
  that commit now, then what you modified will not be part
  of that commit. All of the changes you made after adding to the staging
  area will not be commited.
  Sometimes you put files to the staging area and forgot
  that you made changes and then commit it, and when it is commited,
  you will think that all changes are commited but that is not the
  case. Right before you perform a commit, always perform git 
  status.
  Now you can commit: 
  git commit -m "Website with Header"
  Now git will commit everything in the staging area. 
  When you perform a commit, will take all of those files off
  the staging area. Only after readding them back to the staging
  area will you be able to commit these changes.
  Run git init once but git add and git commit you will be runnin
  a lot.
  Git won't add files to the staging area that had no changes. 
 */