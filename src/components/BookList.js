import React from "react";
import BookItem from "./BookItem";

const booklistArr = [
  "Diqqat",
  "Yashamoq",
  "Pul",
  "Iymon",
  "O'lim haq"
]

function BookList() {
  return (
    <ul class="list-group w-50">
      {booklistArr.map(el => (
        <BookItem bookName={el} />
        //  <li className="list-group-item">{el}</li>
      ))}
    </ul>
  )
}

export default BookList