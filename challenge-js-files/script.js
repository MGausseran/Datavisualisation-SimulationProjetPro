function creerContainer(id) {
    const canvas = document.createElement("canvas");
    canvas.setAttribute("id", id);
    return canvas;
}

function placerContainer(element, container, place) {
    element.insertBefore(container, place);
}

let dataPoints = [];
function fetchData() {
    fetch("https://canvasjs.com/services/data/datapoints.php")
        .then(response => response.json())
        .then(data => {
            data.forEach(value => {
                dataPoints.push({
                     x: value[0], y: parseInt(value[1]) 
                    });
            });
        });
}

function updateChart() {
    let newData = [];
    fetch("https://canvasjs.com/services/data/datapoints.php")
        .then(response => response.json())
        .then(data => {
            data.forEach(value => {
            newData.push({
                x: value[0], y: parseInt(value[1]) 
            });
        });
        dataPoints = newData;
        console.log(dataPoints);
    });
    setTimeout(function(){updateChart()}, 1000);
}
