# Try to recreate the class explained below:

# We have a class called Door that has an attribute of is_opened declared when an instance is initiated. Create methods open_door() and close_door() that open or close the door.

# We can create a class called BlockedDoor that inherits from the base class Door.

# We just override the parent class's functions of open_door() and close_door() with our own BlockedDoor version of those functions, which simply raises an Error that a blocked door cannot be opened or closed.

class Door:
    def __init__(self, is_opened):
        self.is_opened = is_opened
    
    def open_door(self):
        if self.is_opened == False:
            print("Door opening")
            self.is_opened = True
        else:
            print("Door already open")
        
    def close_door(self):
        if self.is_opened == True:
            print("Door closing")
            self.is_opened = False
        else:
            print("Door already closed")

class BlockedDoor(Door):
    def __init__(self):
        self.is_opened = False

    def open_door(self):
        print("Blocked door cannot open")

    def close_door(self):
        print("A blocked door cannot be closed")


