"use strict";
//errors on things like leaked global, where variable is used but not declared, thus attaching to the window object
let data = 0;
const processData = () => {
    data = "123454431";
};
processData();
console.log(data);



let addNotes = (newTitle, newBody) => {
    let now = moment().valueOf();
    notes.push({
        id: uuidv4(), //assign a uuid so we can identify that note later
        title: newTitle,
        body: newBody,
        createdAt: now,
        updatedAt: now,
    });
    saveNotes(notes);
};


//render notes based on filters
let renderNotes = (notes, filters) => {
    const notesEl = document.querySelector("#notes")
    const filteredNotes = notes.filter((item) => {
        return (
            item.title.toLowerCase().includes(filters.searchText.toLowerCase()) ||
            item.body.toLowerCase().includes(filters.searchText.toLowerCase())
        );
    });

    notesEl.innerHTML = ""; //clear the notes first
    //create elements for just the filtered notes
    if (filteredNotes.length > 0) {
        generateSummaryDom(filteredNotes.length);
        generateNoteDom(filteredNotes);
    } else {

        const emptyMessage = document.createElement('p')
        emptyMessage.textContent = 'No Notes available'
        emptyMessage.classList.add('empty-message')
        notesEl.appendChild(emptyMessage)
    }
};
const sortNotes = (notes, sortBy) => {
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

//generateNoteDOM
let generateNoteDom = (notes) => {
    //add div root, then put checkbox, note and delete button inside
    notes.forEach((note) => {
        let noteEl = document.createElement("a");
        //add checkbox and x button for each div
        let newCheckBox = document.createElement("input");
        let deleteButton = document.createElement("button");
        let textEl = document.createElement("div");

        let statusEl = document.createElement('p')

        newCheckBox.setAttribute("type", "checkbox");
        newCheckBox.checked = true;
        newCheckBox.addEventListener("input", (e) => {
            console.log(note);
        });

        deleteButton.innerText = "x";
        deleteButton.addEventListener("click", (e) => {
            console.log(note);
            removeNote(note);
        });

        textEl.innerText = `${note.title} \: ${note.body}`;
        textEl.classList.add('list-item__title')
            //setup the link
        noteEl.setAttribute("href", `./edit.html#${note.id}`); // add a link to the edit page along with the note id as a the hash
        noteEl.classList.add('list-item') //add all elements to my root div

        statusEl.textContent = ` last edited ${generateLastEdited(note.updatedAt)}`
        statusEl.classList.add('list-item__subtitle')
        console.log(`status is ${status.textContent}`)
            //  noteEl.appendChild(newCheckBox);
        noteEl.appendChild(textEl);
        noteEl.appendChild(statusEl)
            // noteEl.appendChild(deleteButton);
        document.querySelector("#notes").appendChild(noteEl);
    });
};

//generateSummaryDom
let generateSummaryDom = (count) => {
    const noteHead = document.createElement("h2");
    noteHead.textContent = `You have ${count} note${count > 1? 's' : ''}`;
    document.querySelector("#notes").appendChild(noteHead);
};

let generateLastEdited = (noteTime) => {
    return moment(noteTime).fromNow()
}