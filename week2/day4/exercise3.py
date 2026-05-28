import requests

# Use the Chuck Norris API https://api.chucknorris.io/ to retrieve some jokes in a specific category
# Use every notion described in the lesson

url = "https://api.chucknorris.io/jokes/random?category=dev"

response = requests.get(url)

data = response.json()

joke = data["value"]

print(joke)
