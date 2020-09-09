import React from "react";
import { Route, Switch } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import theme from "./styles/theme";

// Default Layout
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";

// Route Component
import IntroPage from "./page/IntroPage";
import DetailBook from "./components/detailBook/DetailBook";
import SearchBook from "./components/searchBook/SearchBook";
import RentalHistory from "./components/rentalHistory/RentalHistory";
import ErrorPage from "./components/errorPage/ErrorPage";
import Category from "./components/category/Category";

// test code

import Test from "./components/Test";
const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />
        <Category />
        <Switch>
          <Route path="/" component={IntroPage} exact={true} />
          <Route path="/books/:id" component={DetailBook} />
          <Route path="/search" component={SearchBook} />
          <Route path="/category/:id" component={SearchBook} />
          <Route path="/mypage/rentalHistory" component={RentalHistory} />
          <Route path="/testpage" component={Test} />
          <Route
            render={() => {
              return <ErrorPage status={404} />;
            }}
          />
        </Switch>
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default App;
