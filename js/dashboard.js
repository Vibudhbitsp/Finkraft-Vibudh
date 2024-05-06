document.addEventListener('DOMContentLoaded', function() {
    // Create AG Grid table
    var gridOptions = {
        columnDefs: [
            { headerName: "Make", field: "make" },
            { headerName: "Model", field: "model" },
            { headerName: "Price", field: "price" }
        ],
        rowData: [
            { make: "Toyota", model: "Celica", price: 35000 },
            { make: "Ford", model: "Mondeo", price: 32000 },
            { make: "Porsche", model: "Boxster", price: 72000 }
        ]
    };

    var gridDiv = document.querySelector('#dataGrid');
    new agGrid.Grid(gridDiv, gridOptions);

    // Create chart (you need to add code to display a chart here)
    var chartDiv = document.getElementById('chart');
    chartDiv.innerHTML = '<p>This is where your chart goes</p>';
});
