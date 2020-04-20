const fs = require('fs')

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
        console.log("New Note Added")
    }else {
        console.log('Note title taken!')
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
    addNotes: addNotes
}