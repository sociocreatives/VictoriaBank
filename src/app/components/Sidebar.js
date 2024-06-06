"use client"

import Image from "next/image";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import { useContext, useState } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { BiSolidDashboard, BiTask, BiSpreadsheet, BiTransfer, BiCreditCard, BiData, BiDetail } from "react-icons/bi";
import { FaArrowRightToBracket } from "react-icons/fa6";



const Sidebar = () => {
    const [isCollapsedSidebar, setIsidebarcollapse] = useState(false);

    const toggleSidebarcollapseHandler = () => {
        setIsidebarcollapse((prev) => !prev);
    };

    return (
        <div className="sidebar__wrapper">
            <button className="btn" onClick={toggleSidebarcollapseHandler}>
                {isCollapsedSidebar ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
            </button>
            <aside className="sidebar" data-collapse={isCollapsedSidebar}>
                <div className="sidebar__top">
                    <Image
                        width={40}
                        height={40}
                        className="vlogo"
                        src="/assets/images/vlogo.svg"
                        alt="logo"
                    />
                    <Image
                        width={145}
                        height={61}
                        className="imagelogo"
                        src="/assets/images/vb_logo.png"
                        alt="logo"
                    />
                </div>
                <div className="lis-navs">
                    <div className="top-navs">
                        <ul className="sidebar__list">
                            <Link href="/dashboard">
                                <li className="sidebar__item">
                                    <span className="sidebar__icon">
                                        <BiSolidDashboard />
                                    </span>
                                    <span className="sidebar__name">Dasboard</span>
                                    <span className="tooltiptext">Dashboard</span>
                                </li></Link>
                            <Link href="/dashboard/tasks"><li className="sidebar__item">
                                <span className="sidebar__icon">
                                    <BiTask />
                                </span>
                                <span className="sidebar__name">Tasks</span>
                                <span className="tooltiptext">Tasks</span>
                            </li></Link>
                            <Link href="/dashboard/accounts"><li className="sidebar__item">
                                <span className="sidebar__icon">
                                    <BiSpreadsheet />
                                </span>
                                <span className="sidebar__name">Account Summary</span>
                                <span className="tooltiptext">Account Summary</span>
                            </li></Link>
                            <Link href="/dashboard/transfers"><li className="sidebar__item">
                                <span className="sidebar__icon">
                                    <BiTransfer />
                                </span>
                                <span className="sidebar__name">Transfers</span>
                                <span className="tooltiptext">Transfers </span>
                            </li></Link>
                            <li className="sidebar__item">
                                <span className="sidebar__icon">
                                    <BiCreditCard />
                                </span>
                                <span className="sidebar__name">Payments</span>
                                <span className="tooltiptext">Payments</span>
                            </li>
                            <li className="sidebar__item">
                                <span className="sidebar__icon">
                                    <BiSolidDashboard />
                                </span>
                                <span className="sidebar__name">MPESA</span>
                                <span className="tooltiptext">MPESA</span>
                            </li>
                            <li className="sidebar__item">
                                <span className="sidebar__icon">
                                    <BiData />
                                </span>
                                <span className="sidebar__name">Bulk Upload</span>
                                <span className="tooltiptext">Bulk Upload</span>
                            </li>
                            <li className="sidebar__item">
                                <span className="sidebar__icon">
                                    <BiDetail />
                                </span>
                                <span className="sidebar__name">Services</span>
                                <span className="tooltiptext">Services</span>
                            </li>
                            <li className="sidebar__item">
                                <span className="sidebar__icon">
                                    <BiSolidDashboard />
                                </span>
                                <span className="sidebar__name">Settings</span>
                                <span className="tooltiptext">Settings</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bottom-navs">
                        <ul className="sidebar__list">
                            <li className="sidebar__item">
                                <span className="sidebar__icon">
                                    <BiDetail />
                                </span>
                                <span className="sidebar__name">Trade</span>
                                <span className="tooltiptext">Trade</span>
                            </li>
                            <li className="sidebar__item">
                                <span className="sidebar__icon">
                                    <FaArrowRightToBracket />
                                </span>
                                <span className="sidebar__name">Logout</span>
                            </li>
                        </ul>
                    </div>


                </div>
                <div className="copyright">
                    <p>Copyright, 2024:</p>
                    <p>Victoria Commercial Bank</p>
                </div>
            </aside>
        </div>
    );
};

export default Sidebar;