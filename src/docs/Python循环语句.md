# Python 循环语句

## while语句

```python
i = 1
while i < 10:   
    i += 1
    if i%2 > 0:     # 非双数时跳过输出
        continue
    print i         # 输出双数2、4、6、8、10

i = 1
while 1:            # 循环条件为1必定成立
    print i         # 输出1~10
    i += 1
    if i > 10:     # 当i大于10时跳出循环
        break
```

## for语句

**语法：**

for循环的语法格式如下：

```python
for iterating_var in sequence:
   statements(s)
```

**流程图：**

![img](https://www.runoob.com/wp-content/uploads/2013/11/A71EC47E-BC53-4923-8F88-B027937EE2FF.jpg)

**实例：**

## 实例

```python
for letter in 'Python':     # 第一个实例   
	print("当前字母: %s" % letter)  
fruits = ['banana', 'apple',  'mango'] 
for fruit in fruits:        # 第二个实例   
	print ('当前水果: %s'% fruit)  
print ("Good bye!")
```


[尝试一下 »](https://www.runoob.com/try/runcode.php?filename=for_demo1&type=python)

以上实例输出结果:

```python
当前字母: P
当前字母: y
当前字母: t
当前字母: h
当前字母: o
当前字母: n
当前水果: banana
当前水果: apple
当前水果: mango
Good bye!
```



------

## 通过序列索引迭代

另外一种执行循环的遍历方式是通过索引，如下实例：

## 实例

```python
fruits = ['banana', 'apple',  'mango']
for index in range(len(fruits)):   
	print ('当前水果 : %s' % fruits[index])  
print ("Good bye!")
```

以上实例输出结果：

```
当前水果 : banana
当前水果 : apple
当前水果 : mango
Good bye!
```

以上实例我们使用了内置函数 len() 和 range(),函数 len() 返回列表的长度，即元素的个数。 range返回一个序列的数。

