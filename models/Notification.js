const { model, Schema } = require("mongoose");

const NotificationSchema = new Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "user" },
  },
  {
    timestamps: true,
  }
);

module.exports = model("notification", NotificationSchema);
