function book(title, publisher, price)
{
 this.title = title;
 this.publisher = publisher;
 this.price = price;
}
var newBook = new book("Perl","Leo Inc",200); 
console.log("newBook.toSource() is : "+ newBook.title);
console.log("newBook.toSource() is : "+ newBook.publisher);
console.log("newBook.toSource() is : "+ newBook.price);