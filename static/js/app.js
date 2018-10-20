// Variables
var button = d3.select("#filter-btn");
var inputField = d3.select("#datetime"); 
var tbody = d3.select("tbody"); 
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments" ]

// Populate the table 
data.forEach(ufo_sightings=>
{
  var row = tbody.append("tr");
  columns.forEach(column=> row.append("td").text(ufo_sightings[column])
  )
});

// Filter the table
button.on("click", function() {
  d3.event.preventDefault();
  var inputDate = inputField.property("value");
  // filter by date matching input value
  var filterData = data.filter(data => data.datetime === inputDate);
  // add filtered sighting to table
  filterData.forEach(ufo_sightings=>
    {
      tbody.html("");
      var row = tbody.append("tr");
      columns.forEach(column=> row.append("td").text(ufo_sightings[column])
      )
    });
})

