import * as React from "react";
import searchData from "./json/searchData.json";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

export default function SearchTrademark() {
  const [searchResults, setSearchResults] = React.useState([]);
  const [selections, setSelections] = React.useState([]);
  
  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    console.log(searchTerm);
    // CODE: Send search request
  };
  const handleSearchSubmit = () => {
    setSearchResults(searchData.data);
  };

  const handleAdd = (item) => {

    console.log(item)
  }

  return (
    <div>
      <Paper
        component="div"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "100%",
          boxShadow: "none",
          border: "1px solid #ccc",
        }}
      >
        <InputBase
          id="search"
          onChange={handleSearchChange}
          sx={{ ml: 1, flex: 1 }}
          placeholder="Enter a single word or phrase (e.g. shoe)"
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton
          onClick={handleSearchSubmit}
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>

      <div className="search-results">
        <ul className="search-results-list">
          {searchResults.map(({ name, id, suggestions }) => {
            return (
              <li key={id}>
                <span className="trademark-class-title">{name}</span>
                <ul className="trademark-class-item-list">
                  {suggestions.map((suggestion) => {
                    return (
                      <li key={suggestion.id}>
                        <span className="trademark-item" onClick={()=>handleAdd(suggestion)}>{suggestion.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
