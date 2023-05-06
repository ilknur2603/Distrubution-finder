const { Schema, model } = require ("mongoose");
const Charity = model("Charity", charitySchema);

const charitySchema = new Schema ({
    name :{
        type : String,
        required: true,
    },
    location: {
        type : String,
    },
    mission: {
        type: String,
      }, ein: {
        type: String, 
      },
    
    img :{
        type: String,
        },
    ein :{
            type: String,
            },
    categories: [
         {
      type: Schema.Types.ObjectId,
              ref: "Category",
            },
        ],
    }
)
module.exports =Charity;