import Image from "next/image";

import { CgChevronRightO, CgArrowsExchangeAlt, CgClipboard, CgArrowRight, CgArrowLongRight } from "react-icons/cg";
import Card from "../components/Card";
import Quicklinks from "../components/Quicklinks";
import AccountSummary from "../components/AccountSummary";

export default function Dashboard() {

  const options = [
    { label: "Select Account", value: 1 },
    { label: "Student Savings Account", value: 2 },
    { label: "Senior/Old Age Account", value: 3 },
    { label: "Business Account", value: 4 },
    { label: "Savings Account", value: 5 },
  ]

  return (
    <div className="main-home">
      <div className="shots">

        <div className="select__account">
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
        <div className="welcome">
          <div className="greetings_main">
            <p className="greetings">Welcome Back</p>
            <h2>Mr. A. N. Other</h2>
          </div>
          <p className="lastlogin">Last Login: 10-05-2024  10:40</p>
        </div>

        <div >
          <Quicklinks />
        </div>
        <div className="summary_of_accounts">
          <AccountSummary />
        </div>
      </div>
      
    </div>
  );
}

