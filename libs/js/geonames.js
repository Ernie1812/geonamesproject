$(window).on('load', function () { 
    if ($('#preloader').length) { 
		    $('#preloader').delay(100).fadeOut('slow', function () { 
		        $(this).remove(); 
    	    }); 
	    } 
	}); 

//Weather JS
$('#weatherRun').click(function() {
		
	$.ajax({
		url: "libs/php/getWeatherInfo.php",
		type: 'POST',
		dataType: 'json',
		data: {
			lat: $('#citySelect option:selected').data("latitude"),
			lng: $('#citySelect option:selected').data("longitude"),
		},
		success: function(result) {

			console.log(result);

			if (result.status.name == "ok") {
				$("#weatherResults").show();
				$("#countyResults").hide();
				$("#timeZoneResults").hide();
				
				$('#datetime').html(result['data']['datetime']);
				$('#temperature').html(result['data']['temperature']);
				$('#weatherCondition').html(result['data']['weatherCondition']);
				$('#clouds').html(result['data']['clouds']);

			}

		},
		error: function(jqXHR, textStatus, errorThrown) {
			// your error code
			console.log(textStatus, errorThrown);
		}
	}); 
});

//State Counties JS
$('#countyRun').click(function() {
		
	$.ajax({
		url: "libs/php/getStateCountyInfo.php",
		type: 'POST',
		dataType: 'json',
		data: {
			geonameId: $('#selState').val(),
		},
		success: function(result) {

			console.log(result);

			if (result.status.name == "ok") {
				$("#countyResults").show();
				$("#weatherResults").hide();
				$("#timeZoneResults").hide();
				
				$("#counties").empty();
				for (var i=0; i<result.data.length; i++){
					
					$("#counties").append("<li>" + result.data[i].toponymName + "</li>");
				
				}
			}
		
		},
		error: function(jqXHR, textStatus, errorThrown) {
			// your error code
			console.log(textStatus, errorThrown);
		}
	}); 


});

//Timezone JS
$('#timezoneRun').click(function() {
		
	$.ajax({
		url: "libs/php/getTimeZoneInfo.php",
		type: 'POST',
		dataType: 'json',
		data: {
			lat: $('#cityTimeSelect option:selected').data("latitude"),
			lng: $('#cityTimeSelect option:selected').data("longitude"),
		},
		success: function(result) {

			console.log(result);

			if (result.status.name == "ok") {
				$("#timeZoneResults").show();
				$("#countyResults").hide();
				$("#weatherResults").hide();

				$('#timezoneId').html(result['data']['timezoneId']);
				$('#sunrise').html(result['data']['sunrise']);
				$('#sunset').html(result['data']['sunset']);
			
			}
		
		},
		error: function(jqXHR, textStatus, errorThrown) {
			// your error code
			console.log(textStatus, errorThrown);
		}
	}); 
});

//
