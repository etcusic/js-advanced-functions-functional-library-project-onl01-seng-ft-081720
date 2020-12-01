const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (Object.keys(collection)){
        let arr = Object.keys(collection)
        for (let i = 0; i < arr.length; i++){
          callback(collection[arr[i]])
        }
      } else {
        for (let i = 0; i < collection.length; i++){
          callback(collection[i])
        }
      }
      return collection
    },

    map: function(collection, callback) {
      let newArr = []
      if (Object.keys(collection)){
        let arr = Object.keys(collection)
        for (let i = 0; i < arr.length; i++){
          newArr[i] = callback(collection[arr[i]])
        }
      } else {
        for (let i = 0; i < collection.length; i++){
          newArr[i] = callback(collection[i])
        }
      }
        return newArr
    },

    reduce: function(collection, callback, acc = 0) {
      // function (acc, val, collection) { return acc + val; }
      for (let i = 0; i < collection.length; i++){
        acc = callback(acc, collection[i])
      }
      return acc
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
