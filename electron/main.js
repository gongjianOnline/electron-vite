const {app,BrowserWindow} = require("electron");
const path = require("path");
const NODE_ENV = process.env.NODE_ENV;
class AppWindow extends BrowserWindow{
  constructor(config,fileLocation){
    const basicConfig = {
      width:800,
      height:600,
      webPreferences:{
        nodeIntegration:true,
        contextIsolation: false
      }
    }
    const finalConfig = {...basicConfig,...config}
    super(finalConfig)
    this.loadURL(
      NODE_ENV === "development"?
      "http://localhost:3000":
      `file://${path.join(__dirname,"../dist/index.html")}`
    )
    if(NODE_ENV === "development"){
      this.webContents.openDevTools();
    }
    this.once("ready-to-show",()=>{
      this.show()
    })
  }
}
app.on("ready",()=>{
  mainWindow = new AppWindow({
    width:800,
    height:600,
    autoHideMenuBar : true,
    titleBarStyle:"hidden",
  })
})