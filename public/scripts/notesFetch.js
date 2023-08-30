let noteTitle;
let noteText;











function createNote (note) {
    fetch('/api/notes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(note) 
    })
}