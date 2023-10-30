当然，以下是一些常用的matplotlib函数及其使用例子：

1. **plot()**：用于绘制线图。例如：
  ```python
  import matplotlib.pyplot as plt
  x = [1, 2, 3, 4, 5]
  y = [2, 4, 6, 8, 10]
  plt.plot(x, y)
  plt.show()
  ```
2. **scatter()**：用于绘制散点图。例如：
  ```python
  import matplotlib.pyplot as plt
  x = [1, 2, 3, 4, 5]
  y = [2, 4, 6, 8, 10]
  plt.scatter(x, y)
  plt.show()
  ```
3. **bar()**：用于绘制条形图。例如：
  ```python
  import matplotlib.pyplot as plt
  x = ['A', 'B', 'C', 'D', 'E']
  y = [3, 7, 2, 5, 8]
  plt.bar(x, y)
  plt.show()
  ```
4. **hist()**：用于绘制直方图。例如：
  ```python
  import matplotlib.pyplot as plt
  data = [1, 1.1, 1.2, 1.3, 1.4, 2.2, 2.3, 2.4, 3.1, 3.2, 3.3]
  plt.hist(data)
  plt.show()
  ```
5. **pie()**：用于绘制饼图。例如：
  ```python
  import matplotlib.pyplot as plt
  labels = ['A', 'B', 'C', 'D']
  sizes = [15, 30, 45, 10]
  plt.pie(sizes, labels=labels)
  plt.show()
  ```
6. **imshow()**：用于绘制图像。例如：
  ```python
  import matplotlib.pyplot as plt
  import numpy as np
  img = np.random.rand(10,10)
  plt.imshow(img)
  plt.show()
  ```

希望这些信息对你有所帮助！