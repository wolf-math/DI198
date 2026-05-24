board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]]

def display_board():
    print(f" {board[0][0]} | {board[0][1]} | {board[0][2]}")
    print("-----------")
    print(f" {board[1][0]} | {board[1][1]} | {board[1][2]}")
    print("-----------")
    print(f" {board[2][0]} | {board[2][1]} | {board[2][2]}")


def place_piece(user, x, y):
    if board[x][y] == " ":
        board[x][y] = user
        return True
    return False


def check_winner():
    winning_combos = [
        [(0, 0), (0, 1), (0, 2)],
        [(1, 0), (1, 1), (1, 2)],
        [(2, 0), (2, 1), (2, 2)],

        [(0, 0), (1, 0), (2, 0)],
        [(0, 1), (1, 1), (2, 1)],
        [(0, 2), (1, 2), (2, 2)],

        [(0, 0), (1, 1), (2, 2)],
        [(0, 2), (1, 1), (2, 0)]
    ]

    for combo in winning_combos:
        (x0, y0), (x1, y1), (x2, y2) = combo

        if board[x0][y0] != " " and board[x0][y0] == board[x1][y1] == board[x2][y2]:
            return True

    return False


def full_board():
    for row in board:
        for place in row:
            if place == " ":
                return False
    return True


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

        while not place_piece(player, player_choice_x, player_choice_y):
            print("Spot taken. Try Again")
            player_choice_x = int(input("What row? "))
            player_choice_y = int(input("What column? "))

        display_board()

        if check_winner():
            print(f"Player {player} Wins!")
            break
        elif full_board():
            print("Tie Game!")
            break

play()