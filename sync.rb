require 'rest-client'
require 'json'

puts "Fetching pokemon"

response = RestClient.get("https://pokeapi.co/api/v2/pokemon/1")
sleep(3)
data = JSON.parse(response.body)

puts "Your pokemon is: #{data["name"]}"