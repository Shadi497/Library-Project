import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { HomeText, ShopImage, Title, HomeStyled } from "../styles";

export default function Home() {
  return (
    <HomeStyled>
      <HomeText>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>Welcome to Imagine Library</h1>
          <h3 class="mt-4 mb-5">The Escape from the world !</h3>
        </div>
        <h5 class="mt-5">Want to explore our list of books?</h5>

        <Link to="/bookslist">
          <button type="button" class="btn btn-outline-success mt-3">
            Our Books List
          </button>
        </Link>
        <h5 class="mt-5">Be one of our BELOVED members...</h5>
        <Link to="/memberslist">
          <button class="btn btn-outline-success mt-3">Our Members List</button>
        </Link>
      </HomeText>
      <ShopImage
        alt="library"
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/library-design-ideas-ssa-029-albion-barn-vil-3694d-1572385202.jpg"
      />
      <Helmet>
        <title>Home</title>
      </Helmet>
    </HomeStyled>
  );
}
