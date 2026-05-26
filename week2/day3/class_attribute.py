class Dog:
    species = "Canis familiaris" # class attribute
    def __init__(self,name):
        self.name = name

    def bark(self):
        print(f"{self.name} barked, Woof !")

barky = Dog('Barky')
barky.bark()
fido = Dog('Fido')
fido.bark()

print(fido.species) # Canis familiaris
print(barky.species) # Canis familiaris

print(Dog.species) # Canis familiaris

Dog.species = 'Dog'


print(fido.species) # Dog
print(barky.species) # Dog

print(Dog.species) # Dog

fido.species = "Chicken" # changes instance, not class

print(fido.species) # Chicken
print(barky.species) # Dog
print(Dog.species) # Dog
