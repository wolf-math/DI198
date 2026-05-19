yaakov = {"fname": "yaakov", "lname": "stolovitsky", "age": 34, "hobbies": ["music", "mountain climbing"]}
nate = {"fname": "nate", "lname": "levy", "age": 22, "hobbies": ["cooking"]}
aaron = {"fname": "aaron", "lname": "wolf", "age": 97, "hobbies": ["code", "teach", "bass"]}

people_list = [yaakov, nate, aaron]

for person in people_list:
    print(person["lname"])

    for hobby in person["hobbies"]:
        print(hobby)


yaakov_list = ["yaakov", "stolovitsky"]
first = yaakov_list[0] # his first name

yaakov_list[yaakov_list.index("yaakov")]

yaakov_list.pop(0)

another = yaakov_list[0] # his last name

# ---

yaakov["lname"] # his last name
del yaakov["fname"]
yaakov['lname'] # his last name

