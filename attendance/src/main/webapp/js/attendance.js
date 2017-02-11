function user(){
	var user = "";
	user += "<div class=\"user\">";
	user += "<h2> ADD USER <\/h2>";
	user += "<table>";
	user += "<tr>";
	user += "<td>User Id*:<\/td>";
	user += "<td><input type=\"text\" id=\"uId\" placeholder=\"UserId\"<\/td>";
	user += "<\/tr>"
    user += "<tr>";
	user += "<td>Name*:<\/td>";
	user += "<td><input type=\"text\" id=\"name\" placeholder=\"Name\"<\/td>";
	user += "<\/tr>";
	user += "<tr>";
	user += "<td>Address<\/td>";
	user += "<td><input type=\"text\" id=\"addr\" placeholder=\"Address\"<\/td>";
	user += "<\/tr>";
	user += "<tr>";
	user += "<td>Contact Number*:<\/td>";
	user += "<td><input type=\"text\" id=\"conNo\" placeholder=\"Contact Number\"<\/td>";
	user += "<\/tr>";
	user += "<tr>";
	user += "<td>Email Id<\/td>";
	user += "<td><input type=\"text\" id=\"email\" placeholder=\"Email Id\"<\/td>";
	user += "<\/tr>";
	user += "<tr>";
	user += "<td><input type=\"submit\" value=\"Add\" id=\"add\">";
	user += "<input type=\"submit\" value=\"Update\" id=\"update\"><\/td>";
	user += "<\/tr>";
	user += "<\/table>";
	user += "<\/div>";
	user += "<div class=\"getAllAtten\"><\/div>";
	$('.use')[0].innerHTML = user;
}
function attendance(){
	var atten = "";
	atten += "<div class=\"atten\">";
	atten += "<h2> ADD ATTENDANCE <\/h2>";
	atten += "<table>";
	atten += "<tr>";
	atten += "<td>User Id*:<\/td>";
	atten += "<td><input type=\"text\" id=\"uId\" placeholder=\"User Id\"<\/td>";
	atten += "<\/tr>";
	atten += "<tr>";
	atten += "<td>Date<\/td>";
	atten += "<td><input class=\"textbox-n\" type=\"text\" onfocus=\"(this.type='date')\"  id=\"date\" placeholder=\"Date\"<\/td>"
	atten += "<\/tr>";
	atten += "<tr>";
	atten += "<td>Present <input type=\"checkbox\" name=\"present\" id=\"present\" value=\"present\"><\/td>";
	atten += "<td>Absent <input type=\"checkbox\" name=\"present\"  id=\"present\" value=\"absent\"><\/td>";
	atten += "<\/tr>";
	atten += "<tr>";
	atten += "<td>Reason*:<\/td>";
	atten += "<td><input type=\"text\" id=\"reason\" placeholder=\"Reason\"<\/td>";
	atten += "<\/tr>";
	atten += "<tr>";
	atten += "<td><input type=\"submit\" value=\"Add\" id=\"addAtten\">";
	atten += "<input type=\"submit\" value=\"Update\" id=\"updateAtten\"><\/td>";
	atten += "<\/tr>";
	atten += "<\/table>";
	atten += "<\/div>";
	$('.use')[0].innerHTML = atten;
}
function present(){
	var present = "";
	present += "<div class=\"present\">"; 
	present += "<h2>PRESENTS AND ABSENT<\/h2>";
	present += "<table>";
	present += "<tr>";
	present += "<td>From Date<\/td>";
	present += "<td><input class=\"textbox-n\" type=\"text\" onfocus=\"(this.type='date')\" id=\"fDate\"><\/td>";
	present += "<\/tr>";
	present += "<tr>";
	present += "<td>To Date<\/td>";
	present += "<td><input class=\"textbox-n\" type=\"text\" onfocus=\"(this.type='date')\" id=\"tDate\"> <\/td>";
	present += "<\/tr>";
	present += "<tr>";
	present += "<td><input type=\"submit\"  id=\"subpresent\">";
	present += "<\/tr>";
	present += "<\/table>";
	present += "<\/div>";
	$('.use')[0].innerHTML = present;
			
}