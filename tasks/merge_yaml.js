/*
 * grunt-merge-yaml
 * https://github.com/Swaven/grunt-merge-yaml
 *
 * Copyright (c) 2016 Swaven
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.registerMultiTask('merge_yaml', 'Merge together 2 yaml files', function() {

    /* Creates and return an object as a combination of given objects
     * @o1: object from base config
     * @o2: object from target config
    */
    function explore(o1, o2){
      if (typeof o2 === 'undefined') { // ignore undefined values
        return o1;
      }
      else if (o2 === null) { // null values overwrite the base value
        return null;
      }
      else if (Array.isArray(o2)){ // Array overwrite base value
        return o2;
      }
      else if (typeof o2 === 'object'){ // Object is completed
        var res = {}, keys = Object.keys(o1);
        for (var i = 0; i< keys.length; i++){
          var key = keys[i];
          res[key] = explore(o1[key], o2[key]);
        }
        return res;
      }
      else { // primitive values overwrite base value
        return o2;
      }
    }

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
    });

    var fs = require('fs'),
        yaml = require('js-yaml'),
        baseFile = this.data.base,
        target = this.data.target,
        dest = this.data.dest,
        // file = 'config/config.' + target + '.yml',
        baseConfig = grunt.file.readYAML(baseFile),
        config = grunt.file.readYAML(target),
        mergedConfig = explore(baseConfig, config),
        mergedContent = yaml.safeDump(mergedConfig); // Serialize object as YAML

        grunt.file.write('config/config.compiled.yml', mergedContent, {encoding: 'utf-8'});
  });
};
