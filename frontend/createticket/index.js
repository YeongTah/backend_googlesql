document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.ticket-form');
  
  // Function to toggle the "other" input field based on category selection
  function toggleOtherInput() {
      const categorySelect = document.getElementById('category');
      const otherInput = document.getElementById('other-category-input');
      
      if (categorySelect.value === 'other') {
          otherInput.style.display = 'block'; // Show the input field when "Other" is selected
      } else {
          otherInput.style.display = 'none'; // Hide the input field when other categories are selected
      }
  }

  // Attach event listener to category select dropdown
  const categorySelect = document.getElementById('category');
  categorySelect.addEventListener('change', toggleOtherInput); // Call the function when the dropdown changes
  toggleOtherInput(); // Initialize state when the page loads

  // Form submit handler
  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission

      // Gather form data
      const category = document.getElementById('category').value;
      const topic = document.getElementById('topic').value;
      const description = document.getElementById('description').value;
      let otherDescription = '';
      if (category === 'other') {
          category = document.getElementById('other-description').value;
      }

      // Prepare data to be sent in the POST request
      const requestData = {
          category: category,
          topic: topic,
          description: description
      };

      // Send POST request with the form data
      fetch(`/create-ticket`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestData),
      })
      .then(async function(response) {
          const data = await response.json();
          console.log("Response data:", data);
          // Handle the response data as needed (e.g., display a success message)
      })
      .catch(function(error) {
          console.error("Error submitting the form:", error);
      });

      alert("Resolution Created")
      window.location.reload()
  });
});