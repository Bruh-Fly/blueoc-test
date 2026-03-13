import unittest
from task1 import most_frequent_length_strings


class TestTask1(unittest.TestCase):

    def test_example_case(self):
        arr = ['a', 'ab', 'abc', 'cd', 'def', 'gh']
        self.assertEqual(
            most_frequent_length_strings(arr),
            ['ab', 'cd', 'gh']
        )

    def test_case_2(self):
        arr = ['hi', 'hello', 'yo', 'ok']
        self.assertEqual(
            most_frequent_length_strings(arr),
            ['hi', 'yo', 'ok']
        )

    def test_case_3(self):
        arr = ['cat', 'dog', 'fish', 'bird']
        self.assertEqual(
            most_frequent_length_strings(arr),
            ['cat', 'dog']
        )


if __name__ == "__main__":
    unittest.main()