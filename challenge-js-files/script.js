document.addEventListener("DOMContentLoaded", function() {
    const table = document.getElementById('table1');
    
    let labels = [];
    let datasets = [];
    
    const rows = table.querySelectorAll('tbody tr');
    
    rows.forEach((row, rowIndex) => {
        const cells = row.querySelectorAll('th, td');
        
        if (rowIndex === 0) {
            for (let i = 2; i < cells.length; i++) {
                labels.push(cells[i].textContent.trim());
            }
        } else {
            let countryData = {
                label: cells[1].textContent.trim(),
                data: [],
                borderColor: getRandomColor(),
                fill: false
            };
            
            for (let i = 2; i < cells.length; i++) {
                let value = cells[i].textContent.trim().replace(',', '.');
                countryData.data.push(value ? parseFloat(value) : null);
            }
            
            datasets.push(countryData);
        }
    });
    
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: datasets
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Offences recorded by the police, 2002-12'
                }
            }
        }
    });
    
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});

document.addEventListener("DOMContentLoaded", function() {

    const table = document.getElementById('table2');

    let countries = [];
    let data2007_09 = [];
    let data2010_12 = [];
    
    const rows = table.querySelectorAll('tbody tr');
    
    rows.forEach((row) => {
        const cells = row.querySelectorAll('th, td');

        countries.push(cells[1].textContent.trim());
        data2007_09.push(parseInt(cells[2].textContent.trim()));
        data2010_12.push(parseInt(cells[3].textContent.trim()));
    });
    
    const ctx = document.getElementById('myChart2').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: countries,
            datasets: [
                {
                    label: '2007-09',
                    data: data2007_09,
                    backgroundColor: 'rgba(75, 192, 192, 0.6)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                },
                {
                    label: '2010-12',
                    data: data2010_12,
                    backgroundColor: 'rgba(153, 102, 255, 0.6)',
                    borderColor: 'rgba(153, 102, 255, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Prison population, average per year, 2007-09 and 2010-12 (per 100,000 inhabitants)'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Population per 100,000 inhabitants'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Countries'
                    }
                }
            }
        }
    });
});
