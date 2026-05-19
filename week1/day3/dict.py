person = {
    "first_name": "Jimi",
    "last_name": "Hendrix",
    "instrument": "guitar",
    "model": "Stratocaster",
    "married": False,
    "net_worth": 1000000
}

# print(person["married"])
# print(person["net_worth"])

# person["Nationality"] = "American"

# print(person)

# person["net_worth"] = 0

# print(person)

# del person["married"]

# print(person)

rick_tup = [
    ('first_name','Rick',),
    ('last_name', 'Sanchez')
]

rick_tup[0][1] # Rick

rick_dict = {
    'first_name':'Rick',
    'last_name':'Sanchez'
}

# print(f"The last name of {rick_dict['first_name']} is: {rick_dict['llama']}")


# ----

new_dact = {
    True: 'this is true',
    5: "five",
    ("pink", "blue"): False
}

new_dact[("pink", "blue")] # False
new_dact[5] # "five"
new_dact[True] # 'this is true'

True in new_dact


person["chicken"] = True