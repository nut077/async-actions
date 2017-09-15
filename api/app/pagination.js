const Pagination = {
  pagination(conditions, page = 1, perPage = 5) {
    const queryResults = this.where(conditions);
    return {
      [this.key]: queryResults.slice((page - 1) * perPage, page * perPage),
      meta: {
        page: Number(page),
        perPage: Number(perPage),
        totalPages: Math.ceil(queryResults.length / perPage)
      }
    }
  }
};

export default Pagination