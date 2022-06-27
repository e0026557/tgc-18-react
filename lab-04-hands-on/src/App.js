// Import AlertBox component
import AlertBox from "./AlertBox";
import NumberBox from "./NumberBox";
import TickleBox from "./TickleBox";
import TickleBox2 from "./TickleBox2";
import TickleBox3 from "./TickleBox3";
import Dice from "./Dice";

function App() {
  return (
    <div>
      <AlertBox message="This is an alert!"/>
      <TickleBox/>
      <TickleBox2/>
      <TickleBox3/>
      <NumberBox initialValue={0} steps={1}/>
      <Dice />
    </div>
  );
}

export default App;
