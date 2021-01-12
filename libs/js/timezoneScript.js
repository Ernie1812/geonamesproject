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