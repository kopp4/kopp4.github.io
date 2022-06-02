---
title: python package
date: 2022-02-14 12:26:32
tags:
- python
---

作者：IT小组
链接：https://zhuanlan.zhihu.com/p/466969244
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。



1. random模块
2. math模块
3. OS模块
4. datetime模块
5. calendar模块
6. time模块
7. uuid模块

模块本质上就是一个**.py**文件。

在Python的安装文件中内置了很多有用的模块，利用内置模块的便捷性可以帮助我们更高效、快捷的完成代码的编写。

在Python中常用的内置模块有**random**、**math**、**OS**等等，在使用任何模块前都要先将模块导入才可以使用，导入模块的关键字如下：

```python
import XXX模块 
```

下面介绍的Python中常用模块，如下：

**一：random模块**

random模块中主要是用来产生随机数等等。

random模块中常用的方法如下：
*random.random( )*：用来生成 [ 0, 1 ) 之间的随机浮点数，不包含结尾。代码如下：

```python
import  random
print('random.random方法生成的随机浮点数是{}'.format(random.random())) 
# 打印结果如下：
random.random方法生成的随机浮点数是0.40192427824279797

random.uniform( n，m )：生成[ n，m ]的随机浮点数，包含起始。代码如下：
import  random
print('random.uniform方法生成的随机浮点数是{}'.format(random.uniform(0,5)))
# 打印结果如下：
random.uniform方法生成的随机浮点数是0.8042887724072911
```

*random.randrange(n，m，a)*：用来生成 [ n-m ) 之间随机的整数，不包含结尾，a参数代表n-m之间的随机步长。代码如下：

```python
import  random
print('random.randrange方法生成的随机整数是{}'.format(random.randrange(0,5)))
# 打印结果如下：
random.randrange方法生成的随机整数是0

random.randint( n，m )：用来生成[ n，m ] 之间的随机整数，但是包含起始。代码如下：
import  random
print('random.randint方法生成的随机整数是{}'.format(random.randint(1,1)))
# 打印结果如下：
random.randint方法生成的随机整数是1

random.choice( [ 1 , 2 , 3 ,4 ] )：将选取可迭代对象中的一个随机元素。代码如下：

print('random.choice方法随机选取的数是{}'.format(random.choice([1,2,3,4])))
# 打印结果如下：
random.choice方法随机选取的数是3

random.sample( n，num ) ：从可迭代对象n中随机选取num个元素，以列表方式保存。代码如下：
nums = [ 1,2,3,4 ]
print( random.sample( nums, 2 ) ) # 随机选取可迭代对象中n个元素，以列表保存
# 打印结果如下：
[4, 3]
```

*random.shuffle( n )*：将可迭代对象进行随机清洗。（打乱各个元素）代码如下：

```python
a = [1,2,3,4,5]
random.shuffle(a) # random.shuffle方法将可迭代对象中的元素打散
print(a)
# 打印结果如下：
[5, 2, 3, 4, 1]
```

**二：math模块**

**math**是Python中的数学模块，利用math模块中的许多方法可以对数值进行数学运算。
**math**模块中常用的方法如下：
**math.cos**：求一个数值的余弦值。代码如下：

```python
import  math 
print('math.cos方法求60的余弦值是：{}'.format(math.cos(60)))
# 打印结果如下：
math.cos方法求60的余弦值是：-0.9524129804151563

math.ceil：向上取整。代码如下：

import math
print('math.ceil方法向上取整,2.1返回的是：{}'.format(math.ceil(2.1)))
# 打印结果如下：
math.ceil方法向上取整,2.1返回的是：3

math.floor：向下取整。代码如下：

import math
print('math.floor方法向下取整,3.9返回的是：{}'.format(math.floor(3.9)))
# 打印结果如下：
math.floor方法向下取整,3.9返回的是：3

math.fabs：取绝对值，并用浮点数形式保存，代码如下：

import math
print('math.fabs方法取绝对值,-5返回的是：{}'.format(math.fabs(-5)))
# 打印结果如下：
math.fabs方法取绝对值,-5返回的是：5.0

math.factorial：取阶乘，代码如下：

import  math
print('5的阶乘是{}'.format(math.factorial(5)))
# 打印结果如下：
5的阶乘是120


math.fmod：取余运算，代码如下：

import math
print('math.fmod方法取余运算,5/3返回的是：{}'.format(math.fmod(5,3)))
# 打印结果如下：
math.fmod方法取余运算,5/3返回的是：2.0

math.fsum：求和，代码如下：

import math
print('math.fsum方法求和运算,1+2返回的是：{}'.format(math.fsum((1,2))))
# 打印结果如下：
math.fsum方法求和运算,1+2返回的是：3.0

math.isnan：判断是否是非数值

import  math
print(math.isnan(123))
# 打印结果如下：
False

math.sqrt：开根号，代码例子如下：

import  math
print('math.sqrt方法求根号,4返回的是：{}'.format(math.sqrt(4)))
# 打印结果如下：
math.sqrt方法求根号,4返回的是：2.0
```

**三：OS模块**

Python中OS模块是对操作系统操作的模块，在开发中经常涉及到对文件、文件路径的操作等。

OS模块中有许多常用的方法，如下：

*os.getcwd*：获取当前工作目录。代码如下：

