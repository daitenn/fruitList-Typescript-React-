import './App.css';
import { Orange } from './Orange';
import { Apple } from './Apple ';
import { Kiwi } from './Kiwi';
import { Peach } from './Peach';
/* eslint-disable */
function App(): any {
  return (
    <div>
      <h2 className='App'>Fruit list</h2>
      <div className="card-group">
        <Orange />
        <Apple />
        <Kiwi />
        <Peach />
      </div>
    </div>
  );
}
/* eslint-enable */
export default App;
