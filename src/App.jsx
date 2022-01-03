import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Aside from "./components/Aside/Aside";
import Header from "./components/Header/Header";
import Messages from "./components/Messages/Messages";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";
import Users from "./components/Users/Users";

function App(p) {

  let profilePage = ()=>{
    return(
      <Profile/>
    )
  }
  
  return (
    <BrowserRouter>
      <div id="App">
        <Header />

        <section className="content">
          <div className="wrapper">
            <Aside />

            <main>
              <Routes>
                <Route
                  path="/"
                  element={
                    profilePage()
                  }
                />
                <Route
                  path="/profile"
                  element={
                    profilePage()
                  }
                />
                <Route
                  path="/messages/*"
                  element={
                    <Messages/>
                  }
                />

                <Route
                  path="/users/*"
                  element={
                    <Users/>
                  }
                />
                <Route path="/news" element={<News />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/music" element={<Music />} />
              </Routes>
            </main>
          </div>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
