# class Dog:
#     pass

# peanut = Dog()

# peanut.color = "brown"
# peanut.name = "Peanut Butter"

# print(peanut) # memory address
# print(peanut.color) # brown
# print(peanut.name) # Peanut Butter

class Dog:
    def __init__(self, name, color):
        print("You made a dog!")
        self.name = name
        self.color = color

    def speak(self):
        print("Bark!!!!")

    def introduce(self):
        print(f"Greetings, human! My name is {self.name}.")

    def feed(self, treat):
        print(f"I fed {self.name} a {treat}.")

    def update_color(self, new_color):
        print("updating color")
        self.color = new_color
        print(f"{self.name}'s new color is {self.color}")


peanut = Dog('Peanut Butter', 'brown')
barky = Dog('Barky', 'white')

barky.speak()

barky.introduce()
peanut.introduce()

barky.feed('bone')

peanut.update_color('purple')

print(peanut.color)
