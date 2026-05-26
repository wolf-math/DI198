# a = "string"
# b = "another"

# print(dir(a))

# print(a + b)
# print(a + b)

# print(a == b)
# print(a >= b)

class Computer:
    def __init__(self, manufacturer, model, speed):
        self.manufacturer = manufacturer
        self.model = model
        self.speed = speed

    def __str__(self):
        return f"{self.manufacturer} {self.model}"
    
    def __len__(self):
        return 9
    
    def __call__(self, *args, **kwds):
        print(f"The {self.manufacturer} {self.model} is operational at {self.speed} GHz")

    def __add__(self, other):
        print(f"{self.manufacturer} {other.model}")

computer_a = Computer("Lenovo", "Thinkpad", 3.3)
computer_b = Computer("Apple", "Macbook Air", 3.6)

c = computer_a + computer_b # __add__
# computer_a += computer_b # __iadd__

print(str(computer_a))
# equivalent, but don't do this:
print(computer_a.__str__())

print(len(computer_a))

computer_a()
computer_b()