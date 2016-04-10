$(document).ready(function(){
	$("#login").click(function() {
		window.location.href="SignIn.html";
	});

	$("#signUp").click(function() {
		window.location.href="SignUp.html"
	});
	
	$("#finalSignUp").click(function(){
		alert("Thanks for signing up");
		window.location.href="Navigation.html";
	});
	
	$("#finalSignIn").click(function(){
		//Need to explore through CORS for accessing a different domain
		window.location.href="Navigation.html";
	});
	
	$("#profile").click(function(){
		window.location.href="profile.html";
	});
	
	$("#bookCab").click(function(){
		window.location.href="bookCab.html";
	});
	
	$("#myCash").click(function() {
		window.location.href="MyCash.html";
	})
});