const mongoose = require("mongoose");
const {Schema} = mongoose;

main()
    .then(() => console.log("connection succcessfull"))
    .catch((err) => console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}
//One to few Relation

const userSchema = new Schema ({
    username: String,
    addresses:[
        {
            _id :false,
            location:String,
            city:String,
        },
    ],
});

const user = mongoose.model("User",userSchema);

const addUsers = async()=>{
    let user1 = new user({
        username : "ShimulBhai",
        addresses:[
            {
                location : "221B Baker Street",
                city : "Sirajganj",
            },
            {
                location:"Merul Badda",
                city : "Dhaka",
            },
        ],
    })

    user1.addresses.push({location:"P32 WallStreet",city:"London"});
    let result = await user1.save();
    console.log(result);
}
addUsers();