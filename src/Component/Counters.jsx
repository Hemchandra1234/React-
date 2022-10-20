import React,{Component} from "react";
import New_counter from "./New_counter";

class Counters extends Component {
    constructor(){
        super();
        this.state={
            counters :[ 
                {id:1,value:1},
                {id:2,value:5},
                {id:3,value:1},
                {id:4,value:1},
                {id:5,value:1},
            ]
        }
    }
    onDelete=(counterId)=>{
        const counters = this.state.counters.filter((counter)=>
            counterId !== counter.id
        )
        this.setState({counters:counters})
    }

    

    render() { 
        return (
            <div>
                {this.state.counters.map((counter)=>(
                    <New_counter 
                    key={counter.id} 
                    value={counter.value} 
                    id={counter.id}
                    onDelete={this.onDelete}
                    />
                ))}
            </div>
        );
    }
}
 
export default Counters;