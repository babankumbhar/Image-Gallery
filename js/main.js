$(document).ready(function() {
	
   var imgData = [
		{title: 'Title-1', desc: 'description-1', url: 'img/banner_1.jpg'},
		{title: 'Title-2', desc: 'description-2', url: 'img/banner_2.jpg'},
		{title: 'Title-3', desc: 'description-3', url: 'img/banner_3.jpg'},
		{title: 'Title-4', desc: 'description-4', url: 'img/banner_4.jpg'},
		{title: 'Title-5', desc: 'description-5', url: 'img/p1.jpg'},
		{title: 'Title-6', desc: 'description-6', url: 'img/p2.jpg'},
		{title: 'Title-7', desc: 'description-7', url: 'img/p3.jpg'},
		{title: 'Title-8', desc: 'description-8', url: 'img/p4.jpg'},
		{title: 'Title-9', desc: 'description-9', url: 'img/residential.jpg'},
		
	];
	
	//Constants for tab slider    
	var sliderView = $("#thumbSlider");
    var move = 100;
    var sliderLimit = 0;
	var imageHtml = '';
	
	//For creating thumbnail images from image data
	$.each(imgData, function(idx, imgObj){
		sliderLimit += 100;
		imageHtml += "<li><img src='"+ imgObj.url +"' class='thumb_img' title='"+ imgObj.title +"' desc='"+ imgObj.desc +"'></li>";
	});
	
	sliderLimit = sliderLimit - 700;
	sliderLimit = -sliderLimit;
	
	
    $("#thumbSlider").html(imageHtml).css("left" , "0px");
	
	$("#originalImg").attr('src', imgData[0].url);
	$(".img_desc").html(imgData[0].desc);
	$(".img_title").html(imgData[0].title);
	
	$("#thumbPrev").click(function(){	
		var currentPosition = parseInt(sliderView.css("left"));
        if (currentPosition < 0) {
            sliderView.stop(false, true).animate({left: "+=" + move}, {duration: 100})
        }
	});
	

	$("#thumbNext").click(function(){
		 var currentPosition = parseInt(sliderView.css("left"));
        if (currentPosition >= sliderLimit) {
            sliderView.stop(false, true).animate({left: "-=" + move}, {duration: 100})
        }
	});
	
	 $(".thumb_img").click(function(){
		$("#originalImg").attr('src', $(this).attr('src'));
		$(".img_title").html($(this).attr('title'));
		$(".img_desc").html($(this).attr('desc'));
		 $(".active").removeClass("active"); 
        $(this).addClass('active');
	});
	
});