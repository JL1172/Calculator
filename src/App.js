import React from 'react';
import Objective2 from "./Components/Objective2";

const nums = [
  {
    number: 9,
    id: Date.now()
  },
  {
    number: 8,
    id: Date.now()
  },
  {
    number: 7,
    id: Date.now()
  },
  {
    number: 6,
    id: Date.now()
  },
  {
    number: 5,
    id: Date.now()
  },
  {
    number: 4,
    id: Date.now()
  },
  {
    number: 3,
    id: Date.now()
  },
  {
    number: 2,
    id: Date.now()
  },
  {
    number: 1,
    id: Date.now()
  },
  {
    number: 0,
    id: Date.now()
  },
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numbers: nums,
    }
  }
  

  render() {
    return (
      <div>
        <Objective2 nums={this.state.numbers}
        />
      </div>
    );
  }
}

export default App;
