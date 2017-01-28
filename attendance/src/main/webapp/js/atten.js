$(document).ready(function(){
	$(document).on('click', '#addAtten', function() {
		  var userId = $('#uId').val();
		  var date = $('#date').val();
		  var present = $("input[name='attandance']:checked").val();
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
			var url="/attendance/Attendance?operation=addAttendance&userId="+uId+"&date="+date+"&present="+present+"&reason="+reason;
			$("input[type=text],checkbox").val("");
			$.ajax({
				url: url,
				type: 'POST'
			})
			.done(function(result){
				alert(result);
			}).fail(function(result){
				alert(result);
			});
	});
});
