<?php

	session_start();

	/* USER-AGENTS
	================================================== */
	function check_user_agent ( $type = NULL ) {
			$user_agent = strtolower ( $_SERVER['HTTP_USER_AGENT'] );
			if ( $type == 'bot' ) {
					// matches popular bots
					if ( preg_match ( "/googlebot|adsbot|yahooseeker|yahoobot|msnbot|watchmouse|pingdom\.com|feedfetcher-google/", $user_agent ) ) {
							return true;
							// watchmouse|pingdom\.com are "uptime services"
					}
			} else if ( $type == 'browser' ) {
					// matches core browser types
					if ( preg_match ( "/mozilla\/|opera\//", $user_agent ) ) {
							return true;
					}
			} else if ( $type == 'mobile' ) {
					// matches popular mobile devices that have small screens and/or touch inputs
					// mobile devices have regional trends; some of these will have varying popularity in Europe, Asia, and America
					// detailed demographics are unknown, and South America, the Pacific Islands, and Africa trends might not be represented, here
					if ( preg_match ( "/phone|iphone|itouch|ipod|symbian|android|htc_|htc-|palmos|blackberry|opera mini|iemobile|windows ce|nokia|fennec|hiptop|kindle|mot |mot-|webos\/|samsung|sonyericsson|^sie-|nintendo/", $user_agent ) ) {
							// these are the most common
							return true;
					} else if ( preg_match ( "/mobile|pda;|avantgo|eudoraweb|minimo|netfront|brew|teleca|lg;|lge |wap;| wap /", $user_agent ) ) {
							// these are less common, and might not be worth checking
							return true;
					}
			}
			return false;
	}


	$ismobile = check_user_agent('mobile');
	if($ismobile) 
	{
		echo 
		'
				<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;"/>
				<link id="my-nav" rel="stylesheet" href="../CSS/mobilenavigation.css"/>
		';
	}
	else
	{
		echo
		'
			<link id="my-nav" rel="stylesheet" href="../CSS/navigation.css"/>
		';
	}
?>
<html>
	<link rel="shortcut icon" type="image/x-icon" href="/images/best-resting.ico" />
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta name="description" content="">
	<meta name="keywords" content="">
	<meta name="author" content="Derek Crew">
	<link rel="stylesheet" href="../CSS/layout.css"/>
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
	<script src="//code.jquery.com/jquery-1.10.2.js"></script>
	<script src="//code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
	<script src="/JS/primaryjava.js"></script>
</html>