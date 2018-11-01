import Vue from 'vue';
import Quiz from './vue/Quiz.vue'
import SlideUpDown from './vue/SlideUpDown.vue'

new Vue({
	el: '#vue-quiz',
	template: '<Quiz/>',
	components: { Quiz, SlideUpDown }
});
