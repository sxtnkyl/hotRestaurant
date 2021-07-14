
let newReservation = {
    name: reserveName,
    phone: parseInt(reservePhone),
    email: reserveEmail,
    ID: reserveId
}

fetch('/api/reservationList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newReservation),
  }).then((response) => response.json())
  .then((data) => {
    console.log('reserve.html', data);
    alert(`Adding resercation: ${data.ID}`);
  })
  .catch((error) => {
    console.error('Error:', error);
  });