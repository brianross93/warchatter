import './Frequencies.css'
import React, {useState} from 'react';

export default function Frequencies() {
    //display the frequencies as a list item.
    // here are the frequencies: 
    // { freq: "8791 KHZ", active: true },
    // { freq: "3809 KHZ", active: false },
    // { freq: "5640 KHZ", active: false },
    // { freq: "7933 KHZ", active: true },
    // { freq: "8939 KHZ", active: false },
    // { freq: "8090 KHZ", active: false },
    // { freq: "4034 KHZ", active: false },
    // { freq: "3305 KHZ", active: false },
    // { freq: "3310 KHZ", active: false},
    // { freq: "3891-5 KHZ", active: true },
    // { freq: "2737 KHZ", active: false },
    // { freq: "3218.5 KHZ Katok-65", active: false },
    // { freq: "3828 KHZ", active: false },
    // { freq: "3850.00 KHZ", active: false },
    // { freq: "4179 KHZ", active: false },
    // { freq: "4600 KHZ POT RUS", active: false },
    // { freq: "4625 KHZ BUZZER", active: false },
    // { freq: "5125 KHZ", active: true },
    // { freq: "8131 KHZ LRA", active: false },
    // { freq: "6822 KHZ", active: false },
    // { freq: "7816.00 KHZ", active: true },
    // { freq: "7835.00 KHZ", active: false },
    // { freq: "7933 KHZ", active: false },
    // { freq: "9741 KHZ", active: false },
    // Display those frequencies as list items in three columns across the page
    //

    // create a method to automatically look through frequencies and display them as list items
    // Code:


    // create a method to automatically look through frequencies and display them as list items
    // Code:
    // 

    const [frequencies, setFrequencies] = useState([
      { freq: "8791 KHZ", active: true },
      { freq: "3809 KHZ", active: false },
      { freq: "5640 KHZ", active: false },
      { freq: "7933 KHZ", active: true },
      { freq: "8939 KHZ", active: false },
      { freq: "8090 KHZ", active: false },
      { freq: "4034 KHZ", active: false },
      { freq: "3305 KHZ", active: false },
      { freq: "3310 KHZ", active: false},
      { freq: "3891-5 KHZ", active: true },
      { freq: "2737 KHZ", active: false },
      { freq: "3218.5 KHZ Katok-65", active: false },
      { freq: "3828 KHZ", active: false },
      { freq: "3850.00 KHZ", active: false },
      { freq: "4179 KHZ", active: false },
      { freq: "4600 KHZ POT RUS", active: false },
      { freq: "4625 KHZ BUZZER", active: false },
      { freq: "5125 KHZ", active: true },
      { freq: "8131 KHZ LRA", active: false },
      { freq: "6822 KHZ", active: false },
      { freq: "7816.00 KHZ", active: true },
      { freq: "7835.00 KHZ", active: false },
      { freq: "7933 KHZ", active: false },
      { freq: "9741 KHZ", active: false },
    ])

    const [activeFrequency, setActiveFrequency] = useState(null)

    const handleFrequencyClick = (freq) => {
      setActiveFrequency(freq)
    }

    const handleFrequencySubmit = (freq) => {
      setFrequencies([...frequencies, { freq, active: true }])
    }

    return (
      <div className="Frequencies">
        <h1>Frequencies</h1>
        <h3>Instructions: </h3>
        <ol>
          <li>Click "Start Audio" to enable sound</li>
          <li>Find the numbers (below the waterfall graph)</li>
          <li>Below are frequencies that have been used by the Russian Military. You can check out the various frequencies and see if you hear anything</li>
          <li>There is a record button on the site. If you record any Russian Military Chatter, be sure to submit it here</li>
        </ol>
        <div className="Frequencies-list">
          {frequencies.map(freq => (
            <div

              key={freq.freq}
              className={`Frequencies-list-item ${freq.active ? 'active' : ''}`}
              onClick={() => handleFrequencyClick(freq.freq)}
            >
              {freq.freq}
            </div>
          ))}
        </div>
        <div className="Frequencies-form">
          <form onSubmit={e => {
            e.preventDefault()
            handleFrequencySubmit(e.target.freq.value)
            e.target.freq.value = ''
          }}>
            <input type="text" name="freq" placeholder="Enter a frequency" />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="Frequencies-active">
          {activeFrequency && (
            <div>
              <h3>Active Frequency</h3>
              <div>{activeFrequency}</div>
            </div>
          )}
        </div>
      </div>
    )
  }