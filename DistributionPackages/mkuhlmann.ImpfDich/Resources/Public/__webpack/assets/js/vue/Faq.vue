<template>
	<div>
		<div class="field">
			<p class="control is-expanded has-icons-left">
				<input class="input" type="text" v-model="filterString" placeholder="Filtern ...">
				<span class="icon is-left">
					<i class="mdi mdi-magnify"></i>
				</span>
			</p>
		</div>
		<div v-for="q in filteredQuestions">
			<div class="card has-margin-bottom-md">
				<a class="card-header" v-on:click="q.open = !q.open">
					<p class="card-header-title" v-html="q.q"></p>						
					<span class="card-header-icon" v-show="filteredQuestions.length >= 4">
						<span class="icon">
							<i class="mdi" v-bind:class="{'mdi-chevron-down': !q.open, 'mdi-chevron-up': q.open }"></i>
						</span>
					</span>
				</a>
				<div class="card-content" v-html="q.a" v-show="q.open || filteredQuestions.length < 4"></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() { return {
		questions: [],
		filteredQuestions: [],
		filterString: ''
	} },
	created () {
		var self = this;
		window.__faq.forEach(function(item) {
			item.open = false;
			self.questions.push(item);
		});
		this.filteredQuestions = this.questions;

		function escapeRegex(s) {
			return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
		}

		this.$watch('filterString', function() {
			var filterString = this.filterString;
			if(filterString == '') {
				this.filteredQuestions = this.questions;
				return;
			}

			var re = new RegExp(escapeRegex(filterString), 'ig');
			this.filteredQuestions = this.questions.filter(function (q) {
				return q.q.match(re) !== null || q.a.match(re) !== null;
			});
		});
	}
}
</script>