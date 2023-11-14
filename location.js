function searchLocation() {
  const searchInput = document.getElementById("searchInput").value;

  if (searchInput.trim() !== "") {
    fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${searchInput}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          const latitude = data[0].lat;
          const longitude = data[0].lon;
          document.getElementById(
            "location"
          ).textContent = `Latitude :  ${latitude},   Longitude :  ${longitude}`;
        } else {
          document.getElementById("location").textContent =
            "Location not found.";
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } else {
    alert("Please enter a location to search.");
  }
}
function goBack() {
  history.back();
}

function goReload() {
  location.reload();
  window.location.href = "home.html";
}
