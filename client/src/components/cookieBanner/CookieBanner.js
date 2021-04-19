import { Component } from "react";
import CookieConsent, { Cookies } from "react-cookie-consent";


class CookieBanner extends Component{
  render(){
        if(!Cookies.get("cookieUsageConsent")){
          return(
          <CookieConsent
          cookieName="cookieUsageConsent"
          debug={true}
          onAccept={()=>{
            Cookies.set("cookieUsageConsent", true)
          }}
          style={{background: '#222320', textAlign: "center"}}
          buttonStyle={{background: '#febd59', borderRadius: '10px'}}
          buttonText="J'accepte"
          >
            En continuant la navigation sur ce site, vous consentez
          à l'utilisation des cookies.
      </CookieConsent>
          )  
      }else{
        return null
      }
        
      
  }
}

export default CookieBanner;