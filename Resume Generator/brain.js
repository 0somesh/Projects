function addWeButton() {
    //   console.log('addWeButton.....')
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('weField')
    newNode.classList.add('mt-4')
    newNode.setAttribute('placeholder', 'Enter Another Work Experience')

    newNode.setAttribute('rows', 5)

    let weField = document.getElementById('we')
    let addweButton = document.getElementById('weButton')

    weField.insertBefore(newNode, addweButton)
}

function addaqButton() {
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('aqField')
    newNode.classList.add('mt-4')
    newNode.setAttribute('placeholder', 'Enter Another Academic Field')

    newNode.setAttribute('rows', 5)

    let aqField = document.getElementById('aq')
    let addaqButton = document.getElementById('aqButton')

    aqField.insertBefore(newNode, addaqButton)
}

// function addinternButton() {
//     let newNode = document.createElement('textarea')
//     newNode.classList.add('form-control')
//     newNode.classList.add('internField')
//     newNode.classList.add('mt-4')
//     newNode.setAttribute('placeholder', 'Enter Text here..')

//     newNode.setAttribute('rows', 5)

//     let internField = document.getElementById('intern')
//     let addinternButton = document.getElementById('internButton')

//     internField.insertBefore(newNode, addinternButton)
// }

// function addskillsButton() {
//     let newNode = document.createElement('textarea')
//     newNode.classList.add('form-control')
//     newNode.classList.add('skillsField')
//     newNode.classList.add('mt-4')
//     newNode.setAttribute('placeholder', 'Enter Text here..')
//     newNode.setAttribute('rows', 5)
//     let skillsField = document.getElementById('skills')
//     let addskillsButton = document.getElementById('skillsButton')
//     skillsField.insertBefore(newNode, addskillsButton)
// }

// ________________________________________generate Cv

function generateCV() {
    // For Name Fields
    document.getElementById('nameT1').innerHTML = document.getElementById(
        'nameField',
    ).value

    document.getElementById('nameT2').innerHTML = document.getElementById(
        'nameField',
    ).value

    // For Contact Fields
    document.getElementById('contactT').innerHTML = document.getElementById(
        'contactField',
    ).value

    // Gmail Id Filed
    document.getElementById('mailT').innerHTML = document.getElementById(
            'emailField',
        ).value
        // adress Fields
    document.getElementById('adressT').innerHTML = document.getElementById(
            'adressField',
        ).value
        // Links fields
    document.getElementById('fbT').innerHTML = document.getElementById(
        'facebookField',
    ).value
    document.getElementById('instaT').innerHTML = document.getElementById(
        'instaField',
    ).value
    document.getElementById('linkdinT').innerHTML = document.getElementById(
        'linkdinField',
    ).value


    // Objective Field
    document.getElementById('objectiveT').innerHTML = document.getElementById(
        'objectiveField',
    ).value

    // Work eexperience fields

    let Wef = document.getElementsByClassName('weField')
    let str = ''

    for (let e of Wef) {
        str = str + `<li> ${e.value} </li>`
    }

    document.getElementById('weT').innerHTML = str

    // aq Field

    let aqf = document.getElementsByClassName('aqField')

    let str1 = ''

    for (let e of aqf) {
        str1 = str1 + `<li> ${e.value} </li>`
    }
    document.getElementById('aqT').innerHTML = str1

    // Internship
    document.getElementById('internT').innerHTML = document.getElementById(
            'internField',
        ).value
        // skills Field
    document.getElementById('skillsT').innerHTML = document.getElementById(
        'skillsField',
    ).value

    // showing template and hiding form

    document.getElementById('cv-form').style.display = 'none'
    document.getElementById('cv-template').style.display = 'block'

    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
}
// Print cv Button

function printCv() {
    window.print()
}