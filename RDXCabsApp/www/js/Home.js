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
		 var xhttp = new XMLHttpRequest();
		  xhttp.onreadystatechange = function() {
		    if (xhttp.readyState == 4 && xhttp.status == 200) {
		    	alert(xhttp.responseXML);
//		      document.getElementById("demo").innerHTML = xhttp.responseText;
		    }
		  };
		  xhttp.open("GET", "http://testrdx.com:8080/RDXCabs/Login", true);
	      xhttp.send();
		//window.location.href="Navigation.html";
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