const userAccount = window.heikuai instanceof Object &&
  window.heikuai.transferAccount instanceof Function &&
  window.heikuai.transferAccount()

const heikuai = {
  getUserAccount: function() {
    return userAccount
  },
  isApp: function() {
    return !!userAccount
  }
}

module.exports = heikuai