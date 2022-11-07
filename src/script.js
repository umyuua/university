function buttonClicked(){
    // put variable on user input
    var country = document.getElementById("country").value;
    var category = document.getElementById("category").value;
    fetch(`http://universities.hipolabs.com/search?name=${category}&country=${country}`)
    .then((response) => response.json())
    .then((data) => {
        
        console.log(data);
        if (data.length === 0) { 
            console.log("Array is empty!")
            // alert user to enter accurate input as result cannot be found
            alert("No result found. \nREMINDER : Kindly recheck your spelling. \nFor non-Malaysia & Indonesia country enter 'University'. \nFor Malaysia enter 'Universiti'. \nFor Indonesia enter 'Universitas'.") 
        }
        else{
            for(var i=8; i<13; i++){

                //print out 5 names of university in entered country
                console.log(data[i].name);
                var universitylist = document.createElement("p");
                var universitydata = data[i]
                universitylist.innerHTML = `${universitydata.name}`+"<br><br><br>"
                document.getElementById("list").appendChild(universitylist)

                //print out link of the universities
                console.log(data[i].web_pages);
                var universitylink = document.createElement("a");
                var universitydata = data[i]
                universitylink.innerHTML = `${universitydata.web_pages}`+"<br><br><br>";
                universitylink.setAttribute('href',`${universitydata.web_pages}`)
                universitylink.setAttribute('target', '_blank');
                document.getElementById("link").appendChild(universitylink)

            }
        }
    })
}

function crud(){
    window.location.href="crud.html";
}