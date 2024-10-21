const characterBar = document.getElementById('character-bar')
const detailedInfo = document.getElementById('detailed-info')
const votesForm = document.getElementById('votes-form')
const voteCount = document.getElementById('vote-count')
let displayedCharacter

fetch("http://localhost:3000/characters")
.then(response => response.json())
.then(characters => {
    characters.forEach(character => {
        const span = document.createElement('span')
        span.textContent = character.name
        span.addEventListener('click', () => characterDetails(character))
        characterBar.appendChild(span)
    })
})

function characterDetails(character) {
    displayedCharacter = character
    detailedInfo.querySelector('#name').textContent = character.name
    detailedInfo.querySelector('#image').src = character.image
    detailedInfo.querySelector('#image').alt = character.name
    voteCount.textContent = character.votes
}

votesForm.addEventListener('submit', event => {
    event.preventDefault()
    const votesInputted = parseInt(votesForm.votes.value) || 0
    displayedCharacter.votes += votesInputted
    voteCount.textContent = displayedCharacter.votes
    votesForm.reset()
})
