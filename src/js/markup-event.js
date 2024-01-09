const cardEvents = document.querySelector('.cards');

function markupEvents(eventItems) {
  const newCard = eventItems
    .map(card => {
      let nameEvent = card.name;
      if (card.name.length > 17) {
        nameEvent = card.name.slice(0, 17) + '...';
      }
      return `<li class="cards__item" data-id="${card.id}">
      <div class="cards__box animate__animated animate__flipInX" data-id="${card.id}">
        <img class="cards__image" src="${card.urlImage}" alt="${card.name}" loading="lazy" data-id="${card.id}"/>
        <h2 class="cards__title" data-id="${card.id}">${nameEvent}</h2>
        <p class="cards__date" data-id="${card.id}">${card.date}</p>
        <p class="cards__place" data-id="${card.id}"><span class="cards__pin" data-id="${card.id}">${card.place}</span></p>
      </div>
    </li>`;
    })
    .join('');

  cardEvents.insertAdjacentHTML('beforeend', newCard);
}

export default markupEvents;
