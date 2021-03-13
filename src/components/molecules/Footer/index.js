import React from 'react';
import './footer.scss'
import {Logo, ICFacebook, ICTweeter, ICTelegram, ICGithub, ICInstagram, ICDiscord} from '../../../assets'

const Icon = ({img}) => {
    return (
        <div className='icon-wrapper'>
            <img className='icon-medsos' src={img} alt='logo'/>
        </div>
    )
}

const Footer = () => {
    return (
        <div >
            <div className='footer'>
                <div>
                    <img className='logo' src={Logo} alt='logo'/>
                </div>
                <div className='social-wrapper'>
                    <Icon img={ICFacebook} />
                    <Icon img={ICTweeter} />
                    <Icon img={ICInstagram} />
                    <Icon img={ICTelegram} />
                    <Icon img={ICDiscord} />
                    <Icon img={ICGithub} />
                </div>
            </div>
            <div className='copyright'>
                <p>Copyright</p>
            </div>
        </div>
    );
}

export default Footer;