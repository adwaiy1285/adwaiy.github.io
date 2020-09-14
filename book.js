	function cost() 
	{
		var day= document.getElementById("stay").value;
		var room= document.getElementById("rooms").value;
		var type= document.getElementById("hotel").value;
		var ac= document.getElementById("AAC").value;
		var x= (day*room*type)+(room*ac);
		window.confirm("Total cost is ₹"+x+". Would you like to proceed to Payment?");
	}



