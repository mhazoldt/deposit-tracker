let phoneNumber = require('../models/phoneNumber')
let deposit = require('../models/deposit')


// endpoint: GET /api
// request: {}
// response: { message: "Express is up!" }
//           
//
// api index
function index(req, res) {
    res.json({ message: "Express is up!" })
}


// endpoint: GET /api/userdata?UserID=UserID
// request: {}
// response: { phoneNumbers: [], deposits: [] }
//           
//
// 
function getUserData(req, res) {
    console.log('got to getUserData')

    console.log(req.query)

    let phoneNumberData

    phoneNumber.findByUserID(req.query.UserID, phoneNumberResults)

    function phoneNumberResults(results) {
        console.log("phone number: ", results)
        // console.log(res)
        // res.json({ data: phoneNumberData })
        phoneNumberData = results
        deposit.findByUserID(req.query.UserID, depositResults)

    }

    function depositResults(results) {
        res.json({ phoneNumbers:  phoneNumberData, deposits: results })

    }

}

// endpoint: GET /api/search?phoneNumber=phoneNumber
// request: {}
// response: { UserID: UserID }
//           
//
// 
function search(req, res) {
    console.log('search')

    console.log(req.query)

    let userData

    phoneNumber.getUserIDByPhoneNumber(req.query.phoneNumber, UserIDResults)

    function UserIDResults(results) {
        console.log("UserID results: ", results)

        // console.log(res)
        // res.json({ data: phoneNumberData })

        // phoneNumberData = results
        // deposit.findByUserID(req.query.UserID, depositResults)

        res.json({ UserID: results })

    }

}


module.exports = {
    index,
    getUserData,
    search
}