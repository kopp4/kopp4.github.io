---
title: python
date: 2022-02-01 17:03:53
tags:
- python
---

# 3. An Informal introduction to python 

交互模式[^ 1]下，上次输出的表达式会赋给变量 `_`。把 Python 当作计算器时，用该变量实现下一步计算更简单，例如：

\>>>

```python
>>> tax = 12.5 / 100
>>> price = 100.50
>>> price * tax
12.5625
>>> price + _
113.0625
>>> round(_, 2)
113.06
```



### 3.1.2 Strings

Use *raw strings* by adding an `r` before the first quote[^2]

```python
>>> print('C:\some\name')  # here \n means newline!
C:\some
ame
>>> print(r'C:\some\name')  # note the r before the quote
C:\some\name
```

三引号跨行连续输入, 行尾自动换行, 不需要可以添加`\`

```python
print("""\
Usage: thingy [OPTIONS]
     -h                        Display this usage message
     -H hostname               Hostname to connect to
""")
```

output（注意，第一行没有换行）:

```python
Usage: thingy [OPTIONS]
     -h                        Display this usage message
     -H hostname      
```

字符串用 `+` 合并,用 `*` 重复：

\>>>

```
>>> # 3 times 'un', followed by 'ium'
>>> 3 * 'un' + 'ium'
'unununium'
```

相邻的两个或多个 *字符串字面值* （引号标注的字符）会自动合并：

\>>>

```
>>> 'Py' 'thon'
'Python'
```

拆分长字符串时，这个功能特别实用：

\>>>

```python
>>> text = ('Put several strings within parentheses '
...         'to have them joined together.')
>>> text
'Put several strings within parentheses to have them joined together.'
```

这项功能只能用于两个字面值，不能用于变量或表达式：

\>>>

```python
>>> prefix = 'Py'
>>> prefix 'thon'  # can't concatenate a variable and a string literal
  File "<stdin>", line 1
    prefix 'thon'
                ^
SyntaxError: invalid syntax
>>> ('un' * 3) 'ium'
  File "<stdin>", line 1
    ('un' * 3) 'ium'
                   ^
SyntaxError: invalid syntax
```

合并多个变量，或合并变量与字面值，要用 `+`：

\>>>

```python
>>> prefix + 'thon'
'Python'
```

索引还支持负数，用负数索引时，从右边开始计数：

\>>>

```python
>>> word[-1]  # last character
'n'
>>> word[-2]  # second-last character
'o'
>>> word[-6]
'P'
```

注意，-0 和 0 一样，因此，负数索引从 -1 开始。

除了索引，字符串还支持 *切片*。索引可以提取单个字符，*切片* 则提取子字符串：

\>>>

```python
>>> word[0:2]  # characters from position 0 (included) to 2 ( E X C L U D E D )
'Py'
>>> word[2:5]  # characters from position 2 (included) to 5 (excluded)
'tho'
```

切片索引的默认值很有用；省略开始索引时，默认值为 0，省略结束索引时，默认为到字符串的结尾：

\>>>

```python
>>> word[:2]   # character from the beginning to position 2 (excluded)
'Py'
>>> word[4:]   # characters from position 4 (included) to the end
'on'
>>> word[-2:]  # characters from the second-last (included) to the end
'on'
```

注意，输出结果包含切片开始，但不包含切片结束。因此，`s[:i] + s[i:]` 总是等于 `s`：

\>>>

```python
>>> word[:2] + word[2:]
'Python'
>>> word[:4] + word[4:]
'Python'
```

还可以这样理解切片，索引指向的是字符 *之间* ，第一个字符的左侧标为 0，最后一个字符的右侧标为 *n* ，*n* 是字符串长度。例如：

```
 +---+---+---+---+---+---+
 | P | y | t | h | o | n |
 +---+---+---+---+---+---+
 0   1   2   3   4   5   6
