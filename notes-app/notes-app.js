//DOM - Document Object Model (a document that is modelled like an object, with methods and properties)
//the object is called "document"
console.log('This is from my html index from a different file')
const p = document.querySelector('p') //gets first element with matching tag
const ps = document.querySelectorAll('p')
console.log(p)
ps.forEach(r => {
    r.textContent = '*****'
    //console.log(p.textContent)
    //p.remove();
});
document.querySelector('#create-note').addEventListener('click',function(event){
    event.target.textContent = 'This button was clicked'
})