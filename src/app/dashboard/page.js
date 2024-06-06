import Image from "next/image";

import { CgChevronRightO, CgArrowsExchangeAlt, CgClipboard, CgArrowRight, CgArrowLongRight } from "react-icons/cg";
import Card from "../components/Card";
import Quicklinks from "../components/Quicklinks";
import AccountSummary from "../components/AccountSummary";

export default function Dashboard() {

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
        <Card />
        <div className="pending_tasks">
          <div className="task_pending">
            <CgClipboard className="icons_pending" />
            <h4>Tasks Pending Approval</h4>
          </div>
          <div className="task_pending">
            <CgClipboard className="icons_pending" />
            <h4>Limited Transactions</h4>
          </div>
          <div className="task_pending">
            <CgClipboard className="icons_pending" />
            <h4>In Process Transactions</h4>
          </div>
          <div className="task_pending">
            <CgClipboard className="icons_pending" />
            <h4>Rejected Transactions</h4>
          </div>
        </div>
      </div>
      <div className="shots-right">

        <div >
          <Quicklinks />
        </div>
        <div className="summary_of_accounts">
          <AccountSummary />
        </div>
        <div className="topimage">
          <p>The mobile banking service is available on Smart Phones and Tablets using iOS, Android and Windows mobile operating systems.. The E-banking platform can be accessed using Internet Explorer, Google Chrome, Mozilla Firefox, Safari and Opera browsers.</p>
          <div className="stores">
            <Image
              width={150}
              height={50}
              className='store-logo'
              src="/assets/images/googlestore.png"
              alt="vicwhite"
            />
            <Image
              width={150}
              height={50}
              className='store-logo'
              src="/assets/images/applestore.png"
              alt="vicwhite"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

