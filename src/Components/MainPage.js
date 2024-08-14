import React, { useState } from 'react';
import './MainPage.css';
import sample from '../Components/surf2.png';
import chennai from '../Components/image.png';
import merchantIcon from '../Components/merchant.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faSearch } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [activeLink, setActiveLink] = useState('info');
  const [searchQuery, setSearchQuery] = useState('');
  const [showMerchants, setShowMerchants] = useState(false);
  const [showMerchantDetails, setShowMerchantDetails] = useState(false);


  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [selectedOrderType, setSelectedOrderType] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); 
  };

  const handlePaymentMethodChange = (e) => {
    setSelectedPaymentMethod(e.target.value);
    setCurrentPage(1); 
  };

  const handleOrderTypeChange = (e) => {
    setSelectedOrderType(e.target.value);
    setCurrentPage(1); 
  };

  const handleMerchantsClick = () => {
    setShowMerchants(true);
    setShowMerchantDetails(false);
  };

  const handleBackClick = () => {
    setShowMerchantDetails(false);
    setShowMerchants(false);
  };

  const transactions = [
    
    { amount: "233 SEK", dateTime: "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "t_q2u364bwef", paymentMethod: "Swish", orderType: "Purchase" },
    { amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Return" },
    { amount: "12333 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "cash", orderType: "Purchase" },
    { amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "cash", orderType: "Purchase" },
    { amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
    { amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
    { amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
    { amount: "233 SEK", dateTime: "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
    { amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
    { amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
    { amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
    { amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
    { amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
    { amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
    { amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
  
    { amount: "233 SEK", dateTime: "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "t_q2u364bwef", paymentMethod: "Swish", orderType: "Purchase" },
    { amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Return" },
    { amount: "12333 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "cash", orderType: "Purchase" },
    { amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "cash", orderType: "Purchase" },
    { amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
    { amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
    { amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
    { amount: "233 SEK", dateTime: "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
    { amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
    { amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
    { amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
    { amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
    { amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
    { amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
  { amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },



  { amount: "233 SEK", dateTime: "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "t_q2u364bwef", paymentMethod: "Swish", orderType: "Purchase" },
  { amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Return" },
  { amount: "12333 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "cash", orderType: "Purchase" },
  { amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "cash", orderType: "Purchase" },
  { amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
  { amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
  { amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
  { amount: "233 SEK", dateTime: "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
  { amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
  { amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
  { amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
  { amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
  { amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
  { amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },


{ amount: "233 SEK", dateTime: "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "t_q2u364bwef", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Return" },
{ amount: "12333 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "cash", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "cash", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime: "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },

{ amount: "233 SEK", dateTime: "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "t_q2u364bwef", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Return" },
{ amount: "12333 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "cash", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "cash", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime: "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },

{ amount: "233 SEK", dateTime: "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "t_q2u364bwef", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Return" },
{ amount: "12333 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "cash", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "cash", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime: "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },

{ amount: "233 SEK", dateTime: "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "t_q2u364bwef", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Return" },
{ amount: "12333 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "cash", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "cash", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime: "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },

{ amount: "233 SEK", dateTime: "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "t_q2u364bwef", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Return" },
{ amount: "12333 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "cash", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "cash", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime: "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },

{ amount: "233 SEK", dateTime: "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "t_q2u364bwef", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Return" },
{ amount: "12333 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "cash", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "cash", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime: "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },

{ amount: "233 SEK", dateTime: "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "t_q2u364bwef", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Return" },
{ amount: "12333 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "cash", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "cash", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime: "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },

{ amount: "233 SEK", dateTime: "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "t_q2u364bwef", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Return" },
{ amount: "12333 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "cash", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "cash", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime: "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },

{ amount: "233 SEK", dateTime: "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "t_q2u364bwef", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Return" },
{ amount: "12333 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "cash", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "cash", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime: "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },
{ amount: "233 SEK", dateTime:  "9 May, 2023 | 1:45:32", terminalId: "2134wer23411324f", transactionId: "Partner", paymentMethod: "Swish", orderType: "Purchase" },


];


  const filteredTransactions = transactions.filter(transaction =>
    (transaction.amount.toLowerCase().includes(searchQuery.toLowerCase()) ||
    transaction.dateTime.toLowerCase().includes(searchQuery.toLowerCase()) ||
    transaction.terminalId.toLowerCase().includes(searchQuery.toLowerCase()) ||
    transaction.transactionId.toLowerCase().includes(searchQuery.toLowerCase()) ||
    transaction.paymentMethod.toLowerCase().includes(searchQuery.toLowerCase()) ||
    transaction.orderType.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (selectedPaymentMethod === '' || transaction.paymentMethod.toLowerCase() === selectedPaymentMethod.toLowerCase()) &&
    (selectedOrderType === '' || transaction.orderType.toLowerCase() === selectedOrderType.toLowerCase())
  );

  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
  const currentTransactions = filteredTransactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="container">
      <div className="sidebar bg">
        <div className="sidebar-content">
          <img src={sample} alt='logo' style={{ width: '250px' }} />
        </div>
        <h4 className="merchants-button" onClick={handleMerchantsClick}>
          <img src={merchantIcon} alt='merchant' className="merchants-icon" />
          Merchants
        </h4>
        
      </div>

      <div className="main-content">
        {showMerchants && !showMerchantDetails && (
          <div className="merchants-content">
            <div className="header-with-back">
              <FontAwesomeIcon icon={faChevronLeft} className="back-icon" onClick={handleBackClick} />
              <p className="header-text">Merchants / Customer Name</p>
            </div>
            <br />
            <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '9px' }}>
              <h2 style={{ flexDirection: 'column' }}><b>Customer Name</b></h2>
              <h4 className='chennai'>
                <img src={chennai} alt='chennai'  /><b>Chennai</b> 
              </h4>
              <h4 className='place' style={{ marginLeft: '3%', marginTop: '10px', paddingLeft: '10px' }}>
                MCC&nbsp;&nbsp;<b>723645</b>
              </h4>
            </div>
            <p style={{ marginTop: '0%', marginLeft: '10px' }}>Partner: Partner Name</p>

            <div className="navbar">
              <a href="#info" className={activeLink === 'info' ? 'active' : ''} onClick={() => setActiveLink('info')}>Info</a>
              <a href="#company" className={activeLink === 'company' ? 'active' : ''} onClick={() => setActiveLink('company')}>Company</a>
              <a href="#transactions" className={activeLink === 'transactions' ? 'active' : ''} onClick={() => setActiveLink('transactions')}>Transactions</a>
              <a href="#stores" className={activeLink === 'stores' ? 'active' : ''} onClick={() => setActiveLink('stores')} >Stores</a>
              <a href="#billing" className={activeLink === 'billing' ? 'active' : ''} onClick={() => setActiveLink('billing')} >Billing Plan</a>
              <a href="#settlements" className={activeLink === 'settlements' ? 'active' : ''} onClick={() => setActiveLink('settlements')} >Settlements</a>
            </div>

            {activeLink === 'transactions' && (
              <div>
                <div className="search-dropdown-container">
                  <div className="search-container">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={handleSearchChange}
                      placeholder="Search..."
                      className="search-input"
                    />
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                  </div>
                  <div>
                    <select className="filter-dropdown paymentmethod" value={selectedPaymentMethod} onChange={handlePaymentMethodChange}>
                      <option value="">Payment method</option>
                      <option value="swish">Swish</option>
                      <option value="cash">Cash</option>
                    </select>
                  </div>
                  <div>
                    <select className="filter-dropdown ordertype" value={selectedOrderType} onChange={handleOrderTypeChange}>
                      <option value="">Order type</option>
                      <option value="purchase">Purchase</option>
                      <option value="return">Return</option>
                    </select>
                  </div>
                </div>

                {filteredTransactions.length === 0 ? (
                  <p style={{ textAlign: 'center', marginTop: '20px' }}>No data found</p>
                ) : (
                  <>
                    <table>
                      <thead>
                        <tr>
                          <th>Amount</th>
                          <th>Date/Time</th>
                          <th>Checkout/Terminal ID</th>
                          <th>Transaction ID</th>
                          <th>Payment Method</th>
                          <th>Order Type</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentTransactions.map((transaction, index) => (
                          <tr key={index}>
                            <td>{transaction.amount}</td>
                            <td>{transaction.dateTime}</td>
                            <td>{transaction.terminalId}</td>
                            <td>{transaction.transactionId}</td>
                            <td>{transaction.paymentMethod}</td>
                            <td>{transaction.orderType}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    <div className="pagination-container">
                      <div className="page-info">
                        <span style={{color:'#808080'}}>Page <b style={{color:'black'}}>{currentPage}</b> of <b style={{color:'black'}}>{totalPages}</b></span>
                      </div>

                      <div className="pagination-controls">
                        <button
                          className="page-button"
                          onClick={() => handlePageChange(currentPage - 1)}
                          disabled={currentPage === 1}
                        >
                          <FontAwesomeIcon icon={faChevronLeft} className='back-icon' style={{color: 'black'}} />
                        </button>
                        <span className="current-page-number back-icon" style={{color: 'blue'}}>{currentPage}</span>
                        <button
                          className="page-button"
                          onClick={() => handlePageChange(currentPage + 1)}
                          disabled={currentPage === totalPages}
                        >
                          <FontAwesomeIcon icon={faChevronRight}className='back-icon' style={{color: 'black'}} />
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        )}

        {showMerchantDetails && (
          <div className="merchant-details-content">
            <div className="header-with-back">
              <FontAwesomeIcon icon={faChevronLeft} className="back-icon" onClick={handleBackClick} />
              <p className="header-text">Merchant/Customer Details</p>
            </div>
            <h2>Merchant/Customer Details</h2>
            <p>Here you can add more detailed information about the merchant or customer.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
