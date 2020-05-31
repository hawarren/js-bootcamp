//create the following functions
//get saved notes
let getSavedNotes = function() {
    let storedNotes = localStorage.getItem('storedNotes')
    if (storedNotes == null)
        return []
    let JSONstoredNotes = JSON.parse(storedNotes)
    return JSONstoredNotes;
};

let addNotes = function(newTitle, newBody) {
    notes.push({
        id: uuidv4(), //assign a uuid so we can identify that note later
        title: newTitle,
        body: newBody
    });
    saveNotes(notes)
};
//Save notes
let saveNotes = function(notesToSave) {
    let notesJSON = JSON.stringify(notesToSave)
    localStorage.setItem('storedNotes', notesJSON)
};
//render notes based on filters
let renderNotes = function(notes, filters) {
    const filteredNotes = notes.filter(function(item) {
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

//generateNoteDOM
let generateNoteDom = function(notes) {
    //add div root, then put checkbox, note and delete button inside
    notes.forEach(function(note) {
        let rootDiv = document.createElement('div')
            //add checkbox and x button for each div
        let newCheckBox = document.createElement('input');
        newCheckBox.setAttribute('type', 'checkbox')
            // if (note.)
        newCheckBox.checked = true
        newCheckBox.addEventListener('input', function(e) {
            console.log(note)
        })
        let deleteButton = document.createElement('button')
        deleteButton.innerText = 'x'
        deleteButton.addEventListener('click', function(e) {
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
let generateSummaryDom = function(count) {
    const noteHead = document.createElement("h2");
    noteHead.textContent = `You have ${count} notes`;
    document.querySelector("#notes").appendChild(noteHead);
};
let removeNote = function(noteToRemove) {
    let foundNote = notes.findIndex(function(element) {
        console.log(`${element.id}, compared to ${noteToRemove.id}`)
        return element.id == noteToRemove.id
    })
    if (foundNote != -1) {
        console.log(`Removing ${notes[foundNote].title}`)
        notes.splice(foundNote, 1)
    }
    saveNotes(notes)

    renderNotes(notes, filters)
}