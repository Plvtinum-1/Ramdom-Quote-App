import './App.css';
import React from 'react';
import Quote from 'inspirational-quotes';
import 'bootstrap/dist/css/bootstrap.css';
import { FaTwitter, FaTumblr, FaFacebookF } from 'react-icons/fa';
import { GoQuote } from 'react-icons/go';



class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      quote: 'Remember its only 40% of your potential when you feel tired',
      authorName: 'Unknown Programmer',
    }
   this.handleChange = this.handleChange.bind(this)
  }

  handleChange(){
    this.setState(() => ({
      quote: Quote.getQuote().text,
      authorName: Quote.getQuote().author
    } ))
  }
  
  componentDidUpdate(){
    const changingColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    const quotes = document.querySelectorAll('quote');
    const buttons = document.querySelectorAll('button')

    for(let i = 0; i < quotes.length; i++){
      quotes[i].style.color = changingColor;
    }

    for(let i = 0; i < buttons.length; i++){
      buttons[i].style.backgroundColor = changingColor;
    }

    document.body.style.backgroundColor = changingColor;
  }
  render(){
    return ( 
      <div className="App" id="quote-box">
        <div className="firstDiv" id="text"> 
            <quote className="firstQ"><GoQuote className="go" /> {this.state.quote}</quote> 
        </div>
        <div className="authorQuote" id="author">
          <quote className='secondQ'>- {this.state.authorName}</quote>
        </div>
        <div className="secondDiv">
            <button className="btn"><a id="tweet-quote" target="_blank" href="https://twitter.com/intent/tweet"><FaTwitter className="icons" /></a></button>
            <button className="btn"><a target="_blank" href="https://twitter.com/intent/tweet"><FaTumblr className="icons" /></a></button>
            <button className="btn"><a target="_blank" href="https://twitter.com/intent/tweet"><FaFacebookF className="icons" /></a></button>
            
            <button onClick={this.handleChange} className="new btn" id="new-quote">New Quote</button>
        </div> 
      </div>    
    );
  }
  
}
export default App;
