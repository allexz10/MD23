import Button from './Button';
import './App.scss';
import buttonName from './Data/data';

const App = () => (
  <div className="container">
    {buttonName.map(({ name }) => (
      <Button key={name} title={name} style={name} />
    ))}
  </div>
);

export default App;
