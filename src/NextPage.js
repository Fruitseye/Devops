import React from 'react';
import './NextPage.css';

class NextPage extends React.Component{
  render(){
    const details=this.props.Ch.map(CH=>{
      return(

        <div className="ListofCharacters">
        <ol className="rectangle-list">
        <li><a href="">Name:{CH.name}</a></li>
        <li><a href="">Description:{CH.description}</a></li>
        </ol>
      </div>
    )
    })
    return(
      <div className="AllItems">
      <h2 className="Movie">{this.props.Mo}</h2>
      <h2 className="Tv">{this.props.Tv}</h2>
      {details}
      </div>
    )
  }
}
export default NextPage;
