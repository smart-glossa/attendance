$(document).ready(function(){
	//getAll();
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
		/*if(reason == ""){
			$("#reason").focus().css("outline-color","#e53935");
			return;
		}*/
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
	$(document).on("click","#getAll",function(){
		var url = "/attendance/Attendance?operation=getAllAttendance";
		$.ajax({
			url : url,
			type : 'POST'
		}).done(function(result) {
			var res = JSON.parse(result);
			 var length = res.length;
			var table = "<table border=3px>";
				table += "<tr><th>User Id</th><th>Date</th><th>Present</th><th>Reason</th></tr>"
			for (var i = 0; i < res.length; i++) {
				table += "<tr>"
			    table += "<td>" + res[i].userId + "</td>";
	            table += "<td>" + res[i].date + "</td>";
	            var Atten = res[i].present;
				if(Atten == true){
					var aa = "Present";
				}else{
					var aa = "Absent";
				}
				table += "<td>" + aa + "</td>";
				table += "<td>" + res[i].reason +"<td>";
				table += "</tr>"
			}
			table += "</table>";
			$(".use")[0].innerHTML= table;
		});
	})
	
	$(document).on('click','#subpresent',function(){
		var fdate = $("#fDate").val();
		var tdate = $('#tDate').val();
		var url = "/attendance/Attendance?operation=getPresents&fromdate="+ fdate +"&todate="+ tdate +"";
		$.ajax({
			url : url,
			type : 'POST'
		}).done(function(result){
			var result = JSON.parse(result);
			var table = "<table class='tab1' border=3px>";
				table += "<tr><th>UserId</th><th>Date</th><th>Present</th><th>reason</th></tr>";	
			for (var i = 0;i< result.length;i++){
				table +="<tr>";
				table += "<td>" + result[i].uId + "</td>";
				table += "<td>" + result[i].date + "</td>";
				 var Atten = result[i].present;
					if(Atten == true){
						var aa = "Present";
					}else{
						var aa = "Absent";
					}
					table += "<td>" + aa + "</td>";
				table += "<td>" + result[i].reason + "</td>";
				table += "</tr>";
			}
			table += "</table>";
			$(".use")[0].innerHTML = table;
		});
	});
});
