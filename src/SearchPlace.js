import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AutoComplete, Input } from "antd";
import { searchPlace } from "./redux/actions";

const SearchPlace = () => {
  const [inputValue, setInputValue] = useState("");
  const places = useSelector((state) => state.places);
  const dispatch = useDispatch();

  const handleInputChange = (value) => {
    setInputValue(value);
    dispatch(searchPlace(value));
  };

  return (
    <AutoComplete
      value={inputValue}
      onChange={handleInputChange}
      style={{ width: 200 }}
      options={places.map((place) => ({ value: place.name }))}
    >
      <Input.Search placeholder="Search places" />
    </AutoComplete>
  );
};

export default SearchPlace;
