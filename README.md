# grunt-merge-yaml

> Merge together 2 yaml files

## Getting Started
This plugin requires Grunt `>=0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-merge-yaml --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-merge-yaml');
```

## The "merge_yaml" task

### Overview
In your project's Gruntfile, add a section named `merge_yaml` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  merge_yaml: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

No option available.

### Usage Examples

```js
grunt.initConfig({
  merge_yaml: {
    options: {},
    target: {
      base: 'base.yml',
      target: 'otherFile.yml',
      dest: 'combined.yml'
    }
  },
});
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

* 2016-03-08: [v0.1.0](https://github.com/Swaven/grunt-merge-yaml/releases/tag/v0.1.0): first release
