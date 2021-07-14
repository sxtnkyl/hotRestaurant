let reserveName = document.querySelector('').value.trim();
let reservePhone = document.querySelector('').value.trim();
let reserveEmail = document.querySelector('').value.trim();
let reserveId = document.querySelector('').value.trim();

let newReservation = {
    name: reserveName,
    phone: parseInt(reservePhone),
    email: reserveEmail,
    ID: reserveId
}

fetch('/api/characters', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newCharacter),
  })