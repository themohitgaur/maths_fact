import React from 'react';
import './search.css';
import Result from './result';


class Search extends React.Component {


     constructor(props) {
     super(props);
     this.state= {
         search: "",
         searchData:[],

     }

}

handleChange =(e) => {
    this.setState({[e.target.name]: [e.target.value]});
}
find=(e) => {
    e.preventDefault();
    const search = this.state.search;
    fetch("https://numbersapi.p.rapidapi.com/"+search+"/math?fragment=true&json=true", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "315a659eebmshed5929e8129ee16p1c5b40jsna4625f75fb1a",
            "x-rapidapi-host": "numbersapi.p.rapidapi.com"
        }
    })
    .then(response => {
        console.log(response);
        return response.json();
    })    
   
.then(data=>{
    console.log("data=",data);
    this.setState({
        searchData:[data]
    })
    
   
    console.log("searchData=",this.state.searchData);
})
.catch(err => {
	console.error(err);
});
}

render(){
     const resultjsx = this.state.searchData.map(item=>(<Result text={item.text} number={item.number} found={item.found} type={item.type}/> ));
     
    return(
        <div id="result1">
            <div id="searchForm">
                <form>
                    <input type="search" name="search" value={this.state.search} onChange={this.handleChange}></input>
                    <button  onClick={this.find}><i className="fa fa-search"></i></button>
                </form>
            </div>
            <div id="result">
            {resultjsx}
            </div>
            </div>
    );
}

}
export default Search;