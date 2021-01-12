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