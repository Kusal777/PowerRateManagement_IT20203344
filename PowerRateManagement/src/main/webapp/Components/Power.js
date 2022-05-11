$(document).on("click", "#btnSave", function(event)
{ 
// Clear alerts---------------------
 $("#alertSuccess").text(""); 
 $("#alertSuccess").hide(); 
 $("#alertError").text(""); 
 $("#alertError").hide(); 
// Form validation-------------------
var status = validatePowerForm(); 
if (status != true) 
 { 
 $("#alertError").text(status); 
 $("#alertError").show(); 
 return; 
 } 
// If valid------------------------
var type = ($("#hidPowerIDSave").val() == "") ? "POST" : "PUT"; 
 $.ajax( 
 { 
 url : "PowerAPI", 
 type : type, 
 data : $("#formPower").serialize(), 
 dataType : "text", 
 complete : function(response, status) 
 { 
 onPowerSaveComplete(response.responseText, status); 
 } 
 }); 
});

function onPowerSaveComplete(response, status)
{ 
if (status == "success") 
 { 
 var resultSet = JSON.parse(response); 
 if (resultSet.status.trim() == "success") 
 { 
 $("#alertSuccess").text("Successfully saved."); 
 $("#alertSuccess").show(); 
 $("#divItemsGrid").html(resultSet.data); 
 } else if (resultSet.status.trim() == "error") 
 { 
 $("#alertError").text(resultSet.data); 
 $("#alertError").show(); 
 } 
 } else if (status == "error") 
 { 
 $("#alertError").text("Error while saving."); 
 $("#alertError").show(); 
 } else
 { 
 $("#alertError").text("Unknown error while saving.."); 
 $("#alertError").show(); 
 }
$("#hidPowerIDSave").val(""); 
$("#formPower")[0].reset(); 
}


// UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event)
		{ 
		$("#hidPowerIDSave").val($(this).data("powerid")); 
		 $("#numberOfUnits").val($(this).closest("tr").find('td:eq(0)').text()); 
		 $("#DomesticPrice").val($(this).closest("tr").find('td:eq(1)').text()); 
		 $("#CommercialPrice").val($(this).closest("tr").find('td:eq(2)').text()); 
		 $("#Date").val($(this).closest("tr").find('td:eq(3)').text()); 
		});




$(document).on("click", ".btnRemove", function(event)
		{ 
		 $.ajax( 
		 { 
		 url : "PowerAPI", 
		 type : "DELETE", 
		 data : "rateID =" + $(this).data("powerid"),
		 dataType : "text", 
		 complete : function(response, status) 
		 { 
		 onPowerDeleteComplete(response.responseText, status); 
		 } 
		 }); 
		});
		
function onPowerDeleteComplete(response, status)
{ 
if (status == "success") 
 { 
 var resultSet = JSON.parse(response); 
 if (resultSet.status.trim() == "success") 
 { 
 $("#alertSuccess").text("Successfully deleted."); 
 $("#alertSuccess").show(); 
 $("#divItemsGrid").html(resultSet.data); 
 } else if (resultSet.status.trim() == "error") 
 { 
 $("#alertError").text(resultSet.data); 
 $("#alertError").show(); 
 } 
 } else if (status == "error") 
 { 
 $("#alertError").text("Error while deleting."); 
 $("#alertError").show(); 
 } else
 { 
 $("#alertError").text("Unknown error while deleting.."); 
 $("#alertError").show(); 
 } 
}


// CLIENT-MODEL================================================================
function validatePowerForm()
{

		// NAME
	if ($("#numberOfUnits").val().trim() == "")
	{
	return "Insert Units.";
}



// PRICE-------------------------------
if ($("#DomesticPrice").val().trim() == ""){
	return "Insert Domestic Price.";
}
		// is numerical value
		var tmpPrice = $("#DomesticPrice").val().trim();
		if (!$.isNumeric(tmpPrice))
	{
	return "Insert a numerical value for Domestic Price.";
	}
if ($("#CommercialPrice").val().trim() == ""){
	return "Insert Commercial Price.";
}
		// is numerical value
		var tmp1Price = $("#CommercialPrice").val().trim();
		if (!$.isNumeric(tmp1Price))
	{
	return "Insert a numerical value for Commercial Price.";
	}
	
	
	var tmp2Price = $("#DomesticPrice").val().trim();
		if (!$.isNumeric(tmp2Price))
	{
	return "Insert a numerical value for Domestic Price.";
	}
		
		
// convert to decimal price
$("#DomesticPrice").val(parseFloat(tmp2Price).toFixed(1));
$("#CommercialPrice").val(parseFloat(tmp1Price).toFixed(2));


	return true;
}