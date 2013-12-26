function checkCage(){
	$('img').each(function(){
		if($(this).attr('img') != 'http://www.dreadcentral.com/img/news/jun11/niccage.jpg'){
			$(this).attr('src', 'http://www.dreadcentral.com/img/news/jun11/niccage.jpg');
		}
	});
}
$(document).ready(function(){
	checkCage();
	setInterval(checkCage, 500);
})