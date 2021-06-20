
import './App.css';
import { Header } from './components/Header/Header';
import { MainPage } from './components/MainPage/MainPage';
import { BrowserRouter, Switch as Routes, Route } from 'react-router-dom';
import { Profile } from './components/Profile/Profile';
import { Entities } from './components/Entities/Entities';
import { Publications } from './components/Publications/Publications'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          
          <Route path="/profile">
            <Profile />
          </Route>

          <Route path="/publications">
            <Publications />
          </Route>

          <Route path="/entities">
            <Entities />
          </Route>

          <Route path="/" exact={ true } >
            <MainPage />
          </Route>

          <Route path="/*">
            <p>Not Found</p>
          </Route>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
