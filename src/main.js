const { app, BrowserWindow } = require('electron');
const fs = require('fs');
const path = require('path')

var btnCreate = document.getElementById('btnCreate')
var btnRead = document.getElementById('btnRead')
var btnDelete = document.getElementById('btnDelete')
var btnClose = document.getElementById('btnClose')
var btnUpdate = document.getElementById('btnUpdate')
//retrieve data from user input in crud form
var fileName = document.getElementById('fileName')
var firstchoice = document.getElementById('firstchoice')
var url1 = document.getElementById('url1')
var secondchoice = document.getElementById('secondchoice')
var url2 = document.getElementById('url2')
var thirdchoice =  document.getElementById('thirdchoice')
var url3 = document.getElementById('url3')

let pathName = path.join(__dirname, 'Files')

btnCreate.addEventListener('click', function(){  //creating text file when user click CREATE button
  let file = path.join(pathName, fileName.value)
  // contents that will be saved to the txt file
  let contents = "University choice : "+"\n\n 1." + firstchoice.value + "\n URL: "+url1.value + "\n\n 2." + secondchoice.value +"\n URL: "+url2.value +"\n\n 3."+  thirdchoice.value + "\n URL:" + url3.value 
  fs.writeFile(file, contents, function(err){ 
    if(err){
      return console.log(err)
    }
    var txtfile = document.getElementById("fileName").value
    //alert user that file is created
    alert(txtfile + " text file was created")    
    console.log("The file was created")
  
  })
  
})

btnRead.addEventListener('click', function(){  //read contents of the created text file
  let file = path.join(pathName, fileName.value)
  fs.readFile(file, function(err){
    if(err){
      return console.log(err)
    }
    //read user input & user is not able to type
    firstchoice = data;
    url1 = data2;
    secondchoice = data3;
    url2 = data3;
    thirdchoice = data4;
    url3 = data5;
    console.log("The file was read!")
  })
})

btnUpdate.addEventListener('click', function(){  //creating text file when user click CREATE button
  let file = path.join(pathName, fileName.value)
  // contents that will be updated to the txt file
  let contents = "University choice : "+"\n\n 1." + firstchoice.value + "\n URL: "+url1.value + "\n\n 2." + secondchoice.value +"\n URL: "+url2.value +"\n\n 3."+  thirdchoice.value + "\n URL:" + url3.value 
  fs.writeFile(file, contents, function(err){ 
    if(err){
      return console.log(err)
    }
    var txtfile = document.getElementById("fileName").value
    alert(txtfile + " text file was updated") 
    //alert user that file is updated 
    console.log("The file was updated")
  
  })
  
})


btnDelete.addEventListener('click', function(){  
  let file = path.join(pathName, fileName.value)
 
  fs.unlink(file, function(err){ 
    if(err){
      return console.log(err)
    }
    // empty all fields to delete data in txt file
    fileName.value = ""
    firstchoice.value = ""
    url1.value = ""
    secondchoice.value=""
    url2.value = ""
    thirdchoice.value=""
    url3.value=""
    console.log("The file was deleted!")
  })
  
})


// function when exit button is clicked = return to index  
btnClose.addEventListener('click',close);

function close(){
    window.location.href="index.html"
}