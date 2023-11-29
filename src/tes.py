class checking():
    def sorting(arr):
        n = len(arr)

        for i in range(n):
            for j in range(0, n-i-1):
                if arr[j] > arr[j+1]:
                    arr[j], arr[j+1] = arr[j+1], arr[j]

    # Example usage:
    arr = [1, 4, 6, 8, 2, 4, 2, 1, 0]

    sorting(arr)

    print("Sorted array:", arr)
