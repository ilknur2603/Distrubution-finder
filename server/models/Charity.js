const { Schema, model } = require ("mongoose");


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
    
    //img :{
        //},
    categories: [
         {
      type: Schema.Types.ObjectId,
              ref: "Category",
            },
        ],
    }
)