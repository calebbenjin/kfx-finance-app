import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FaExchangeAlt } from 'react-icons/fa'
import { motion } from "framer-motion"
import { Button } from './Button'
import axios from 'axios'

const CurrencyConverter = () => {
  const [isShow, setIsShow] = useState(true)
  const [info, setInfo] = useState([]);
  const [input, setInput] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [options, setOptions] = useState([]);
  const [output, setOutput] = useState(0);

  useEffect(() => {
    fetchCurreny()
  },[])

  const fetchCurreny = async () => {
    try {
      const { data } = await axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`)
      setInfo(data)
    } catch (error) {
      console.log(error)
    }
  }

  // Calling the convert function whenever
  // a user switches the currency
  useEffect(() => {
    // setOptions(Object.keys(info));
    convert();
  }, [info])

  // Function to convert the currency
  function convert() {
    var rate = info[to];
    setOutput(input * rate);
  }

  
  const handleConverter = () => {
    setIsShow(true)
  }
  const handleTrack = () => {
    setIsShow(false)
  }

  return (
    <ConverterWrapper className="shadow-2xl">
      <div className="cardHeader flex align-center justify-between">
        <button onClick={handleConverter} className={`${isShow ? 'bg-light-blue text-blue p-4' : ' p-4 bg-white'} w-full md:text-lg text-sm font-semibold`}>Currency Converter</button>
        <button onClick={handleTrack} className={`p-4 hover:bg-light-blue ${!isShow ? 'bg-light-blue text-blue' : 'bg-white'} transition-all w-full text-lg font-semibold md:text-lg text-sm`}>Track your Money</button>
      </div>

      {isShow ? 
      <ConverterCard className="converter-card pb-10 transition-all">
        <div className="card-header text-center p-10">
          <p className="pb-2 text-gray-500">Exchange Rate</p>
          <h1 className="md:text-3xl text-3xl font-semibold">$22.97</h1>
        </div>
        <div className="card-body text-left">
          <form>
            <div className="input-control">
              <label htmlFor="amount" className="text-gray-500">Amount</label>
              <input type="text" placeholder='Amount' />
            </div>
            <div className="exchange-wrapper flex items-center justify-between my-4">
              <div className="from-wrapper">
                <label htmlFor="from">From</label>
                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              <FaExchangeAlt className="exchange-icon" />
              <div className="to-wrapper">
                <label htmlFor="to">To</label>
                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
            </div>
            <Button className="core-btn shadow-2xl font-bold w-full mt-5 bg-gradient py-3 px-6 md:inline-block">CONVERT</Button>
          </form>
        </div>
      </ConverterCard>
      :
      <TrackCard className="track-card transition-all">
        <div className="card-header text-center md:p-10 py-4">
          <p className="pb-2 text-lg text-gray-500">Enter the required information below to see if your money is available.</p>
        </div>
        <div className="card-body text-left">
          <form>
            <div className="input-control">
              <label htmlFor="email" className="text-gray-500">Email</label>
              <input type="email" placeholder='Email address' />
            </div>
            <div className="input-control">
              <label htmlFor="referenceNumber" className="text-gray-500">Reference Number</label>
              <input type="text" placeholder='Reference Number' />
            </div>
            <Button className="core-btn bg-gradient shadow-2xl font-bold w-full mt-5 py-3 px-6 md:inline-block">TRACK YOUR MONEY</Button>
          </form>
        </div>
      </TrackCard>
      }
    </ConverterWrapper>
  )
}

const ConverterWrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  background: #fff;
  border-radius: 10px;
  border-top: solid 6px #3734A9;

  @media (max-width: 1024px) {
    width: 100%;
  }

  .exchange-icon {
    font-size: 1.5rem;
    font-weight: 800;
  }
`

const ConverterCard = styled.div`
  width: 70%;
  margin: 0 auto;

  input {
    width: 100%;
    border: solid 1px #ccc;
    padding: 10px 13px;
    border-radius: 4px;
  }

  select {
    display: block;
    border: solid 1px #ccc;
    padding: 4px;
    border-radius: 4px;
  }

  @media (max-width: 1024px) {
    width: 85%;
  }
`;

const TrackCard = styled.div`
  width: 70%;
  margin: 0 auto;
  padding-bottom: 3rem;
  .input-control {
    margin-bottom: 1rem;
  }
  input {
    width: 100%;
    border: solid 1px #ccc;
    padding: 13px;
    border-radius: 4px;
  }

  select {
    display: block;
    border: solid 1px #ccc;
    padding: 4px;
    border-radius: 4px;
  }

  @media (max-width: 1024px) {
    width: 85%;
  }
`;

export default CurrencyConverter
