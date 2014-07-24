## Deploying your web app to heroku

### Heroku?

Build, run, and scale apps. Cloud computing designed and built for developers.

### Create a free account

Follow the steps here:
https://id.heroku.com/signup/www-home-top

With the free account, you have limited resources, specifically you have one process (what they call: Dyno). You are able to deploy one application into that Dyno, and that's all we need :)

### Installing heroku

#### Heroku CLI

You can install a CLI tool to deploy to heroku using the command line:

```bash
npm install heroku --global
```

#### Standalone Heroku App

You can also install a binary toolbelt:

https://toolbelt.heroku.com/

Or you can use a 3rd party tool to do the integration between github and heroku for you, e.g: https://codeship.io/

### Heroku Account Configuration

Very similar to git, you can set up your account information using the command line:

```bash
heroku login
```

_note: just follow the instructions._

### Git Repo

Heroku relies on git to control the code that should be deployed. For that, you can simply use `git init`, `git add .` and `git commit -m "first commit"` to create a local git repository for your application.

You can also use github, or bitbucket, but today we will stick to a local repository for simplicity.

### Deploying to Heroku

Once all your code is controlled by git you can process to initialize heroku:

```bash
heroku create
git remote -v
```

You will see how heroku adds a custom remote branch for your repo called heroku. Any new push to that branch will result on the app to be updated in heroku cloud. Here is an example:

```bash
git push heroku master
```

To test if the app was properly deployed, just run the command `heroku open` in the local application folder, and it will fire up the remote application in your browser.
