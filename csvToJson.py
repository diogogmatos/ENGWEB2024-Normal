import csv
import json

def csv_to_json(csv_file, json_file):
    # Read the CSV file and convert it to a list of dictionaries
    with open(csv_file, 'r') as file:
        csv_reader = csv.DictReader(file, delimiter=";")
        data = list(csv_reader)
    
    # Write the data to a JSON file
    with open(json_file, 'w') as file:
        json.dump(data, file, indent=4)

# Example usage:
csv_file = 'contratos2024.csv'
json_file = 'contratos2024.json'
csv_to_json(csv_file, json_file)
