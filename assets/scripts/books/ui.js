'use strict'

const onSuccess = function (data) {
  if (data.book) {
    console.log(data.book)
  } else {
    console.table(data.books)
  }
}

const onDeleteSuccess = function () {
  console.log('Book Deleted')
}

const onError = function (response) {
  console.error(response)
}

module.exports = {
  onSuccess,
  onError,
  onDeleteSuccess
}
