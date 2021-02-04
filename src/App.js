import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles";
import { Route, Switch } from "react-router";
import BookList from "./components/BookList";
import MemberList from "./components/MemberList";
import MemberForm from "./components/MemberForm";
import BookForm from "./components/BookForm";
import MemberDetail from "./components/MemberDetail";
import BookDetail from "./components/BookDetail";

const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
  },
};

function App() {
  return (
    <ThemeProvider theme={theme.light}>
      <GlobalStyle />
      <NavBar />

      <Switch>
        <Route exact path="/memberslist/new">
          <MemberForm />
        </Route>
        <Route exact path="/memberslist/:memberSlug">
          <MemberDetail />
        </Route>

        <Route exact path="/memberslist">
          <MemberList />
        </Route>

        <Route exact path="/bookslist/new">
          <BookForm />
        </Route>

        <Route exact path="/bookslist/:bookSlug">
          <BookDetail />
        </Route>
        <Route exact path="/bookslist">
          <BookList />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
