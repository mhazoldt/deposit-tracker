
let data = [
    { UserID: "c885cd5f-414f-4274-b787-3d7de6ffd665", phoneNumber: "702-123-4567" },
    { UserID: "c885cd5f-414f-4274-b787-3d7de6ffd665", phoneNumber: "(702)234-5678" },
    { UserID: "3db43d91-8123-46a6-a8fc-e52afbbf9ca3", phoneNumber: "7023456789" },
    { UserID: "c885cd5f-414f-4274-b787-3d7de6ffd665", phoneNumber: null },
    { UserID: "3db43d91-8123-46a6-a8fc-e52afbbf9ca3", phoneNumber: "702-2223333" },
    { UserID: "db01b66d-2026-46fa-9182-4b1618746533", phoneNumber: "702-333-4444" },
    { UserID: "db01b66d-2026-46fa-9182-4b1618746533", phoneNumber: "(702) --  444 -- 5555" },
    { UserID: "db01b66d-2026-46fa-9182-4b1618746533", phoneNumber: "" },
    { UserID: "c885cd5f-414f-4274-b787-3d7de6ffd665", phoneNumber: "702.111.2222" }
]


let phoneNumber = {}


phoneNumber.findByUserID = (UserID, callback) => {

    let phoneNumberData = data.filter((doc) => {
        return doc.UserID === UserID
    })

    callback(phoneNumberData)
}

phoneNumber.getUserIDByPhoneNumber = (phoneNumberSearch, callback) => {

    
    // get unique UserIDs that match phone number search
    let UserID = data.reduce((results, user) => {
        
        if( (user.phoneNumber === null) || (phoneNumberSearch.length === 0) ) {
            return results

        } else if( user.phoneNumber.includes(phoneNumberSearch) && !(results.includes(user.UserID)) ) {
            results.push(user.UserID)

            return results

        } else {
            return results
            
        }
        
    }, [])

    console.log(UserID)

    callback(UserID)
}


module.exports = phoneNumber