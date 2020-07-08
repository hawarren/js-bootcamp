//create the following functions
//get saved notes
let getSavedNotes = () => {
    let storedNotes = localStorage.getItem('storedNotes')
    if (storedNotes == "undefined" || storedNotes == null)
        return []
    let JSONstoredNotes = JSON.parse(storedNotes)
    return JSONstoredNotes;
};

let addNotes = (newTitle, newBody) => {
    let now = moment().valueOf()
    notes.push({
        id: uuidv4(), //assign a uuid so we can identify that note later
        title: newTitle,
        body: newBody,
        createdAt: now,
        updatedAt: now
    });
    saveNotes(notes)
};
//Save notes
let saveNotes = (notesToSave) => {
    if (notesToSave == undefined) {
        console.log('No notes to save')
        return
    }
    let now = moment().valueOf()
    let notesJSON = JSON.stringify(notesToSave)
    localStorage.setItem('storedNotes', notesJSON)
};
//render notes based on filters
let renderNotes = (notes, filters) => {
    const filteredNotes = notes.filter((item) => {
        return (
            item.title.toLowerCase().includes(filters.searchText.toLowerCase()) ||
            item.body.toLowerCase().includes(filters.searchText.toLowerCase())
        );
    });
    document.querySelector("#notes").innerHTML = ""; //clear the notes first
    //create elements for just the filtered notes

    generateSummaryDom(filteredNotes.length);
    generateNoteDom(filteredNotes);

};
const sortNotes = (notes, sortBy) => {

    //sort by the last edited time
    if (sortBy === 'mostRecent') {
        return notes.sort((a, b) => {
            if (a.updatedAt > b.updatedAt) {
                return -1
            }
            if (a.updatedAt < b.updatedAt) {
                return 1
            }
            if (a.updatedAt == b.updatedAt) {
                return 0
            }
        })
    }
    if (sortBy === 'alphabetSort') {
        return notes.sort((a, b) => {
            if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return -1
            }
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return 1
            }
            if (a.title.toLowerCase() == b.title.toLowerCase()) {
                return 0
            }
        })
    }
    if (sortBy === 'CreatedFirst') {
        return notes.sort((a, b) => {
            if (a.createdAt > b.createdAt)
                return -1
            if (a.createdAt < b.createdAt)
                return 1
            if (a.createdAt == b.ctreatedAt)
                return 0
        })

    }
}

//generateNoteDOM
let generateNoteDom = (notes) => {
    //add div root, then put checkbox, note and delete button inside
    notes.forEach((note) => {
        let rootDiv = document.createElement('div')
            //add checkbox and x button for each div
        let newCheckBox = document.createElement('input');
        newCheckBox.setAttribute('type', 'checkbox')
            // if (note.)
        newCheckBox.checked = true
        newCheckBox.addEventListener('input', (e) => {
            console.log(note)
        })
        let deleteButton = document.createElement('button')
        deleteButton.innerText = 'x'
        deleteButton.addEventListener('click', (e) => {
            console.log(note)
            removeNote(note)
        })
        let mySpan = document.createElement('a')
        mySpan.innerText = `${note.title} \: ${note.body}`

        mySpan.setAttribute('href', `./edit.html#${note.id}`) // add a link to the edit page along with the note id as a the hash
            //add all elements to my root div
        rootDiv.appendChild(newCheckBox)
        rootDiv.appendChild(mySpan)
        rootDiv.appendChild(deleteButton)
        document.querySelector("#notes").appendChild(rootDiv);
    });
};
//generateSummaryDom
let generateSummaryDom = (count) => {
    const noteHead = document.createElement("h2");
    noteHead.textContent = `You have ${count} notes`;
    document.querySelector("#notes").appendChild(noteHead);
};

let removeNote = (noteToRemove) => {
    let foundNote = notes.findIndex((note) => element.id == noteToRemove.id)
    if (foundNote != -1) {
        console.log(`Removing ${notes[foundNote].title}`)
        notes.splice(foundNote, 1)
    }
    saveNotes(notes)
    renderNotes(notes, filters)
}