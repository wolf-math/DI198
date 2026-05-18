my_name = "Jack"
hello = "Hello World"
my_age = 27

my_list = [my_name, my_age, hello]
# index:      0       1       2

# my_other_list = ["Jack", 27, "Hello World"]

my_tuple = (1+3, 2.7, 'Thursday')
# index:     0    1      2

my_string = "I love cheese!"
# index:     0123....



# access my_age from my_list
my_list[1]

# access 'Thursday' from my_tuple
my_tuple[2]

# access 'h' from "I love cheese!"
my_string[8]

my_string[-1] # !

# ---- slicing

new_students = ['Pedro', 'Andi', 'Vasa', 'Yaakov', 'Ariel', 'Ben', 'Joe', 'Nate' ]
full_stack = new_students[2:5]

second_half = new_students[4:] # starting at index 4 until the end

first_half = new_students[:4] # starting at the beginning until 3

every_other = new_students[::2]

every_other_backwards = new_students[::-2]

# ----- slicing strings

things = "This is a cool sentence about things that are cool."

is_a_cool = things[5:14]

first_half = things[:25]

back_half = things[25:]

#  ----- list methods

new_students.append('Jingjing')
new_students.append('Ismael')
new_students.append('Theodor')

# new_students.extend(['Jingjing', 'Ismael', 'Theodor'])


new_students[2] = 'Vasili'

new_students.append('Aaron') # adds Aaron

# new_students.remove('Aaron') # removes Aaron

last_person = new_students.pop()

# print(new_students) # no Aaron
# print(last_person) # Aaron

new_students.insert(5, 'Avner')
# print(new_students)


# reverse sort
new_students.sort(reverse=True)

# ---- tuples

my_tuple = (5,6,7)

a, b , c = my_tuple

print(a, b, c)

# ----- sets

list_of_numbers = [1,2,34,1,4,6,2,4,7,6579,2346] # have duplicates

set_list = set(list_of_numbers) # creates set, removes duplicates

list_set = list(set_list) # casts set back into list

print(list_set)