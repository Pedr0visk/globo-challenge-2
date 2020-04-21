class User {
  constructor(user) {
    this.name = user.name || ''
    this.email = user.email || ''
    this.status = user.status || ''
    this.updated_at = user.name || new Date() * 1
    this.created_at = user.created_at || new Date() * 1
  }
}

export default User;