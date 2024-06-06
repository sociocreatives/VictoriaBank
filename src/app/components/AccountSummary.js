import React from 'react'


const AccountSummary = () => {
  return (
    <div className='account_summary'>
      <div className='account_header'>
        <h4>Recent Transactions</h4>
        <h4 className='statement'>Full Statement</h4>
      </div>
      <div className='summary_table'>
          <div className='tables-head'>
            <h4>Date</h4>
            <h4>Description</h4>
            <h4>Amount</h4>
          </div>
          <div className='tables-body'>
            <p>10052024</p>
            <p>MPESA to Account FREQY18764804Y3U</p>
            <p>10,000.00</p>
          </div>
          <div className='tables-body'>
            <p>10052024</p>
            <p>MPESA to Account FREQY18764804Y3U</p>
            <p>10,000.00</p>
          </div>
          <div className='tables-body'>
            <p>10052024</p>
            <p>MPESA to Account FREQY18764804Y3U</p>
            <p>10,000.00</p>
          </div>
          <div className='tables-body'>
            <p>10052024</p>
            <p>MPESA to Account FREQY18764804Y3U</p>
            <p>10,000.00</p>
          </div>
          <div className='tables-body'>
            <p>10052024</p>
            <p>MPESA to Account FREQY18764804Y3U</p>
            <p>10,000.00</p>
          </div>
      </div>
    </div>
  )
}

export default AccountSummary
