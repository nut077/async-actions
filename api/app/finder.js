const Finder = {
  where(conditions) {
    const collection = this.collection();
    return Object
      .keys(conditions) // ['authorId', 'categoryId']
      .reduce(
        (results, key) => results.filter(item => item[key] == conditions[key])
        , collection)
  },

  findAll() {
    return this.collection()
  },

  find(id) {
    return this.collection().find(record => record.id === Number(id))
  },

  findIndex(id) {
    return this.collection().findIndex(record => record.id === Number(id))
  }
};

export default Finder