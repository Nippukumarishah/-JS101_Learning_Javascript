
function Author(name, birthYear, nationality) {
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
  }
  
  function Book(title, author, genre, price) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;
  }
  
  
  Book.prototype.getBookInfo = function() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author.name}`);
    console.log(`Genre: ${this.genre}`);
    console.log(`Price: $${this.price.toFixed(2)}`);
    console.log('------------------------');
  };
  
  
  const author1 = new Author('J.K. Rowling', 1965, 'British');
  const author2 = new Author('George R.R. Martin', 1948, 'American');
  
  const book1 = new Book('Harry Potter and the Sorcerer\'s Stone', author1, 'Fantasy', 29.99);
  const book2 = new Book('A Game of Thrones', author2, 'Fantasy', 24.99);
  const book3 = new Book('To Kill a Mockingbird', new Author('Harper Lee', 1926, 'American'), 'Fiction', 19.99);
  
  
  book1.getBookInfo();
  book2.getBookInfo();
  book3.getBookInfo();
  