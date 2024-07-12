"use client"
import React, { useState } from 'react'
import Image from "next/image";
import BeneficiaryModal from './Modals/BeneficiaryModal';
import AirtimeComponent from './Modals/AirtimeComponent';
import { RiCloseLargeFill } from "react-icons/ri";
import MpesaComponent from './Modals/MpesaComponent';
import BillComponent from './Modals/BillComponent';
import PesaLink from './Modals/PesaLink';
import AccountComponent from './Modals/AccountComponent';
import AddBeneficiary from './Modals/BeneficiaryModal';


export default function Quicklinks() {
  const [beneficiarymodal, setBeneficiaryModal] = useState(false);
  const [billmodal, setBillModal] = useState(false);
  const [airtimemodal, setAirtimeModal] = useState(false);
  const [mpesamodal, setMpesaModal] = useState(false);
  const [pesalinkmodal, setPesalinkModal] = useState(false);
  const [accountmodal, setAccountModal] = useState(false);

  const toggleModal = () => {
    setBeneficiaryModal(!beneficiarymodal);
  };
  const toggleBillModal = () => {
    setBillModal(!billmodal);
  };
  const toggleAirtimeModal = () => {
    setAirtimeModal(!airtimemodal);
  };
  const toggleMpesaModal = () => {
    setMpesaModal(!mpesamodal);
  };
  const togglePesalinkModal = () => {
    setPesalinkModal(!pesalinkmodal);
  };
  const toggleAccountModal = () => {
    setAccountModal(!accountmodal);
  };

  // if (accountmodal) {
  //   document.body.classList.add('active-modal')
  // }
  // else {
  //   document.body.classList.remove('active-modal')
  // }

  return (
    <div className="quick-shots">
      <div className="box" onClick={toggleModal}>
        <Image
          width={30}
          height={30}
          className='services'
          src="/assets/images/beneficiary.svg"
          alt="profile"
        />
        <h4>Beneficiary</h4>
      </div>
      {beneficiarymodal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <AddBeneficiary/>
            <button className="close-modal" onClick={toggleModal}>
            <RiCloseLargeFill />
            </button>
          </div>
        </div>
      )}
      <div className="box" onClick={toggleBillModal}>
        <Image
          width={30}
          height={30}
          className='services'
          src="/assets/images/bill_payment.svg"
          alt="profile"
        />
        <h4>Bill Payment</h4>
      </div>
      {billmodal && (
        <div className="modal">
          <div onClick={toggleBillModal} className="overlay"></div>
          <div className="modal-content">
            <BillComponent/>
            <button className="close-modal" onClick={toggleBillModal}>
            <RiCloseLargeFill />
            </button>
          </div>
        </div>
      )}
      <div className="box" onClick={toggleAirtimeModal}>
        <Image
          width={30}
          height={30}
          className='services'
          src="/assets/images/buyairtime.svg"
          alt="profile"
        />
        <h4>Buy Airtime</h4>
      </div>
      {airtimemodal && (
        <div className="modal">
          <div onClick={toggleAirtimeModal} className="overlay"></div>
          <div className="modal-content">
            <AirtimeComponent />
            <button className="close-modal" onClick={toggleAirtimeModal}>
            <RiCloseLargeFill />
            </button>
          </div>
        </div>
      )}
      <div className="box" onClick={toggleMpesaModal}>
        <Image
          width={30}
          height={30}
          className='services'
          src="/assets/images/mpesa.png"
          alt="profile"
        />
        <h4>Mpesa</h4>
      </div>
      {mpesamodal && (
        <div className="modal">
          <div onClick={toggleMpesaModal} className="overlay"></div>
          <div className="modal-content">
            <MpesaComponent/>
            <button className="close-modal" onClick={toggleMpesaModal}>
            <RiCloseLargeFill />
            </button>
          </div>
        </div>
      )}
      <div className="box" onClick={togglePesalinkModal}>
        <Image
          width={30}
          height={30}
          className='services'
          src="/assets/images/pesalink.svg"
          alt="profile"
        />
        <h4>Pesalink</h4>
      </div>
      {pesalinkmodal && (
        <div className="modal">
          <div onClick={togglePesalinkModal} className="overlay"></div>
          <div className="modal-content">
            <PesaLink/>
            <button className="close-modal" onClick={togglePesalinkModal}>
            <RiCloseLargeFill />
            </button>
          </div>
        </div>
      )}
      <div className="box" onClick={toggleAccountModal}>
        <Image
          width={30}
          height={30}
          className='services'
          src="/assets/images/addaccount.svg"
          alt="profile"
        />
        <h4>Add Account</h4>
      </div>
      {accountmodal && (
        <div className="modal">
          <div onClick={toggleAccountModal} className="overlay"></div>
          <div className="modal-content">
            <AccountComponent/>
            <button className="close-modal" onClick={toggleAccountModal}>
            <RiCloseLargeFill />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}