import React, {Component} from 'react';



class Ticker extends Component
{

//constructor
constructor ()
{
    super();
    this.state ={
      count: 0,
                }

}
//methods
increment = () =>{
   if(this.state.count){
     this.setState({count: this.state.count + this.state.i,
                  })
   }
}

clear = () => {
    this.setState({
      count: 0,
    })
  }



  componentDidMount(){
setInterval(() =>{
    this.setState({
      count: this.state.count+1
    })
  },1000)
}
shouldComponentUpdate(nextProps,nextState){
  if(nextState.count % 3 === 0) return true;
  else return false;
}
//render
render(){

          return(

                    <div>
                    <p>this ticker is: <span>{this.state.count}</span></p>
                    <button onClick={()=>this.setState({count:0})} type="button">Reset</button>
                    </div>

                );
        };
};


export default Ticker;
