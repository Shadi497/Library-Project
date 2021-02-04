import React, { useState } from "react";
import BookItem from "./BookItem";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import AddBook from "./Buttons/AddBook";
import SearchBar from "./SearchBar";

export default function BookList() {
  const [query, setQuery] = useState("");
  const list = useSelector((state) => state.list);
  const booklist = list
    .filter(
      (book) =>
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.genre.toString().toLowerCase().includes(query.toLowerCase())
    )
    .map((book) => <BookItem book={book} key={book.id} />);
  return (
    <div>
      <AddBook />
      <SearchBar setQuery={setQuery} />

      {booklist}
      <Helmet>
        <title>Books List </title>
      </Helmet>
    </div>
  );
}
