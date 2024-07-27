const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  full_name: { type: String, required: true },
  notification_token: { type: String, required: true },
  notifications: [{ type: Schema.Types.ObjectId, ref: "notification" }],
});

module.exports = model("user", UserSchema);
