def most_frequent_length_strings(arr):
    
    # Bước 1: tạo dictionary đếm độ dài
    length_count = {}

    # Bước 2: duyệt mảng
    for s in arr:
        length = len(s)

        if length in length_count:
            length_count[length] += 1
        else:
            length_count[length] = 1

    # Bước 3: tìm tần suất lớn nhất
    max_frequency = max(length_count.values())

    # Bước 4: tìm độ dài có tần suất lớn nhất
    most_common_length = None
    for length, count in length_count.items():
        if count == max_frequency:
            most_common_length = length
            break

    # Bước 5: lọc chuỗi
    result = [s for s in arr if len(s) == most_common_length]

    return result