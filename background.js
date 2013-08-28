chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if (localStorage[request.name])
			sendResponse({authkey: localStorage[request.name]});
	})