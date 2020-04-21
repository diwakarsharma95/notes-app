const fs = require('fs')
const chalk = require('chalk');

const addNotes = (title, body) => {
    const notes = loadNotes()
    //to check the duplicacy of title
    const duplicateNote = notes.find((individualNote) => individualNote.title === title)
    if(!duplicateNote){
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
const readNotes = (title) => {
    const notes = loadNotes()
    const findNote = notes.find((individualNote) => individualNote.title === title)
    if(findNote){
        console.log(chalk.blue.bold(`${findNote.title}`))
        debugger
        console.log(findNote.body)
    }else{
        console.log(chalk.bold.red("No Note Found"))
    }
    
}
const removeNotes = title => {
    const notes = loadNotes()
    const notesToKeep = notes.filter(individualNote => individualNote.title !== title)
    saveNotes(notesToKeep)
    if(notesToKeep.length === notes.length){
        console.log(chalk.red.inverse.bold("No note found!"))
    }else{
        console.log(chalk.green.inverse.bold("Note removed"))
    }
}
const listNotes = () => {
    console.log(chalk.blue.bold("Your Notes"))
    const notes = loadNotes()
    notes.forEach(element => {
        console.log(chalk.yellow(`->${element.title}`))
    });
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
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
}