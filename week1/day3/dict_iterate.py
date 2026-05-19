my_books = {
  "title": "Harry Potter",
  "author": "JK Rowling",
}

print(my_books.items())

for x, y in my_books.items():
    print("the" + x + "is" + y)

for item in my_books:
    print(f"The {item} is {my_books[item]}")