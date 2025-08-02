  const map = L.map("map").setView([28.6139, 77.209], 13); // Set to Delhi by default

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([28.6139, 77.209])
      .addTo(map) // Marker for your listing
      .bindPopup("Your Airbnb Listing Location")
      .openPopup();
