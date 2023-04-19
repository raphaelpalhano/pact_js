class Repository {
    constructor() {
      this.entities = []
    }
  
    fetchAll() {
      return this.entities
    }
  
    getById(id) {
      return this.entities.find(entity => id == entity.id)
    }
  
    add(entity) {
      this.entities.push(entity)
    }

    remove(id){
      this.entities.filter((values) => {
        return values != id;
      })
    }
  
    clear() {
      this.entities = []
    }
  }
  
  module.exports = Repository