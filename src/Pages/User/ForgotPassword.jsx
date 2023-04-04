import axios from 'axios'
import React, { useState } from 'react'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import OtpVerifyForgot from './OtpVerifyForgot'
import ResetPassword from './ResetPassword'


const ForgotPassword = () => {
  const { REACT_APP_SERVER_URL } = process.env;
  const [cntCode, setcntCode] = useState()
  const [number, setnumber] = useState()
  const [trail, settrail] = useState("lalala")
  const [isLoading, setisLoading] = useState(false)
  
  const navigate = useNavigate()
  const handleSendOtp=async()=>{
    setisLoading(true)
    await axios({
      url:`${REACT_APP_SERVER_URL}/api/user/mobile-verify?mobile_number=${number}&country_code=${cntCode}`,
      method:'GET',
      headers: {
        'Content-Type': 'application/json'
    },
    }).then((res)=>{
      console.log(res.data,'otp send to number');
      toast.success('otp send to registered number')
      navigate('/verifyOtpForget',{state:{
        number:number,
        code:cntCode
      }})
      setisLoading(false)
    }).catch((err) => {
      if(err.request){ console.log(err.request) } if(err.response){ 
          console.log(err.response)   
          setisLoading(false)
    }})
  }
  
  return (
    <div>
        <Navbar/>
         <div className="content_auth">
      <div className="cover-shadow"></div>
      <div className="container">
          <div className="row">
            <div className="form_authentication single_item_form">
              <h2> Please Login To Continue</h2>
              <div className="form_auth3">                
              <div className="fields_fm">
                  <div className="flex-field">
                    <div className="form-group col-md-6 mobilecode">
          <label for="MobileNumber">Mobile Number</label>
          


          <input type="text" className="form-control" onChange={(e)=>{setnumber(e.target.value)}} id="usermobile" placeholder="Enter Your Mobile Number" name="cust_mobile_number" style={{textAlign: "left",paddingLeft: "135px"}} required="" aria-required="true"/>
          <select className="form-control select2 col-md-3 select2-hidden-accessible" onChange={(e)=>{setcntCode(e.target.value)}} style={{marginTop: "-33px"}} name="cust_mobile_code" id="mobCode" required="" data-select2-id="mobCode" tabIndex="-1" aria-hidden="true" aria-required="true">
            
                        <option value="+93">+93&nbsp;(AFG)</option>
            
                        <option value="+355">+355&nbsp;(ALB)</option>
            
                        <option value="+213">+213&nbsp;(DZA)</option>
            
                        <option value="+1684">+1684&nbsp;(ASM)</option>
            
                        <option value="+376">+376&nbsp;(AND)</option>
            
                        <option value="+244">+244&nbsp;(AGO)</option>
            
                        <option value="+1264">+1264&nbsp;(AIA)</option>
            
                        <option value="+0">+0&nbsp;(ATA)</option>
            
                        <option value="+1268">+1268&nbsp;(ATG)</option>
            
                        <option value="+54">+54&nbsp;(ARG)</option>
            
                        <option value="+374">+374&nbsp;(ARM)</option>
            
                        <option value="+297">+297&nbsp;(ABW)</option>
            
                        <option value="+61">+61&nbsp;(AUS)</option>
            
                        <option value="+43">+43&nbsp;(AUT)</option>
            
                        <option value="+994">+994&nbsp;(AZE)</option>
            
                        <option value="+1242">+1242&nbsp;(BHS)</option>
            
                        <option value="+973">+973&nbsp;(BHR)</option>
            
                        <option value="+880">+880&nbsp;(BGD)</option>
            
                        <option value="+1246">+1246&nbsp;(BRB)</option>
            
                        <option value="+375">+375&nbsp;(BLR)</option>
            
                        <option value="+32">+32&nbsp;(BEL)</option>
            
                        <option value="+501">+501&nbsp;(BLZ)</option>
            
                        <option value="+229">+229&nbsp;(BEN)</option>
            
                        <option value="+1441">+1441&nbsp;(BMU)</option>
            
                        <option value="+975">+975&nbsp;(BTN)</option>
            
                        <option value="+591">+591&nbsp;(BOL)</option>
            
                        <option value="+387">+387&nbsp;(BIH)</option>
            
                        <option value="+267">+267&nbsp;(BWA)</option>
            
                        <option value="+0">+0&nbsp;(BVT)</option>
            
                        <option value="+55">+55&nbsp;(BRA)</option>
            
                        <option value="+246">+246&nbsp;(IOT)</option>
            
                        <option value="+673">+673&nbsp;(BRN)</option>
            
                        <option value="+359">+359&nbsp;(BGR)</option>
            
                        <option value="+226">+226&nbsp;(BFA)</option>
            
                        <option value="+257">+257&nbsp;(BDI)</option>
            
                        <option value="+855">+855&nbsp;(KHM)</option>
            
                        <option value="+237">+237&nbsp;(CMR)</option>
            
                        <option value="+1">+1&nbsp;(CAN)</option>
            
                        <option value="+238">+238&nbsp;(CPV)</option>
            
                        <option value="+1345">+1345&nbsp;(CYM)</option>
            
                        <option value="+236">+236&nbsp;(CAF)</option>
            
                        <option value="+235">+235&nbsp;(TCD)</option>
            
                        <option value="+56">+56&nbsp;(CHL)</option>
            
                        <option value="+86">+86&nbsp;(CHN)</option>
            
                        <option value="+61">+61&nbsp;(CXR)</option>
            
                        <option value="+672">+672&nbsp;()</option>
            
                        <option value="+57">+57&nbsp;(COL)</option>
            
                        <option value="+269">+269&nbsp;(COM)</option>
            
                        <option value="+242">+242&nbsp;(COG)</option>
            
                        <option value="+242">+242&nbsp;(COD)</option>
            
                        <option value="+682">+682&nbsp;(COK)</option>
            
                        <option value="+506">+506&nbsp;(CRI)</option>
            
                        <option value="+225">+225&nbsp;(CIV)</option>
            
                        <option value="+385">+385&nbsp;(HRV)</option>
            
                        <option value="+53">+53&nbsp;(CUB)</option>
            
                        <option value="+357">+357&nbsp;(CYP)</option>
            
                        <option value="+420">+420&nbsp;(CZE)</option>
            
                        <option value="+45">+45&nbsp;(DNK)</option>
            
                        <option value="+253">+253&nbsp;(DJI)</option>
            
                        <option value="+1767">+1767&nbsp;(DMA)</option>
            
                        <option value="+1">+1&nbsp;(DOM)</option>
            
                        <option value="+593">+593&nbsp;(ECU)</option>
            
                        <option value="+20">+20&nbsp;(EGY)</option>
            
                        <option value="+503">+503&nbsp;(SLV)</option>
            
                        <option value="+240">+240&nbsp;(GNQ)</option>
            
                        <option value="+291">+291&nbsp;(ERI)</option>
            
                        <option value="+372">+372&nbsp;(EST)</option>
            
                        <option value="+251">+251&nbsp;(ETH)</option>
            
                        <option value="+500">+500&nbsp;(FLK)</option>
            
                        <option value="+298">+298&nbsp;(FRO)</option>
            
                        <option value="+679">+679&nbsp;(FJI)</option>
            
                        <option value="+358">+358&nbsp;(FIN)</option>
            
                        <option value="+33">+33&nbsp;(FRA)</option>
            
                        <option value="+594">+594&nbsp;(GUF)</option>
            
                        <option value="+689">+689&nbsp;(PYF)</option>
            
                        <option value="+0">+0&nbsp;(ATF)</option>
            
                        <option value="+241">+241&nbsp;(GAB)</option>
            
                        <option value="+220">+220&nbsp;(GMB)</option>
            
                        <option value="+995">+995&nbsp;(GEO)</option>
            
                        <option value="+49">+49&nbsp;(DEU)</option>
            
                        <option value="+233">+233&nbsp;(GHA)</option>
            
                        <option value="+350">+350&nbsp;(GIB)</option>
            
                        <option value="+30">+30&nbsp;(GRC)</option>
            
                        <option value="+299">+299&nbsp;(GRL)</option>
            
                        <option value="+1473">+1473&nbsp;(GRD)</option>
            
                        <option value="+590">+590&nbsp;(GLP)</option>
            
                        <option value="+1671">+1671&nbsp;(GUM)</option>
            
                        <option value="+502">+502&nbsp;(GTM)</option>
            
                        <option value="+224">+224&nbsp;(GIN)</option>
            
                        <option value="+245">+245&nbsp;(GNB)</option>
            
                        <option value="+592">+592&nbsp;(GUY)</option>
            
                        <option value="+509">+509&nbsp;(HTI)</option>
            
                        <option value="+0">+0&nbsp;(HMD)</option>
            
                        <option value="+39">+39&nbsp;(VAT)</option>
            
                        <option value="+504">+504&nbsp;(HND)</option>
            
                        <option value="+852">+852&nbsp;(HKG)</option>
            
                        <option value="+36">+36&nbsp;(HUN)</option>
            
                        <option value="+354">+354&nbsp;(ISL)</option>
            
                        <option value="+91">+91&nbsp;(IND)</option>
            
                        <option value="+62">+62&nbsp;(IDN)</option>
            
                        <option value="+98">+98&nbsp;(IRN)</option>
            
                        <option value="+964">+964&nbsp;(IRQ)</option>
            
                        <option value="+353">+353&nbsp;(IRL)</option>
            
                        <option value="+972">+972&nbsp;(ISR)</option>
            
                        <option value="+39">+39&nbsp;(ITA)</option>
            
                        <option value="+1876">+1876&nbsp;(JAM)</option>
            
                        <option value="+81">+81&nbsp;(JPN)</option>
            
                        <option value="+962">+962&nbsp;(JOR)</option>
            
                        <option value="+7">+7&nbsp;(KAZ)</option>
            
                        <option value="+254">+254&nbsp;(KEN)</option>
            
                        <option value="+686">+686&nbsp;(KIR)</option>
            
                        <option value="+850">+850&nbsp;(PRK)</option>
            
                        <option value="+82">+82&nbsp;(KOR)</option>
            
                        <option value="+965">+965&nbsp;(KWT)</option>
            
                        <option value="+996">+996&nbsp;(KGZ)</option>
            
                        <option value="+856">+856&nbsp;(LAO)</option>
            
                        <option value="+371">+371&nbsp;(LVA)</option>
            
                        <option value="+961">+961&nbsp;(LBN)</option>
            
                        <option value="+266">+266&nbsp;(LSO)</option>
            
                        <option value="+231">+231&nbsp;(LBR)</option>
            
                        <option value="+218">+218&nbsp;(LBY)</option>
            
                        <option value="+423">+423&nbsp;(LIE)</option>
            
                        <option value="+370">+370&nbsp;(LTU)</option>
            
                        <option value="+352">+352&nbsp;(LUX)</option>
            
                        <option value="+853">+853&nbsp;(MAC)</option>
            
                        <option value="+389">+389&nbsp;(MKD)</option>
            
                        <option value="+261">+261&nbsp;(MDG)</option>
            
                        <option value="+265">+265&nbsp;(MWI)</option>
            
                        <option value="+60">+60&nbsp;(MYS)</option>
            
                        <option value="+960">+960&nbsp;(MDV)</option>
            
                        <option value="+223">+223&nbsp;(MLI)</option>
            
                        <option value="+356">+356&nbsp;(MLT)</option>
            
                        <option value="+692">+692&nbsp;(MHL)</option>
            
                        <option value="+596">+596&nbsp;(MTQ)</option>
            
                        <option value="+222">+222&nbsp;(MRT)</option>
            
                        <option value="+230">+230&nbsp;(MUS)</option>
            
                        <option value="+269">+269&nbsp;(MYT)</option>
            
                        <option value="+52">+52&nbsp;(MEX)</option>
            
                        <option value="+691">+691&nbsp;(FSM)</option>
            
                        <option value="+373">+373&nbsp;(MDA)</option>
            
                        <option value="+377">+377&nbsp;(MCO)</option>
            
                        <option value="+976">+976&nbsp;(MNG)</option>
            
                        <option value="+1664">+1664&nbsp;(MSR)</option>
            
                        <option value="+212">+212&nbsp;(MAR)</option>
            
                        <option value="+258">+258&nbsp;(MOZ)</option>
            
                        <option value="+95">+95&nbsp;(MMR)</option>
            
                        <option value="+264">+264&nbsp;(NAM)</option>
            
                        <option value="+674">+674&nbsp;(NRU)</option>
            
                        <option value="+977">+977&nbsp;(NPL)</option>
            
                        <option value="+31">+31&nbsp;(NLD)</option>
            
                        <option value="+599">+599&nbsp;(ANT)</option>
            
                        <option value="+687">+687&nbsp;(NCL)</option>
            
                        <option value="+64">+64&nbsp;(NZL)</option>
            
                        <option value="+505">+505&nbsp;(NIC)</option>
            
                        <option value="+227">+227&nbsp;(NER)</option>
            
                        <option value="+234">+234&nbsp;(NGA)</option>
            
                        <option value="+683">+683&nbsp;(NIU)</option>
            
                        <option value="+672">+672&nbsp;(NFK)</option>
            
                        <option value="+1670">+1670&nbsp;(MNP)</option>
            
                        <option value="+47">+47&nbsp;(NOR)</option>
            
                        <option value="+968">+968&nbsp;(OMN)</option>
            
                        <option value="+92">+92&nbsp;(PAK)</option>
            
                        <option value="+680">+680&nbsp;(PLW)</option>
            
                        <option value="+970">+970&nbsp;()</option>
            
                        <option value="+507">+507&nbsp;(PAN)</option>
            
                        <option value="+675">+675&nbsp;(PNG)</option>
            
                        <option value="+595">+595&nbsp;(PRY)</option>
            
                        <option value="+51">+51&nbsp;(PER)</option>
            
                        <option value="+63">+63&nbsp;(PHL)</option>
            
                        <option value="+0">+0&nbsp;(PCN)</option>
            
                        <option value="+48">+48&nbsp;(POL)</option>
            
                        <option value="+351">+351&nbsp;(PRT)</option>
            
                        <option value="+1787">+1787&nbsp;(PRI)</option>
            
                        <option value="+974" selected="" data-select2-id="2">+974&nbsp;(QAT)</option>
            
                        <option value="+262">+262&nbsp;(REU)</option>
            
                        <option value="+40">+40&nbsp;(ROU)</option>
            
                        <option value="+7">+7&nbsp;(RUS)</option>
            
                        <option value="+250">+250&nbsp;(RWA)</option>
            
                        <option value="+290">+290&nbsp;(SHN)</option>
            
                        <option value="+1869">+1869&nbsp;(KNA)</option>
            
                        <option value="+1758">+1758&nbsp;(LCA)</option>
            
                        <option value="+508">+508&nbsp;(SPM)</option>
            
                        <option value="+1784">+1784&nbsp;(VCT)</option>
            
                        <option value="+684">+684&nbsp;(WSM)</option>
            
                        <option value="+378">+378&nbsp;(SMR)</option>
            
                        <option value="+239">+239&nbsp;(STP)</option>
            
                        <option value="+966">+966&nbsp;(SAU)</option>
            
                        <option value="+221">+221&nbsp;(SEN)</option>
            
                        <option value="+381">+381&nbsp;(SRB)</option>
            
                        <option value="+248">+248&nbsp;(SYC)</option>
            
                        <option value="+232">+232&nbsp;(SLE)</option>
            
                        <option value="+65">+65&nbsp;(SGP)</option>
            
                        <option value="+421">+421&nbsp;(SVK)</option>
            
                        <option value="+386">+386&nbsp;(SVN)</option>
            
                        <option value="+677">+677&nbsp;(SLB)</option>
            
                        <option value="+252">+252&nbsp;(SOM)</option>
            
                        <option value="+27">+27&nbsp;(ZAF)</option>
            
                        <option value="+0">+0&nbsp;(SGS)</option>
            
                        <option value="+34">+34&nbsp;(ESP)</option>
            
                        <option value="+94">+94&nbsp;(LKA)</option>
            
                        <option value="+249">+249&nbsp;(SDN)</option>
            
                        <option value="+597">+597&nbsp;(SUR)</option>
            
                        <option value="+47">+47&nbsp;(SJM)</option>
            
                        <option value="+268">+268&nbsp;(SWZ)</option>
            
                        <option value="+46">+46&nbsp;(SWE)</option>
            
                        <option value="+41">+41&nbsp;(CHE)</option>
            
                        <option value="+963">+963&nbsp;(SYR)</option>
            
                        <option value="+886">+886&nbsp;(TWN)</option>
            
                        <option value="+992">+992&nbsp;(TJK)</option>
            
                        <option value="+255">+255&nbsp;(TZA)</option>
            
                        <option value="+66">+66&nbsp;(THA)</option>
            
                        <option value="+670">+670&nbsp;(TLS)</option>
            
                        <option value="+228">+228&nbsp;(TGO)</option>
            
                        <option value="+690">+690&nbsp;(TKL)</option>
            
                        <option value="+676">+676&nbsp;(TON)</option>
            
                        <option value="+1868">+1868&nbsp;(TTO)</option>
            
                        <option value="+216">+216&nbsp;(TUN)</option>
            
                        <option value="+90">+90&nbsp;(TUR)</option>
            
                        <option value="+993">+993&nbsp;(TKM)</option>
            
                        <option value="+1649">+1649&nbsp;(TCA)</option>
            
                        <option value="+688">+688&nbsp;(TUV)</option>
            
                        <option value="+256">+256&nbsp;(UGA)</option>
            
                        <option value="+380">+380&nbsp;(UKR)</option>
            
                        <option value="+971">+971&nbsp;(ARE)</option>
            
                        <option value="+44">+44&nbsp;(GBR)</option>
            
                        <option value="+1">+1&nbsp;(USA)</option>
            
                        <option value="+1">+1&nbsp;(UMI)</option>
            
                        <option value="+598">+598&nbsp;(URY)</option>
            
                        <option value="+998">+998&nbsp;(UZB)</option>
            
                        <option value="+678">+678&nbsp;(VUT)</option>
            
                        <option value="+58">+58&nbsp;(VEN)</option>
            
                        <option value="+84">+84&nbsp;(VNM)</option>
            
                        <option value="+1284">+1284&nbsp;(VGB)</option>
            
                        <option value="+1340">+1340&nbsp;(VIR)</option>
            
                        <option value="+681">+681&nbsp;(WLF)</option>
            
                        <option value="+212">+212&nbsp;(ESH)</option>
            
                        <option value="+967">+967&nbsp;(YEM)</option>
            
                        <option value="+260">+260&nbsp;(ZMB)</option>
            
                        <option value="+263">+263&nbsp;(ZWE)</option>
            
                        <option value="+382">+382&nbsp;(MNE)</option>
            
                        <option value="+383">+383&nbsp;(XKX)</option>
            
                        <option value="+358">+358&nbsp;(ALA)</option>
            
                        <option value="+599">+599&nbsp;(BES)</option>
            
                        <option value="+599">+599&nbsp;(CUW)</option>
            
                        <option value="+44">+44&nbsp;(GGY)</option>
            
                        <option value="+44">+44&nbsp;(IMN)</option>
            
                        <option value="+44">+44&nbsp;(JEY)</option>
            
                        <option value="+590">+590&nbsp;(BLM)</option>
            
                        <option value="+590">+590&nbsp;(MAF)</option>
            
                        <option value="+1">+1&nbsp;(SXM)</option>
            
                        <option value="+211">+211&nbsp;(SSD)</option>
            
                      </select><span className="select2 select2-container select2-container--default select2-container--focus" dir="ltr" data-select2-id="1" style={{width: "89px"}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-labelledby="select2-mobCode-container"><span className="select2-selection__rendered" id="select2-mobCode-container" role="textbox" aria-readonly="true" title="+974&nbsp;(QAT)">+974&nbsp;(QAT)</span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
          <span role="alert" style={{color:"green",display:"none",fontSize: "13px"}} id="usermob">
            Email accepted
          </span>
        </div>
                  </div>
                </div>
                
                <div className="full_wd">
                    <button className="reg" onClick={handleSendOtp}>{isLoading?"Loading":"Send OTP"}</button>
                </div>
              </div>
            </div>
            
          </div>
      </div>
    </div>
    <Footer/>
    
      
    
    </div>
  )
}

export default ForgotPassword
