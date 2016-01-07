# Notre Histoire Styleguide
Notre Histoire styleguide provided as a npm package. The project is based on [Frontend Toolbox](https://github.com/frontend/toolbox)

## Install and run the project

You'll need [npm](http://npmjs.org), [Bower](http://bower.io) and [GulpJS](http://gulpjs.com/) installed on global.

First, you need to install the dependencies :

```
$ npm install
```

Then, to enter dev-mode, just use the `serve` task of Gulp :

```
$ gulp serve
```

To republish the styleguide, you can use the `deploy` task:

```
$ gulp deploy
```

## Production

On the production server, we need the minified version of the assets without sourcemaps or anything. To build the production files, run:

```bash
$ gulp build --production
# or if you want to work with production files:
$ gulp serve --production
```


## Contribute

Our workflow is based on the [Git Flow](http://danielkummer.github.io/git-flow-cheatsheet/) principles. Basically, anytime you want to add a new feature, you have to create a `feature/my-awesome-feature` branch and when you estimate that it's over, you have to create a pull request to `dev`.

:warning: **A pull request should never be merged by yourself. The code will be reviewed by one or more other developers on the project !**

When all the features we want are merged on `dev`, the whole team will decide to publish a new release on `master` (always with `$ git flow`).

:bulb: Don't forget that nothing is directly commited on `dev`!

## Styleguide operation

Based on our [Toolbox](http://frontend.github.io/toolbox/).

:warning: **It's highly recommended to read the Toolbox doc before contributing to this project**

The hierarchy is defined by Brad Frost's [atomic design](http://bradfrost.com/blog/post/atomic-web-design/) principles. To summarize, we use atoms to compose molecules, molecules to compose organisms and organisms to compose templates.
