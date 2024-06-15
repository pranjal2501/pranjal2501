/*
THIS DOC TELLS ABOUT HOW TO PUSH A REPO CREATED IN OUR LOCAL MACHIN

In order to make new folder tracked by git, use init command
git init
Once the files are committed which are made in our system and if we wish to add them in our github by creating new repo then git push origin main won't work, hence:

git remote add origin <link> // means makes connection of current local system with the given origin or repo (remote) which means our link is now our origin and now we can use our git push origin main

To verify that the connection is made with expected remote or not:

git remote-v

To push code:
git push origin main


THIS IS HOW YOU CAN PUSH YOUR ANY PROJECT CREATED IN VS CODE TO YOUR GITHUB ACCOUNT

INTEAD OF WRITING ENTIRE GIT PUSH ORIGIN MAIN, WE CAN ONCE WRITE GIT PUSH -U ORIGIN MAIN AND NEXT TIME WHEN WE WANT TO PUSH JUST WRITE "GIT PUSH"

When we do commits they get stored in default branch called main.
If we wish to build a feature on another branch and then connect it with main branch , we can do so. This is mainly used in collabs
To check current branch

git branch

To rename the branch
git branch -M <newName>


*/
