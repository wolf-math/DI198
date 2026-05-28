from random import shuffle

class Deck:
    def __init__(self):
        self.cards = []

    def add_card(self, card):
        # print(type(card), type(Card))
        # if type(card) != type(Card):
        #     return "unable to add a non-card"
        
        self.cards.append(card)
    
    def shuffle_deck(self):
        shuffle(self.cards)

    def deal(self):
        card = self.cards.pop()
        print(f"Dealt the {card.value} of {card.suit}")

    def show_deck(self):
        for card in self.cards:
            print(f"{card.value} of {card.suit}")
        
        print (f"there are {len(self.cards)} cards.")

class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

suits = ['H', 'S', 'D', 'C']
values = [2,3,4,5,6,7,8,9,10,'j', 'q', 'k', 'a']

my_deck = Deck()

for suit in suits:
    for value in values:
        card = Card(suit, value)
        my_deck.add_card(card)

