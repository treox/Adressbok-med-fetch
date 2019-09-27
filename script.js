// Ge åtkomst till element:
var body1 = document.getElementById('body-1');

// fetch som hämtar JSON data:
fetch('adressbok-1.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(adressbok) {
        console.log(adressbok);

        // Lägger till <ul> och ger åtkomst till <ul>:
        body1.insertAdjacentHTML('afterbegin', '<ul id="lista-1">Lista</ul>');
        var lista1 = document.getElementById('lista-1');

        // Sorterar JSON data efter ålder:
        adressbok.sort(function (a, b) {
            return a.age - b.age;
          });
        
        console.log(adressbok);

        // Lägger till sorterad JSON data i <ul>:
        liElement = "";
        for (i=0; i<adressbok.length; i++) {
            liElement += "<li> <span class=\"sp\"> Förnamn: </span> " + adressbok[i].firstname + " <span class=\"sp\"> Efternamn: </span> " + adressbok[i].lastname + " <span class=\"sp\"> Epost: </span> " + adressbok[i].email + " </li>";
        } // Slut på loop
        lista1.innerHTML = liElement;
    })
    // Catch funktion som fångar upp fel om data inte laddas korrekt:
    .catch(function(err) {
        console.log(JSON.stringify(err));
    });


