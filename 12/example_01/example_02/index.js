// создайте метод - который принимает объект и две параметра типа строка
// первый из них это будущий ключ, второй - будущее значение

// ({email: "bob@gmail.com"}, eyeColor, "brown") 
// ---> {email: "bob@gmail.com", eyeColor:"brown"}

// unify({email: "bob@gmail.com"}, "eyeColor", "brown")
// ---> {email: "bob@gmail.com", eyeColor:"brown"}

function unify(obj, additionalKey, additionalValue) {
    const newObj = {...obj};
    newObj[additionalKey] = additionalValue;
    return newObj;
  }
  
  const book = { title: "The Lord Of The Rings" };
  
  const newBook = unify(book, "author", "Tolkien JR");
  
  newBook.title = "Harry Potter";
  console.log(newBook);
  console.log(book);
  
  const user = {
    name: "Leon",
    sayHello() {
      console.log("Hello");
    },
  };
  const square = {
    sideLength: 10,
    getArea() {
      return this.sideLength ** 2;
    },
    getPerimeter() {
      return this.sideLength * 4;
    },
  };
  
  console.log(square.getArea());
  console.log(square.getPerimeter);