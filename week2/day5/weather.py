import requests
import pprint

api_key = "3815f88f365d48a5c17451a5b9843bcc" # deactivated!

city_search = input("For what city do you want to know the weather? ")
print()

def make_request(url):
    response = requests.get(url)

    if response.status_code == 200:
        responseJson = response.json()
        return responseJson
    else:
        print("something went wrong")
        print(response)


get_geocode_url = f"http://api.openweathermap.org/geo/1.0/direct?q={city_search}&limit=5&appid={api_key}"

geocode_info = make_request(get_geocode_url)

# print(geocode_info)

# print(f"Which {city_search}? (choose number)")
# for i, res in enumerate(geocode_info):
#     print(f"{i + 1}. {res['name']}, {res['state']}, {res['country']}")

# user_selection = int(input())
# city_selection = geocode_info[user_selection - 1]

# lat, lon = city_selection["lat"], city_selection["lon"]

# current_weather_data = f"https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={api_key}&units=metric"

# get_weather_info = make_request(current_weather_data)

# pprint.pprint(get_weather_info)
