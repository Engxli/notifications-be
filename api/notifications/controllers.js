const Notification = require("../../models/Notification");
const User = require("../../models/User");
const sendEXPONotification = require("../../utils/notifications");

exports.getMyNotifications = async (req, res, next) => {
  try {
    const notifications = Notification.find({ user: req.params._id });
    return res.json(notifications);
  } catch (error) {
    next(error);
  }
};

exports.sendNotification = async (req, res, next) => {
  try {
    const user = await User.findById(req.params._id);

    sendEXPONotification(
      user.notification_token,
      req.body.body,
      req.body.title
    );
    const notification = await Notification.create({
      title: req.body.title,
      body: req.body.body,
      user: user._id,
    });

    await User.findByIdAndUpdate(user._id, {
      $push: { notifications: notification._id },
    });

    return res.json(notification);
  } catch (error) {
    next(error);
  }
};
