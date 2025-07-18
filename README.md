# MyAppJune25

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



1) git installation
     check git -v

2) link our github account to our system
          git config --global user.name "xxxxx"
          git config --global user.mail "xxxxxxxxx"

check
        git config --list

3) link project <--> Repository
        create a repository
        git init
        git remote add origin url
        check: git remote -v

git add
git commit -m "commit messsage"
git push
git push --set -upstream origin master -f (for the first time)


4) branching
create a branch in git hub
       git fetch
       git checkout
       check: git branch


5) Pull request
       create pull request
       approve
       merge(if any conflicts, clear conflicts and merge)

6) clearing conflicts
       git branch
       pull from parents branch
       clear conflicts
       pull request for merge

 7) git log

 8) shift branches
        commit and shift
        git stash --include-untracked
        move to branch and do changes
        after come back git stash pop

 9) Delete commit from branch
        git log -- some unique code
        git reset paste the code here

 10) two branches code into one branch
         create third branch
         git pull origin branch name 

 11) cherry-pick
      commit code
      shift to new branch
      git cherry-pick   unique code              


RxJs Operators:

from,of --> creational operators
pipe --> cmbine the value
map --> to alter very element or value
filter --> to select certain data


return this.http.get(API)-->API call

forkjoin --> 
return ForkJoin(
       this.http.get(API1),
       this.http.get(API2),
       this.http.get(API3),
       this.http.get(API4)

)

concatMap --> sequential API calls
return concatMap(
       this.http.get(API1),
       this.http.get(API2),
       this.http.get(API3),
       this.http.get(API4)
)

switchMap--> switch between API calls (it calls new API only)
exhaustMap-->switch between API calls (it rejects new API call)
debouncetime --> delay API calls

