# ---- For loop (list)

# people = ['Jack', 'Manny', 'Me', 'You']

# for person in people:
#   print(person)



cities = ["London", "San Francisco", "Paris", "Barcelona"]

# for city in cities:
#     print("I once went to", city)


# for num in range(4, 25, 2):
#     print(num)


#  ------ for loop (range)
for city in range(len(cities)):
    print(city) # index
    print(cities[city]) # city name


# create a long list
range_list = list(range(1, 101))
print(range_list)

print(sum(range_list))

total = 0
for num in range(1, 101):
    total += num

print(total)
