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