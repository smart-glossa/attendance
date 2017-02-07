$(document).ready(function(){
	

$(document).on('click','#add',function(){
	var  userId  =$('#uId').val();
	var  name = $('#name').val();
	var address = $('#addr').val();
	var contactNo = $('#conNo').val();
	var email = $('#email').val();
	 if (userId === "") {
		    $('#userId').focus().css('outline-color', 'red');
		    return false;
		  }
	 if (name === "") {
		    $('#name').focus().css('outline-color', 'red');
		    return false;
		  }
	 if (address === "") {
		    $('#addr').focus().css('outline-color', 'red');
		    return false;
		  }
	 if (contactNo === "") {
		    $('#conNo').focus().css('outline-color', 'red');
		    return false;
		  }
	 if (email === "") {
		    $('#email').focus().css('outline-color', 'red');
		    return false;
		  }
	 var url = "/attendance/User?operation=addUser&uId="+userId+"&name="+name+"&addr="+address+"&conNo="+contactNo+"&email="+email+"";
	  $.ajax({
		url:url,
		type:'POST'
	})
	.done(function(result){
		alert("Added Successfully");
	})
	.fail(function(result){
		alert(result);
	})
 });
$(document).on('click','#update',function(){
	var userId = $('#userId').val();
	var  name = $('#name').val();
	var address = $('#addr').val();
	var contactNo = $('#conNo').val();
	var email = $('#email').val();
	var url = "/attendance/User?operation=userUpdate&userId="+ userId +"&name=" + name +"&contactNo="+ contactNo +"&email=" +email;
	$.ajax({
		url:url,
		type:'POST'
	})
	.done(function(result){
		alert("Updated Successfully");
		
	})
	.fail(function(result){
		alert(result);
	})
});
function getAll(){
	var url = "/attendance/User?operation=getAll";
    $.ajax({
            url: url,
            type: 'POST'
        })
        .done(function(result) {
            var res = JSON.parse(result);
            var length = res.length;
            var table = '<table>'
            table += '<tr><th>UserId</th><th>UserId</th><th>Name</th><th>Address</th><th>ContactNumber</th><th>EmailId</tr></tr>';
            for (i = 0; i < length; i++) {
                table += '<tr class="row">'
                table += '<td>' + res[i].userId + '</td>';	
                table += '<td>' + res[i].name + '</td>';
                table += '<td>' + res[i].address + '</td>';
                table += '<td>' + res[i].contactNo + '</td>';
                table += '<td>' + res[i].email + '</td>';
            }
            table += '</table>';
            $('.getAllCus')[0].innerHTML = table;
        })
        .fail(function(result) {
            alert(result);
        })
 }
$(document).on('keyup','#uId', function(){
	var uId = $('#uId').val();
	if(uId !== ""){
	var url = "/attendance/User?operation=getOne&userId="+uId+"";
	$.ajax({
		url: url,
		type: 'POST'
	})
	.done(function(result){
		var res = JSON.parse(result);
		$('#uId').val(res.userId);
		$('#name').val(res.name);
		$('#addr').val(res.address);
		$('#conNo').val(res.conNo);
		$('#email').val(res.email);
	})
	.fail(function(result) {
        alert(result);
      })
	}else{
		$('#uIs').val("");
		$('#name').val("");
		$('#addr').val("");
		$('#conNo').val("");
		$('#email').val("");
	}
	})
});