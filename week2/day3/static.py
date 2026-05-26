class Math:
    initial_amount = 4

    @staticmethod # no need for self
    def add(*args):
        total = 0
        for num in args:
            total += int(num)
        return total
    
    @staticmethod # no need for self
    def sub(*args):
        total = 0
        for num in args:
            total -= num
        return total
    
    @classmethod # exists on the class, not the instance
    def multiply(cls, *args):
        for num in args:
            cls.initial_amount *= num
        return cls.initial_amount
    
    @property # uses a function like a property
    def power(self):
        return Math.initial_amount ** 4

class Greet:
    @classmethod
    def ahoy(cls):
        print('Ahoy')
    
    @classmethod
    def hello(cls):
        print('hello')
    
    @classmethod
    def hi(cls):
        print('hi')
    
    @classmethod
    def greetings(cls):
        print('greetings')
# b = Math()
# print(b.power)


# a = Math()
# a.initial_amount = 5 # not used at all!

# print(a.add(1,2,3,4)) # 10
# print(a.sub(1,2,3,4)) # -10

# # takes the class attribute's initial amount
# print(Math.multiply(1,2,3,4)) # 4 * 1 * 2 * 3 * 4 = 96
# print(a.multiply(1,2,3,4)) # 96 * 1 * 2 * 3 * 4 = 2304

# print(Math.initial_amount) # 2304
# print(a.initial_amount) # 5

