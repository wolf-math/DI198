board = [[" ", " ", " "],[" ", " ", " "],[" ", " ", " "]]

def display_board():
    print(f" {board[0][0]} | {board[0][1]} | {board[0][2] }")
    print("-----------")
    print(f" {board[1][0]} | {board[1][1]} | {board[1][2] }")
    print("-----------")
    print(f" {board[2][0]} | {board[2][1]} | {board[2][2] }")


def place_piece(user, x, y):
    if board[x][y] == " ":
        board[x][y] = user
        return True
    else:
        return False

def check_winner():
    winning_combos = [
        # rows
        ["00", "01", "02"],
        ["10", "11", "12"],
        ["20", "21", "22"],
        # columns
        ["00", "10", "20"],
        ["01", "11", "21"],
        ["02", "12", "22"],
        # diagonals
        ["00", "11", "22"],
        ["02", "11", "20"]
    ]

    for combo in winning_combos:
        x0 = int(combo[0][0])
        y0 = int(combo[0][1])
        x1 = int(combo[1][0])
        y1 = int(combo[1][1])
        x2 = int(combo[2][0])
        y2 = int(combo[2][1])

        if board[x0][y0] == board[x1][y1] == board[x2][y2]:
            if board[x0][y0] == " ":
                return False
            elif board[x0][y0] != " ":
                return True

def full_board():
    for row in board:
        for place in board:
            if place == " ":
                return True
    return False

def toggle_player(player):
    if player == "X":
        return "O"
    return "X"

def play():
    display_board()
    player = "O"
    while True:
        
        player = toggle_player(player)

        print(f"{player}'s Turn")

        player_choice_x = int(input("What row? "))
        player_choice_y = int(input("What column? "))

        while board[player_choice_x][player_choice_y] != " ":
            print("Spot taken. Try Again")
            player_choice_x = int(input("What row? "))
            player_choice_y = int(input("What column? "))
        
        place_piece(player, player_choice_x, player_choice_y)

        display_board()

        if check_winner():
            print(f"Player {player} Wins!")
            break
        elif full_board():
            print("Tie Game!")
            break

play()