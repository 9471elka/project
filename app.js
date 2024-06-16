document.addEventListener('DOMContentLoaded', () => {
    const baseUrl = 'http://localhost:5000/api/lawyers'; // Replace with your backend URL
  
    // Function to fetch and display all lawyers
    const fetchLawyers = async () => {
      try {
        const response = await axios.get(baseUrl);
        const lawyers = response.data;
        displayLawyers(lawyers);
      } catch (error) {
        console.error('Error fetching lawyers:', error);
      }
    };
  
    // Function to display lawyers on the webpage
    const displayLawyers = (lawyers) => {
      const lawyersList = document.getElementById('lawyers-list');
      lawyersList.innerHTML = '';
      lawyers.forEach(lawyer => {
        const lawyerCard = document.createElement('div');
        lawyerCard.classList.add('lawyer-card'); // Add lawyer-card class
        lawyerCard.innerHTML = `
          <h3>${lawyer.name}</h3>
          <p>Specialization: ${lawyer.specialization}</p>
          <p>Location: ${lawyer.location}</p>
          <p>Contact: ${lawyer.contact}</p>
        `;
        lawyersList.appendChild(lawyerCard);
      });
    };
  
    // Initial fetch when page loads
    fetchLawyers();
  });
  