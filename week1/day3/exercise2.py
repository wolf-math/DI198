sample_dict = {
  "name": "Kelly",
  "age":25,
  "salary": 8000,
  "city": "New york"
}

keys_to_remove = ["name", "salary"]

for key in keys_to_remove:
    del sample_dict[key]

print(sample_dict)

# ---

# doesn't work because you're changing size during iteration

# for key in sample_dict:
#     if key in keys_to_remove:
#         del sample_dict[key]

# print(sample_dict)
