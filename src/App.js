import './App.css';
import BookItem from './components/BookItem';
import BookList from './components/BookList';
import Person from './Person';

function App() {
  return (
    <div className="App container">
      <h1>Hello </h1>

      <BookList/>

      <Person name="Baxtiyor" age="22"/>
      <Person name="Dilshod" age="25"/>

    </div>
  );
}



export default App;
