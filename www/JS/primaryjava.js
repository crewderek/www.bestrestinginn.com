var smallNavigation = false;
var showNavigation = false;
var showContact = false;
navigationBackgroundColor = "#9D2DFF";

$(document).ready(function(){
	
	if($(document).width() < 750)
	{
		$('#my-nav').attr('href','/CSS/mobilenavigation.css')
		smallNavigation = true;
	}
	else if($(document).width() < 1250)
	{
		$('#my-nav').attr('href','/CSS/smallnavigation.css')
		smallNavigation = true;
	}
	
	//Navigation hover
	$('.nav-highlight').hover(function () {
		var isAnimating = $(this).is(':animated');
		if(!isAnimating)
		{
			window.myBackColor = $(this).css("backgroundColor");
		}
		$(this).stop();
		//alert(isAnimating);
		$(this).animate({backgroundColor: navigationBackgroundColor}, 'fast');
	},
	function () {
		$(this).stop();
		$(this).animate({backgroundColor: window.myBackColor}, 'slow');
	});
	
	//Mobile navigation slide down
	$( "#mobile-nav" ).click(function() {
		if(showNavigation == false)
		{
			$( "#website-navigation" ).slideDown( "slow", function() {
			// Animation complete.
			});
			showNavigation = true;;
			//alert(showNavigation);
		}
		else
		{
			$( "#website-navigation" ).slideUp( "slow", function() {
			// Animation complete.
			});
			showNavigation = false;
		}
	});

});

window.onresize = function(event) 
{
	if($(document).width() < 750)
	{
		//alert("working");
		$('#my-nav').attr('href','/CSS/mobilenavigation.css')
			$( "#website-navigation" ).slideUp( "slow", function() {
			// Animation complete.
			});
	}
	else if($(document).width() < 1250)
	{
		$('#my-nav').attr('href','/CSS/smallnavigation.css')
			$( "#website-navigation" ).slideDown( "slow", function() {
			// Animation complete.
			});
	}
	else
	{
		$('#my-nav').attr('href','/CSS/navigation.css')
			$( "#website-navigation" ).slideDown( "slow", function() {
			// Animation complete.
			});
	}
	//alert(showNavigation);
};


function ChangeContent(content)
{
	contentArray = Array('home-content', 'room-rates-content', 'about-us-content', 'contact-us-content', 'photos-content');

	for(i = 0; i < contentArray.length; i++)
	{
		document.getElementById(contentArray[i]).style.display = "none";
	}
	
	document.getElementById(content).style.display = "block";
}


function ImageView (image)
{
	imageView = document.getElementById('image-viewer-image');

//	alert(image.src);
	
	marginTop = (innerHeight / 2) - (image.offsetHeight / 2);
	
	document.getElementById('image-viewer').style.display = "block";
	imageView.innerHTML = "<button id='image-close' onclick='ImageClose()' >X</button><img id='viewing-image' src='" + image.src + "' style='margin-top:50px;' />";
	
//	alert(document.getElementById('me').offsetWidth);
	myMargin = (innerWidth / 2) - (document.getElementById('viewing-image').offsetWidth / 2);
	topMargin = (innerHeight / 2) - (document.getElementById('viewing-image').offsetHeight / 2);

	document.getElementById('viewing-image').style.marginLeft = myMargin;
	document.getElementById('viewing-image').style.marginTop = topMargin;
}

function ImageClose()
{

	document.getElementById('image-viewer').style.display = "none";

}






