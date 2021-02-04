import { DetailWrapper } from "../styles";
import { Redirect, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function BookDetail() {
  let av,
    color = "";
  const books = useSelector((state) => state.list);
  const { bookSlug } = useParams();

  const book = books.find((book) => book.slug === bookSlug);

  if (book.available) {
    av = "Available";
    color = "darkblue";
  } else {
    av = "Not Available at the moment";
    color = "red";
  }
  const [a, setA] = useState(av);
  const [c, setC] = useState(color);
  const [status, setStatus] = useState(book.available);

  const members = useSelector((state) => state.members);

  if (!book) return <Redirect to="/bookslist" />;

  const click = () => {
    if (book.available) {
      setA("Not Available at the moment");
      setC("red");
    } else {
      setA("Available");
      setC("darkblue");
    }
  };

  const list = () => {
    const shadi = [];
    for (let i = 0; i < book.borrowedBy.length; i++) {
      shadi.push(
        members
          .filter((bookmem) => bookmem.id === book.borrowedBy[i])
          .map((bookmem) => (
            <div style={{ display: "flex" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h5>
                  <b>Name:</b> {bookmem.firstName} {bookmem.lastName}
                </h5>

                <p>
                  <b>Membership:</b> {bookmem.membership}
                </p>
              </div>
            </div>
          ))
      );
    }
    return shadi;
  };

  return (
    <DetailWrapper style={{ margin: "3% 0 0 10%" }}>
      <img src={book.image} alt={book.title} style={{ width: "20%" }} />
      <div style={{ padding: "6% 0 0 25%" }}>
        <h1>{book.title}</h1>
        <h2 style={{ padding: "28px 0 20px 0" }}>
          For the Author: {book.author}
        </h2>
        <h3>Genre: {book.genre.toString()}</h3>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <p style={{ margin: "20px 0 20px 60px", color: c }}>{a}</p>
        {!status && (
          <button
            type="button"
            class="btn btn-secondary"
            style={{ display: "flex", margin: "0 60px 20px auto" }}
            onClick={() => click()}
          >
            Return Book
          </button>
        )}
      </div>

      <Link to="/bookslist" style={{ width: "30%" }}>
        <button
          type="button"
          class="btn btn-secondary"
          style={{ display: "flex", margin: "0 60px 20px auto" }}
        >
          Back
        </button>
      </Link>
      <h3 style={{ margin: "30px 0 35px 0", justifyContent: "center" }}>
        "{book.title}" borrowers
      </h3>

      <p>{list()}</p>

      <Helmet>
        <title>{`${book.title} Details`} </title>
      </Helmet>
    </DetailWrapper>
  );
}
