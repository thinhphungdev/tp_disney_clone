import React from 'react';
import CTAlogo from '../../assets/images/cta-logo-one.svg';
import CTAlogo2 from '../../assets/images/cta-logo-two.png';

function Login() {
    return (
        <div className="login">
            <div className="login__cta">
                <img 
                    alt="cta"
                    src={CTAlogo}
                />

                <a className="login__cta--sign-up">
                    Get all there
                </a>

                <p className="login__cta--description">
                    Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. 
                    As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
                </p>

                <img 
                    alt="cta"
                    src={CTAlogo2}
                />
            </div>
        </div>
    )
}

export default Login
