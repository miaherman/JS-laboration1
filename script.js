const textelement = document.getElementById('text')
const btnChoicesElement = document.getElementById('btn-choices')

let state= {}

function startGame() {
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
}

function selectOption(option) {

}

const textNodes = [
    {
        id: 1,
        text: 'Welcome to the other realm, in order to enter safely you have to answer a question as old as time. Proceed with caution and beware of the entities you may encounter along the way. The enteties may grant you a special gift, if you manage to please them. The riddle is as follows: What do sea monsters eat?',
        options: [
            {
                text: 'I scream',
                setState: { blackSwoord: true },
                nextText: 2
            },
            {
                text: 'I scream',
                nextText: 2
            }
        ]
    },
    {
        id:2
    }
]

startGame()