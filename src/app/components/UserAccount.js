import React from 'react'

export default function UserAccount() {
    const options = [
        { label: "Kids Savings Account", value: 1 },
        { label: "Student Savings Account", value: 2 },
        { label: "Senior/Old Age Account", value: 3 },
        { label: "Business Account", value: 4 },
        { label: "Savings Account", value: 5 },
    ]
    return (
        <div>
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
        </div>
    )
}
