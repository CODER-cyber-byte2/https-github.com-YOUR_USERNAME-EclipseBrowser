const {
session
}=require("electron");


function setupSecurity(){


session.defaultSession.webRequest
.onBeforeRequest(

(details,callback)=>{


const blocked=[

"doubleclick.net",
"google-analytics.com",
"ads."

];


let block =
blocked.some(

x=>details.url.includes(x)

);


callback({

cancel:block

});


}

);


}


module.exports={
setupSecurity
};