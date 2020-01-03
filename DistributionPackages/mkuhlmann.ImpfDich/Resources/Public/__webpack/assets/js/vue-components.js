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

window.impf.vueRegisterFaqNeos = (htmlId) => {

	let faq = [];
	let questionsEl = document.querySelectorAll(`#faq_${htmlId} .card`);
	for(let quetionEl of questionsEl) {
		let q = {
			q: quetionEl.children[0].children[0].innerHTML,
			a: quetionEl.children[1].innerHTML
		};
		faq.push(q);
	}

	window.__faq = faq;

	document.querySelector(`#faq_${htmlId}`).remove();
	
	new Vue({
		el: document.querySelector(`#faq_vue_${htmlId}`),
		template: '<Faq />',
		components: { Faq }
	});
};

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