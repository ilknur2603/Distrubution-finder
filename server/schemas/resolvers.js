const { Charity, Donation, User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if(context.user) {
                const userData = await User.findOne({_id: context.user._id})
                .select("-_v -password")
                .populate("charities")
                .populate("donations")
                return userData;
            }
            throw new AuthenticationError('Not logged in');
        },
    },

    Mutation: {
        login: async (parent, {email, password}) => {
            const user = await User.findOne({ email })

            if(!user) {
                throw new AuthenticationError('Incorrect login info');
            }
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect login info');
            }
            const token = signToken(user);
      
            return { token, user };
        },
 //POST: Adding a new use
        addUser: async( parent, {username, email, password}) => {
            const user = await User.create({ username, email, password});
            const token = signToken(user);
            return { token, user };
        },
// POST new Donation to User
        addDonation: async (parent, { donationAmount, donationDate, charity }, context) => {
            if(context.user) {
                const addingDonations = await Donation.findOneAndUpdate(
                    {_id: context.user._id},
                    {$addToSet: {donations: {donationAmount, donationDate}, charity: charity}},
                    {new: true}
                ).populate("donations").populate("charities")
                return addingDonations;
            };
            throw new AuthenticationError("You must have an account to add a donation!");
        },

        addCharity: async (parent, { charityName }, context) => {
            if(context.user) {
                const addingCharity = await User.findOneAndUpdate(
                    {_id: context.user._id},
                    {$addToSet: {charities: charityName}},
                    {new: true}
                ).populate("charities")
                return addingCharity;
            };
            throw new AuthenticationError("You must have an account to add a donation!");
        },
         
  
      // DELETE Charity from User Portfolio (unsaving)
      unsaveCharity: async (parent, { charityId }, context) => {
        const charity = await Charity.findOne({ _id: charityId });
        const updateUserCharity = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { charities: charityId } },
          { new: true }
        );
        return updateUserCharity;
    },
  },
};

module.exports = resolvers;