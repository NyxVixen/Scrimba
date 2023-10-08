let resetScore = document.getElementById("new-game-el")
let homeStoreEl = document.getElementById("home-el")
let guestStoreEl = document.getElementById("guest-el")
let homeScore = 0
let guestScore = 0

function addHomeScore1() {
    homeScore += 1
    homeStoreEl.textContent = homeScore
}

function addHomeScore2() {
    homeScore += 2
    homeStoreEl.textContent = homeScore
}

function addHomeScore3() {
    homeScore += 3
    homeStoreEl.textContent = homeScore
}

function addGuestScore1() {
    guestScore += 1
    guestStoreEl.textContent = guestScore
}

function addGuestScore2() {
    guestScore += 2
    guestStoreEl.textContent = guestScore
}

function addGuestScore3() {
    guestScore += 3
    guestStoreEl.textContent = guestScore
}

function newGame() {
    homeStoreEl.textContent = "0"
    homeScore = 0
    guestStoreEl.textContent = "0"
    guestScore = 0
}

