import { Logo, Logoimg, Nav } from "../styles";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand">
      <Logo to="/">
        <Logoimg
          src={
            "https://img.jakpost.net/c/2016/06/14/2016_06_14_6452_1465897206._large.jpg"
          }
        />
      </Logo>
      <div className="navbar-nav ml-auto">
        <Nav exact to="/">
          Home
        </Nav>
        <Nav to="/memberslist">Members List</Nav>
        <Nav to="/bookslist">Books List</Nav>

        {/* <ThemeButton className="nav-item" onClick={props.toggleTheme}>
                  {props.currentTheme === "light" ? "Dark" : "Light"} Mode
                </ThemeButton> */}
      </div>
    </nav>
  );
}
