import Vue from 'vue';
import Quiz from './vue/Quiz.vue'
import Faq from './vue/Faq.vue'
import SlideUpDown from './vue/SlideUpDown.vue'

if(!window.impf) {
	window.impf = {};
}

window.impf.vueRegisterQuiz = el => {
	new Vue({
		el,
		template: '<Quiz/>',
		components: { Quiz, SlideUpDown }
	});
}

window.impf.vueRegisterFaq = (htmlEl, el) => {
	var faq = [];
	var html = document.querySelector(htmlEl);
	for(var i = 0; i < html.children.length; i++) {
		if(html.children[i].tagName == 'BLOCKQUOTE') {
			var q = {
				q: html.children[i].innerText,
				a: ''
			};
			i++;
			for(; i < html.children.length && html.children[i].tagName != 'BLOCKQUOTE'; i++) {
				q.a += html.children[i].outerHTML;
			}
			i--;

			faq.push(q);
		}
	}
	html.remove();
	window.__faq = faq;
	
	new Vue({
		el,
		template: '<Faq/>',
		components: { Faq }
	});
}