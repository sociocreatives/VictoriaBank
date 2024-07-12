import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import miscellanous from '/models/recentTransactions.json';
import ReactBSTables from './DataTable';


const AccountSummary = () => {
  return (
    <div className='account_summary'>
      <div className='account_header'>
        {/* <h4>Recent Transactions</h4>
        <h4 className='statement'>Full Statement</h4> */}
      </div>
      

      <div className='summary_table'>
      <Image
                    width={600}
                    height={600}
                    className='advert_image'
                    src="/assets/images/vcb_cards.jpg"
                    alt="vicwhite"
                />
          {/* <div className='tables-head'>
            <h4>Date</h4>
            <h4>Description</h4>
            <h4>Amount</h4>
          </div>
          {miscellanous.map((getservice, index) => (
            <div className='tables-body' key={index}> 
              <p>{ getservice.transactionId}</p>
              <p>{ getservice.accountNumber}</p>
              <p>{ getservice.transactionType}</p>
              <p>{ getservice.amount}</p>
              <p>{ getservice.transactionDate}</p>
            </div>
                  ))} */}
      </div>
    </div>
  )
}

export default AccountSummary
