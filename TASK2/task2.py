def sum_two_largest(numbers):

    if len(numbers) < 2:
        raise ValueError("Array must contain at least two numbers")

    largest = float('-inf')
    second_largest = float('-inf')

    for num in numbers:

        if num > largest:
            second_largest = largest
            largest = num

        elif num > second_largest:
            second_largest = num

    return largest + second_largest


# Manual test
if __name__ == "__main__":
    
    arr = [1, 4, 2, 3, 5]
    
    result = sum_two_largest(arr)

    print("Input:", arr)
    print("Output:", result)