my_books = {
  "title": "Harry Potter",
  "author": "JK Rowling",
}

for x, y in my_books.items():
    print("the" + x + "is" + y)

for item in my_books:
    print(f"The {item} is {my_books[item]}")