-6  -5  -4  -3  -2  -1
```

对于使用非负索引的切片，如果两个索引都不越界，切片长度就是起止索引之差。例如， `word[1:3]` 的长度是 2。

切片会自动处理越界索引：

\>>>

```python
>>> word[4:42]
'on'
>>> word[42:]
''
```

Python 字符串不能修改，是 [immutable](https://docs.python.org/zh-cn/3/glossary.html#term-immutable) 的。因此，为字符串中某个索引位置赋值会报错：

\>>>

```python
>>> word[0] = 'J'
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'str' object does not support item assignment
>>> word[2:] = 'py'
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'str' object does not support item assignment
```

要生成不同的字符串，应新建一个字符串：

\>>>

```python
>>> 'J' + word[1:]
'Jython'
>>> word[:2] + 'py'
'Pypy'
```

参见

- [文本序列类型 --- str](https://docs.python.org/zh-cn/3/library/stdtypes.html#textseq)

  字符串是 *序列类型* ，支持序列类型的各种操作。

- [字符串的方法](https://docs.python.org/zh-cn/3/library/stdtypes.html#string-methods)

  字符串支持很多变形与查找方法。

- [格式字符串字面值](https://docs.python.org/zh-cn/3/reference/lexical_analysis.html#f-strings)

  内嵌表达式的字符串字面值。

- [格式字符串语法](https://docs.python.org/zh-cn/3/library/string.html#formatstrings)

  使用 [`str.format()`](https://docs.python.org/zh-cn/3/library/stdtypes.html#str.format) 格式化字符串。

- [printf 风格的字符串格式化](https://docs.python.org/zh-cn/3/library/stdtypes.html#old-string-formatting)

  这里详述了用 `%` 运算符格式化字符串的操作。

### 3.1.3. List [ ]

和字符串（及其他内置 [sequence](https://docs.python.org/zh-cn/3/glossary.html#term-sequence) 类型）一样，列表也支持索引和切片：

\>>>

```python
>>> squares[0]  # indexing returns the item
1
>>> squares[-1]
25
>>> squares[-3:]  # slicing returns a new list
[9, 16, 25]
```

切片操作返回包含请求元素的新列表。以下切片操作会返回列表的 [浅拷贝](https://docs.python.org/zh-cn/3/library/copy.html#shallow-vs-deep-copy)：

```python
>>> squares[:]
[1, 4, 9, 16, 25]
```

列表还支持合并操作：

```python
>>> squares + [36, 49, 64, 81, 100]
[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
```

与 [immutable](https://docs.python.org/zh-cn/3/glossary.html#term-immutable) 字符串不同, 列表是 [mutable](https://docs.python.org/zh-cn/3/glossary.html#term-mutable) 类型，其内容可以改变：

```python
>>> cubes = [1, 8, 27, 65, 125]  # something's wrong here
>>> 4 ** 3  # the cube of 4 is 64, not 65!
64
>>> cubes[3] = 64  # replace the wrong value
>>> cubes
[1, 8, 27, 64, 125]
```

`append()` *方法* 可以在列表结尾添加新元素（详见后文）:

```python
>>> cubes.append(216)  # add the cube of 6
>>> cubes.append(7 ** 3)  # and the cube of 7
>>> cubes
[1, 8, 27, 64, 125, 216, 343]
```

为切片赋值可以改变列表大小，甚至清空整个列表：

```python
>>> letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
>>> letters
['a', 'b', 'c', 'd', 'e', 'f', 'g']
>>> # replace some values
>>> letters[2:5] = ['C', 'D', 'E']
>>> letters
['a', 'b', 'C', 'D', 'E', 'f', 'g']
>>> # now remove them
>>> letters[2:5] = []
>>> letters
['a', 'b', 'f', 'g']
>>> # clear the list by replacing all the elements with an empty list
>>> letters[:] = []
>>> letters
[]
```

内置函数 [`len()`](https://docs.python.org/zh-cn/3/library/functions.html#len) 也支持列表：

\>>>

```python
>>> letters = ['a', 'b', 'c', 'd']
>>> len(letters)
4
```

还可以嵌套列表（创建包含其他列表的列表），例如：

\>>>

```python
>>> a = ['a', 'b', 'c']
>>> n = [1, 2, 3]
>>> x = [a, n]
>>> x
[['a', 'b', 'c'], [1, 2, 3]]
>>> x[0]
['a', 'b', 'c']
>>> x[0][1]
'b'
```

# 4. More Control Flow Tools



## [4.1. `if` Statements](https://docs.python.org/3/tutorial/controlflow.html#if-statements)
## [4.2. `for` Statements](https://docs.python.org/3/tutorial/controlflow.html#for-statements)

```python
# Create a sample collection
users = {'Hans': 'active', 'Éléonore': 'inactive', '景太郎': 'active'}

# Strategy:  Iterate over a copy
for user, status in users.copy().items():
    if status == 'inactive':
        del users[user]

# Strategy:  Create a new collection
active_users = {}
for user, status in users.items():
    if status == 'active':
        active_users[user] = status
```

## [4.3. The `range()` Function](https://docs.python.org/3/tutorial/controlflow.html#the-range-function)

It is possible to let the range start at another number, or to specify a different increment 

(even negative; sometimes this is called the `step`):

```python
>>> list(range(5, 10))
[5, 6, 7, 8, 9]

>>> list(range(0, 10, 3))
[0, 3, 6, 9]

>>> list(range(-10, -100, -30))
[-10, -40, -70]
```



## [4.4. `break` and `continue` Statements, and `else` Clauses on Loops](https://docs.python.org/3/tutorial/controlflow.html#break-and-continue-statements-and-else-clauses-on-loops)
## [4.5. `pass` Statements](https://docs.python.org/3/tutorial/controlflow.html#pass-statements)
## [4.6. `match` Statements](https://docs.python.org/3/tutorial/controlflow.html#match-statements)
## [4.7. Defining Functions](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)
## 4.8. More on Defining Functions
  - [4.8.1. Default Argument Values](https://docs.python.org/3/tutorial/controlflow.html#default-argument-values)

  - [4.8.2. Keyword Arguments](https://docs.python.org/3/tutorial/controlflow.html#keyword-arguments)

  - 4.8.3. Special parameters
    - [4.8.3.1. Positional-or-Keyword Arguments](https://docs.python.org/3/tutorial/controlflow.html#positional-or-keyword-arguments)
    - [4.8.3.2. Positional-Only Parameters](https://docs.python.org/3/tutorial/controlflow.html#positional-only-parameters)
    - [4.8.3.3. Keyword-Only Arguments](https://docs.python.org/3/tutorial/controlflow.html#keyword-only-arguments)
    - [4.8.3.4. Function Examples](https://docs.python.org/3/tutorial/controlflow.html#function-examples)
    - [4.8.3.5. Recap](https://docs.python.org/3/tutorial/controlflow.html#recap)
    
  - [4.8.4. Arbitrary Argument Lists](https://docs.python.org/3/tutorial/controlflow.html#arbitrary-argument-lists)

  - [4.8.5. Unpacking Argument Lists](https://docs.python.org/3/tutorial/controlflow.html#unpacking-argument-lists)

  - [4.8.6. Lambda Expressions](https://docs.python.org/3/tutorial/controlflow.html#lambda-expressions)

  - [4.8.7. Documentation Strings](https://docs.python.org/3/tutorial/controlflow.html#documentation-strings)

  - [4.8.8. Function Annotations](https://docs.python.org/3/tutorial/controlflow.html#function-annotations)

- [4.9. Intermezzo: Coding Style](https://docs.python.org/3/tutorial/controlflow.html#intermezzo-coding-style)

- \5. Data Structures
  - 5.1. More on Lists
    - [5.1.1. Using Lists as Stacks](https://docs.python.org/3/tutorial/datastructures.html#using-lists-as-stacks)
    - [5.1.2. Using Lists as Queues](https://docs.python.org/3/tutorial/datastructures.html#using-lists-as-queues)
    - [5.1.3. List Comprehensions](https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions)
### [5.1.4. Nested List Comprehensions](https://docs.python.org/3/tutorial/datastructures.html#nested-list-comprehensions)

```
>>> matrix = [
...     [1, 2, 3, 4],
...     [5, 6, 7, 8],
...     [9, 10, 11, 12],
... ]
```

The following list comprehension will transpose rows and columns:

```python
>>> [[row[i] for row in matrix] for i in range(4)]
[[1, 5, 9], [2, 6, 10], [3, 7, 11], [4, 8, 12]]
```







  - [5.2. The `del` statement](https://docs.python.org/3/tutorial/datastructures.html#the-del-statement)
  - [5.3. Tuples and Sequences](https://docs.python.org/3/tutorial/datastructures.html#tuples-and-sequences)
  - [5.4. Sets](https://docs.python.org/3/tutorial/datastructures.html#sets)
  - [5.5. Dictionaries](https://docs.python.org/3/tutorial/datastructures.html#dictionaries)
## [5.6. Looping Techniques](https://docs.python.org/3/tutorial/datastructures.html#looping-techniques)

  Looping through dic, `key` & `value` can be retrieved at the same time using `items()`

```python
>>> knights = {'gallahad': 'the pure', 'robin': 'the brave'}
>>> for k, v in knights.items():
...     print(k, v)
...
gallahad the pure
robin the brave
```

When looping through a sequence, the position index and corresponding value can be retrieved at the same time using the [`enumerate()`](https://docs.python.org/3/library/functions.html#enumerate) function.

\>>>

```python
>>> for i, v in enumerate(['tic', 'tac', 'toe']):
...     print(i, v)
...
0 tic
1 tac
2 toe
```

To loop over two or more sequences at the same time, the entries can be paired with the [`zip()`](https://docs.python.org/3/library/functions.html#zip) function.

```python
>>> questions = ['name', 'quest', 'favorite color']
>>> answers = ['lancelot', 'the holy grail', 'blue']
>>> for q, a in zip(questions, answers):
...     print('What is your {0}?  It is {1}.'.format(q, a))
...
What is your name?  It is lancelot.
What is your quest?  It is the holy grail.
What is your favorite color?  It is blue.
```

To loop over a sequence in reverse, first specify the sequence in a forward direction and then call the [`reversed()`](https://docs.python.org/3/library/functions.html#reversed) function.

```python
>>> for i in reversed(range(1, 10, 2)):
...     print(i)
...
9
7
5
3
1
```

To loop over a sequence in sorted order, use the [`sorted()`](https://docs.python.org/3/library/functions.html#sorted) function which returns a new sorted list while leaving the source unaltered.

\>>>

```python
>>> basket = ['apple', 'orange', 'apple', 'pear', 'orange', 'banana']
>>> for i in sorted(basket):
...     print(i)
...
apple
apple
banana
orange
orange
pear
```

Using [`set()`](https://docs.python.org/3/library/stdtypes.html#set) on a sequence eliminates duplicate elements. The use of [`sorted()`](https://docs.python.org/3/library/functions.html#sorted) in combination with [`set()`](https://docs.python.org/3/library/stdtypes.html#set) over a sequence is an idiomatic way to loop over unique elements of the sequence in sorted order.

```python
>>> basket = ['apple', 'orange', 'apple', 'pear', 'orange', 'banana']
>>> for f in sorted(set(basket)):
...     print(f)
...
apple
banana
orange
pear
```

It is sometimes tempting to change a list while you are looping over it; however, it is often simpler and safer to create a new list instead.

\>>>

```
>>> import math
>>> raw_data = [56.2, float('NaN'), 51.7, 55.3, 52.5, float('NaN'), 47.8]
>>> filtered_data = []
>>> for value in raw_data:
...     if not math.isnan(value):
...         filtered_data.append(value)
...
>>> filtered_data
[56.2, 51.7, 55.3, 52.5, 47.8]
```

  - [5.7. More on Conditions](https://docs.python.org/3/tutorial/datastructures.html#more-on-conditions)
  - [5.8. Comparing Sequences and Other Types](https://docs.python.org/3/tutorial/datastructures.html#comparing-sequences-and-other-types)
  
- \6. Modules
  - 6.1. More on Modules
    - [6.1.1. Executing modules as scripts](https://docs.python.org/3/tutorial/modules.html#executing-modules-as-scripts)
    - [6.1.2. The Module Search Path](https://docs.python.org/3/tutorial/modules.html#the-module-search-path)
    - [6.1.3. “Compiled” Python files](https://docs.python.org/3/tutorial/modules.html#compiled-python-files)
  - [6.2. Standard Modules](https://docs.python.org/3/tutorial/modules.html#standard-modules)
  - [6.3. The `dir()` Function](https://docs.python.org/3/tutorial/modules.html#the-dir-function)
  - 6.4. Packages
    - [6.4.1. Importing * From a Package](https://docs.python.org/3/tutorial/modules.html#importing-from-a-package)
    - [6.4.2. Intra-package References](https://docs.python.org/3/tutorial/modules.html#intra-package-references)
    - [6.4.3. Packages in Multiple Directories](https://docs.python.org/3/tutorial/modules.html#packages-in-multiple-directories)
  
- \7. Input and Output
  - 7.1. Fancier Output Formatting
    - [7.1.1. Formatted String Literals](https://docs.python.org/3/tutorial/inputoutput.html#formatted-string-literals)
    - [7.1.2. The String format() Method](https://docs.python.org/3/tutorial/inputoutput.html#the-string-format-method)
    - [7.1.3. Manual String Formatting](https://docs.python.org/3/tutorial/inputoutput.html#manual-string-formatting)
    - [7.1.4. Old string formatting](https://docs.python.org/3/tutorial/inputoutput.html#old-string-formatting)
  - 7.2. Reading and Writing Files
    - [7.2.1. Methods of File Objects](https://docs.python.org/3/tutorial/inputoutput.html#methods-of-file-objects)
    - [7.2.2. Saving structured data with `json`](https://docs.python.org/3/tutorial/inputoutput.html#saving-structured-data-with-json)
  
- \8. Errors and Exceptions
  - [8.1. Syntax Errors](https://docs.python.org/3/tutorial/errors.html#syntax-errors)
  - [8.2. Exceptions](https://docs.python.org/3/tutorial/errors.html#exceptions)
  - [8.3. Handling Exceptions](https://docs.python.org/3/tutorial/errors.html#handling-exceptions)
  - [8.4. Raising Exceptions](https://docs.python.org/3/tutorial/errors.html#raising-exceptions)
  - [8.5. Exception Chaining](https://docs.python.org/3/tutorial/errors.html#exception-chaining)
  - [8.6. User-defined Exceptions](https://docs.python.org/3/tutorial/errors.html#user-defined-exceptions)
  - [8.7. Defining Clean-up Actions](https://docs.python.org/3/tutorial/errors.html#defining-clean-up-actions)
  - [8.8. Predefined Clean-up Actions](https://docs.python.org/3/tutorial/errors.html#predefined-clean-up-actions)
  
- \9. Classes
  - [9.1. A Word About Names and Objects](https://docs.python.org/3/tutorial/classes.html#a-word-about-names-and-objects)
  - 9.2. Python Scopes and Namespaces
    - [9.2.1. Scopes and Namespaces Example](https://docs.python.org/3/tutorial/classes.html#scopes-and-namespaces-example)
  - 9.3. A First Look at Classes
    - [9.3.1. Class Definition Syntax](https://docs.python.org/3/tutorial/classes.html#class-definition-syntax)
    - [9.3.2. Class Objects](https://docs.python.org/3/tutorial/classes.html#class-objects)
    - [9.3.3. Instance Objects](https://docs.python.org/3/tutorial/classes.html#instance-objects)
    - [9.3.4. Method Objects](https://docs.python.org/3/tutorial/classes.html#method-objects)
    - [9.3.5. Class and Instance Variables](https://docs.python.org/3/tutorial/classes.html#class-and-instance-variables)
  - [9.4. Random Remarks](https://docs.python.org/3/tutorial/classes.html#random-remarks)
  - 9.5. Inheritance
    - [9.5.1. Multiple Inheritance](https://docs.python.org/3/tutorial/classes.html#multiple-inheritance)
  - [9.6. Private Variables](https://docs.python.org/3/tutorial/classes.html#private-variables)
  - [9.7. Odds and Ends](https://docs.python.org/3/tutorial/classes.html#odds-and-ends)
  - [9.8. Iterators](https://docs.python.org/3/tutorial/classes.html#iterators)
  - [9.9. Generators](https://docs.python.org/3/tutorial/classes.html#generators)
  - [9.10. Generator Expressions](https://docs.python.org/3/tutorial/classes.html#generator-expressions)
  
- \10. Brief Tour of the Standard Library
  - [10.1. Operating System Interface](https://docs.python.org/3/tutorial/stdlib.html#operating-system-interface)
  - [10.2. File Wildcards](https://docs.python.org/3/tutorial/stdlib.html#file-wildcards)
  - [10.3. Command Line Arguments](https://docs.python.org/3/tutorial/stdlib.html#command-line-arguments)
  - [10.4. Error Output Redirection and Program Termination](https://docs.python.org/3/tutorial/stdlib.html#error-output-redirection-and-program-termination)
  - [10.5. String Pattern Matching](https://docs.python.org/3/tutorial/stdlib.html#string-pattern-matching)
  - [10.6. Mathematics](https://docs.python.org/3/tutorial/stdlib.html#mathematics)
  - [10.7. Internet Access](https://docs.python.org/3/tutorial/stdlib.html#internet-access)
  - [10.8. Dates and Times](https://docs.python.org/3/tutorial/stdlib.html#dates-and-times)
  - [10.9. Data Compression](https://docs.python.org/3/tutorial/stdlib.html#data-compression)
  - [10.10. Performance Measurement](https://docs.python.org/3/tutorial/stdlib.html#performance-measurement)
  - [10.11. Quality Control](https://docs.python.org/3/tutorial/stdlib.html#quality-control)
  - [10.12. Batteries Included](https://docs.python.org/3/tutorial/stdlib.html#batteries-included)
  
- \11. Brief Tour of the Standard Library — Part II
  - [11.1. Output Formatting](https://docs.python.org/3/tutorial/stdlib2.html#output-formatting)
  - [11.2. Templating](https://docs.python.org/3/tutorial/stdlib2.html#templating)
  - [11.3. Working with Binary Data Record Layouts](https://docs.python.org/3/tutorial/stdlib2.html#working-with-binary-data-record-layouts)
  - [11.4. Multi-threading](https://docs.python.org/3/tutorial/stdlib2.html#multi-threading)
  - [11.5. Logging](https://docs.python.org/3/tutorial/stdlib2.html#logging)
  - [11.6. Weak References](https://docs.python.org/3/tutorial/stdlib2.html#weak-references)
  - [11.7. Tools for Working with Lists](https://docs.python.org/3/tutorial/stdlib2.html#tools-for-working-with-lists)
  - [11.8. Decimal Floating Point Arithmetic](https://docs.python.org/3/tutorial/stdlib2.html#decimal-floating-point-arithmetic)
  
- \12. Virtual Environments and Packages
  - [12.1. Introduction](https://docs.python.org/3/tutorial/venv.html#introduction)
  - [12.2. Creating Virtual Environments](https://docs.python.org/3/tutorial/venv.html#creating-virtual-environments)
  - [12.3. Managing Packages with pip](https://docs.python.org/3/tutorial/venv.html#managing-packages-with-pip)
  
- [13. What Now?](https://docs.python.org/3/tutorial/whatnow.html)

- \14. Interactive Input Editing and History Substitution
  - [14.1. Tab Completion and History Editing](https://docs.python.org/3/tutorial/interactive.html#tab-completion-and-history-editing)
  - [14.2. Alternatives to the Interactive Interpreter](https://docs.python.org/3/tutorial/interactive.html#alternatives-to-the-interactive-interpreter)
  
- \15. Floating Point Arithmetic: Issues and Limitations
  - [15.1. Representation Error](https://docs.python.org/3/tutorial/floatingpoint.html#representation-error)
  
- \16. Appendix
  - 16.1. Interactive Mode
    - [16.1.1. Error Handling](https://docs.python.org/3/tutorial/appendix.html#error-handling)
    - [16.1.2. Executable Python Scripts](https://docs.python.org/3/tutorial/appendix.html#executable-python-scripts)
    - [16.1.3. The Interactive Startup File](https://docs.python.org/3/tutorial/appendix.html#the-interactive-startup-file)
    - [16.1.4. The Customization Modules](https://docs.python.org/3/tutorial/appendix.html#the-customization-modules)











[^1]: python console



[^2]: don't wanna change chars prefaced by `\`
