import React from "react";
import { useSelector } from "react-redux";
import { Checkbox } from "../../components";
import "./Filter.scss";

interface FilterInterface {
  data: any;
  theme?: string;
  handleFilter: any;
}

const defaultProps: FilterInterface = {
  data: [],
  theme: "light",
  handleFilter: () => console.log("handleFilter clicked!")
};

const Filter: React.FC<FilterInterface> = ({
  data,
  theme,
  handleFilter
}: FilterInterface) => {
  const filter = useSelector((state: any) => state.blog.filter.filters);
  const handleClick = (value: any) => {
    let newFilter = [];
    if (filter.includes(value)) {
      newFilter = filter.filter(function(item: any) {
        return item !== value;
      });
    } else {
      filter.push(value);
      newFilter = filter;
    }
    handleFilter(newFilter);
  };

  const _renderFilters = () => {
    let filterList: any = [];
    data.forEach((filter: any) => {
      filterList.push(
        <Checkbox
          label={`${filter} Blogs`}
          value={filter}
          key={filter}
          handleChange={handleClick}
        />
      );
    });
    return filterList;
  };
  return (
    <div className="filter-wrapper">
      <div className={`title ${theme}`}>FILTER</div>
      <div className={`filters ${theme}`}>
        {_renderFilters()}
      </div>
    </div>
  );
};

Filter.defaultProps = defaultProps;

export default Filter;
