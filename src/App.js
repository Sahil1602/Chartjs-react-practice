import React from 'react';
import './App.css';
import MyChart from './chart';
// import { PieChart } from 'react-minimal-pie-chart';
class App extends React.Component {

  

  render(){
    return (
      <div className="App">
        {/* <from className='email-form'>
          <label>Email id</label>
          <input type='email' name='email' placeholder='example@example.com' />
          <label>Subject</label>
          <input type='text' name='subject' />
          <textarea id='message' name='message' cols='50' rows='20' placeholder='type your message here!'></textarea>
          <input type='submit' name='submit' value='send' />
        </from> */}
        {/* <PieChart className = 'pie-chart'  data = {[
          { title: 'One', value: 10, color: '#E38627' },
          { title: 'Two', value: 15, color: '#C13C37' },
          { title: 'Three', value: 20, color: '#6A2135' },
          { title: 'four', value: 3, color: '#6A993F'}
        ]}/>; */}
        <MyChart />
      </div>
    )
  }
  
}

export default App;
