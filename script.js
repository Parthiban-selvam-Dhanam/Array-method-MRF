// What is XML-HTTP request??
// XML-HTTP request are used to interact with the server via API
// 1 step: create a XHR Object:
var request =  new XMLHttpRequest();
//2 nd Step: Open a Request
// the purpose is which API, and Which HTTP method
// this will take 2 important String 
//  first is HTTP method as well as API
request.open("GET","https://restcountries.com/v3.1/all");
// 3rd Step: initiate a request
request.send();
//4 th step: Once the data successfully loaded from the server
// if the status code from  the server is of 200
request.onload = function(){
    var res = JSON.parse(request.response);
    console.log(res);
    var asia = res.filter((ele)=>ele.continents=="Asia");
    console.log(asia);
    var popu = res.filter((ele)=>ele.population<200000);
    console.log(popu);
    res.forEach((ele) => console.log(ele.name));
    res.forEach((ele) => console.log(ele.capital));
    res.forEach((ele) => console.log(ele.flag));
    var totalpopu = res.reduce((acc,cv)=>acc+cv.population,0);
    console.log(totalpopu);
    var UScurrency = res.filter((ele)=>ele?.currencies?.USD);
    console.log(UScurrency);
    };
