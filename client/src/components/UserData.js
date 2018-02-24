import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { getUserData } from '../redux/userData/actionCreators'
import { Icon } from "@blueprintjs/core";
import { ICON_LARGE } from '@blueprintjs/core/lib/esm/common/classes';


class UserData extends Component {

    componentWillMount() {
        let selectedUser = this.props.users.filter((user) => {
            return user.Name.toLowerCase() === this.props.match.params.name.toLowerCase()
        })

        console.log(selectedUser)

        this.props.dispatch(getUserData(selectedUser))
    }


    render() {

        let phoneNumbers = this.props.phoneNumbers.map((doc, idx) => {
            return (
                <tr key={this.props.name + idx}>
                    <td>• {doc.phoneNumber} </td>
                </tr>
            )
        })


        let deposits = this.props.deposits.map((doc, idx) => {
            return (
                <tr key={this.props.name + idx}>
                    <td><Icon iconName="pt-icon-dollar" /> {doc.deposit} </td>
                    <td> {doc.date} </td>
                </tr>
            )
        })

        let centerStyle = { display: 'flex', justifyContent: 'center', width: '100%', alignItems: 'middle' }
        let headingStyle = { fontWeight: '600', fontSize: '24px', lineHeight: '19.2px', display: 'flex', justifyContent: 'center', width: '100%', alignItems: 'middle' }
        let middleText = { display: 'flex', justifyContent: 'center', flexFlow: 'column nowrap', paddingLeft: '5px' }

        let backButtonText = '< back'
        let backButton = <a onClick={() => { window.history.back() }}>{backButtonText}</a>

        return (
            <div>
                <div className='container mt-4 pb-4 animated fadeIn'>

                    <div>

                        <div className='row'>

                            <div className='col'>

                                {backButton}

                                {!this.props.isFetchingUserData &&
                                    <div className="pt-card pt-elevation-2 mb-2 mt-2">

                                        <div style={centerStyle}>
                                            <div style={headingStyle}>
                                                <Icon iconName="pt-icon-mugshot" iconSize={ICON_LARGE} /> <div style={middleText}> {this.props.name}</div>
                                            </div>
                                        </div>

                                        <table className="pt-table pt-striped">

                                            <thead>
                                                <tr>
                                                    <th><Icon iconName="pt-icon-bank-account" /> Deposit</th>
                                                    <th><Icon iconName="pt-icon-calendar" /> Date</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {deposits}
                                            </tbody>

                                        </table>
                                        <br />
                                        <table className="pt-table pt-condensed">
                                            <thead>
                                                <tr>
                                                    <th><Icon iconName="pt-icon-phone" /> Phone Numbers</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {phoneNumbers}
                                            </tbody>
                                        </table>
                                    </div>

                                }

                                {this.props.isFetchingUserData &&
                                    <div className="pt-2">

                                        <div style={centerStyle}>
                                            <div class="pt-progress-bar">
                                                <div class="pt-progress-meter" style={{width: "100%"}}></div>
                                            </div>
                                        </div>

                                        <div className="pt-card pt-elevation-2 pt-skeleton mb-2 mt-2">

                                            <div style={centerStyle}>
                                                <div style={headingStyle}>
                                                    <Icon iconName="pt-icon-mugshot" iconSize={ICON_LARGE} /> <div style={middleText}> {this.props.name}</div>
                                                </div>
                                            </div>

                                            <table className="pt-table pt-striped">

                                                <thead>
                                                    <tr>
                                                        <th><Icon iconName="pt-icon-bank-account" /> Deposit</th>
                                                        <th><Icon iconName="pt-icon-calendar" /> Date</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    {deposits}
                                                </tbody>

                                            </table>
                                            <br />
                                            <table className="pt-table pt-condensed">
                                                <thead>
                                                    <tr>
                                                        <th><Icon iconName="pt-icon-phone" /> Phone Numbers</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {phoneNumbers}
                                                </tbody>
                                            </table>
                                        </div>

                                    </div>

                                }


                            </div>
                        </div>

                    </div>

                </div>
            </div>

        )
    }
}


function mapStateToProps(appState) {
    return {
        users: appState.home.users,
        phoneNumbers: appState.userData.phoneNumbers,
        deposits: appState.userData.deposits,
        name: appState.userData.name,
        isFetchingUserData: appState.userData.isFetchingUserData

    }
}


export default withRouter(connect(mapStateToProps)(UserData))