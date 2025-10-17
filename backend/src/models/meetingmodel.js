 import { Schema } from "mongoose"

  const metingSchema = new Schema({
    user_id:{ type:String},
    meetingCode : { type: String , required : true},
    date:{ type:Date , default: Date.now , required : true}  
  })

  const Meeting = mongoose.model("Meeting" , metingSchema);

  export { Meeting } ;