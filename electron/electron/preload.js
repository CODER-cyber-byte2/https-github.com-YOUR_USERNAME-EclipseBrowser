const {
contextBridge
}=require("electron");


contextBridge.exposeInMainWorld(

"EclipseAPI",

{


browser:{
name:
"EclipseBrowser Pro",
version:
"1.0"
},


privacy:{

enabled:true

}


}

);