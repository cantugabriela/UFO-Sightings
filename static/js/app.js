// Variables
var button = d3.select("#filter-btn");
var inputField = d3.select("#datetime"); 
var tbody = d3.select("tbody"); 
var resetbtn = d3.select("#reset-btn"); 
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments" ]

var populate = function(dataInput, filterStatus){
      dataInput.forEach(function (ufo_sightings)
      {
        if(filterStatus){
          tbody.html("");
        }
        var row = tbody.append("tr");
        columns.forEach(column=> row.append("td").text(ufo_sightings[column])
        )
      });
  }

//Populate table
populate(data, false);

// Filter by
button.on("click", function() {
  d3.event.preventDefault();
  var inputDate = inputField.property("value");
  // Filter by date matching input value
  var filterData = data.filter(data => data.datetime === inputDate);
  // Add filtered sighting to table
  populate(filterData, true);

})

resetbtn.on("click", function(){
  populate(data, false); 
})