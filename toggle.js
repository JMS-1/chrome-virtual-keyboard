window.addEventListener('load', function() {
	document.getElementById("toggleOn").onclick = function() {
		chrome.runtime.sendMessage({method: "toogleKeyboardOn"}, function(response) {
			window.close();	
		});
	}
	document.getElementById("settings").onclick = function() {
        window.open(chrome.runtime.getURL("options.html"));
	}
	document.getElementById("toggleOff").onclick = function() {
		chrome.runtime.sendMessage({method: "toogleKeyboardOff"}, function(response) {
			window.close();	
		});
	}
	document.getElementById("toggleDemand").onclick = function() {
		chrome.runtime.sendMessage({method: "toogleKeyboardDemand"}, function(response) {
			window.close();	
		});
	}
	document.getElementById("goToUrl").onclick = function() {
		chrome.runtime.sendMessage({method: "openUrlBar"}, function(response) {
			eval(callback)(response.data);
		});
		window.close();
	}
if (localStorage["keyboardEnabled"] == "demand") {
	document.getElementById("toggleDemand").className = "active";
} else if (localStorage["keyboardEnabled"] != "false") {
	document.getElementById("toggleOn").className = "active";
} else {
	document.getElementById("toggleOff").className = "active";
}

}, false);
