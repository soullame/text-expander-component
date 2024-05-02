import React, { useState } from "react";

export default function TextExpander({
  children,
  collapsedNumWords = 20,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "blue",
  className,
  expanded = false
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const displayedText = isExpanded
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";

  const btnStyles = {
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: "6px",
    color: buttonColor
  };
  return (
    <div className={className}>
      <span>{displayedText}</span>
      <button style={btnStyles} onClick={() => setIsExpanded(ex => !ex)}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
