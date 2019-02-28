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

	if ($.urlParam('u') != null){

      var realurl = $.urlParam('u');
      

	}
	else{
		 var realurl = '/';
	}
    window.location.href=realurl;
})
//]]>