```python
import os
print(os.getcwd()) # 获取当前工作路径
# 打印如下：
E:\pythoncode


os.chdir：修改工作目录。代码如下：

import os
os.chdir(r'E:\abc') # 改变工作路径


os.mkdir：创建文件夹，如果存在则报错，代码如下：

import os
os.mkdir(r'c') # 创建c文件夹，如果存在则报错


os.chmod：改变文件或文件夹的权限，代码如下：

import os
os.chmod(r'c',777) # 改变文件夹c的权限


os.removedirs：删除文件夹，代码如下：

import os
os.removedirs(r'E:\abc\c') # 删除指定路径的文件夹


os.renam：对文件或文件夹重命名，代码如下：

import os
os.rename(r'E:\abc','ABC') # 对文件进行重命名


os.listdir：获取工作目录中所有文件夹和文件，以列表保存。代码如下：

import os
print(os.listdir()) # 获取当前工作路径中的所有文件夹和文件，以列表保存
# 打印结果如下：
['.idea', 'ABC', 'hello.py']


os.path.isfile：判断对象路径是否存在，并且判断是否是文件，代码如下：

import os
print(os.path.isfile('hello.py')) # 判断对象是否是文件


os.path.isdir：判断对象路径是否存在，并且是否是文件夹，代码如下：

import os
print(os.path.isdir('.idea')) # 判断对象是否是文件夹


os.path.exists：判断对象是否存在。代码如下：

import  os
print(os.path.exists(r'C\dome'))
# 代码如下：
False
```

*os.path.splitext*：以指定的字符进行分隔，并且以元组保存。代码如下：

```python
import os
print(os.path.splitext('hello.py')) # 将文件和扩展名分隔，以元组保存
# 打印结果如下：
('hello', '.py')
```

*os.path.abspath*：返回对象所在的绝对路径，不关心对象是否存在，代码如下：

```python
print(os.path.abspath('hello.py')) # 获取对象的绝对路径
# 打印如下：
E:\pythoncode\hello.py
```

*os.path.splitext*：将文件和扩展名自动分割，以元组的形式保存。代码例子如下：

```python
import osprint(os.path.splitext('hello.py')) # 将文件和扩展名分隔，以元组保存# 打印结果如下：('hello', '.py')
```

**四：datetime模块**

datetime模块是用来获取系统时间等，在Python中也是常用的模块，**datetime**模块中有datetime类，这个类的常用方法如下：

*datetime.datetime.now*：用来获取系统的当前时间

datetime中有许多方法是实例方法不允许使用类名.方法名来调用，需要先利用datetime类来创建实例，利用实例.实例方法来调用。如下：

```python
import  datetimeDT = datetime.datetime(2020,2,28)print( DT.date( ) ) # 打印结果如下：2020-02-28print( DT.year ) #  打印结果如下：2020DT.month、DT.hour、DT.minute、DT.second等等，都是获取之前DT这个实例的参数
```

**五：calendar模块**

**Calendar**模块里面包含了日历等等，在calendar模块下有**Calendar**类，Calendar类常用的方法有：

*calendar.calendar*：获取指定年的日历，代码如下：

```python
import calendarcalendar.setfirstweekday(0)  # 设置日历每周的第一天是周几c = calendar.calendar(2020) #2019的日历存储到变量c中calendar.month：获取指定时间的月份日历，代码如下：import calendarprint(calendar.month(2020, 2)) # 打印2020年2月份的日历calendar.isleap：判断指定的年份是否是闰年，代码如下：import calendar# 闰年:能被四整除但是不能被100整除 或者 能被400整除的年print(calendar.isleap(1900))  #  判断是否是闰年# 打印结果如下：False
```

*calendar.leapdays( n，m )*：从n-m年份之间有多少个闰年。代码例子如下：

```python
import calendarprint(calendar.leapdays(2000, 2020)) # 将2000年到2020年之间的闰年的个数打印出来# 打印结果如下：5
```

**六：Time模块**

Python中的**time**模块是用来获取时间相关的数据，time常用的方法如下：

*time.time*：获取从1970年1月1日00:00:00 UTC时间到现在时间的总秒数。代码如下：

```python
import  timeprint(time.time())# 打印结果如下：1582890852.8994951time.sleep：用来将程序顺序执行的时候暂停的秒数，代码如下：import  timetime.sleep(2)time.asctime：获取标准时间，可以手动传递参数用元组的方式，代码如下：import  timeprint(time.asctime())# 打印结果如下：Fri Feb 28 19:54:14 2020
```

*time.ctime*：获取标准时间，可以传递给秒数用来获取时间，代码如下：

```python
import  timeprint(time.ctime(8512646)) # 打印结果如下：Thu Apr  9 20:37:26 1970
```

**七：uuid模块**

uuid模块是用来生成一个全局唯一128位的标识符。通常在开发中用来标识用户ID，uuid模块的常用方法如下：

*uuid.uuid1*：基于MAC地址，时间戳，随机生成一个唯一的uuid，可以保证全球唯一。代码如下：

```python
import uuidprint (uuid.uuid1()) # 打印结果如下：a91b5666-5a24-11ea-a862-7429af472e4c
```

*uuid.uuid2*：Python不支持这个方法

*uuid.uuid3*：通过一个namespace（命名空间）和名字来进行MD5加密算法来生成一个uuid，可以保证的是在*namespace*中唯一，但是如果在同一个命名空间和相同的名字情况下则会生成相同的uuid。代码如下：

```python
import uuidprint (uuid.uuid3(uuid.NAMESPACE_URL,'laowang'))# 打印结果如下：e63a342c-3cc7-3dd2-9816-540de801aae2uuid.uuid4：生成一个随机的uuid，是通过伪随机数得到的，有一定的概率会重复。代码如下：import uuidprint (uuid.uuid4())# 打印结果如下：6f98467e-e788-46ef-aa74-ec8e761ca1d0
```

*uuid.uuid5*：和uuid3基本相同，唯一不同的在于uuid5使用的是SHA1算法加密。代码如下：

```python
import uuidprint (uuid.uuid5(uuid.NAMESPACE_URL,'laowang'))# 打印结果如下：d39cc269-f0ab-5597-93c1-664d4ded27f0
```

