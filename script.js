let textElement = document.getElementById('text')
let btnChoicesElement = document.getElementById('btn-choices')

let state= {}

// Functions - buttons and text

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


// Certain option is visible if you have required the gift from the ghouls
function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

// Options and restarting game

function selectOption(option) {
    let nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
        return startGame() 
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}

function getInputValue() {
    document.getElementById("myInput").value = "Johnny Bravo";
  }


// Story and choices for player

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
        ]
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
                nextText: 6
                
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
    },
    {
        id: 6,
        text: 'Well fought. You have made your way over to the other side of the lake. But the PTs have tricked you into signing up to a never ending class of burpees and crossfit. Tough luck, welcome to hell.',
        options: [
            {
                text: "Game over, restart the game.",
                nextText: -1
            }
        ]
    }
]

startGame()