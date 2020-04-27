import React from 'react';
import axios from 'axios';
import NextPage from './NextPage';
class Secpage extends React.Component{
  state={
    Movie:null,
    Tv_series:null,
    Characters:[],
    endpoint : "/welcome"
  }
  //////Fetching of data//////////
  async componentDidMount(){
    axios.get("https://saarang2021aspirers.herokuapp.com"+this.state.endpoint)
    .then(res=>{
      console.log(res)
      this.setState({
        Movie: res.data.treasure,
        endpoint : res.data.endpoint
      })
      console.log(this.state.endpoint,"yesssss")
    }).then(await axios.get("https://saarang2021aspirers.herokuapp.com"+this.state.endpoint)
  ).then(await axios.get("https://saarang2021aspirers.herokuapp.com"+this.state.endpoint)
    .then(res=>{
      console.log(res)
        this.setState({
          Tv_series :res.data.treasure,
          endpoint :res.data.endpoint
        })
        console.log(res.data.treasure)
      })).then(axios.get("https://saarang2021aspirers.herokuapp.com"+this.state.endpoint)
        .then(res=>{
            this.setState({
              Characters :res.data,
              endpoint :null
            })
          }))
}
/////////////////////////////////////
  render(){
console.log(this.state)
    return(
    <div>
    <NextPage Mo={this.state.Movie} Tv={this.state.Tv_series} Ch={this.state.Characters}/>
    </div>
  )}
}
export default Secpage;
