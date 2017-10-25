const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

let win

function createWindow () {
  app.server = require(__dirname + "/www");
  win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: 'file://' + __dirname + '/dist/favicon.ico'
  })

  win.loadURL('http://localhost:3000/')

  win.focus()

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})