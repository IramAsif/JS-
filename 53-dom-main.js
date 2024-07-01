var element;
//element = document.all; 
//element=document.all[16] 
//element = document.head;
element = document.title;
//element = document.body;
//element = document.links;
//element = document.images;
//element = document.forms;
//element = document.doctype;
//element = document.URL;//website ka URL return kr day ga
//element = document.domain;//abhi koi domain name nhi hai is lyay jo opr 127.0.0.1 show hho raha hai wohi return kr day ga
//element = document.baseURI; // ye b domain name return kray ga
//element=document.getElementById("header");
//element=document.getElementsByClassName("header");
//element=document.getElementsByClassName("list")[0]; // kisi b class ka name list rkh kr isko check kr sktay hain
//element=document.getElementsByTagName("ul");

// GET & SET 
//element=document.getElementById("content").innerText; 
//element=document.getElementById("content").innerHTML; // Ye sari html show krwa day ga
//element=document.getElementById("content").getAttribute("id"); // ye id ki value return krday ga 
//element=document.getElementById("content").getAttributeNode("id"); // ye hmain attribute ka name + id ki value sb return kray ga
//element=document.getElementById("header").attributes; 
//element=document.getElementById("header").attributes[1]; 
//element=document.getElementById("header").attributes[1].value; 
//element=document.getElementById("header").attributes[1].name; 
//element=document.getElementById("content").innerHTML="<h1>abcd<h1>"; //related with line #21, is say value set ho gi


//querySelector  &  querySelectorAll
//document.querySelector("#content").innerHTML="<h1>abcd<h1>"; //element= ko hta k b likh sktay hain
//element=document.querySelector("#content").getAttribute("class");
//element=document.getElementsByClassName("list");
//element=document.querySelectorAll(".list"); 


//CSS Syling Methods
//element=document.querySelector("#header").style.border;// border value return kray ga
//element=document.querySelector("#header").style.backgroundColor ="pink";
//element=document.querySelector("#header").style.Color ="black"; // will change the color of text 
//element=document.querySelector("#header").className="abc xyz";// secomd class ko priority zyada milti hai 
//element=document.querySelector("#header").className;
//element=document.querySelector("#header").classList="abc xyz";// secomd class ko priority zyada milti hai 
//element=document.querySelector("#header").classList; // related to the above line for displaying the list
//element=document.querySelector("#header").classList.add("uvw","pqr");
//element=document.querySelector("#header").classList; //related to the above line for displaying the list
//element=document.querySelector("#header").classList.remove("pqr");
//element=document.querySelector("#header").classList; //related to the above line for displaying the list

console.log(element);
