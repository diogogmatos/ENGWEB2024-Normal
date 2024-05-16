import csv
import json

def csv_to_json(csv_file, json_file):
    # Read the CSV file and convert it to a list of dictionaries
    with open(csv_file, 'r') as file:
        csv_reader = csv.DictReader(file, delimiter=";")
        data = list(csv_reader)
        
        # Replace single-quote with three semicolons in the first column
        for row in data:
            if row.get('Column1') == "'":
                row['Column1'] = ';;;'  # Replace single-quote with three semicolons
    
    # Write the data to a JSON file
    with open(json_file, 'w') as file:
        json.dump(data, file, indent=4)

# Example usage:
csv_file = 'contratos2024.csv'
json_file = 'contratos2024_teste.json'
csv_to_json(csv_file, json_file)
