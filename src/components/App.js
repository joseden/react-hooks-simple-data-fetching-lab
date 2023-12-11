
import React, { useState, useEffect } from "react";

function App() {
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch a random dog image
    const fetchDogImage = async () => {
      try {
        // Set loading to true when making the fetch request
        setLoading(true);

        // Fetch a random dog image
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();

        // Update the dogImage state with the fetched image URL
        setDogImage(data.message);
      } catch (error) {
        console.error("Error fetching dog image:", error);
      } finally {
        // Set loading to false after receiving the response (success or error)
        setLoading(false);
      }
    };

    // Call the fetchDogImage function when the component mounts
    fetchDogImage();
  }, []); // Empty dependency array ensures that the effect runs only once when the component mounts

  return (
    <div className="App">
      <h1>Random Dog Image</h1>
      {/* Display loading message when fetching */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        // Display the dog image when available
        <img src={dogImage} alt="A Random Dog" style={{ maxWidth: "100%" }} />
      )}
    </div>
  );
}

export default App;
