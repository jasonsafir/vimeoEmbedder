/*!
 *  vimeoEmbedder
 *  @version 1.0
 *  @date August 10, 2013
 *  @author Jason Safir http://jasonsafir.com
 *  Project: https://github.com/jasonsafir/vimeoEmbedder
 *
 *  Extend the customization and styling configuration of the Vimeo video player using jQuery.
 */

/* Usage and Options: */ 
$( document ).ready(function() {
		var vimeoID = "1185749"; // specify Vimeo video ID to be played
		var width = "480"; // define WIDTH of Vimeo video canvas
		var height = "270";	 // define HEIGHT of Vimeo video canvas
		var image = "./img/cover.jpg"; // path of your video placeholder image
		var vimeoColor = "88d6f6"; // specify the color of the video controls
		var playButtonColor= "88d6f6"; // set the background color of play button
		var vimeoBgColor = "f1f1f1"; // set the background color of Vimeo player

		$('#vimeoEmbedder').html("<div id=\"video\" vimeo-color="+ vimeoColor +" vimeo-id="+ vimeoID +"><div class=\"video-container\" style=\"width:"+ width +"px; height:"+ height +"px; background-color:#"+ vimeoBgColor +";\"><span class=\"play\"><span style=\"background-color:#"+ playButtonColor +";\"></span></span> <img alt=\"Play\" src="+ image +" class=\"placeholder\"></div></div>"); // Get the HTML contents of the video player

});

vimeoEmbedder = function(){

	$("#video").each(function(){
		
		var videoObj = $(this),
		videoContainer = $(".video-container", this),
		placeholderImg = videoObj.find(".placeholder"),
		videoColour = "aaaaaa";
	
		if((placeholderImg.attr("height") / placeholderImg.attr("width")) > .57) $(".video-container", this).addClass("fourbythree");
		
		if(videoObj.attr("vimeo-color")) videoColour = videoObj.attr("vimeo-color");
		
		var videoHTML = '<iframe src="http://player.vimeo.com/video/' + videoObj.attr("vimeo-id") + '?title=0&amp;byline=0&amp;portrait=0&amp;color=' + videoColour + '&amp;autoplay=1&amp;api=1" width="'+ placeholderImg.attr("width") +'" height="'+ placeholderImg.attr("height") +'" width="'+ placeholderImg.attr("width") +'" height="'+ placeholderImg.attr("height") +'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
			
		$(".play", this).on("click", function(e){
			videoContainer.empty().append(videoHTML);
		});
	
	});
	
	if($("body").hasClass("home")) $("html").addClass("hideScroll");
	else $("html").removeClass("hideScroll");

}

$(document).ready(function() { vimeoEmbedder(); }); // Initiate the plugin