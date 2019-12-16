import Vue from 'vue';
import weex from 'weex-vue-render';
import mixins from '@/mixins'

// register global mixins.
Vue.mixin(mixins)
weex.init(Vue);


