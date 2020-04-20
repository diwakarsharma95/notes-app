const fs = require('fs')
const chalk = require('chalk');

getNotes = () => 'My notes...'

const addNotes = (title, body) => {
    const notes = loadNotes()
    //to check the duplicacy of title
    const duplicateNotes = notes.filter(function(individualNote){
        return individualNote.title === title
    })
    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse.bold("New Note Added"))
    }else {
        console.log(chalk.red.inverse.bold('Note title taken!'))
    }
}
const removeNotes = title => {
    const notes = loadNotes()
    const notesToKeep = notes.filter(function(individualNote){
        return individualNote.title !== title
    })
    saveNotes(notesToKeep)
    if(notesToKeep.length === notes.length){
        console.log(chalk.red.inverse.bold("No note found!"))
    }else{
        console.log(chalk.green.inverse.bold("Note removed"))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes
}