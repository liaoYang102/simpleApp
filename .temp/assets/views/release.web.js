import Vue from 'vue';
import weex from 'weex-vue-render';
import mixins from '@/mixins'

// register global mixins.
Vue.mixin(mixins)
weex.init(Vue);



const App = require('..\\..\\..\\src\\assets\\views\\release.vue');
new Vue(Vue.util.extend({el: '#root'}, App));
