import React from "react";
import style from "./SortLine.module.css";
import { MenuItem, Select, Checkbox } from "@mui/material";
import { styled } from "@mui/system";
import { ExpandMore } from "@mui/icons-material";
import { CheckedIcon, UncheckedIcon } from "./CheckboxIcons";
import { useLocation } from "react-router-dom";

const CustomSelect = styled(Select)(() => ({
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: "1px, solid, black",
  },
  "& .MuiSelect-icon": {
    color: "black",
  },
  ".MuiSelect-select": {
    padding: "8px",
    paddingLeft: "16px",
    fontFamily: "Montserrat",
    fontSize: "16px",
    fontWeight: "500",
  },
  "& .MuiPaper-root": {
    boxShadow: "none",
  },
}));

const CustomMenuItem = styled(MenuItem)(() => ({
  fontFamily: "Montserrat",
  color: "#8B8B8B",
  fontSize: "16px",
  fontWeight: "500",
  "&.Mui-selected": {
    backgroundColor: "inherit",
    color: "#282828",
  },
}));

export default function SortLine({ searchParams, setSearchParams }) {
  const location = useLocation();
  const isSales = location.pathname === "/sales";
  const sortBy = searchParams.get("sortBy") || "byDefault";

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set(name, type === "checkbox" ? checked : value);
    setSearchParams(newSearchParams);
  }

  return (
    <div className={style.sortLine}>
      <div className={style.sortOptions}>
        <span>Price</span>
        <input
          type="number"
          name="minPrice"
          placeholder="from"
          min="0"
          className={style.priceInput}
          value={searchParams.get("minPrice") || ""}
          onChange={handleChange}
        />
        <input
          type="number"
          name="maxPrice"
          placeholder="to"
          min="0"
          className={style.priceInput}
          value={searchParams.get("maxPrice") || ""}
          onChange={handleChange}
        />
      </div>
      {!isSales && (
        <div className={style.sortOptions}>
          <span>Discounted items</span>
          <Checkbox
            name="includeDiscount"
            onChange={handleChange}
            checked={searchParams.get("includeDiscount") === "true"}
            icon={<UncheckedIcon />}
            checkedIcon={<CheckedIcon />}
            disableRipple={true}
            sx={{
              "&.MuiCheckbox-root": {
                padding: 0,
              },
              "& .PrivateSwitchBase-input": {
                width: 36,
                height: 36,
                padding: 0,
              },
            }}
          />
        </div>
      )}
      <div className={style.sortOptions}>
        <span>Sorted</span>
        <CustomSelect name="sortBy" value={sortBy} onChange={handleChange} IconComponent={ExpandMore} sx={{ width: "200px" }}>
          <CustomMenuItem value="byDefault">by default</CustomMenuItem>
          <CustomMenuItem value="newest">newest</CustomMenuItem>
          <CustomMenuItem value="priceHighToLow">price: high-low</CustomMenuItem>
          <CustomMenuItem value="priceLowToHigh">price: low-high</CustomMenuItem>
        </CustomSelect>
      </div>
    </div>
  );
}
