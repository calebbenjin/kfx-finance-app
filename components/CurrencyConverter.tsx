import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FaExchangeAlt } from 'react-icons/fa'
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Button } from './Button'
import axios from 'axios'
import TrackingModal from './TrackingModal';
import { publicFetch } from '@/config/fetch';
import FormSuccess from './FormSuccess';
import FormError from './FormError';
import FormInput from './FormInput';

const CurrencyConverter = () => {
  const [isShow, setIsShow] = useState(false)
  const [info, setInfo] = useState<any>([]);
  const [input, setInput] = useState<any>(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("zar");
  const [options, setOptions] = useState<any>([]);
  const [output, setOutput] = useState(0);
  const [isOpen, setIsOpen] = useState(false)
  const [signupSuccess, setSignupSuccess] = useState<any>('');
  const [signupError, setSignupError] = useState<any>();
  const [loginLoading, setLoginLoading] = useState(false);
  const [trackingData, setTrackingData] = useState({});


  useEffect(() => {
    axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`)
   .then((res) => {
      setInfo(res.data[from]);
    })
  }, [from]);
  

  // Calling the convert function whenever
  // a user switches the currency
  useEffect(() => {
    setOptions(Object.keys(info));
    convert();
  }, [info])

  // Function to convert the currency
  function convert() {
    var rate = info[to];
    setOutput(input * rate);
  }

   // Function to switch between two currency
   function flip() {
    var temp = from;
    setFrom(to);
    setTo(temp);
  }

  
  const handleConverter = () => {
    setIsShow(true)
  }
  const handleTrack = () => {
    setIsShow(false)
  }

  const checkStatusSchema = Yup.object().shape({
    referenceNum: Yup.string().required('referenceNum is required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Email is required')
  });

  const handleCheckPaymentStatus = async (credentials: any) => {
    try {
      setLoginLoading(true)
      const { data } = await publicFetch.post('status', credentials)
      setSignupSuccess(data.message)
      setTrackingData(data?.data)
      setSignupError("")
      setTimeout(() => {
        setIsOpen(true)
        setLoginLoading(false)
        setSignupSuccess('')
      }, 2000)
    } catch (error: any) {
      setLoginLoading(false);
      const { data } = error.response;
      setSignupError(data.message);
      setSignupSuccess('');
    }
  }

  return (
    <ConverterWrapper className="shadow-2xl">
      <TrackingModal isOpen={isOpen} data={trackingData} isClose={() => setIsOpen(false)} />
      <div className="cardHeader flex align-center justify-between">
        <button onClick={handleConverter} className={`${isShow ? 'bg-white p-4' : ' p-4 bg-light-blue text-blue'} w-full md:text-lg text-sm font-semibold`}>Currency Converter</button>
        <button onClick={handleTrack} className={`p-4 hover:bg-light-blue ${!isShow ? 'bg-white' : 'bg-light-blue text-blue'} transition-all w-full text-lg font-semibold md:text-lg text-sm`}>Track your Money</button>
      </div>

      {isShow ? 
      <ConverterCard className="converter-card pb-10 transition-all">
        <div className="card-header text-center p-10">
          <p className="pb-2 text-gray-500">Amount</p>
          {input ? <h1 className="md:text-3xl text-3xl font-semibold">{input+" "+from+" = "+output.toFixed(2) + " " + to}</h1> : <h1 className="md:text-4xl text-3xl font-bold">0.00</h1>}
        </div>
        <div className="card-body text-left">
          <div className="input-control">
            <label htmlFor="amount" className="text-gray-500">Amount</label>
            <input type="text" placeholder='Amount' onChange={(e) => setInput(e.target.value)} />
          </div>
          <div className="exchange-wrapper flex items-center justify-between my-4">
            <div className="from-wrapper">
              <label htmlFor="from">From</label>
              <select id="countries" value={from} onChange={(e) => { setFrom(e.target.value) }} className="bg-gray-50 border uppercase border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              {options.map((country: string) => (
                  <option value={country} className="uppercase">{country}</option>
                ))}
              </select>
            </div>
            <FaExchangeAlt className="sm:h-6 sm:w-6"  onClick={() => { flip()}} />
            <div className="to-wrapper">
              <label htmlFor="to">To</label>
              <select  id="countries" value={to} onChange={(e) => {setTo(e.target.value)}} className="bg-gray-50 uppercase border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {options.map((country: string) => (
                  <option value={country} className="uppercase">{country}</option>
                ))}
              </select>
            </div>
          </div>
          <Button onClick={()=>{convert()}} className="core-btn shadow-2xl font-bold w-full mt-5 bg-gradient py-3 px-6 md:inline-block">CONVERT</Button>
        </div>
      </ConverterCard>
      :
      <TrackCard className="track-card transition-all">
        <div className="card-header text-center md:p-10 py-4">
          <p className="pb-2 text-lg text-gray-500">Enter the required information below to see if your money is available.</p>
        </div>
        <div className="card-body text-left">
          <Formik initialValues={{ referenceNum: '', email: ''}} onSubmit={values => handleCheckPaymentStatus(values)} validationSchema={checkStatusSchema}>
            {() => (
              <Form>
                {signupSuccess && (
                  <FormSuccess text={signupSuccess} />
                )}
                {signupError && (
                  <FormError text={signupError} />
                )}
                <input
                  type="hidden"
                  name="remember"
                  value="true"
                />
                <div className="input-control">
                  <label htmlFor="email" className="text-gray-500">Email</label>
                  <FormInput ariaLabel="email"
                    name="email"
                    type="email"
                    placeholder="Email address"
                  />
                </div>
                <div className="input-control">
                  <label htmlFor="referenceNum" className="text-gray-500">Reference Number</label>
                  <FormInput ariaLabel="referenceNum"
                    name="referenceNum"
                    type="text"
                    placeholder="Reference Number"
                  />
                </div>
                <Button type="submit" loadingText='TRACKING....' loading={loginLoading} className="core-btn bg-gradient shadow-2xl font-bold w-full mt-5 py-3 px-6 md:inline-block">TRACK YOUR MONEY</Button>
              </Form>
            )}
          </Formik>
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
