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

    return indecies

def display_word(word, word_letter, index_list):
    new_word = ""
    for index, letter in enumerate(word):
        if letter != "*":
            new_word += letter
        elif index in index_list:
            new_word += word_letter
        else:
            new_word += "*"
    return new_word       

def play():
    guessed_letters = []
    num_chances = 6
    word = get_random_word()

    display = "*" * len(word)

    while num_chances > 0:
        user = input("Ask for a letter in the word: ")

        if user in guessed_letters:
            print("You already guessed that letter.")
            print(guessed_letters)
            continue

        guessed_letters.append(user)

        position_list = check_letter(user, word)

        if len(position_list) == 0:
            print("Letter not in word")
            print(guessed_letters)
            num_chances -= 1
        else:
            display = display_word(display, user, position_list)

        print(display)

        if "*" not in display:
            print("You win")
            break

    print(word)


play()
                  

