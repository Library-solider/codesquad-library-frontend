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

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route path="/" component={IntroPage} exact={true} />
          <Route path="/books/:id" component={DetailBook} />
          <Route path="/search" component={SearchBook} />
          <Route path="/category/:id" component={SearchBook} />
          <Route
            render={() => {
              return <div>못찾았어요</div>;
            }}
          />
        </Switch>
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default App;
