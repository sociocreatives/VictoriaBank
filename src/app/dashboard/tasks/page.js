import React from 'react'

export default function Tasks() {
    const options = [
        { label: "Kids Savings Account", value: 1 },
        { label: "Student Savings Account", value: 2 },
        { label: "Senior/Old Age Account", value: 3 },
        { label: "Business Account", value: 4 },
        { label: "Savings Account", value: 5 },
      ]
    return (
        <div className="main-home">
             <div className="shots">
                <p className='listitems'>Dashboard / Tasks</p>
        <p className="greetings">Welcome Back</p>
        <h2>Mr. A. N. Other</h2>
        <p className="lastlogin">Last Login: 10-05-2024  10:40</p>

        <div className="select__account">
          <label>Select Account</label>
          <select className="accounts">
            <optgroup label="Numbers" className="green">
              {options.map(option => (
                <option value={option.value} key={option} className="options">{option.label}</option>
              ))}
            </optgroup>
          </select>
        </div>
        <div className='submenus'>
            <h3>Account Summary</h3>
            <ul>
                <li>Pending Transactions</li>
                <li>In Process Transactions</li>
                <li>Initiated Transactions</li>
                <li>Rejected Transactions</li>
            </ul>
        </div>
        
      </div>
            <div className="">
                Taklist      </div>
        </div>
    )
}
