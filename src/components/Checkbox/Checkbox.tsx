import React, { useState } from "react";
import "./Checkbox.scss";

interface CheckboxInterface {
  label: string;
  value: string;
  handleChange: any;
}

const Checkbox = ({ label, value, handleChange }: CheckboxInterface) => {
  const [checked, setChecked] = useState(true);

  const toggleCheckboxChange = () => {
    setChecked(!checked);
    handleChange(value);
  };

  return (
    <div className="checkbox-wrapper">
      <label className="checkbox-container">
        <input
          type="checkbox"
          value={value}
          checked={checked}
          onChange={toggleCheckboxChange}
        />
        <span className="checkmark" />
        {label}
      </label>
    </div>
  );
};

export default React.memo(Checkbox);
