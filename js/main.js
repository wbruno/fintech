document.addEventListener('DOMContentLoaded', function() {
  const ctx = document.getElementById('financialChart').getContext('2d');
  const financialChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
      datasets: [{
        label: 'Gastos (R$)',
        data: [1200, 1900, 1500, 2500, 1800, 2100],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      },
      {
        label: 'Receitas (R$)',
        data: [2200, 2100, 2300, 2800, 2500, 3000],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              return 'R$ ' + value;
            }
          }
        }
      },
      plugins: {
        title: {
          display: true,
          text: 'Despesas x Receitas (Janeiro a Junho)'
        },
        legend: {
          position: 'bottom'
        }
      }
    }
  });
});
