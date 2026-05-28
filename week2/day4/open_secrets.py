try:
    f = open('secrets.txt','a+')
    f.write('\nHow wonderful it would be to be a Python script?')
    f.write('\nAnd another line here.')
    f.close()
finally:
   f.close()