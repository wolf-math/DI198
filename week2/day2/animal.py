class Animal:
    def __init__(self, name):
        self.name = name

class Dog(Animal):
    def bark(self):
        print(f"{self.name} barked, Woof !")

mans_best_friend = Dog("Angel")

print(mans_best_friend.name)
mans_best_friend.bark()

fish = Animal("Fred")
print(fish.name)

# fish don't bark
# fish.bark()
