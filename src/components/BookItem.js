import React from "react";

function BookItem(props) {
 return (
  <li className="list-group-item">{props.bookName}</li>  
)
}

export default BookItem