function saturdayFun(activity) {
    if (activity === undefined) {
        message = "This Saturday, I want to roller-skate!"

    }
    else {
        message = `This Saturday, I want to ${activity}!`
    }
    return message
}
let message

function mondayWork(msg = 'go to the office') {
    const overwriteFun = function (msg) {
        return `This Monday, I will ${msg}.`

    }
    return overwriteFun(msg)


}
function wrapAdjective(flair = "*") {
    function innerFun(adjective) {
        return `You are ${flair}${adjective}${flair}!`
    }
    return innerFun

}



