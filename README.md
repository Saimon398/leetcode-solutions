## Leetcode Solutions in JavaScript and Python

Here you can find solutions in JavaScript and Python languages for problems from LeetCode. You also can participate in solving these problems by proposing your solution. Don't hesitate to pull your ideas here and enjoy LeetCode.

| Number |                                                                     Question                                                                      |                                                                                                                                       Hint                                                                                                                                       |                                                                      JS Solution                                                                      |                                                          Python Solution                                                          |
| :----: | :-----------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------: |
|   1    |                                                 [Two Sum](https://leetcode.com/problems/two-sum/)                                                 |                                                                                             Use a hash table to keep track of the indices of the numbers you've encountered so far.                                                                                              |                         [JS Solution](https://github.com/Saimon398/leetcode-solutions/blob/main/js_solutions/0001_two_sum.js)                         |           [Python Solution](https://github.com/Saimon398/leetcode-solutions/blob/main/python_solutions/0001_two_sum.py)           |
|   3    |            [Longest Substring Without Repeating Chars](https://leetcode.com/problems/longest-substring-without-repeating-characters/)             |                                                                                                                What if index of the first occurrence might help?                                                                                                                 |                    [JS Solution](https://github.com/Saimon398/leetcode-solutions/blob/main/js_solutions/0003_longest_substring.js)                    |                                                          Python Solution                                                          |
|   7    |                                         [Reverse Integer](https://leetcode.com/problems/reverse-integer/)                                         |                                                                                                                                                                                                                                                                                  |                     [JS Solution](https://github.com/Saimon398/leetcode-solutions/blob/main/js_solutions/0007_reverse_integer.js)                     |                                                          Python Solution                                                          |
|   9    |                                       [Palindrome Number](https://leetcode.com/problems/palindrome-number/)                                       |                                                                                                           Use two pointers to make it work faster. Beware of overflow.                                                                                                           |                    [JS Solution](https://github.com/Saimon398/leetcode-solutions/blob/main/js_solutions/0009_palindrome_number.js)                    |                                                          Python Solution                                                          |
|   20   |                                       [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)                                       |                                                  Use a stack of characters. When you encounter a closing bracket, check if the top of the stack was the opening for it. If yes, pop it from the stack. Otherwise, return false.                                                  |                    [JS Solution](https://github.com/Saimon398/leetcode-solutions/blob/main/js_solutions/0020_valid_parentheses.js)                    |                                                          Python Solution                                                          |
|   28   |      [Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/)      |                                                                                                                                                                                                                                                                                  |         [JS Solution ](https://github.com/Saimon398/leetcode-solutions/blob/main/js_solutions/0028_find_the_index_of_the_first_occurrence.js)         |                                                          Python Solution                                                          |
|   32   |                               [Longest Valid Parentheses](https://leetcode.com/problems/longest-valid-parentheses/)                               |                                                                                                                            Use a stack of characters.                                                                                                                            |                [JS Solution](https://github.com/Saimon398/leetcode-solutions/blob/main/js_solutions/0032_longest_valid_parentheses.js)                |                                                        [Python Solution]()                                                        |
|   34   | [Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/) |                                                                                                                                  Binary Search                                                                                                                                   | [JS Solution](https://github.com/Saimon398/leetcode-solutions/blob/main/js_solutions/0034_find_first_and_last_position_of_element_in_sorted_array.js) |                                                          Python Solution                                                          |
|   35   |                                  [Search Insert Position](https://leetcode.com/problems/search-insert-position/)                                  |                                                                                                                                Use binary search                                                                                                                                 |                 [JS Solution](https://github.com/Saimon398/leetcode-solutions/blob/main/js_solutions/0035_search_insert_position.js)                  |     [Python Solution](https://github.com/Saimon398/leetcode-solutions/blob/main/js_solutions/0035_search_insert_position.js)      |
|   42   |                                     [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/)                                     |                                                                                                                                                                                                                                                                                  |                   [JS Solution](https://github.com/Saimon398/leetcode-solutions/blob/main/js_solutions/0042_trapping_rain_water.js)                   |                                                        [Python Solution]()                                                        |
|   58   |                                     [Length of Last Word](https://leetcode.com/problems/length-of-last-word/)                                     |                                                                                          Filter out the words and empty strings in the words array. Don't forget about removing spaces.                                                                                          |                   [JS Solution](https://github.com/Saimon398/leetcode-solutions/blob/main/js_solutions/0058_length_of_last_word.js)                   |                                                          Python Solution                                                          |
|   62   |                                            [Unique Paths](https://leetcode.com/problems/unique-paths/)                                            |                                                                                            Dynamic programming is one of the effective ways to solve it. Just find recurrent formula.                                                                                            |                      [JS Solution](https://github.com/Saimon398/leetcode-solutions/blob/main/js_solutions/0062_unique_paths.js)                       |                                                          Python Solution                                                          |
|   63   |                                         [Unique Paths II](https://leetcode.com/problems/unique-paths-ii/)                                         |                                                                                                Use dynamic programming since, from each cell, you can move to the right or down.                                                                                                 |                      [JS Solution](https://github.com/Saimon398/leetcode-solutions/blob/main/js_solutions/0063_unique_paths2.js)                      |                                                          Python Solution                                                          |
|   64   |                                        [Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum/)                                        |                                                                  Remember that from the second cell, the value of the current cell is the price of the current cell plus the minimum value of the previous ones                                                                  |                    [JS Solution](https://github.com/Saimon398/leetcode-solutions/blob/main/js_solutions/0064_minimum_path_sum.js)                     |                                                          Python Solution                                                          |
|   66   |                                                [Plus One](https://leetcode.com/problems/plus-one/)                                                |                                                                                                Try iterating through each digit backwards. What do you do when the digit is a 9?                                                                                                 |                        [JS Solution](https://github.com/Saimon398/leetcode-solutions/blob/main/js_solutions/0066_plus_one.js)                         |                                                          Python Solution                                                          |
|   69   |                                                   [Sqrt](https://leetcode.com/problems/sqrtx/)                                                    |                                                                                                                 Use binary search to make algorithm work faster                                                                                                                  |                          [JS Solution](https://github.com/Saimon398/leetcode-solutions/blob/main/js_solutions/0068_sqrt.js)                           |                                                          Python Solution                                                          |
|   70   |                                         [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)                                         |                                                                                                           To reach nth step, what could have been your previous steps?                                                                                                           |                     [JS Solution](https://github.com/Saimon398/leetcode-solutions/blob/main/js_solutions/0070_climbing_stairs.js)                     |                                                          Python Solution                                                          |
|   75   |                                             [Sort Colors](https://leetcode.com/problems/sort-colors/)                                             |                                                                               Overwrite array with the total number of 0's, then 1's and followed by 2's. Any sort might be appropriate solution.                                                                                |                       [JS Solution](https://github.com/Saimon398/leetcode-solutions/blob/main/js_solutions/0075_sort_colors.js)                       |                                                          Python Solution                                                          |
|   88   |                                      [Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/)                                      | You can easily solve this problem if you simply think about two elements at a time rather than two arrays. We know that each of the individual arrays is sorted. What we don't know is how they will intertwine. Can we take a local decision and arrive at an optimal solution? |                   [JS Solution](https://github.com/Saimon398/leetcode-solutions/blob/main/js_solutions/0088_merge_sorted_array.js)                    |                                                          Python Solution                                                          |
|  122   |                      [Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/)                      |                                                                                                   What should we do every time there is a valley followed by a peak in price?                                                                                                    |            [JS Solution](https://github.com/Saimon398/leetcode-solutions/blob/main/js_solutions/0122_best_time_to_buy_and_sell_stocks.js)             |                                                          Python Solution                                                          |
|  125   |                                        [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)                                        |                                                                                                                                 Use Two Pointers                                                                                                                                 |                    [JS Solutions](https://github.com/Saimon398/leetcode-solutions/blob/main/js_solutions/0125_valid_palindrome.js)                    |                                                        [Python Solution]()                                                        |
|  136   |                                           [Single Number](https://leetcode.com/problems/single-number/)                                           |                                                                                                                           Use Bit Manipulations (XOR)                                                                                                                            |                      [JS Solution](https://github.com/Saimon398/leetcode-solutions/blob/main/js_solutions/0136_single_number.js)                      |                                                          Python Solution                                                          |
|  151   |                               [Reverse Words in a String](https://leetcode.com/problems/reverse-words-in-a-string/)                               |                                                                                                                                                                                                                                                                                  |                [JS Solution](https://github.com/Saimon398/leetcode-solutions/blob/main/js_solutions/0151_reverse_words_in_a_string.js)                |                                                          Python Solution                                                          |
|  169   |                                        [Majority Element](https://leetcode.com/problems/majority-element/)                                        |                                                                                                                                                                                                                                                                                  |                    [JS Solution](https://github.com/Saimon398/leetcode-solutions/blob/main/js_solutions/0169_majority_element.js)                     |                                                          Python Solution                                                          |
|  191   |                                        [Number of 1 Bits](https://leetcode.com/problems/number-of-1-bits/)                                        |                                                                                                                              Use Bit Manipulations                                                                                                                               |                    [JS Solution](https://github.com/Saimon398/leetcode-solutions/blob/main/js_solutions/0191_number_of_1_bits.js)                     |                                                          Python Solution                                                          |
|  202   |                                            [Happy Number](https://leetcode.com/problems/happy-number/)                                            |                                                                                                                                                                                                                                                                                  |                      [JS Solution](https://github.com/Saimon398/leetcode-solutions/blob/main/js_solutions/0202_happy_number.js)                       |                                                          Python Solution                                                          |
|  204   |                                            [Count Primes](https://leetcode.com/problems/count-primes/)                                            |                                                                                                                            Use Sieve of Eratosthenes.                                                                                                                            |                      [JS Solution](https://github.com/Saimon398/leetcode-solutions/blob/main/js_solutions/0204_count_primes.js)                       |                                                          Python Solution                                                          |
|  206   |                                     [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)                                     |                                                                                                                                                                                                                                                                                  |                   [JS Solution](https://github.com/Saimon398/leetcode-solutions/blob/main/js_solutions/0206_reverse_linked_list.js)                   |                                                        [Python Solution]()                                                        |
|  217   |                                      [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/)                                      |                                                                                                                                                                                                                                                                                  |                   [JS Solution](https://github.com/Saimon398/leetcode-solutions/blob/main/js_solutions/0217_contains_duplicate.js)                    |     [Python Solution](https://github.com/Saimon398/leetcode-solutions/blob/main/python_solutions/0217_contains_duplicate.py)      |
|  231   |                                            [Power Of Two](https://leetcode.com/problems/power-of-two/)                                            |                                                                                                                            Think of Bit Manipulations                                                                                                                            |                      [JS Solution](https://github.com/Saimon398/leetcode-solutions/blob/main/js_solutions/0231_power_of_two.js)                       |                                                          Python Solution                                                          |
|  242   |                                           [Valid Anagram](https://leetcode.com/problems/valid-anagram/)                                           |                                                                                                                                                                                                                                                                                  |                      [JS Solution](https://github.com/Saimon398/leetcode-solutions/blob/main/js_solutions/0242_valid_anagram.js)                      |                                                          Python Solution                                                          |
|  263   |                                             [Ugly Number](https://leetcode.com/problems/ugly-number/)                                             |                                                                                                                                                                                                                                                                                  |                       [JS Solution](https://github.com/Saimon398/leetcode-solutions/blob/main/js_solutions/0263_ugly_number.js)                       |                                                          Python Solution                                                          |
|  264   |                                          [Ugly Number II](https://leetcode.com/problems/ugly-number-ii/)                                          |                                                                                                                               Dynamic Programming                                                                                                                                |                     [JS Solution](https://github.com/Saimon398/leetcode-solutions/blob/main/js_solutions/0264_ugly_number_II.js)                      |                                                          Python Solution                                                          |
|  268   |                                          [Missing Number](https://leetcode.com/problems/missing-number/)                                          |                                                                                                                      Bit Manipulation is One of the Options                                                                                                                      |                     [JS Solution](https://github.com/Saimon398/leetcode-solutions/blob/main/js_solutions/0268_missing_number.js)                      |                                                          Python Solution                                                          |
|  300   |                          [Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/)                          |                                                                                      Compare two last nums in sequence and subsequence. If both are equal, length of LIS is increased by 1                                                                                       |             [JS Solution](https://github.com/Saimon398/leetcode-solutions/blob/main/js_solutions/0300_longest_increasing_subsequence.js)              | [Python Solution](https://github.com/Saimon398/leetcode-solutions/blob/main/python_solutions/0300_longest_common_subsequence.py)  |
|  322   |                                             [Coin Change](https://leetcode.com/problems/coin-change/)                                             |                                                                                                                       Think how to use a knapsack problem                                                                                                                        |                       [JS Solution](https://github.com/Saimon398/leetcode-solutions/blob/main/js_solutions/0322_coin_change.js)                       |                                                        [Python Solution]()                                                        |
|  342   |                                           [Power of Four](https://leetcode.com/problems/power-of-four/)                                           |                                                                                                                                Bit Manipulations                                                                                                                                 |                     [JS Solutions](https://github.com/Saimon398/leetcode-solutions/blob/main/js_solutions/0342_power_of_four.js)                      |                                                          Python Solution                                                          |
|  344   |                                          [Reverse String](https://leetcode.com/problems/reverse-string/)                                          |                                                                                     The entire logic for reversing a string is based on using the opposite directional two-pointer approach                                                                                      |                     [JS Solution](https://github.com/Saimon398/leetcode-solutions/blob/main/js_solutions/0344_reverse_string.js)                      |                                                        [Python Solution]()                                                        |
|  345   |                              [Reverse Vowels of a String](https://leetcode.com/problems/reverse-vowels-of-a-string/)                              |                                                                                                                                                                                                                                                                                  |               [JS Solution](https://github.com/Saimon398/leetcode-solutions/blob/main/js_solutions/0345_reverse_vowels_of_a_string.js)                |                                                        [Python Solution]()                                                        |
|  367   |                                    [Valid Perfect Square](https://leetcode.com/problems/valid-perfect-square/)                                    |                                                                                                                                                                                                                                                                                  |                  [JS Solution](https://github.com/Saimon398/leetcode-solutions/blob/main/js_solutions/0367_valid_perfect_square.js)                   |                                                          Python Solution                                                          |
|  389   |                                     [Find The Difference](https://leetcode.com/problems/find-the-difference/)                                     |                                                                                                                                                                                                                                                                                  |                   [JS Solution](https://github.com/Saimon398/leetcode-solutions/blob/main/js_solutions/0389_find_the_difference.js)                   |                                                          Python Solution                                                          |
|  392   |                                          [Is Subsequence](https://leetcode.com/problems/is-subsequence/)                                          |                                                                                                       Use two pointers to iterate through the two strings simultaneously.                                                                                                        |                     [JS Solution](https://github.com/Saimon398/leetcode-solutions/blob/main/js_solutions/0392_is_subsequence.js)                      |       [Python Solution](https://github.com/Saimon398/leetcode-solutions/blob/main/python_solutions/0392_is_subsequence.py)        |
|  412   |                                               [Fizz Buzz](https://leetcode.com/problems/fizz-buzz/)                                               |                                                                                                            The first non-standard value must satisfy both conditions.                                                                                                            |                        [JS Solution](https://github.com/Saimon398/leetcode-solutions/blob/main/js_solutions/0412_fizz_buzz.js)                        |                                                          Python Solution                                                          |
|  504   |                                                  [Base 7](https://leetcode.com/problems/base-7/)                                                  |                                                                                                                  Gorner's algorithm can help with this problem                                                                                                                   |                          [JS Solution](https://github.com/Saimon398/leetcode-solutions/blob/main/js_solutions/0504_base7.js)                          |                                                          Python Solution                                                          |
|  516   |                         [Longest Palindromic Subsequence](https://leetcode.com/problems/longest-palindromic-subsequence/)                         |                                                                                                                                                                                                                                                                                  |             [JS Solution](https://github.com/Saimon398/leetcode-solutions/blob/main/js_solutions/0516_longest_palindromic_subsequence.js)             |                                                        [Python Solution]()                                                        |
|  557   |                           [Reverse Words in a String III](https://leetcode.com/problems/reverse-words-in-a-string-iii/)                           |                                                                                                                                                                                                                                                                                  |              [JS Solution](https://github.com/Saimon398/leetcode-solutions/blob/main/js_solutions/0557_reverse_words_in_a_string_III.js)              |                                                          Python Solution                                                          |
|  704   |                                           [Binary Search](https://leetcode.com/problems/binary-search/)                                           |                                                                                                                                                                                                                                                                                  |                      [JS Solution](https://github.com/Saimon398/leetcode-solutions/blob/main/js_solutions/0704_binary_search.js)                      |        [Python Solution](https://github.com/Saimon398/leetcode-solutions/blob/main/python_solutions/0704_binary_search.py)        |
|  771   |                                       [Jewels and Stones](https://leetcode.com/problems/jewels-and-stones/)                                       |                                                                                                                                                                                                                                                                                  |                    [JS Solution](https://github.com/Saimon398/leetcode-solutions/blob/main/js_solutions/0771_jewels_and_stones.js)                    |      [Python Solution](https://github.com/Saimon398/leetcode-solutions/blob/main/python_solutions/0771_jewels_and_stones.py)      |
|  1137  |                                  [N-th Tribonacci Number](https://leetcode.com/problems/n-th-tribonacci-number/)                                  |                                                                                                                             Use dynamic programming                                                                                                                              |                    [JS Solution](https://github.com/Saimon398/leetcode-solutions/blob/main/js_solutions/1137_tribonacci_number.js)                    |                                                        [Python Solution]()                                                        |
|  1143  |                              [Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/)                              |                                                                                 Try dynamic programming. DP[i][j] represents the longest common subsequence of text1[0 ... i] & text2[0 ... j].                                                                                  |               [JS Solution](https://github.com/Saimon398/leetcode-solutions/blob/main/js_solutions/1143_longest_common_subsequence.js)                |                                                          Python Solution                                                          |
|  1207  |                            [Unique Number of Occurrences](https://leetcode.com/problems/unique-number-of-occurrences/)                            |                                                                                                  Find the number of occurrences of each element in the array using a hash map.                                                                                                   |              [JS Solution](https://github.com/Saimon398/leetcode-solutions/blob/main/js_solutions/1207_unique_number_of_occurrences.js)               | [Python Solution](https://github.com/Saimon398/leetcode-solutions/blob/main/python_solutions/1207_unique_number_of_occurences.py) |
