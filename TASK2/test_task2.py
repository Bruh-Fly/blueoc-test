import unittest
from task2 import sum_two_largest


class TestTask2(unittest.TestCase):

    def test_example_case(self):

        arr = [1, 4, 2, 3, 5]

        self.assertEqual(
            sum_two_largest(arr),
            9
        )

    def test_case_2(self):

        arr = [10, 20, 30]

        self.assertEqual(
            sum_two_largest(arr),
            50
        )

    def test_case_3(self):

        arr = [-10, -5, -1]

        self.assertEqual(
            sum_two_largest(arr),
            -6
        )


if __name__ == "__main__":
    unittest.main()