import './App.scss';
import Headline from './components/Headline/Headline';
import Card from './components/Card/Card';
import team from './data/team';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Headline/>
      </header>
     <Card teamArr={team}/> 
    </div>
  );
}

export default App;
