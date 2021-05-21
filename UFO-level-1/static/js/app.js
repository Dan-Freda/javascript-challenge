// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

// Get a reference to the table body
var tbody = d3.select("tbody");

// Load whole, unfiltered table
function unfilteredData(ufoSighting) {
    const defaultData = tableData
    tableData.forEach(ufoSighting => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

unfilteredData(tableData);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // Apply filter to the data
    var filteredData = tableData.filter(ufoSighting => ufoSighting.datetime === inputValue);

    // Get reference to the table body and reset contents
    var tbody = d3.select("tbody");
    tbody.html("");

    // Append filtered data to the table
    filteredData.forEach(ufoSighting => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};