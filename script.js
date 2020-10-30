let textElement = document.getElementById('text')
let btnChoicesElement = document.getElementById('btn-choices')

/** Restarts game */
function restartGame() {
    location.reload();
}

/** Shows first id(scene) at the start of the game */
function startGame() {
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
    let textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    
    while (btnChoicesElement.firstChild) {
        btnChoicesElement.removeChild(btnChoicesElement.firstChild)
    }
    
    if (textNode.options) {
        textNode.options.forEach(option => {
            if (showOption(option)) {
                let button = document.createElement('button')
                button.innerText = option.text
                button.classList.add('btn')
                button.addEventListener('click', () => selectOption(option))
                btnChoicesElement.appendChild(button)
            } 
        })
    }

/* States if input form should be visible for player when selecting options */
    let inputForm = document.getElementById('inputForm')
            if (textNode.input) {
                inputForm.style.display = "block";
            } else {
                inputForm.style.display = "none";
            }

    let dateForm = document.getElementById('dateForm')
            if(textNode.dateinput) {
                dateForm.style.display = "block";
            } else {
                dateForm.style.display = "none";
            } 
    }

/** Shows a form for id:5, processes its value and creates a restart button */
function getInputValue(){
    let inputVal = document.getElementById("myInput").value;
        if (inputVal == 4) {
            let textElement = document.getElementById('text')
            textElement.innerText = 'Right on bruv. Big Shaq has showed you the way out of hell. Click the button below to replay the game.';
            inputForm.style.display = 'none';
            let restartButton = document.createElement('button')
            restartButton.classList.add('btn')
            restartButton.innerText = 'Restart game'
            restartButton.addEventListener('click', restartGame)
            btnChoicesElement.appendChild(restartButton)
        }

        else {
            let textElement = document.getElementById('text')
            textElement.innerText = 'That aint it m8. Back to the ghouls you go.';
            inputForm.style.display = 'none';
            let restartButton = document.createElement('button')
            restartButton.classList.add('btn')
            restartButton.innerText = 'Restart game'
            restartButton.addEventListener('click', restartGame)
            btnChoicesElement.appendChild(restartButton)
        }
}

/** Shows a form for id:8, processes its value and creates a restart button */
function dateInputValue() {
    let inputWord = document.getElementById("dateInput").value;
        if (inputWord === 'brå') {
            let textElement = document.getElementById('text')
            textElement.innerText = 'Your date is intrigued but bored. He lets you go and you manage to escape and awkard declaration of love. Congrats! You made it out.',
            dateForm.style.display = 'none';
            let restartButton = document.createElement('button')
            restartButton.classList.add('btn')
            restartButton.innerText = 'Restart game'
            restartButton.addEventListener('click', restartGame)
            btnChoicesElement.appendChild(restartButton)
        }

        else if (inputWord === 'sygytt') {
            let textElement = document.getElementById('text')
            textElement.innerText = 'Your date is delighted you speak the same love language! He starts declaring his love for you and unfortunately you will be stuck in this loop until forever. Tough luck. Game over.',
            dateForm.style.display = 'none';
            let restartButton = document.createElement('button')
            restartButton.classList.add('btn')
            restartButton.innerText = 'Restart game'
            restartButton.addEventListener('click', restartGame)
            btnChoicesElement.appendChild(restartButton)
        }

        else {
            let textElement = document.getElementById('text')
            textElement.innerText = 'Your date does not approve, but is intrigued. Which means you will be stuck here forever in this awkward date. Welcome to hell. Give it another go and see if you can make it out.',
            dateForm.style.display = 'none';
            let restartButton = document.createElement('button')
            restartButton.classList.add('btn')
            restartButton.innerText = 'Restart game'
            restartButton.addEventListener('click', restartGame)
            btnChoicesElement.appendChild(restartButton)
        }
        
    // Displaying the value
}

/** Certain option is visible if you have required the gift from the ghouls */
function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    let nextTextNodeId = option.nextText
        if (nextTextNodeId <= 0) {
            return startGame() 
        }

        state = Object.assign(state, option.setState)
        showTextNode(nextTextNodeId)
}

/** Sets story and choices for player */
let textNodes = [
    {
        id: 1,
        text: 'Welcome to the other realm, in order to enter safely you have to answer a question as old as time. Proceed with caution and beware of the entities you may encounter along the way. The enteties may grant you a special gift, if you manage to please them. The riddle is as follows: What do sea monsters eat?',
        options: [
            {
                text: 'I scream',
                setState: { boat: true },
                nextText: 2
            },
            {
                text: 'Fish and ships',
                nextText: 3
            }
        ],
    },

    {
        id: 2,
        text: 'The ghouls deem your answer incorrect, but you get to pass anyway. Also you get a boat for being funny. But next up you are faced by a silvery lake, reflecting back on you like a mirror. How do you get across?',
        options: [
            {
                text: 'I will use the boat I got from the ghouls!',
                requiredState: (currentState) => currentState.boat,
                setState: { boat: false, },
                nextText: 4
            },
            {
                text: 'I will swim acrosss the lake!',
                nextText: 4
            },
        ]
    },

    {
        id: 3,
        text: 'You are correct and may pass. But next up you are faced by a silvery lake, reflecting back on you like a mirror. How do you get across?',
        options: [
            {
                text: 'I will swim acrosss the lake!',
                nextText: 4
            },
        ]
    },

    {
        id: 4,
        text:'While making your way across the lake - the mirror shatters and 12 angry and very energetic personal trainers appear from underneath you and try to force meal plans, dumb bells and HIIT-exercises on you. You are starting to realise that you are very close to hell. What do you do?',
        options: [
            {
                text: 'You take a look at one of their meal plans and find yourself lured in by their fitness regimes',
                nextText: 7
                
            },
            {
                text: 'You lift up a dumbbell and start swinging',
                nextText: 5
            },
            {
                text: 'You find a boquet of kale in your pocket and throw it away to try and distract them, much like throwing a bone to a dog',
                nextText: 6
            }
        ]
    },
    {
        id: 5,
        text: 'Well fought. You managed to scare them off, especially when you told them you can only do one push up. But you are starting to realise that this aint a place for you. You just want to get out. All of a sudden - Big Shaq appears. He says he knows a way out, but that you have to help him with some quick maths. 2+2 is?',
        input: true
    },
    {
        id: 6,
        text: 'You managed to outsmart them! They went after the kale like hungry lions. I guess they do not have kale in hell. You have made your way over to the other side of the lake. But the PTs have tricked you into signing up to a never ending class of burpees and crossfit. Tough luck, welcome to hell. Now you are faced with the difficult choice of deciding what kind of protein shake you have to gulp down. Quick! Pick one, or the PTs will punish you with an extra round of mountain climbers',
        options: [
            {
                text: "A green eewy gooey celery juice packed with all the things influencers blog about",
                nextText: 8
            },
            {
                text:'A shimmery concoction that is oozing with things that are good for your body. You are disgusted.',
                nextText: 8
            }
        ]
    },

    {
        id: 7,
        text: 'Congratulations, you are now stuck with a meal plan that substitutes all your meals with celery juice and you will forever have a PT yelling at you while you are forced to alternate between crossfit and HIIT.',
        options: [
            {
                text: 'Game over my friend, welcome to hell.',
                nextText: -1
            }

        ]
    },
    {
        id: 8,
        text: 'You are forced to drink this juice and now you have advanced in the levels of Hell. You find yourself on the TV-show - Hemliga Beundrare. Your date greets you with a TJÄNAAAH! And follows up with a Lägyt? What do you reply? (brå/sygytt)',
        dateinput: true
    }

]

startGame()