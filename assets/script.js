fetch("/api/views")
.then((response) => response.text())
.then((response) => {document.getElementById("vc").innerHTML =  "Views - "+response;})
.catch(function() {document.getElementById("vc").innerHTML = "Err.";});