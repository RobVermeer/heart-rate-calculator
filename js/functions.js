;(function($){
	var $age = $("#age"),
		$age_val = $(".age"),
		$maxrate = $("#maxrate"),
		$maxrate_val = $(".maxrate"),
		$recovery = $(".bar-info"),
		$recovery_max = $(".recovery"),
		$temperate = $(".bar-success"),
		$temperate_min = $(".temperate-min"),
		$temperate_max = $(".temperate"),
		$aerobic = $(".bar-warning"),
		$aerobic_min = $(".aerobic-min"),
		$aerobic_max = $(".aerobic"),
		$anaerobic = $(".bar-danger"),
		$anaerobic_min = $(".anaerobic-min");
		$anaerobic_max = $(".anaerobic");
	
	$age_val.html($age.val());
	$age.on("change", function() {
		var max_rate = 220 - $age.val();
		$age_val.html($age.val());
		$maxrate.val(max_rate).trigger("change");
	});

	$maxrate_val.html($maxrate.val());
	$maxrate.on("change", function() {
		$maxrate_val.html($maxrate.val());
		change_heart_zones($maxrate.val());
	});
	
	function change_heart_zones(max) {
		var recovery = max * 0.60,
			temperate = max * 0.75,
			aerobic = max * 0.89,
			anaerobic = max;
		
		$recovery.css({width: (recovery / 230 * 100) + "%"});
		$recovery_max.html(Math.round(recovery));
		
		$temperate.css({width: (temperate / 230 * 100) - (recovery / 230 * 100) + "%"});
		$temperate_min.html(Math.round(recovery + 1));
		$temperate_max.html(Math.round(temperate));
		
		$aerobic.css({width: (aerobic / 230 * 100) - (temperate / 230 * 100) + "%"});
		$aerobic_min.html(Math.round(temperate + 1));
		$aerobic_max.html(Math.round(aerobic));
		
		$anaerobic.css({width: (anaerobic / 230 * 100) - (aerobic / 230 * 100) + "%"});
		$anaerobic_min.html(Math.round(aerobic + 1));
		$anaerobic_max.html(Math.round(anaerobic));
	}
})(window.jQuery);
