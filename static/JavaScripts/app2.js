// d3.select('.navbar-brand')
// console.log('Hello World!');
// import data from data.js
const tableData = data;
// Reference HTML table using D3
var tbody = d3.select('tbody');

function buildTable(data) {
    tbody.html("");
    data.forEach((dataRow) => {
        let row = tbody.append('tr');
        Object.values(dataRow).forEach((val) => {
            let cell = row.append('td');
            cell.text(val);
        });
    });
}
function update_filters() {
    let city = d3.select('#city').property('value');
    let state = d3.select('#state').property('value');
    let country = d3.select('#country').property('value');
    let shape = d3.select('#shape').property('value');
}
function filter_table() {
    let date = d3.select('#city').property('value');
    let filteredData = tableData;
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    buildTable(filteredData);
}
d3.selectAll('#filter-btn').on('click', handleClick);
buildTable(tableData);