import { Component } from "react";
import Header from "./components/Header";
import InputData from "./components/InputData";
import ListItems from "./components/ListItems";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      list:[],
    };
    
  }

setStateLists=(text)=>{
  this.setState({
    list: [...this.state.list, text]
  })
}

deleteStateListItem =(title)=>{
  this.setState({
   list: this.state.list.filter((item) => item !== title)
  })
  console.log(this.state.list);
}

  render(){
  return (
    <div className="main">
<Header />
<InputData setState={this.setStateLists}/>
<ListItems items={this.state.list} delete={this.deleteStateListItem}/>
    </div>
  );
  }
};

export default App;
