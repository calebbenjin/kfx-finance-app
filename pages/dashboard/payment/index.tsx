import React, {useContext, useEffect, useState} from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import PageTitle from '@/components/common/PageTitle'
import styled from 'styled-components'
import { Form, Formik } from 'formik'
import * as Yup from 'yup';
import axios from 'axios';
import { Button } from '@/components/Button'
import PreviewTransferDetails from '@/components/PreviewTransferDetails'
import { parseCookies } from '@/config/parseCookies';
import FormSuccess from '@/components/FormSuccess'
import FormError from '@/components/FormError'
import Label from '@/components/common/Label'
import FormInput from '@/components/FormInput'
import Loading from '@/components/common/Loading'
import { useRouter } from 'next/router'
import { AuthContext } from '@/context/AuthContext'
import NotPaidModal from '@/components/NotPaidModal'
import OrderModal from '@/components/OrderModal'
import { publicFetch } from '@/config/fetch'


const SignupSchema = Yup.object().shape({
  accountName: Yup.string().required(
    'Account name is required'
  ),
  bankName: Yup.string().required('Bank name is required'),
  accountNumber: Yup.string().required('Account Number is required'),
  amount: Yup.string().required('Amount is required'),
  country: Yup.string().required('Country is required')
});

const PaymentPage = () => {
  const router = useRouter()
  const { authState } = useContext(AuthContext)
  const [isOpen, setIsOpen] = useState(false)
  const [signupSuccess, setSignupSuccess] = useState<any>();
  const [signupError, setSignupError] = useState<any>();
  const [loginLoading, setLoginLoading] = useState<any>(false);
  const [formData, setFormData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [openOrder, setOpenOrder] = useState(false)


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  })

  const userID = authState._id

  const submitCredentials = async (credentials: any) => {
    try {
      setLoginLoading(true)
      setFormData(credentials)

      const { data } = await publicFetch.post(`/createTransaction/${userID}`, credentials)

      console.log(data);

      setTimeout(() => {
        setIsOpen(true)
        setLoginLoading(false)
      },2000)
    } catch (error) {
      
    }
  };

  const handlePayment = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsOpen(false)
      setOpenOrder(true)
    }, 2000)
  }

  return (
    <>
    {/* {isLoading && <Loading />} */}
    <DashboardLayout>
      <OrderModal isOpen={openOrder} isClose={() => setOpenOrder(false)} />
      <PreviewTransferDetails isLoading={isLoading} handleClick={handlePayment} data={formData} isOpen={isOpen} isClose={() => setIsOpen(false)} />
      <div className="container pb-20">
        <PaymentForm>
          <PageTitle title="Send To Beneficiary" />
          <Formik
            initialValues={{
              accountName: '',
              bankName: '',
              accountNumber: '',
              amount: '',
              currency: '',
              country: '',
            }}
            onSubmit={values =>
              submitCredentials(values)
            }
            validationSchema={SignupSchema}
          >
            {() => (
              <Form className="mt-8">
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
                <div>
                  <div className="flex sm:flex-row flex-col">
                    <div className="mb-2 sm:mr-2 sm:w-1/2">
                      <div className="mb-1">
                        <Label text="Account Name" />
                      </div>
                      <FormInput
                        ariaLabel="Account Name"
                        type="text"
                        name="accountName"  placeholder="Beneficiary Account Name"
                      />
                    </div>
                    <div className="mb-2 sm:ml-2 sm:w-1/2">
                      <div className="mb-1">
                        <Label text="Bank Name" />
                      </div>
                      <FormInput
                        ariaLabel="Bank Name"
                        type="text"
                        name="bankName" placeholder="Beneficiary Bank Name"
                      />
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="mb-1">
                      <Label text="Account Number" />
                    </div>
                    <FormInput
                      ariaLabel="Account Number"
                      type="text"
                      name="accountNumber" placeholder="Beneficiary Account Number"
                    />
                  </div>
                  <div>
                    <div className="mb-1">
                      <Label text="Amount" />
                    </div>
                    <FormInput
                      ariaLabel="Amount"
                      name="amount" placeholder="Amount"
                      type="text"
                    />
                  </div>
                  <div>
                    <div className='mb-1'>
                      <Label text='Currency' />
                    </div>
                    <FormInput isSelect name='currency'>
                      <option value='USD'>USD</option>
                      <option value='EURO'>EURO</option>
                      <option value='POUNDS'>POUNDS</option>
                      <option value='ZAR'>ZAR</option>
                      <option value='NGN'>NGN</option>
                      <option value='PULA'>Pula</option>
                      <option value='NAD'>NAD</option>
                      <option value='ZMW'>ZMW</option>
                      <option value='SZL'>SZL</option>
                      <option value='LSL'>LSL</option>
                    </FormInput>
                  </div>
                  <div>
                    <div className="mb-1">
                      <Label text="Country" />
                    </div>
                    <FormInput isSelect name='country'>
                      <option value='Afghanistan'>Afghanistan</option>
                      <option value='Albania '>Albania</option>
                      <option value='Algeria'>Algeria</option>
                      <option value='American Samoa'>American Samoa</option>
                      <option value='Andorra'>Andorra</option>
                      <option value='Angola'>Angola</option>
                      <option value='Anguilla'>Anguilla</option>
                      <option value='Antarctica'>Antarctica</option>
                      <option value='Antigua and Barbuda'>
                        Antigua and Barbuda
                      </option>
                      <option value='Argentina '>Argentina</option>
                      <option value='Armenia'>Armenia</option>
                      <option value='Aruba'>Aruba</option>
                      <option value='Australia'>Australia</option>
                      <option value='Austria'>Austria</option>
                      <option value='Azerbaijan'>Azerbaijan</option>
                      <option value='Bahamas'>Bahamas</option>
                      <option value='Bahrain'>Bahrain</option>
                      <option value='Bangladesh'>Bangladesh</option>
                      <option value='Barbados'>Barbados</option>
                      <option value='Belarus'>Belarus</option>
                      <option value='Belgium'>Belgium</option>
                      <option value='Belize'>Belize</option>
                      <option value='Benin'>Benin</option>
                      <option value='Bermuda'>Bermuda</option>
                      <option value='Bhutan'>Bhutan</option>
                      <option value='Bolivia'>Bolivia</option>
                      <option value='Bosnia and Herzegowina'>
                        Bosnia and Herzegowina
                      </option>
                      <option value='Botswana'>Botswana</option>
                      <option value='Bouvet Island'>Bouvet Island</option>
                      <option value='Brazil'>Brazil</option>
                      <option value='British Indian Ocean Territory'>
                        British Indian Ocean Territory
                      </option>
                      <option value='Brunei Darussalam'>
                        Brunei Darussalam
                      </option>
                      <option value='Bulgaria'>Bulgaria</option>
                      <option value='Burundi'>Burundi</option>
                      <option value='Cambodia'>Cambodia</option>
                      <option value='Cameroon'>Cameroon</option>
                      <option value='Canada'>Canada</option>
                      <option value='Cape Verde'>Cape Verde</option>
                      <option value='Cayman Islands'>Cayman Islands</option>
                      <option value='Central African Republic'>
                        Central African Republic
                      </option>
                      <option value='Chad'>Chad</option>
                      <option value='Chile'>Chile</option>
                      <option value='China'>China</option>
                      <option value='Christmas Island'>
                        Christmas Island
                      </option>
                      <option value='Cocos (Keeling) Islands'>
                        Cocos (Keeling) Islands
                      </option>
                      <option value='Colombia'>Colombia</option>
                      <option value='Comoros'>Comoros</option>
                      <option value='Congo'>Congo</option>
                      <option value='Cook Islands'>Cook Islands</option>
                      <option value='Costa Rica'>Costa Rica</option>
                      <option value="Cote D'Ivoire">Cote D'Ivoire</option>
                      <option value='Croatia'>Croatia</option>
                      <option value='Cuba'>Cuba</option>
                      <option value='Cyprus'>Cyprus</option>
                      <option value='Czech Republic'>Czech Republic</option>
                      <option value='Denmark'>Denmark</option>
                      <option value='Djibouti'>Djibouti</option>
                      <option value='Dominica'>Dominica</option>
                      <option value='Dominican Republic'>
                        Dominican Republic
                      </option>
                      <option value='East Timor'>East Timor</option>
                      <option value='Ecuador'>Ecuador</option>
                      <option value='Egypt'>Egypt</option>
                      <option value='El Salvador'>El Salvador</option>
                      <option value='Equatorial Guinea'>
                        Equatorial Guinea
                      </option>
                      <option value='Eritrea'>Eritrea</option>
                      <option value='Estonia'>Estonia</option>
                      <option value='Ethiopia'>Ethiopia</option>
                      <option value='Falkland Islands'>
                        Falkland Islands
                      </option>
                      <option value='Faroe Islands'>Faroe Islands</option>
                      <option value='Fiji'>Fiji</option>
                      <option value='Finland'>Finland</option>
                      <option value='France'>France</option>
                      <option value='France (Metropolitan)'>
                        France (Metropolitan)
                      </option>
                      <option value='French Guiana'>French Guiana</option>
                      <option value='French Polynesia'>
                        French Polynesia
                      </option>
                      <option value='French Southern Territories'>
                        French Southern Territories
                      </option>
                      <option value='Gabon'>Gabon</option>
                      <option value='Gambia'>Gambia</option>
                      <option value='Georgia'>Georgia</option>
                      <option value='Germany'>Germany</option>
                      <option value='Ghana'>Ghana</option>
                      <option value='Gibraltar'>Gibraltar</option>
                      <option value='Greece'>Greece</option>
                      <option value='Greenland'>Greenland</option>
                      <option value='Grenada'>Grenada</option>
                      <option value='Guadeloupe'>Guadeloupe</option>
                      <option value='Guam'>Guam</option>
                      <option value='Guatemala'>Guatemala</option>
                      <option value='Guinea'>Guinea</option>
                      <option value='Guinea-Bissau'>Guinea-Bissau</option>
                      <option value='Guyana'>Guyana</option>
                      <option value='Haiti'>Haiti</option>
                      <option value='Heard and McDonald Islands'>
                        Heard and McDonald Islands
                      </option>
                      <option value='Honduras'>Honduras</option>
                      <option value='Hong Kong'>Hong Kong</option>
                      <option value='Hungary'>Hungary</option>
                      <option value='Iceland'>Iceland</option>
                      <option value='India'>India</option>
                      <option value='Indonesia'>Indonesia</option>
                      <option value='Iran'>Iran</option>
                      <option value='Iraq'>Iraq</option>
                      <option value='Ireland'>Ireland</option>
                      <option value='Israel'>Israel</option>
                      <option value='Italy'>Italy</option>
                      <option value='Jamaica'>Jamaica</option>
                      <option value='Japan'>Japan</option>
                      <option value='Jordan'>Jordan</option>
                      <option value='Kazakhstan'>Kazakhstan</option>
                      <option value='Kenya'>Kenya</option>
                      <option value='Kiribati'>Kiribati</option>
                      <option value="Korea (Democratic People's Republic of)">
                        Korea (Democratic People’s Republic of)
                      </option>
                      <option value='Korea (Republic of)'>
                        Korea (Republic of)
                      </option>
                      <option value='Kuwait'>Kuwait</option>
                      <option value='Kyrgyzstan'>Kyrgyzstan</option>
                      <option value="Lao People's Democratic Republic">
                        Lao People’s Democratic Republic
                      </option>
                      <option value='Latvia'>Latvia</option>
                      <option value='Lebanon'>Lebanon</option>
                      <option value='Lesotho'>Lesotho</option>
                      <option value='Liberia'>Liberia</option>
                      <option value='Libyan Arab Jamahiriya'>
                        Libyan Arab Jamahiriya
                      </option>
                      <option value='Liechtenstein'>Liechtenstein</option>
                      <option value='Lithuania'>Lithuania</option>
                      <option value='Luxembourg'>Luxembourg</option>
                      <option value='Macau'>Macau</option>
                      <option value='Macedonia'>
                        Macedonia (The Former Yugoslav Republic of)
                      </option>
                      <option value='Madagascar'>Madagascar</option>
                      <option value='Malawi'>Malawi</option>
                      <option value='Malaysia'>Malaysia</option>
                      <option value='Maldives'>Maldives</option>
                      <option value='Mali'>Mali</option>
                      <option value='Malta'>Malta</option>
                      <option value='Marshall Islands'>
                        Marshall Islands
                      </option>
                      <option value='Martinique'>Martinique</option>
                      <option value='Mauritania'>Mauritania</option>
                      <option value='Mauritius'>Mauritius</option>
                      <option value='Mayotte'>Mayotte</option>
                      <option value='Mexico'>Mexico</option>
                      <option value='Micronesia (Federated States of)'>
                        Micronesia (Federated States of)
                      </option>
                      <option value='Moldova (Republic of)'>
                        Moldova (Republic of)
                      </option>
                      <option value='Monaco'>Monaco</option>
                      <option value='Mongolia'>Mongolia</option>
                      <option value='Montserrat'>Montserrat</option>
                      <option value='Morocco'>Morocco</option>
                      <option value='Mozambique'>Mozambique</option>
                      <option value='Myanmar'>Myanmar</option>
                      <option value='Namibia'>Namibia</option>
                      <option value='Nauru'>Nauru</option>
                      <option value='Nepal'>Nepal</option>
                      <option value='Netherlands'>Netherlands</option>
                      <option value='Netherlands Antilles'>
                        Netherlands Antilles
                      </option>
                      <option value='New Caledonia'>New Caledonia</option>
                      <option value='New Zealand'>New Zealand</option>
                      <option value='Nicaragua'>Nicaragua</option>
                      <option value='Niger'>Niger</option>
                      <option value='Nigeria'>Nigeria</option>
                      <option value='Niue'>Niue</option>
                      <option value='Norfolk Island'>Norfolk Island</option>
                      <option value='Northern Mariana Islands'>
                        Northern Mariana Islands
                      </option>
                      <option value='Norway'>Norway</option>
                      <option value='Oman'>Oman</option>
                      <option value='Pakistan'>Pakistan</option>
                      <option value='Palau'>Palau</option>
                      <option value='Panama'>Panama</option>
                      <option value='Papua New Guinea'>
                        Papua New Guinea
                      </option>
                      <option value='Paraguay'>Paraguay</option>
                      <option value='Peru'>Peru</option>
                      <option value='Philippines'>Philippines</option>
                      <option value='Pitcairn'>Pitcairn</option>
                      <option value='Poland'>Poland</option>
                      <option value='Portugal'>Portugal</option>
                      <option value='Puerto Rico'>Puerto Rico</option>
                      <option value='Qatar'>Qatar</option>
                      <option value='Reunion'>Reunion</option>
                      <option value='Romania'>Romania</option>
                      <option value='Russian Federation'>
                        Russian Federation
                      </option>
                      <option value='Rwanda'>Rwanda</option>
                      <option value='Saint Kitts and Nevis'>
                        Saint Kitts and Nevis
                      </option>
                      <option value='Saint Lucia'>Saint Lucia</option>
                      <option value='Saint Vincent and the Grenadines'>
                        Saint Vincent and the Grenadines
                      </option>
                      <option value='Samoa'>Samoa</option>
                      <option value='San Marino'>San Marino</option>
                      <option value='Sao Tome and Principe'>
                        Sao Tome and Principe
                      </option>
                      <option value='Saudi Arabia'>Saudi Arabia</option>
                      <option value='Sebia'>Sebia</option>
                      <option value='Senegal'>Senegal</option>
                      <option value='Seychelles'>Seychelles</option>
                      <option value='Sierra Leone'>Sierra Leone</option>
                      <option value='Singapore'>Singapore</option>
                      <option value='Slovakia (Slovak Republic)'>
                        Slovakia (Slovak Republic)
                      </option>
                      <option value='Slovenia'>Slovenia</option>
                      <option value='Solomon Islands'>Solomon Islands</option>
                      <option value='Somalia'>Somalia</option>
                      <option value='South Africa'>South Africa</option>
                      <option value='South Georgia &amp; South Sandwich Islands'>
                        South Georgia and the South Sandwich Islands
                      </option>
                      <option value='Spain'>Spain</option>
                      <option value='Sri Lanka'>Sri Lanka</option>
                      <option value='St. Helena'>St. Helena</option>
                      <option value='St. Pierre and Miquelon'>
                        St. Pierre and Miquelon
                      </option>
                      <option value='Sudan'>Sudan</option>
                      <option value='Suriname'>Suriname</option>
                      <option value='Svalbard and Jan Mayen Islands'>
                        Svalbard and Jan Mayen Islands
                      </option>
                      <option value='Swaziland'>Swaziland</option>
                      <option value='Sweden'>Sweden</option>
                      <option value='Switzerland'>Switzerland</option>
                      <option value='Syrian Arab Republic'>
                        Syrian Arab Republic
                      </option>
                      <option value='Taiwan (Province of China)'>
                        Taiwan (Province of China)
                      </option>
                      <option value='Tajikistan'>Tajikistan</option>
                      <option value='Tanzania (United Republic of)'>
                        Tanzania (United Republic of)
                      </option>
                      <option value='Thailand'>Thailand</option>
                      <option value='Togo'>Togo</option>
                      <option value='Tokelau'>Tokelau</option>
                      <option value='Tonga'>Tonga</option>
                      <option value='Trinidad and Tobago'>
                        Trinidad and Tobago
                      </option>
                      <option value='Tunisia'>Tunisia</option>
                      <option value='Turkey'>Turkey</option>
                      <option value='Turkmenistan'>Turkmenistan</option>
                      <option value='Turks and Caicos Islands'>
                        Turks and Caicos Islands
                      </option>
                      <option value='Tuvalu'>Tuvalu</option>
                      <option value='Uganda'>Uganda</option>
                      <option value='Ukraine'>Ukraine</option>
                      <option value='United Arab Emirates'>
                        United Arab Emirates
                      </option>
                      <option value='United Kingdom'>United Kingdom</option>
                      <option value='United States Minor Outlying Islands'>
                        United States Minor Outlying Islands
                      </option>
                      <option value='United States of America'>
                        United States of America
                      </option>
                      <option value='Uruguay'>Uruguay</option>
                      <option value='Uzbekistan'>Uzbekistan</option>
                      <option value='Vanuatu'>Vanuatu</option>
                      <option value='Vatican City State (Holy See)'>
                        Vatican City State (Holy See)
                      </option>
                      <option value='Venezuela'>Venezuela</option>
                      <option value='Viet Nam'>Viet Nam</option>
                      <option value='Virgin Islands (British)'>
                        Virgin Islands (British)
                      </option>
                      <option value='Virgin Islands (U.S.)'>
                        Virgin Islands (U.S.)
                      </option>
                      <option value='Wallis and Futuna Islands'>
                        Wallis and Futuna Islands
                      </option>
                      <option value='Western Sahara'>Western Sahara</option>
                      <option value='Yemen'>Yemen</option>
                      <option value='Yugoslavia'>Yugoslavia</option>
                      <option value='Zaire'>Zaire</option>
                      <option value='Zambia'>Zambia</option>
                      <option value='Zimbabwe'>Zimbabwe</option>
                    </FormInput>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <Button
                    type="submit" loadingText='Verifying....' loading={loginLoading}
                    className="core-btn sm:w-4/6 w-full text-lg shadow-2xl mt-4 bg-gradient text-gray-100 py-2 px-6 md:inline-block text-gray-50">PROCEED</Button>
                </div>
              </Form>
            )}
          </Formik>
        </PaymentForm>
      </div>
    </DashboardLayout>
    </>
  )
}


const PaymentForm = styled.div`
  margin: 2rem auto;
  width: 50%;

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`


export async function getServerSideProps({ req }: any) {
  const { token } = parseCookies(req);

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {
      token: token
    },
  };
}

export default PaymentPage
