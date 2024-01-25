
from collections import Counter

def histogram(text):

    char_count = Counter(text) # Счетчик символов в тексте
    sorted_chars = sorted(char_count.keys()) # Сортировка списка символов
    max_count = max(char_count.values()) # Максимальное количество символов

    # Вывод гистограммы
    for i in range(max_count, 0, -1):
        for char in sorted_chars:
            if char not in (' ', '\n'):
                if char_count[char] >= i:
                    print('#', end='')
                else:
                    print(' ', end='')
        print()

    # Вывод символов под столбиками
    for char in sorted_chars:
        if char not in (' ', '\n'):
            print(char, end='')

if __name__ == "__main__":
    # Чтение входных данных из файла input.txt
    try:
        with open("input3.txt", "r") as file:
            encrypted_text = file.read()
    except FileNotFoundError:
        print("Файл input.txt не найден.")
        exit()

    # Вывод результата
    histogram(encrypted_text)
