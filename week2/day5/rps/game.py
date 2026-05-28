from random import choice

class Game:
    def get_user_item(self):
        current_choice = input("Choose R,P,S: ")
        self.current_user_choice = current_choice.upper()

    def __get_computer_item(self):
        self.__current_computer_choice = choice(['R', 'P', 'S'])

    def get_game_result(self):
        self.__get_computer_item()
        choices = ['R', 'P', 'S']
        user_index = choices.index(self.current_user_choice)
        computer_index = choices.index(self.__current_computer_choice)

        if user_index == computer_index:
            return 'Tie'
        elif user_index == (computer_index + 1) % 3:
            return 'Win'
        else:
            return 'Loss'

    # ================ OPTIONAL =========================

    # save user data
    def save_user_data(self):
        # saves historical user data to file
        pass

    def load_user_data(self):
        pass

