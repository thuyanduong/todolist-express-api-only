const db = require('../db/config')

class Task {
  static getTask(id){
    const queryText = "SELECT * FROM users JOIN tasks ON tasks.user_id = users.id WHERE tasks.id = $1";
    return db.query(queryText, [id]).then(results => {return results.rows[0]});
  }
}

module.exports = Task