$(document).ready(function(){
	$(document).on('click', '#addAtten', function() {
		  var userId = $('#uId').val();
		  var date = $('#date').val();
		  var present = $("input[name='present']:checked").val();
		  var reason = $('#reason').val();
		  if(userId == "")
			{
			$("#uId").focus().css("outline-color","#e53935");
			return;
			}
		if(date == ""){
			$("#date").focus().css("outline-color","#e53935");
			return;
		}
		if(present == ""){
			$("#present").focus().css("outline-color","#e53935");
			return;
		}
		if(reason == ""){
			$("#reason").focus().css("outline-color","#e53935");
			return;
		}
			var url="/attendance/Attendance?operation=addAttendance&uId="+userId+"&date="+date+"&present="+present+"&reason="+reason+"";
			$("input[type=text],checkbox").val("");
			$.ajax({
				url: url,
				type: 'POST'
			})
			.done(function(result){
				alert("added successfully");
			}).fail(function(result){
				alert(result);
			});
	});
	function getAll()
	{
		var url = "/attendance/Attendance?operation=getAllAtendance";
		$.ajax({
			url : url,
			type : 'POST'
		}).done(function(result) {
			var result = JSON.parse(result);
			var table = "<table border=1px solid black >"
				table += "<tr><th>User Id</th><th>Date</th><th>Present</th><th>Reason</th></tr>"
			for (var i = 0; i < result.length; i++) {
				table += "<tr>"
			    table += "<td>" + result[i].userId + "</td>"
	            table += "<td>" + result[i].date + "</td>"
				var Atten = result[i].presents;
				if(Atten==1){
					var aa = "Present";
				}else{
					var aa = "Absent";
				}
				table += "<td>" + aa + "</td>"
				table += "</tr>"

			}
			table += "</table>";
			$(".attandance")[0].innerHTML = table;
		});
	}
});
