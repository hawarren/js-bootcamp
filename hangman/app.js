//HTTP (HypterText Transfer Protocol)
//Request = What do we want to do
//Response- what was actually done

const exampleFour = new HangManGame("Lipid is a fat", 5);

console.log(exampleFour);

window.addEventListener("keypress", function(e) {
    const guess = String.fromCharCode(e.charCode);
    console.log(`guessing ${guess}`);
    if (exampleFour.status !== 'Playing') {
        return
    }
    exampleFour.makeGuess(String.fromCharCode(e.charCode));
    renderPuzzle(exampleFour.puzzle);
});

const renderPuzzle = (myPuzzle) => {
    exampleFour.calculateStatus();
    const vDom = document.getElementById('hResult');
    const pResultDom = document.createElement('div');
    const statusDom = document.createElement('div')
    vDom.innerText = `You are allowed ${exampleFour.guessesAllowed} guesses`;
    pResultDom.innerText = `The puzzle result is ${myPuzzle}`;
    statusDom.innerText = exampleFour.statusMessage
    vDom.appendChild(pResultDom);
    vDom.appendChild(statusDom)
};
renderPuzzle(exampleFour.puzzle);



//Making an HTTP request
const request = new XMLHttpRequest()

request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
        console.log(e.target.status)
        const data = JSON.parse(e.target.responseText)
        console.log(data)
    } else if (e.target.readyState === 4) {
        console.log('An error has taken place')
    }

})

request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3')
request.send()



//1. make a call to restcountries.eu/rest/v2
//1. Make a new request for all countries
//2.Parse the responseText to get back the array of objects
//3. Find your country object by it's country code (alpha2Code property)
//4.Print the full country name
//parse the json that comes back
const countryRequest = new XMLHttpRequest()
countryRequest.open('GET', 'https://restcountries.eu/rest/v2/all')
countryRequest.send()

countryRequest.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
        console.log(e.target.status)
        const data = JSON.parse(e.target.responseText)
        const myCountry = data.filter(item => {
            return item.alpha2Code == "US"
        })
        console.log(`my country name is ${myCountry[0]['name']}`)

    }
})