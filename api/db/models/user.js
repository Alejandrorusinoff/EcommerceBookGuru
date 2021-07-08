const db = require("../index");
const { Model, DataTypes } = require("sequelize");
const crypto = require("crypto");

class User extends Model {}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
    },
    salt: {
      type: DataTypes.STRING,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  },
  { sequelize: db, modelName: "user", timestamps: false }
);

User.addHook("beforeCreate", (user) => {
  user.salt = crypto.randomBytes(20).toString("hex");
  user.password = user.hashPassword(user.password);
});

User.prototype.hashPassword = function (password) {
  return crypto.createHmac("sha1", this.salt).update(password).digest("hex");
};

User.prototype.validPassword = function (passwordEnLogin) {
  return this.password === this.hashPassword(passwordEnLogin)
}

User.prototype.toggleAdminStatus = function() {
  const status = this.getDataValue('isAdmin');
  return this.update({isAdmin: !status})
}

module.exports = User;
