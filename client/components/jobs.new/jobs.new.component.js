const controller = require('./jobs.new.controller.js');
const template = require('./jobs.new.html');

const component = {
  controller: controller,
  template: template
};

angular
  .module('projectThree')
  .component('jobsNew', component);
