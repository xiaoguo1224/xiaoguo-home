在Matplotlib中，如果你想要找到两个图形的交点并绘制它们，你可以通过以下步骤来实现¹：

1. 首先，你需要导入必要的库：
  ```python
  import numpy as np
  import matplotlib.pyplot as plt
  ```
2. 然后，你可以创建两个图形，并找到它们的交点：
  ```python
  fig = plt.figure()
  ax = fig.add_subplot(111)
  x1 = [1,2,3,4,5,6,7,8]
  y1 = [20,100,50,120,55,240,50,25]
  x2 = [3,4,5,6,7,8,9]
  y2 = [25,35,14,67,88,44,120]
  ax.plot(x1, y1, color='lightblue',linewidth=3)
  ax.plot(x2, y2, color='darkgreen', marker='^')
  ```
3. 你可以通过以下方式找到并绘制这两个图形的交点：
  ```python
  x3 = np.linspace(6, 7, 1000) # (6, 7) intersection range
  y1_new = np.linspace(240, 50, 1000) # (6, 7) corresponding to (240, 50) in y1
  y2_new = np.linspace(67, 88, 1000) # (6, 7) corresponding to (67, 88) in y2
  idx = np.argwhere(np.isclose(y1_new, y2_new, atol=0.1)).reshape(-1)
  ax.plot(x3[idx], y2_new[idx], 'ro')
  plt.show()
  ```
这段代码首先定义了两个图形的x和y坐标，然后使用`plot()`函数将它们绘制出来。接着，它定义了一个新的x坐标范围`x3`，以及对应于这个范围的`y1`和`y2`的值。然后，它使用`np.isclose()`函数找到了`y1_new`和`y2_new`之间差值小于0.1的索引，这些索引就是两个图形的交点。最后，它使用`plot()`函数将这些交点绘制出来¹。

