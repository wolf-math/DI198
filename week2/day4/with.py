with open('output.txt', 'w') as f:
    for i in range(5, 30, 2):
       f.write(f"this is line: {i}\n")