# Access the value of key history

sample_dict = { 
   "class":{ 
      "student":{ 
         "name":"Mike",
         "marks":{ 
            "physics":70,
            "history":80
         }
      }
   }
}

#                      dict     dict       dict     number
history = sample_dict["class"]["student"]["marks"]["history"]
print(history)


marks_items = list(sample_dict["class"]["student"]["marks"].items())
print(marks_items[1])