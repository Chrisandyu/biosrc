import React from "react";

const DropdownFilter = () => {
  return (
    <div>
      <details className="dropdown">
        <summary className="mx-5 btn btn-secondary">
          Sort by<img src="/dropdown.svg" className="h-3" />{" "}
        </summary>
        <ul className="p-2 menu dropdown-content z-[1] bg-base-300 rounded-box w-52">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </details>
    </div>
  );
};

export default DropdownFilter;
