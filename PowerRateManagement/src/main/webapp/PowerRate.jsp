<%@page import="com.Power"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Power Rate Management</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.6.0.min.js"></script>
<script src="Components/Power.js"></script>
</head>
<body>
<div class="container"><div class="row"><div class="col-6"> 
<h1>Power Rate Management </h1>
<form id="formPower" name="formPower" >
 Number of Units: 
 <input id="numberOfUnits" name="numberOfUnits" type="text" 
 class="form-control form-control-sm">
 <br> Domestic Price per Unit: 
 <input id="DomesticPrice" name="DomesticPrice" type="text" 
 class="form-control form-control-sm">
 <br> Commercial Price per Unit: 
 <input id="CommercialPrice" name="CommercialPrice" type="text" 
 class="form-control form-control-sm">
 <br> Date: 
 <input id="Date" name="Date" type="text" 
 class="form-control form-control-sm">
 <br>
 <input id="btnSave" name="btnSave" type="button" value="Save" 
 class="btn btn-primary">
 <input type="hidden" id="hidPowerIDSave" 
 name="hidPowerIDSave" value="">
</form>
<div id="alertSuccess" class="alert alert-success"></div>
<div id="alertError" class="alert alert-danger"></div>
<br>
<div id="divPowerGrid">
 <%
Power powerObj = new Power(); 
 out.print(powerObj.readPowers()); 
 %>
</div>
</div> </div> </div> 

</body>
</html>