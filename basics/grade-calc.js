//print out a grade
//include the final score
//print out "you got a {score}"

function calcGrades(realScore = 0, maxScore = 100) {

    if (typeof realscore !== 'number' || typeof maxScore !== 'number') {
        throw Error(`Either ${realScore} or ${maxScore}, or both, are not both numbers`)
    } else {

        let percent = Math.round((realScore / maxScore) * 100);
        let letterGrade = ''
        if (percent > 90) {
            letterGrade = 'A'
        } else if (percent > 80) {
            letterGrade = 'B'
        } else if (percent > 70) {
            letterGrade = 'C'
        } else {
            letterGrade = 'F'
        }
        return `Congratulations! You scored ${realScore} out of ${maxScore}\. for Grade of ${letterGrade}`;

        if (realScore > maxScore) {

            return `You scored more than 100 percent on the exam. Too bad the hightest grade is A`
        }
    }
}
try {
    const result = calcGrades('60', 90);
    console.log(result)
} catch (e) {
    console.log(e.message)
}


// calcGrades(50, 90);
// calcGrades('cat', 100);
// calcGrades(10, 'dog');
// calcGrades('cat', 'dog')