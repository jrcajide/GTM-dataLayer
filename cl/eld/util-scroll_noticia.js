<script>


jQuery(function($) {
    // Debug flag
    var debugMode = false;

    // Default time delay before checking location
    var callBackTime = 100;

    // # px before tracking a reader
    var readerLocation = 150;

    // Set some flags for tracking & execution
    var timer = 0;
    var scroller = false;
    var endContent = false;
    var didComplete = false;

    // Set some time variables to calculate reading time
    var startTime = new Date();
    var beginning = startTime.getTime();
    var totalTime = 0;
    
    // Get some information about the current page
    var pageTitle = document.title;

    // Check the location and track user
    function trackLocation() {
        bottom = $(window).height() + $(window).scrollTop();
        height = $(document).height();

	// If user starts to scroll send an event
	if (bottom > readerLocation && !scroller) {
		currentTime = new Date();
		scrollStart = currentTime.getTime();
		timeToScroll = Math.round((scrollStart - beginning) / 1000);	
		scroller = true;
	}

	// If user has hit the bottom of the results, then send an event
	if (bottom >= $('#content').scrollTop() + $('#content').innerHeight() && !endContent) {
		currentTime = new Date();
		contentScrollEnd = currentTime.getTime();
		timeToContentEnd = Math.round((contentScrollEnd - scrollStart) / 1000);
		if (!debugMode) {
			if (timeToContentEnd < {{CFG_tiemposcroll}}) {
				dataLayer.push({'customVarKey':'scroller-type', 'customVarValue':'scanner'});
			} else {
				dataLayer.push({'customVarKey':'scroller-type', 'customVarValue':'reader'});
			}
			dataLayer.push({'event':'scroll', 'eventAction':'Final de Página', 'eventLabel':'{{url path}}', 'eventValue':timeToContentEnd});
		} else {
			alert('end content section '+ timeToContentEnd);
		}
		endContent = true;
		didComplete = true;
	}
	}


    // Track the scrolling and track location
    $(window).scroll(function() {
        if (timer) {
            clearTimeout(timer);
        }

        // Use a buffer so we don't call trackLocation too often.
        timer = setTimeout(trackLocation, callBackTime);
    });
});





</script>