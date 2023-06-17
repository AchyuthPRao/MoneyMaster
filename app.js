// Import data from data.js
import data from './data.js';

// Access the imported data
console.log(data.firstNameCell); // Output: ['Red', 'Blue', 'Yellow', 'Green', 'Purple']
console.log(data.lastNameCell); // Output: [12, 19, 3, 5, 2]
console.log(data.emailCell); // Output: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#9966ff']

// Render the pie chart
var pieChartCanvas = document.getElementById('pieChart').getContext('2d');
new Chart(pieChartCanvas, {
  type: 'pie',
  data: {
    labels: data.firstNameCell,
    datasets: [{
      data: data.lastNameCell,
      backgroundColor: data.emailCell
    }]
  }
});

