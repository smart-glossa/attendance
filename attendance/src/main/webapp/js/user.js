$(document).ready(function(){
	
$(document).on('click','#add',function(){
	var  userId  =$('#uId').val();
	var  name = $('#name').val();
	var address = $('#addr').val();
	var contactNo = $('#conNo').val();
	var email = $('#email').val();
	 if (userId === "") {
		    $('#uId').focus().css('outline-color', 'red');
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
	var userId = $('#uId').val();
	var name = $('#name').val();
	var address = $('#addr').val();
	var contactNo = $('#conNo').val();
	var email = $('#email').val();
	var url = "/attendance/User?operation=userUpdate&uId=" +userId+ "&name=" +name+ "&addr=" +address+ "&conNo=" +contactNo+ "&email=" +email+"";
	$.ajax({
		url:url,
		type:'POST'
	})
	.done(function(result){
		getAll();
		$('#uIs').val("");
		$('#name').val("");
		$('#addr').val("");
		$('#conNo').val("");
		$('#email').val("");
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
                table += '<td><img src="images/delete.jpg" height="35px" width="35px" class="delete"></td></tr>';
            }
            table += '</table>';
            $('.getAll')[0].innerHTML = table;
        })
        .fail(function(result) {
            alert(result);
        })
 }
$(document).on('keyup','#uId', function(){
	var uId = $('#uId').val();
	if(uId !== ""){
	var url = "/attendance/User?operation=getOne&uId="+uId+"";
	$.ajax({
		url: url,
		type: 'POST'
	})
	.done(function(result){
		var res = JSON.parse(result);
		//$('#uId').val(res.userId);
		$('#name').val(res.name);
		$('#addr').val(res.address);
		$('#conNo').val(res.conNo);
		$('#email').val(res.email);
	})
	.fail(function(result) {
        alert(result);
      })
	}else{
		$('#name').val("");
		$('#addr').val("");
		$('#conNo').val("");
		$('#email').val("");
	}
	})
	$(document).on('click', '.delete', function() {
		  var td = $(this).parent();
		  var tr = td.parent();
		  var userId = tr.children()[0].innerHTML;
		  var url = "/Finance/finance?operation=deleteCustomer&userId=" + userId +"";
		  $.ajax({
		      url: url,
		      type: 'POST'
		    })
		    .done(function(result) {
		      tr.remove();
		    });
		  fail(function(result) {
		    alert(result);
		  })
		});
});