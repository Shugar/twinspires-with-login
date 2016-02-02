import React, {Component, PropTypes} from 'react'
import CSSModules from 'react-css-modules'
import styles from './Header.scss'

@CSSModules(styles)
export default class Header extends Component {

  static PropTypes = {
    username: PropTypes.string
  }

  render () {

    let account;
    if (this.props.username) {
      account = (
        <div>
          <div styleName='account'>
            <div styleName='welcome'>welcome <span styleName='username'>{this.props.username}</span></div>
            <div styleName='logout'><a href={'https://www.twinspires.com/secure-bin/logout.cgi?redirect=http://www.twinspires.com/brisnet/logout?referrer=raf_email'}>logout</a></div>
          </div>
          <div styleName='deposit'><a href={'https://www.twinspires.com/account/deposit?referrer=raf_email'}>Deposit</a></div>
          <div styleName='logout-mobile'><a href={'https://www.twinspires.com/secure-bin/logout.cgi?redirect=http://www.twinspires.com/brisnet/logout?referrer=raf_email'}>logout</a></div>
        </div>
      );
    }

    return (
      <div styleName='header'>
        <div styleName='logo'>
          <a styleName='logo-link' href={'http://www.twinspires.com/'}><img styleName='logo-desktop' src={'https://www.twinspires.com/sites/twinspires.com/files/twinspires_com_4c_WPW_lockup.png'} /></a>
          <a styleName='logo-link' href={'http://www.twinspires.com/'}><img styleName='logo-tablet' src={'https://www.twinspires.com/sites/twinspires.com/files/twinspires_com_logo.png'} /></a>
        </div>
        <div styleName='login'>
          {account}
        </div>
      </div>
    )
  }
}
