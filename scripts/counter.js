fetch("https://a.bigfluffy.monster/counter/id/pigsarepink")
    .then((response) => response.json())
    .then(data => {
        document.getElementById('vc').innerHTML = "Views - "+data.Users;
    })
    .catch(function() {document.getElementById("vc").innerHTML = "Err.";});