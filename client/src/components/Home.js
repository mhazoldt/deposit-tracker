import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { NavLink } from 'react-router-dom'
import { setPhoneNumberSearch, setNameSearch, search, resetSearch } from '../redux/home/actionCreators'
import { Icon } from "@blueprintjs/core";


class Home extends Component {

    phoneNumberInput = {}

    nameInput = {}

    submitSearch = () => {

        let nameResults = this.props.users.reduce((results, user) => {
                if(user.Name.includes(this.props.nameSearch) && (this.props.nameSearch.length > 0) ) {
                    results.push(user.UserID)
                }

                return results

        }, [])

        console.log("nameResults: ", nameResults)
        

        this.props.dispatch(search(this.props.phoneNumberSearch, nameResults))

    }

    resetSearch = () => {

        this.props.dispatch(resetSearch())
        this.phoneNumberInput.value = ''
        this.nameInput.value = ''

    }


    handlePhoneNumber = (e) => {

        this.props.dispatch(setPhoneNumberSearch(e.target.value))

    }

    handleName = (e) => {

        this.props.dispatch(setNameSearch(e.target.value))

    }

    submitSearchOnEnter = (e) => {

        if (!e) e = window.event;
        let keyCode = e.keyCode || e.which;
        if (keyCode == '13') {
            this.submitSearch()
        }

    }


    render() {

        let userList = this.props.users.map((user) => {
            return <div className="pt-card pt-elevation-2 mb-2" key={user.UserID}><NavLink to={`/${user.Name}`} activeClassName=''><Icon iconName="pt-icon-mugshot" /> {user.Name} </NavLink></div>
        })

        if (this.props.searchResults !== '') {
            let userResult = this.props.users.filter((user) => {
                return this.props.searchResults.includes(user.UserID)
            })

            console.log("USER_RESULT: ", userResult)

            userList = userResult.map((user) => {
                return <div className="pt-card pt-elevation-2 mb-2" key={user.UserID}><NavLink to={`/${user.Name}`} activeClassName=''><Icon iconName="pt-icon-mugshot" /> {user.Name} </NavLink></div>
            })
        }


        return (

            <div className='container mt-4 pb-4 animated fadeIn'>

                <div className="pt-card pt-elevation-2 mb-2">
                    <div className='row'>


                        <div className='col'>

                            <div className="pt-control-group" style={{ width: '100%' }}>
                                <div className="pt-input-group pt-large" style={{ width: '100%' }}>

                                    <span className="pt-icon pt-icon-mugshot"></span>
                                    <input className="pt-input pt-large" style={{ width: '100%', borderRadius: '3px' }} type="text" onChange={this.handleName} onKeyPress={this.submitSearchOnEnter} ref={(input) => { this.nameInput = input }} placeholder="Name" dir="auto" />

                                </div>
                            </div>

                        </div>


                        <div className='col'>

                            <div className="pt-control-group" style={{ width: '100%' }}>
                                <div className="pt-input-group pt-large" style={{ width: '100%' }}>

                                    <span className="pt-icon pt-icon-phone"></span>
                                    <input className="pt-input pt-large" style={{ width: '100%', borderRadius: '3px' }} type="text" onChange={this.handlePhoneNumber} onKeyPress={this.submitSearchOnEnter} ref={(input) => { this.phoneNumberInput = input }} placeholder="Phone Number" dir="auto" />

                                </div>
                            </div>

                        </div>

                    </div>

                    <div className='row mt-2'>

                        <div className='col-3'>


                            {!this.props.isFetching &&
                                <div>
                                    <button type="button" className="pt-button pt-icon-search pt-large pt-intent-primary mr-2" onClick={this.submitSearch}>Search</button>
                                    <button type="button" className="pt-button pt-icon-refresh pt-large pt-intent-primary" onClick={this.resetSearch}>Reset</button>
                                </div>
                            }

                            {this.props.isFetching &&
                                <div>
                                    <button type="button" className="pt-button pt-icon-search pt-large pt-intent-primary mr-2" disabled>Search</button>
                                    <button type="button" className="pt-button pt-icon-refresh pt-large pt-intent-primary" disabled>Reset</button>
                                </div>

                            }


                        </div>

                    </div>

                </div>



                <div className='row'>

                    <div className='col'>

                        {userList}

                    </div>
                </div>



            </div>


        )
    }
}


function mapStateToProps(appState) {
    return {
        users: appState.home.users,
        phoneNumberSearch: appState.home.phoneNumberSearch,
        nameSearch: appState.home.nameSearch,
        isFetching: appState.home.isFetching,
        searchResults: appState.home.searchResults

    }
}



export default withRouter(connect(mapStateToProps)(Home))