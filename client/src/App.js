import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./scenes/ProfilePage"
import LoginPage from "./scenes/LoginPage"
import HomePage from "./scenes/HomePage"
import ImagePage from 'scenes/ImagePage';

const App = () => {
  return (
    <div className="App" style={ {height: "100%", display: "flex", flexFlow: "column"} }>
      <BrowserRouter>
       <Routes>
        <Route path="/">
            <Route index element={ <HomePage /> } />
            <Route path="login" element={ <LoginPage /> } />
            <Route path="profile" element={ <ProfilePage /> } />
        </Route>
        <Route path="/image/">
            <Route path="a" element={ <ImagePage id="a" img="https://pbs.twimg.com/media/Fh9XtTjWQAMaY04.jpg" /> } />
            <Route path="b" element={ <ImagePage id="b" img="https://pbs.twimg.com/media/Fh9XtTjWQAMaY04.jpg" /> } />
            <Route path="c" element={ <ImagePage id="c" img="https://pbs.twimg.com/media/Fh9XtTjWQAMaY04.jpg" /> } />
        </Route>
       </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;