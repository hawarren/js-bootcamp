//print out a grade
//include the final score
//print out "you got a {score}"

function calcGrades (realScore = 0, maxScore = 100)
{
    if (!Number.isNaN(realScore) && (typeof realScore === 'number'))
    {
        if(!Number.isNaN(maxScore) && (typeof maxScore === 'number'))
            {                
                let percent = Math.round((realScore/maxScore) *100);
                if (percent > 90)
                {
                    grade = 'F'
                }
                else if (percent > 80)
                {
                    grade = 'F'
                }
                else if (percent > 70)
                {
                grade = 'F'
                }
                else {
                    grade = 'F'
                }
                console.log(`Congratulations! You scored ${realScore} out of ${maxScore}\. for Grade of ${grade} `);
                if (realScore > maxScore)                {

                    console.log(`You scored more than 100 percent on the exam. Too bad the hightest grade is A`);
                }
            }
        else
            {
                console.log(`${maxScore} is not a real number, dummy`);
            }
    }
    else
        {
        console.log(`${realScore} has to be a number, dummy`);
        }
}

 calcGrades(50, 90);
// calcGrades(75);
// calcGrades (200);
// calcGrades(200, 500);
calcGrades('cat', 100);
calcGrades(10, 'dog');
