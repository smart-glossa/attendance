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
	$('.user')[0].innerHTML = user;
}
function attendance(){
	var atten = "";
	atten += "<div class=\"atten\">";
	atten += "<h2> ADD ATTENDANCE <\/h2>";
	atten += "<table>";
	atten += "<tr>";
	atten += "<td>User Id*:<\/td>";
	atten += "<td>"
	atten += "<\/tr>";
	atten += "<tr>";
	atten += "<td>Date<\/td>";
	atten += "<td><input type=\"date\" id=\"date\" placeholder=\"Date\"<\/td>"
	atten += "<\/tr>";
	atten += "<tr>";
	atten += "<td>Present<\/td>";
	atten += "<td><input type=\"text\" id=\"date\" placeholder=\"Present\"<\/td>";
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
	$('.atten')[0].innerHTML = atten;
}