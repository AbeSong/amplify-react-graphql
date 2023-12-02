import * as React from "react";
import searchData from "./json/searchData.json";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Pill from "./components/Pill";
import PillDelete from "./components/PillDelete";
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import "./ApplicationStep2GoodsAndServices.css"

const SearchResultListItem = ({ name, id, suggestions, picked, handleAdd }) => {

  const [isExpanded, setIsExpanded] = React.useState(false)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }
  return (
    <li key={id}>
      <span className="trademark-class-title">{name}</span>
      <div
        className={`trademark-class-item-list ${isExpanded ? "expanded" : ""}`}
      >
        {suggestions
          .filter((suggestion) => !picked[suggestion.id])
          .map((suggestion) => (
            <Pill
              key={suggestion.id}
              handleAdd={handleAdd}
              suggestion={suggestion}
            />
          ))}
      </div>
      <Button
        sx={{ textTransform: "initial", fontWeight:"bold" }}
        size="small"
        onClick={toggleExpand}
        endIcon={isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      >
        Show {isExpanded ? "Less" : "More"}
      </Button>
    </li>
  );
};

export default function ApplicationGoodsAndServices({setSelections, selections}) {
  const [searchTerm, setSearchTerm] = React.useState("")
  const [searchResults, setSearchResults] = React.useState([]);
  const [picked, setPicked] = React.useState({});

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  };

  const handleSearchSubmit = () => {
    setSearchResults(searchData.data);
  };

  const handleAdd = (item) => {
    console.log(item)
    const clone = structuredClone(selections);
    const obj = clone.find(
      (clonedItem) => clonedItem.number === item.class_number
    );
    if (obj) obj.suggestions.push(item);
    else {
      clone.push({
        number: item.class_number,
        name: item.class_name,
        suggestions: [item],
      });
    }
    setSelections(clone);
    addPicked(item.id);
  };

  const handleRemoveClass = (suggestion) => {
    const filtered = selections.filter(({number}) => suggestion.number !== number)
    setSelections(filtered)
  }

  const handleRemove = (item) => {
    let clone = structuredClone(selections);
    const obj = clone.find(
      (clonedItem) => clonedItem.number === item.class_number
    );
    if (obj?.suggestions.length === 1) {
      clone = clone.filter(
        (clonedItem) => clonedItem.number !== item.class_number
      );
    } else {
      obj.suggestions = obj.suggestions.filter(
        (suggestion) => suggestion.id !== item.id
      );
    }
    setSelections(clone);
    removePicked(item.id);
  };

  const addPicked = (id) => {
    setPicked((prev) => {
      return { ...prev, [id]: true };
    });
  };

  const removePicked = (id) => {
    setPicked((prev) => {
      return { ...prev, [id]: false };
    });
  };

  return (
    <div id="goodsAndServices">
      <h2>Select Goods & Services</h2>
      <ul className="description">
        <li>
          Search for the goods and/or services that apply to your trademark.
        </li>
        <li>There is an official fee of $250 per class.</li>
        <li>
          There is no additional cost for adding multiple items in the same
          class.
        </li>
      </ul>
      <div className="ac-container">
        <div className="search-container ac-column">
          <div className="ac-header">
            <InputBase
              id="search"
              onKeyDown={(e) => e.key === "Enter" && handleSearchSubmit()}
              onChange={handleSearchChange}
              value={searchTerm}
              sx={{ ml: 1, flex: 1, background: "white" }}
              placeholder="Enter a single word or phrase (e.g. shoe)"
              inputProps={{ "aria-label": "search phrase" }}
            />
            <IconButton
              onClick={handleSearchSubmit}
              type="button"
              sx={{ position: "absolute", p: "12px", right: "12px" }}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </div>

          <ul className="search-results-list">
            {searchResults.map(({ name, id, suggestions }) => {
              return (
                <SearchResultListItem
                  key={id}
                  name={name}
                  suggestions={suggestions}
                  handleAdd={handleAdd}
                  picked={picked}
                />
              );  
            })}
          </ul>
        </div>
        <div className="search-container search-added ac-column">
          <div className="ac-header">
            <h3>Goods &amp; Services</h3>
          </div>
          <ul className="selected-class-container">
            {selections.map((selectionItem) => {
              return (
                <li key={selectionItem.number} className="selected-class">
                  <div className="flex-center-between">
                    <span className="class-title">
                      Class {selectionItem.number}
                    </span>
                    <IconButton
                      aria-label="delete"
                      className="remove-button"
                      onClick={() => handleRemoveClass(selectionItem)}
                    >
                      <RemoveIcon />
                    </IconButton>
                  </div>
                  <ul>
                    {selectionItem.suggestions.map((suggestion) => (
                      <PillDelete
                        key={suggestion.id}
                        handleRemove={handleRemove}
                        suggestion={suggestion}
                      />
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
