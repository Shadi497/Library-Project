import { ProductWrapper, ShopImage, Title } from "../styles";
import { Link } from "react-router-dom";

export default function BookItem(props) {
  const book = props.book;

  const st = book.genre.toString();

  let av,
    color = "";
  if (book.available) {
    av = "Available";
    color = "darkblue";
  } else {
    av = "Not Available at the moment";
    color = "red";
  }

  return (
    <ProductWrapper>
      <Link to={`/bookslist/${book.slug}`}>
        <ShopImage alt={book.title} src={book.image} />
      </Link>
      <Title>
        <h5>
          <b>Title:</b> {book.title}
        </h5>
        <p>
          <b>Author:</b> {book.author}
        </p>
        <p>
          <b>Genre:</b> {st}
        </p>
        <p style={{ color: color }}>{av}</p>
      </Title>
    </ProductWrapper>
  );
}
