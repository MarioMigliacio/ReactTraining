import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import React, { useState } from "react";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "Red"
  },
  {
    label: "The Color Green",
    value: "Green"
  },
  {
    label: "A Shade of Blue",
    value: "Blue"
  }
]

export default () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      />
    </div>
  );
}
