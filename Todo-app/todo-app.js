const stringToMatch = 'the'
myList = document.querySelectorAll('p')
myList.forEach(element => {    
    if (element.textContent.includes(stringToMatch))
    {
        element.remove();
    }
});
