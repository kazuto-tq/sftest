require("@rails/ujs").start()
require("turbolinks").start()
// require("@rails/activestorage").start()
// require("channels")

import 'bootstrap';
import '../stylesheets/application';
import Vue from 'vue';
import TurbolinksAdapter from 'vue-turbolinks';
import '../axios_config';

import SessionForm from '../sessions/form';

Vue.use(TurbolinksAdapter);

document.addEventListener('turbolinks:load', () => {
  let apps = [
    { elem: '#session-form', object: SessionForm }
  ];

  let props = window.jsProps || {};
  apps.forEach((app) => {
    if($(app.elem).length) {
      if(app.object.render) { // テンプレートあり
        new Vue({ el: app.elem, render: h => h(app.object, { props }) });
      }
      else { // HTMLをテンプレートに
        new Vue(app.object).$mount(app.elem);
      }
    }
  });
});
