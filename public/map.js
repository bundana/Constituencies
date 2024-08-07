document.addEventListener("DOMContentLoaded", () => {
  const mapContainer = document.getElementById("map-container");
  const infoCard = document.getElementById("info-card");
  const nameElement = document.getElementById("constituency-name");
  const infoElement = document.getElementById("constituency-info");

  // Function to load SVG from file
  async function loadSVG() {
    try {
      const response = await fetch("http://127.0.0.1:8000/ghana-map.svg");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const svgText = await response.text();
      mapContainer.innerHTML = svgText;

      const paths = mapContainer.querySelectorAll("svg path");

      // Log IDs and Titles
      paths.forEach((path) => {
        const title = path.querySelector("title")
          ? path.querySelector("title").textContent
          : "No title";
        const id = path.id;
        console.log(`ID: ${id}, Name: ${title}`);
      });

      // Hover effect
      paths.forEach((path) => {
        path.addEventListener("mouseover", (event) => {
          const title = event.target.querySelector("title")
            ? event.target.querySelector("title").textContent
            : "No title";
          nameElement.textContent = title;

          // Fetch or calculate additional info based on the ID
          // Example info, replace with actual data fetching logic
          infoElement.textContent = `Information about ${title}`;

          // Show the info card
          infoCard.style.display = "block";
          infoCard.style.left = `${event.pageX + 10}px`; // Adjust position as needed
          infoCard.style.top = `${event.pageY + 10}px`; // Adjust position as needed
        });

        path.addEventListener("mouseout", () => {
          infoCard.style.display = "none";
        });
      });

      // Apply colors based on the ID
      paths.forEach((path) => {
        switch (path.id) {
          case "constituency1":
            path.style.fill = "#FF0000"; // NDC Red
            break;
          case "constituency2":
            path.style.fill = "#00FF00"; // NDC Green
            break;
          // Add more conditions as needed
          default:
            path.style.fill = "#C8C8C8"; // Default color
            break;
        }
      });
    } catch (error) {
      console.error("Error loading SVG:", error);
    }
  }

  loadSVG();
});
