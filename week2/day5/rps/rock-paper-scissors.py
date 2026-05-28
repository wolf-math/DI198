# rock-paper-scissors.py
from game import Game

def main():
    a = Game()
    a.get_user_item()
    res = a.get_game_result()

    print(res)



if __name__ == "__main__":
    main()