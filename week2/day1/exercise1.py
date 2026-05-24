# Analyse the code below. What will be the output ?
# Explain the goal of the methods
# Create a method that modifies the name of the person


class Person:
  id = 0
  def __init__(self, name, age):
    self.name = name
    self.age = age
    # self.id = id
    # id += 1


  def show_details(self):
    print("Hello my name is " + self.name)

  def change_name(self, new_name):
    self.name = new_name

first_person = Person("John", 36)
first_person.show_details()

first_person.change_name('Teddy')

first_person.show_details()

# print(first_person.id)
