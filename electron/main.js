const {
app,
BrowserWindow,
session
}=require("electron");

const path=require("path");

const {
setupSecurity
}=require("./security/privacy");


let mainWindow;


function createBrowser(){

mainWindow=
new BrowserWindow({

width:1600,
height:1000,

backgroundColor:"#101010",

webPreferences:{

preload:
path.join(
__dirname,
"preload.js"
),

contextIsolation:true

}

});


mainWindow.loadFile(
"dist/index.html"
);


setupSecurity();

}



app.whenReady()
.then(createBrowser);


app.on(
"window-all-closed",
()=>app.quit()
);