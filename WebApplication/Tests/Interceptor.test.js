const { default: AllureReporter } = require("@wdio/allure-reporter");

describe("Interceptor Test Demo",async()=>{
it("Should be able to capture search requests",async()=>{
browser.url('https://www.amazon.in/');
browser.setupInterceptor();
await (await $('#twotabsearchtextbox')).setValue('mobile');
await browser.pause(3000);
//Assertion to check API returning 200
await browser.expectRequest('GET','https://completion.amazon.in/api/2017/suggestions',200);

//Capture response
let searchSuggestions=await browser.getRequest('GET','https://completion.amazon.in/api/2017/suggestions');
//console.log('Search suggestions request',searchSuggestions);
//console.log('Response Headers', await searchSuggestions[3].response.headers);
//console.log('Response body',await searchSuggestions[3].response.body);
//console.log('Search suggestions',await searchSuggestions[3].response.body.suggestions[1].value);
 var searchResultsArray=await searchSuggestions[3].response.body.suggestions;
 await searchResultsArray.forEach(element => {
       console.log(element.value);
       AllureReporter.addStep(`${element.value}`);
    })
 });

})