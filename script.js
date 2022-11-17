
let words = ['gone', 'word', 'nest', 'wink', 'gate',
             'mist', 'card', 'name', 'weak', 'mask',
             'mode', 'nice', 'meat', 'game', 'soup'
            ]

let randomNum = Math.floor(Math.random() * words.length)
console.log(randomNum)

// myWord will be use to set the word for each round 
let myWord = words[randomNum]
console.log(myWord)


let chanceLeft = document.querySelector('.chance')
let putOne = document.querySelector('#one')
let putTwo = document.querySelector('#two')
let putThree = document.querySelector('#three')
let putFour = document.querySelector('#fourth')
let congrat = document.querySelector('.hidden')
let guessingWord = []
let countForWin = 0
let countForLoss = 8
// let isMatch = .every(guessingWord)

// Key press event from user 
let keyEvent = document.addEventListener("keypress", onEvent = (event) => {
                     
                    console.log(event.key)
                    let myKey = event.key
                    if(myWord.includes(myKey) === true && !guessingWord.includes(myKey)) {
                        
                        guessingWord.push(myKey)
                        console.log(guessingWord)
                        let letterPosition = myWord.indexOf(myKey)

                        if(letterPosition === 0) {
                            putOne.textContent = myKey
                        }else if(letterPosition === 1) {
                            putTwo.textContent = myKey
                        }else if(letterPosition === 2) {
                            putThree.textContent = myKey
                        }else if(letterPosition === 3) {
                            putFour.textContent = myKey
                        }

                        if(guessingWord.length === 4  ) {
                            congrat.classList.remove('hidden')
                        }

                    }else {
                        countForLoss--
                        chanceLeft.textContent = `Chance left : ${countForLoss}`
                        if(countForLoss === 0) {
                            alert('You loss the game !')
                        }
                    }

                    return event.key

})

// Function for Re-Start Btn
reStart = () => {
    putOne.textContent = ''
    putTwo.textContent = ''
    putThree.textContent = ''
    putFour.textContent = ''
    guessingWord = []
    chanceLeft.textContent = ''
    countForLoss = 8

    randomNum = Math.floor(Math.random() * words.length)
    myWord = words[randomNum]
    console.log(myWord)

    congrat.classList.add('hidden')
    let keyEvent = document.addEventListener("keypress", onEvent = (event) => {
                     
        console.log(event.key)
        let myKey = event.key

        if(myWord.includes(myKey) === true && !guessingWord.includes(myKey)) {
            
            guessingWord.push(myKey)
            
            let letterPosition = myWord.indexOf(myKey)

            if(letterPosition === 0) {
                putOne.textContent = myKey
            }else if(letterPosition === 1) {
                putTwo.textContent = myKey
            }else if(letterPosition === 2) {
                putThree.textContent = myKey
            }else if(letterPosition === 3) {
                putFour.textContent = myKey
            }

            if(guessingWord.length === 4  ) {
                alert('You win >0<')
            }

        }else {
            this.countForLoss--
            chanceLeft.textContent = `Chance left : ${countForLoss}`
            if(countForLoss === 0) {
                alert('You loss the game !')
            }
        }

    return event.key
})

}

// Re-Start Button
document.querySelector('.restart').addEventListener('click', reStart)


