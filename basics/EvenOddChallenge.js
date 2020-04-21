//EvenOddChallenge

//given a number, print even if it's even and odd if it's odd

var checkNumber = num => {
    if(Number.isInteger(num))
        {
            var checkedNumber = num % 2 // the % operator gets the remainder after doing division
                    if(checkedNumber == 0)
                    {
                        return 'Even'
                    }
                    else if( checkedNumber != 0){
                        return 'odd'
                    }
        }
    else{
            return 'this ain\'t no integer man!'
        }

}
console.log('IT\'S ARROW FUNCTION TIME!!!')
console.log('\r\n let\'s check twelve...')
console.log(checkNumber('twelve'))
console.log('\r\n let\'s check 12')
console.log(checkNumber(12))
console.log('\r\n let\'s check 13')
console.log(checkNumber(13))
