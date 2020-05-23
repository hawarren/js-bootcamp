//create the following functions
//get saved notes
let getSavedNotes = function() {
    return notes;
};
let addNotes = function(newTitle, newBody) {
    //assign a uuid so we can identify that note later
    notes.push({
        uuid: uuidv4(),
        title: newTitle,
        body: newBody
    });
};
//Save notes
let saveNotes = function(newNote) {
    notes.add(newNote);
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
    debugger;
};

//generateNoteDOM
let generateNoteDom = function(notes) {
    notes.forEach(function(note) {
        const noteEl = document.createElement("p");
        noteEl.textContent = note.title;
        document.querySelector("#notes").appendChild(noteEl);
    });
};
//generateSummaryDom
let generateSummaryDom = function(count) {
    const noteHead = document.createElement("h2");
    noteHead.textContent = `You have ${count} notes`;
    document.querySelector("#notes").appendChild(noteHead);
};