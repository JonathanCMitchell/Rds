### Tips/Advice from past students
- For video games: might consider focusing on the presentation of your ideas instead of some crazy game logic/mechanic. I wanted to create a simple 30 second ‘level’ of a game, but I became too focused on have wonderful game logic that when it came time to present my idea, I did not have much to actually show.
- Always pseudocode what you want to do before you write code. It helps you get your thoughts straight. Try writing your pseudocode in the format of git commit messages. Then, when you’ve finished the task outlined by your pseudocode, use that pseudocode as your git commit message. 
- Set a deadline for completing a chunk of the project. If you reach that deadline and haven’t reached your goal, evaluate whether 1) you haven’t put in enough time or 2) your approach isn’t working. If #2, try a different approach. Repeat for all chunks of the project. 

### Tools
#### Grunt vs Gulp (task automation)
- grunt is more developed and has a large developer community with lots of packages available. I also think you guys have some experience with grunt.
- gulp is newer. It's up and coming with a growing developer community. I personally think the syntax is simpler to use. Note that less mature = less packages available.
- A quick google search brought up [this](http://www.100percentjs.com/just-like-grunt-gulp-browserify-now/) interesting post, but I encourage you to do further research on your own.

#### Require js vs Browserify (requiring files browser-side)
- require js has been around longer, larger community. I find it's usage to be a bit clunky.
- browserify is newer, follows a node-like syntax.

#### Less vs Sass vs Stylus (CSS preprocessor)
- I don't have much experience here so I can't provide much insight
- Larry prefers stylus (if you haven't met him yet, he's a kickass guest instructor who works largely with seniors) 
- Have had clients that use Sass

#### Travis
(free for public repos) runs continuous integration tests only. That is to say, when you enable travis-ci on a repo, any time you push to your repo, travis runs all the tests in your repo for you and lets you know if they fail

#### Azure 
When setup as covered in class, runs automatic deployment. This means that whenever you push to your repo, regardless of whether the tests pass or not, the repo is deployed to your server. There are ways to integrate the two, but we haven't gone into it in class.

#### Git workflows - [read up here](https://www.atlassian.com/git/workflows#!workflow-feature-branch)
Feature branch workflow - a very simple, very popular method  
Gitflow workflow - more complicated, but useful for larger projects (probably overkill for this project period)  
- there are some other workflows you can choose from as well, but no matter what you choose, I encourage you to have someone other than the person who wrote the code review it before it's merged into the central repository. If all looks good, then the person who wrote the code should be the one to merge it (that way they can make a quick fix in case anything goes wrong).
