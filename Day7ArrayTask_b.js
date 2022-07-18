// Day-7 Array Task-b     (JavaScript file)
// The corresponding html file is named as Day7ArrayTask_b.html

console.log("------------------Day-7 Array Task-b------------------")


// Step-1: To create an xhr (XMLHttpRequest) object
var theRequestIs = new XMLHttpRequest()

// Step-2: To open connection
// The link is taken from the Day-4 class
theReqUrl = 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json';

theRequestIs.open('GET',theReqUrl)
theRequestIs.send()
theRequestIs.onload = function(){
    var ContrDat = JSON.parse(theRequestIs.response);
    Below2LCountries = ContrDat.filter((x)=>x.population<200000);
    console.log(Below2LCountries)
}