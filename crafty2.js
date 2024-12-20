// JavaScript file for worker management

// URL for fetching worker data
const workersDataUrl = 'db.json';

// Function to display workers of a specific category
function displayWorkers(category) {
    fetch(workersDataUrl)
        .then(response => response.json()) // Parse JSON data
        .then(data => {
            const workers = data[category]; // Get workers for the selected category
            const workersSection = document.getElementById('workers');
            const workerList = document.getElementById('worker-list');

            workerList.innerHTML = ''; // Clear previous workers

            if (workers && workers.length) {
                workers.forEach(worker => {
                    // Create card for each worker
                    const workerCard = document.createElement('div');
                    workerCard.classList.add('worker-card');

                    // Worker image
                    const workerImage = document.createElement('img');
                    workerImage.classList.add('worker-image');
                    workerImage.src = worker.image;
                    workerImage.alt = worker.name;

                    // Worker information
                    const workerInfo = document.createElement('div');
                    workerInfo.classList.add('worker-info');

                    const name = document.createElement('h4');
                    name.textContent = worker.name;

                    const location = document.createElement('p');
                    location.textContent = `Location: ${worker.location}`;

                    const price = document.createElement('p');
                    price.textContent = `Price: $${worker.price}`;

                    // Book button
                    const bookButton = document.createElement('button');
                    bookButton.classList.add('book-btn');
                    bookButton.textContent = 'Book';
                    bookButton.addEventListener('click', () => {
                        alert(`Booking ${worker.name}`);
                    });

                    // Append elements
                    workerInfo.appendChild(name);
                    workerInfo.appendChild(location);
                    workerInfo.appendChild(price);

                    workerCard.appendChild(workerImage);
                    workerCard.appendChild(workerInfo);
                    workerCard.appendChild(bookButton);

                    workerList.appendChild(workerCard);
                });

                workersSection.style.display = 'block'; // Show workers section
            } else {
                workerList.innerHTML = '<p>No workers available in this category.</p>';
            }
        })
        .catch(error => console.error('Error fetching workers:', error));
}

