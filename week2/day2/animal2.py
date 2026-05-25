class Animal:
    def __init__(self, type, number_legs, sound):
        self.type = type
        self.number_legs = number_legs
        self.sound = sound

    def make_sound(self):
        print(f"I am an animal, and I love saying {self.sound}")

class Dog(Animal):
    def __init__(self, type, number_legs, sound, fetch_ball):
        super().__init__(type, number_legs, sound)
        # Or : Animal.__init__(self,type, number_legs, sound)
        self.fetch_ball = fetch_ball

    def make_sound(self):
        # super().make_sound() # from animal
        print(f"I am a dog, and I love saying {self.sound}")

    def fetch_ball(self):
        print("I am a dog, and I love fetching balls")



barky = Dog('dog', 4, 'bark')

barky.make_sound()

goldie = Animal('cat', 4, 'meow')
goldie.make_sound()
# goldie.fetch_ball() Error

barky.fetch_ball()
