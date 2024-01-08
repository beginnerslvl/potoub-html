import json

# Read the JSON file
with open('t.txt', 'r') as file:
    data = json.load(file)

# Access and print specific elements
print("Original Data:")
print("Navbar Variable 1:", data['navbar']['variable1'])
print("Footer Variable 3:", data['footer']['variable3'])

# Modify specific elements
data['navbar']['variable1'] = 'New explanation for the element'
data['footer']['variable3'] = 'New explanation for the footer element'

# Write the modified data back to the file
with open('t.txt', 'w') as file:
    json.dump(data, file, indent=2)

print("\nModified Data:")
print("Navbar Variable 1:", data['navbar']['variable1'])
print("Footer Variable 3:", data['footer']['variable3'])
