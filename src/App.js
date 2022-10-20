import F_Counter from "./Component/F_counter";
import Counter from "./Component/Counter";
import Counters from "./Component/Counters";


function App() {
  return (
    <div className="App">
      {/* <div className="row">
        <div className="col">
          <h1 className="text-center"><center>Class Component</center></h1>
          <Counter name={"shailesh"} gmail={"shaileshgokhale@gmail.com"} />

        </div>
        <div className="col">
          <h1 className="text-center"><center>Function Component</center></h1>
          <F_Counter name={"Anil"} gmail={"anil@gmail.com"} age={23} />

        </div>
      </div> */}

      <Counters/>
    </div>
  );
}

export default App;
