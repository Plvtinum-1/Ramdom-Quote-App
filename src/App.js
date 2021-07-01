import React from 'react';
import {Spring} from 'react-spring'
import './App.css';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      quote: 'Remember its only 40% of your potential when you feel tired',
      author: 'Unknown Programmer',
    }
   this.handleChange = this.handleChange.bind(this)
  }

  handleChange(){
    const quoteAndAuthor = [
      {quote: 'Whenever an individual or a business decides that success has been attained, progress stops.',
       author: '- Jay-Z'},
      {quote: 'It’s fine to celebrate success but it is more important to heed the lessons of failure.',
        author: '- Hasidic Proverb'},
      {quote: 'The mind that is anxious about future events is miserable.',
        author: '- Seneca'},
      {quote: 'Positive thinking will let you do everything better than negative thinking will.',
        author: '- Langston Hughes'},
      {quote: 'A general is just as good or just as bad as the troops under his command make him.',
        author: '- Jay-Z'},
      {quote: "You miss 100 percent of the shots you don't take.",
        author: '- Farrah Gray'},
      {quote: 'All cats love fish but fear to wet their paws.', 
        author: '- Steven Wright'},
      {quote: 'The only place where success comes before work is in the dictionary.', 
        author: '- Tony Robbins'},
      {quote: 'Lend your friend $20. If he doesn’t pay you back then he’s not your friend. Money well spent.', 
        author: '- Unknown'},
      {quote: 'If you’re not making mistakes, then you’re not making decisions.', 
        author: '- Zig Ziglar'},
      {quote: 'Opportunity is missed by most people because it is dressed in overalls and looks like work', 
       author: '- William James'
      },
      {quote: 'Have the end in mind and every day make sure your working towards it', 
        author: '- Chinese Proverb'},
      {quote: 'The man who does not work for the love of work but only for money is likely to neither make money nor find much fun in life.',
        author: '- Michael Dell'},
      {quote: 'I used to sell furniture for a living. The trouble was, it was my own.',
       author: '- John Shedd'},
      {quote: 'Arriving at one goal is the starting point to another.',
        author: '- Joe Penna'},
      {quote: "Take risks and you'll get the payoffs. Learn from your mistakes until you succeed. It's that simple.",
        author: '- Gary Comer'},
      {quote: 'The art of leadership is saying no, not yes. It is very easy to say yes.',
        author: '- Tony Blair'},
      {quote: 'Follow your honest convictions, and stay strong.',
        author: '- Chinese Proverb'},
      {quote: 'Whether you think you can or you can’t, you’re right.',
        author: '- Jim Rohn'},
      {quote: 'A business that makes nothing but money is a poor business.',
       author: '- Robert T. Kiyosaki'}]
    this.setState(() => ({      
      quote: quoteAndAuthor[Math.floor(Math.random() * 20)].quote,
      author: quoteAndAuthor[Math.floor(Math.random() * 20)].author
    } ))
  }   
  componentDidUpdate(){
    const changingColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    const quotes = document.querySelectorAll('quote');
    const buttons = document.querySelectorAll('button');
    const button = document.querySelector('.new');
    const tweetIcon = document.querySelector('#tweet-quote')

    for(let i = 0; i < quotes.length; i++){
      quotes[i].style.color = changingColor;
    }

    for(let i = 0; i < buttons.length; i++){
      buttons[i].style.backgroundColor = changingColor;
    }
    document.body.style.backgroundColor = changingColor;
    button.style.color = "white";
    tweetIcon.style.color = "white";
  }
  
  render(){
    return ( 
      <Spring
        from={{opacity: 0}}
        to={{opacity: 1}}
      >
      {props => (
        <div className="App" id="quote-box">
          <div className="firstDiv" id="text"> 
              <quote className="firstQ"><i className="fa fa-quote-left icon"></i> {this.state.quote}</quote> 
          </div>
          <div className="authorQuote" id="author">
            <quote className='secondQ'>{this.state.author}</quote>
          </div>
          <div className="secondDiv">
              <button className="btn"><a id="tweet-quote" target="_blank" href="https://twitter.com/intent/tweet"><i className="fa fa-twitter"></i></a></button>
              <button onClick={this.handleChange} style={{animationDelay: '2s'}} className="btn new" id="new-quote">New Quote</button>
          </div> 
        </div>
      )} 
     </Spring>   
    );
  }
  
}
export default App;
