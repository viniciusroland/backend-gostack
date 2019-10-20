module.exports = {
  host : process.env.MAIL_HOST,
  post : 2525,
  secure : false,
  auth : {
    user : process.env.MAIL_USER,
    pass : process.env.MAIL_PASS
  },
  default : {
    from : 'Equipe GoBarber <noreply@gobarber.com>'
  }
}