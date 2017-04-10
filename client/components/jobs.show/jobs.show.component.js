const controller = require('./jobs.show.controller.js');
const template = require('./jobs.show.html');

const component = {
  controller: controller,
  template: template
};

angular
  .module('projectThree')
  .component('jobsShow', component);
