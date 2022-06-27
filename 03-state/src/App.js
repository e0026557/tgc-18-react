import NumberBox from './NumberBox';

export default function App() {
  return (
    <div>
      <h1>Our React App</h1>
      <NumberBox initialValue={10}/>
      <NumberBox initialValue={0}/>
    </div>
  );
}

// alternative method of exporting
// export default App;
