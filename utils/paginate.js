/**
 * Calculates the amount of documents to be skipped based on the page number
 * Limit is by default already set to 10
 *
 * @param {Number} page - The page number where the user is currently on
 * @returns {Number} The number of documents to be skipped
 *
 * example.com?page=1 - skips 0 documents, 1-10
 *
 * example.com?page=2 - skips 10 douments, start at 11, 11-20
 *
 * example.com?page=3 - skips 20 documents, starts at 21, 21-30
 */
exports.paginate = (page) => {
  const currentPage = +page <= 0 ? 1 : +page;
  return 10 * (currentPage - 1);
};
