
let data = [
    { UserID: "c885cd5f-414f-4274-b787-3d7de6ffd665", deposit: 5, date: "12/12/2017" },
    { UserID: "c885cd5f-414f-4274-b787-3d7de6ffd665", deposit: 0.99, date: "12/12/2017" },
    { UserID: "db01b66d-2026-46fa-9182-4b1618746533", deposit: 10.05, date: "12/11/2017" },
    { UserID: "3db43d91-8123-46a6-a8fc-e52afbbf9ca3", deposit: 2.00, date: "12/10/2017" },
    { UserID: "db01b66d-2026-46fa-9182-4b1618746533", deposit: 3, date: "12/09/2017" }
]


let deposit = {}


deposit.findByUserID = (UserID, callback) => {
    
    let depositData = data.filter((doc) => {
        return doc.UserID === UserID
    })

    callback(depositData)
}


module.exports = deposit