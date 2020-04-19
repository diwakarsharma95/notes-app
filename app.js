const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes')

//Customize yargs versions
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function(){
        console.log('Adding a new note!')
    }
})

//Create Remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log('Removing an existing note!')
    }
})

// Create list command
yargs.command({
    command: "list",
    describe: "list your notes",
    handler: function(){
        console.log("Listing out all notes")
    }
})

//Create Read commnad
yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function(){
        console.log("Reading a notes")
    }
})

//add, remove, read, list
console.log(yargs.argv)
