const { Schema, model } = require ("mongoose");


const charitySchema = new Schema ({
    name :{
        type : String,
        required: true,
    },
    city: {
        type : String,
    },
    state: {
      type: String,
    },
    mission: {
        type: String,
      }, 
    link: {
        type: String, 
      },
    ein: {
        type: String, 
      },
    
    img :{
        type: String,
        },
    categories: [
         {
      type: Schema.Types.ObjectId,
              ref: "Category",
            },
        ],
    });

    const Charity = model("Charity", charitySchema);
    
module.exports =Charity;