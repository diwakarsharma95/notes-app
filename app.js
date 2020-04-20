const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

//Customize yargs versions
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNotes(argv.title, argv.body)
    }
})

//Create Remove command
yargs.command({
    command: 'remove',
    describe: 'Command to remove a note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string' 
        }
    },
    handler(argv){
        notes.removeNotes(argv.title)
    }
})

// Create list command
yargs.command({
    command: "list",
    describe: "list your notes",
    handler(){
        console.log("Listing out all notes")
    }
})

//Create Read commnad
yargs.command({
    command: 'read',
    describe: 'read a note',
    handler(){
        console.log("Reading a notes")
    }
})

yargs.parse()
