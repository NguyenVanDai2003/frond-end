import './App.scss';
import Header from '../views/Example/Header';
import Footer from './Example/footer';
import Main from './Example/main';
import Contact from './Example/contact';
import Buyticket from './Example/buyticket';
import Admin from '../views/admin/admin';
import Login from '../views/admin/login';
import Your_History from './Example/Your_History';
import All_History from './Example/All_History';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App respon">
      <Router>

        <Header></Header>
        <div>
           
          {/* 👇️ Wrap your Route components in a Routes component */}
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/buyticket" element={<Buyticket />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/your_history" element={<Your_History />} />
            <Route path="/all_History" element={<All_History />} />
          </Routes>
        </div>

        {/* <Main></Main> */}
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;