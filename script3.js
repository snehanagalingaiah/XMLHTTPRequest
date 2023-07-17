//create an instance of the request
let xhr = new XMLHttpRequest();



//open your request
xhr.open("GET", "https://restcountries.com/v3.1/all");

//onload event
xhr.onload = function(){
    console.log("****Response received****")
    let data= JSON.parse(this.responseText) //converted data into object format
    console.log(data)


 //loop through the data   

 for(let i=0; i<data.length; i++)
 {
    console.log(`
    Country name : ${data[i].name.common}
    Region : ${data[i].region}
    Subregion : ${data[i].subregion} 
    Population : ${data[i].population} `);  
    
 }
}


//send the request
xhr.send();






