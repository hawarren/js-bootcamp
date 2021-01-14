import {getNotes, createNote, removeNote, updateNote } from './notes.js'
import {getFilters, setFilters} from './filters.js'
// console.log('index.js')
// // console.log(getNotes())
// // createNote()
// removeNote("30586ce3-6cd6-4cac-ac73-3b71e50fc451")
// updateNote("bc8fad9a-f993-4994-880c-04645cc2274b", {title: "Test update"})
// updateNote("df3e3c42-2842-4964-9cfa-544ee5d568c8", {title: "no title", body: "Test body update"})
// console.log(getNotes())


console.log(getFilters())
setFilters({
    searchText: 'Office',
    sortBy: 'byCreated'

})
console.log(getFilters())