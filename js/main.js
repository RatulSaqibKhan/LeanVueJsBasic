new Vue({
	el : "#app",
	data : {
		greetings : "Hello World!",
		user : "Ratul Saqib Khan",
		city : "Dhaka"
	},
	methods : {
		changeGreetings : function () {
			this.greetings = this.greetings === "Hello World!" ? "What's up?" : "Hello World!";
		}
	}
});