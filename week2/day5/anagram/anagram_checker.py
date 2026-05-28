class Anagram:
    def __init__(self, word):
        with open("words.txt", "r") as file:
            self.words_list = file.read().splitlines()
        self.word = word.upper()

    def is_valid_word(self):
        if self.word in self.words_list:
            return True
        
        return False

    @staticmethod
    def is_anagram(word1, word2):
        word1_list = sorted(list(word1))
        word2_list = sorted(list(word2))

        if word1_list == word2_list:
            return True
        
        return False

    def get_anagrams(self):
        anagrams = []
        for word in self.words_list:
            if self.is_anagram(self.word, word):
                anagrams.append(word)

        return anagrams
    

# a = Anagram('game')
# print(a.get_anagrams())