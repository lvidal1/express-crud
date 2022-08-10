const UserModel = require('../models/user.model')

exports.createOneRequest = async (req, res) => {

    const { name } = req.body;

    const foundUser = await UserModel.find({ name });

    if (!foundUser || foundUser.length == 0) {
        const user = new UserModel({ name });
        const response = await user.save();
        res.status(201).json({ message: "New resource created!", user: response });
    } else {
        res.status(409).json({ message: "User already exists!" })
    }

}

exports.readOneRequest = async (req, res) => {

    const { id } = req.params;

    const foundUser = await UserModel.findOne({ _id: id });

    if (!foundUser || foundUser.length == 0) {
        res.status(404).json({ message: "User was not found" });
    } else {
        res.status(302).json(foundUser);
    }
}

exports.updateOneRequest = async (req, res) => {

    const { id } = req.params
    const { name } = req.body;

    const foundUser = UserModel.findOne({ _id: id });

    if (!foundUser || foundUser.length == 0) {
        res.status(404).json({ message: "User was not found" });
    } else {
        const response = await foundUser.updateOne({ _id: id }, { $set: { name } });
        res.status(301).json(response);
    }
}

exports.deleteOneRequest = async (req, res) => {

    const { id } = req.params;
    const foundUser = UserModel.findOne({ _id: id });

    if (!foundUser || foundUser.length == 0) {
        res.status(404).json({ message: "User was not found" });
    } else {
        const response = await foundUser.deleteOne({ _id: id });
        res.status(202).json(response);
    }
}