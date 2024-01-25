import heapq


def median_sum(n, arr):
    # Макс-куча для меньшей половины и Мин-куча для большей половины
    max_heap, min_heap, result_sum = [], [], 0

    for i in range(n):
        heapq.heappush(max_heap, -arr[i])  # Добавляем элемент в макс-кучу
        heapq.heappush(min_heap, -heapq.heappop(max_heap))  # Переносим максимальный элемент в мин-кучу

        if len(min_heap) > len(max_heap):
            heapq.heappush(max_heap, -heapq.heappop(min_heap))  # Возвращаем элемент в макс-кучу
        result_sum -= max_heap[0]  # Медиана будет вершиной макс-кучи

    return result_sum


if __name__ == "__main__":

    try:
        with open("input2.txt", "r") as file:
            n, arr = int(file.readline()), list(map(int, file.readline().split()))
    except FileNotFoundError:
        print("Файл input.txt не найден.")
        n, arr = int(input()), list(map(int, input().split()))

    # Вывод результата
    print(median_sum(n, arr))
