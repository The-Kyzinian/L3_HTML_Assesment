// Fetch events from Events.json and render as a list
fetch('./Events.json')
  .then(response => response.json())
  .then(events => {
    const container = document.getElementById('event-list');
    if (!events || !events.length) {
      container.innerHTML = '<p>No events found.</p>';
      return;
    }
    const ul = document.createElement('ul');
    ul.className = 'event-list';
    events.forEach(ev => {
      const li = document.createElement('li');
      li.className = 'event-list-item';
      li.innerHTML = `<strong>${ev.date}</strong> <span>${ev.title}</span>`;
      ul.appendChild(li);
    });
    container.appendChild(ul);
  })
  .catch(() => {
    document.getElementById('event-list').innerHTML = '<p>Error loading events.</p>';
  });
