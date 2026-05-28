from anagram_checker import Anagram

def main():
    user_input = input("What word to find anagrams? ")
    a = Anagram(user_input)

    print()
    
    if a.is_valid_word() == False:
        print("This is not a valid word.")
    
    anagrams_list = a.get_anagrams()
    print(f"Anagrams of {a.word} are: ")
    for ana in anagrams_list:
        print(ana)

main()