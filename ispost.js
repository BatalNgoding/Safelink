//<![CDATA[

$(document).ready(function(){
	$.urlParam = function(name){
		var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
		if (results==null){
			return null;
		}
		else{
			return decodeURI(results[1]) || 0;
		}
	}		

	var getlink = $("#getlink"),
	gotolink = $("#gotolink"),
	timer = $('#timer');

	if ($.urlParam('o') != null){
		timer.pietimer({
			timerSeconds: 5,
			color: '#03a9f4',
			fill: false,
			showPercentage: true,
			callback: function() {
				getlink.prop('disabled',false);
				getlink.removeClass('hidden');
				timer.addClass('hidden');
			}
		});
	}

	function gotolinkcountdown(){
		var countDown = 3;
		gotolink.removeClass('hidden');
		var x = setInterval(function() {

			var distance = countDown -= 1;
			gotolink.html('<span class="glyphicon glyphicon-time"></span> Plase Wait...');

			if (distance < 0) {
				clearInterval(x);
				gotolink.prop('disabled',false);
				gotolink.html('<span class="glyphicon glyphicon-ok-sign"></span> Go to Link');

				gotolink.on("click",function(){
					var realurl = aesCrypto.decrypt(convertstr($.urlParam('o')),convertstr('root'));
					//var realurl = decode64($.urlParam('o'));
					//$('#debug').html(realurl);
					//window.location.href='/p/go-to.html?u='+realurl;
					window.location.href=realurl;
				});
			}
		}, 1000);
	}				

	var request = false;
	getlink.click(function() {
		if (request == false) {
			gotolinkcountdown();
			request = true;
		}
		$('html, body').animate({
			scrollTop: eval(gotolink.offset().top - 10)
		}, 100);
	});	



	fuckAdBlock.on(true, function() {
		$("#adbs").html("Adblock Detected");
		$("#adb").removeClass('hidden');
	}).on(false, function() {});
})
//]]>
