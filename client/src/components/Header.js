import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { Colors, Icon } from "@blueprintjs/core"
import { withRouter } from 'react-router'
import { connect } from 'react-redux'


class Header extends Component {

    render() {
        
        return (
            <nav className="pt-navbar" style={{ backgroundColor: Colors.COBALT3, color: Colors.WHITE }}>
                <div className="container">
                    <div className="pt-navbar-group pt-align-left">
                        <NavLink to='/' activeClassName=''>
                            <div className="pt-navbar-heading" style={{ color: Colors.WHITE }}><Icon iconName="pt-icon-application" className="mr-1" style={{ color: Colors.WHITE }} />DepositTracker</div>
                        </NavLink>
                    </div>
                    <div className="pt-navbar-group pt-align-right">

                    </div>
                </div>
            </nav>

        )
    }
}


export default withRouter(connect(null)(Header))
