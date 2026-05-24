import random

def get_random_word():
    wordslist = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share', 'credit card', 'rush', 'south']
    word = random.choice(wordslist)
    return word

def check_letter(user_letter, word):
    indecies = []
    for index, letter in enumerate(word):
            if letter == user_letter:
                 indecies.append(index)

    print(indecies)
    return indecies

def display_word(word, letter, index_list):
    new_word = ""
    for index, letter in enumerate(word):
        if index in index_list:
            new_word += letter
        else:
            new_word += "*"
    return new_word       

def play():
    guessed_letters = []
    num_chances = 6
    word = get_random_word()

    print("*" * len(word))

    while num_chances > 0:
        user = input("Ask for a letter in the word: ")

        if user in guessed_letters:
             continue

        position_list = check_letter(user, word)

        if len(position_list) > 0:
            word = display_word(word, user, position_list)
        else:
            print("Letter not in word ")
            num_chances -= 1

        print(word)

        if "*" not in word:
            print("You win")


play()
                  

