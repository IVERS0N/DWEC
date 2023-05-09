import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import NewObjectivePage from './NewObjectivePage';
import EditObjectivePage from './EditObjectivePage';
import DeleteObjectivePage from './DeleteObjectivePage';
import ShowObjectivePage from './ShowObjectivePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new-objective" element={<NewObjectivePage />} />
        <Route path="/edit-objective/:id" element={<EditObjectivePage />} />
        <Route path="/delete-objective/:id" element={<DeleteObjectivePage />} />
        <Route path="/show-objective/:id" element={<ShowObjectivePage />} />
      </Routes>
    </Router>
  );
}

export default App;
