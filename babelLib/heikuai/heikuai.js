"use strict";

var userAccount = window.heikuai instanceof Object && window.heikuai.transferAccount instanceof Function && window.heikuai.transferAccount();

var heikuai = {
  getUserAccount: function getUserAccount() {
    return userAccount;
  },
  isApp: function isApp() {
    return !!userAccount;
  }
};

module.exports = heikuai;