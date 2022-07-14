import React, { useState } from "react";

function App() {
  const planetList = [
    { id: "01", name: "Mercury", size: "2440", unit: "km" },
    { id: "02", name: "Venus", size: "6052", unit: "km" },
    { id: "03", name: "Earth", size: "6371", unit: "km" },
    { id: "04", name: "Mars", size: "3390", unit: "km" },
    { id: "05", name: "Jupiter", size: "69911", unit: "km" },
    { id: "06", name: "Saturn", size: "58232", unit: "km" },
    { id: "07", name: "Uranus", size: "25362", unit: "km" },
    { id: "08", name: "Neptune", size: "24622", unit: "km" },
  ];

  const [filteredList, setFilteredList] = useState(planetList)
  const [searchQuery, setSearchQuery] = useState("");

  //Search list of objects
  const handleSearch = (event) => {
    const query = event.target.value
    setSearchQuery(query)

    const searchList = planetList.filter((item)=>{
      return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })

    setFilteredList(searchList)
  };

  //Filter List of object
  const onFilterChange=(event)=>{
    const selectedSize = Number(event.target.value)

    const filterList = planetList.filter((item)=>{
      return Number(item.size) > selectedSize
    })

    setFilteredList(filterList)
  }

  return (
    <div className="container">
      <h2>Search Filter Array of Objects</h2>
      
      <div className="list-wrapper">
        <div className="filter-container">
          <input
            type="text"
            name="search"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearch}
          />
          <div>
            <select name="size" onChange={onFilterChange}>
              <option value="">Filter by Size</option>
              <option value="2000">Greater Than 2000km</option>
              <option value="6000">Greater Than 6000km</option>
              <option value="10000">Greater Than 10000km</option>
              <option value="25000">Greater Than 25000km</option>
            </select>
          </div>
        </div>

        {filteredList.map((item, index) => {
          return (
            <div className="card" key={index}>
              <p className="num-text">{item.id}</p>
              <div>
                <p className="title">{item.name}</p>
                <p className="description">
                  {item.size} {item.unit}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
