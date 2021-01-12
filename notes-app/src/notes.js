import uuidv4 from 'uuid/v4'
import moment from 'moment'
let notes = []


let loadNotes = () => {
    try {
        let storedNotes = localStorage.getItem("storedNotes");
        return storedNotes ? JSON.parse(storedNotes) : [];
    } catch (e) {
        return [];
    }
};

//Save notes
let saveNotes = () => {
    if (!notes) {
        console.log("No notes to save");
        return;
    }
    let now = moment().valueOf();
    let notesJSON = JSON.stringify(notes);
    localStorage.setItem("storedNotes", notesJSON);
};

//expose notes from module
const getNotes = () => notes
const createNote = () => {
    let newID = uuidv4()
    let now = moment().valueOf()
    console.log(`logging note with timestamp ${moment(now).format('MMM Do YYYY')}`)
    notes.push({
        id: newID, //assign a uuid so we can identify that note later
        title: '',
        body: '',
        createdAt: now,
        updatedAt: now
    });
    saveNotes()
}


notes = loadNotes();

export {getNotes, createNote}