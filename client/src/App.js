// Components
import HomePage from './page/HomePage/HomePage';
import ContactPage from './page/ContactPage/ContactPage';
import ProjectPage from './page/ProjectPage/ProjectPage';
import ExperimentPage from './page/ExperimentPage/ExperimentPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/contactPage' element={<ContactPage />} />
          <Route path='/projectPage' element={<ProjectPage />} />
          <Route path='/experimentPage' element={<ExperimentPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
