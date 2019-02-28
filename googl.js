function makeShort()
{
	var longUrl = document.getElementById("resulturl").value;
	var request = gapi.client.urlshortener.url.insert({
		'resource': 
		{
			'longUrl': longUrl
		}
	});
	request.execute(function (response) {
		if (response.id != null) {
			str = response.id;
			document.getElementById("googl").value = str;
		} else {
			alert("ERROR: creating short url n" + response.error);
		}
	});
}

function load() {
	gapi.client.setApiKey('AIzaSyDoE0akrBvl1f3IIRLpuXpVBDsxTfa4ceg');
	gapi.client.load('urlshortener', 'v1', function () {
		document.getElementById("googl").innerHTML = '';
	});
}
window.onload = load; //]]>
