// Day-7 Array Task-a     (JavaScript file)
// The corresponding html file is named as Day7ArrayTask_a.html

console.log("------------------Day-7 Array Task-a------------------")


// Step-1: To create an xhr (XMLHttpRequest) object
var theRequestIs = new XMLHttpRequest()

// Step-2: To open connection
// The link is taken from the Day-4 class
theReqUrl = 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json';

theRequestIs.open('GET',theReqUrl)
theRequestIs.send()
theRequestIs.onload = function(){
    var ContrDat = JSON.parse(theRequestIs.response);
    AsainCountries = ContrDat.filter((x)=>x.region==='Asia');
    console.log(AsainCountries)
}