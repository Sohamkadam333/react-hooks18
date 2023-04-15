import random


def get_random_hex():
    letters = "0123456789ABCDEF"
    hex_code = "#"
    for i in range(6):
        hex_code += letters[random.randint(0, 15)]
    return hex_code


def get_random_rgba():
    r = random.randint(0, 255)
    g = random.randint(0, 255)
    b = random.randint(0, 255)
    a = round(random.uniform(0.5, 1.0), 2)
    return f"rgba({r}, {g}, {b}, {a})"


color_palettes = []

for i in range(1):
    palette = {
        "name": f"Palette {i+1}",
        "colors": []
    }

    num_colors = random.randint(5, 9)

    for j in range(num_colors):
        color = {
            "name": f"Color {j+1}",
            "hex": get_random_hex(),
            # "rgba": get_random_rgba()
        }
        palette["colors"].append(color)

    color_palettes.append(palette)

print(color_palettes)

f = open('./output.js', "w")
f.write(str(color_palettes))
