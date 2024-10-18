const newNoteBtn = document.querySelector('.item-note__btn')
const notes = document.querySelector('.notes')

newNoteBtn.addEventListener('click',addNewNote)

function addNewNote() {
  const note = document.createElement('div')
  note.classList.add('notes__item', 'item-note')

  note.innerHTML = `
    <textarea class="item-note__text" id="noteText" placeholder="Empty note"></textarea>
  `

  note.addEventListener('dblclick', removeNote)
  notes.prepend(note)
}

function removeNote() {
  this.removeEventListener('dblclick', removeNote)
  this.remove()
}