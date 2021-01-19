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
    return newID
}


let removeNote = (noteToRemoveID) => {
    let foundNote = notes.findIndex((element) => element.id == noteToRemoveID);
    if (foundNote != -1) {
        console.log(`Removing ${notes[foundNote].title}`);
        notes.splice(foundNote, 1);
        saveNotes(notes);
    }
    //renderNotes(notes, filters);
};


const sortNotes = (sortBy) => {
    //sort by the last edited time
    if (sortBy === "mostRecent") {
        return notes.sort((a, b) => {
            if (a.updatedAt > b.updatedAt) {
                return -1;
            }
            if (a.updatedAt < b.updatedAt) {
                return 1;
            }
            if (a.updatedAt == b.updatedAt) {
                return 0;
            }
        });
    }
    if (sortBy === "alphabetSort") {
        return notes.sort((a, b) => {
            if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return -1;
            }
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return 1;
            }
            if (a.title.toLowerCase() == b.title.toLowerCase()) {
                return 0;
            }
        });
    }
    if (sortBy === "CreatedFirst") {
        return notes.sort((a, b) => {
            if (a.createdAt > b.createdAt) return -1;
            if (a.createdAt < b.createdAt) return 1;
            if (a.createdAt == b.ctreatedAt) return 0;
        });
    }
};

const updateNote = (id, updates) =>
{
    const note = notes.find((note) => note.id === id)

    if (!note){
        return
    }
    if (typeof updates.title ==='string'){
        note.title = updates.title
        note.updatedAt = moment().valueOf()
    }
    console.log(`body is ${updates.body}`)
    if (typeof updates.body === 'string'){
        note.body = updates.body
        note.updatedAt = moment().valueOf()
    }
    saveNotes()
}

notes = loadNotes();

export {getNotes, createNote, removeNote, sortNotes, saveNotes, updateNote}