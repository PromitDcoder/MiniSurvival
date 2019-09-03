const { app, BrowserWindow} =  require('electron');

function createWindow() {
    //Create the browser window
    let win = new BrowserWindow({
        width: 522,
        height: 522,
        //frame: false,
        webPreferences: {
            nodeIntegration: true
        }
    });

    //Loading the index.html
    win.loadFile('index.html');

    //Open the DevTools
    // win.webContents.openDevTools();

    //RemoveMenu
    win.setMenuBarVisibility(false);

    //Emitted when the window is closed
    win.on('closed', () => {
        win = null;
    });
}

//Creates window when electron initialization finished
app.on('ready', createWindow);

//Quit when all windows are closed
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.quit();
    }
});

//Recreating windows in macOS
app.on('activate', () => {
    if(win === null) {
        createWindow();
    }
});