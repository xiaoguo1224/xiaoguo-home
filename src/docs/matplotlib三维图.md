在Matplotlib中，你可以使用`mplot3d`工具包来创建三维图⁵。以下是一些基本的步骤：

1. 首先，你需要导入必要的库：
  ```python
  import numpy as np
  import matplotlib.pyplot as plt
  from mpl_toolkits.mplot3d import Axes3D
  ```
2. 然后，你可以创建一个新的图形，并添加一个3D子图：
  ```python
  fig = plt.figure()
  ax = fig.add_subplot(111, projection='3d')
  ```
3. 现在，你可以在这个子图上绘制3D图形。例如，下面的代码将绘制一个3D曲线：
  ```python
  z = np.linspace(0, 1, 100)
  x = z * np.sin(25 * z)
  y = z * np.cos(25 * z)
  ax.plot(x, y, z)
  plt.show()
  ```
4. 你也可以绘制3D散点图、3D曲面图等。例如，下面的代码将绘制一个3D散点图：
  ```python
  x = np.random.standard_normal(100)
  y = np.random.standard_normal(100)
  z = np.random.standard_normal(100)
  ax.scatter(x, y, z)
  plt.show()
  ```
5. 对于3D曲面图，你需要先创建一个网格，然后在这个网格上计算Z轴的值。例如：
  ```python
  x = np.linspace(-5, 5, 100)
  y = np.linspace(-5, 5, 100)
  X, Y = np.meshgrid(x, y)
  Z = np.sin(np.sqrt(X**2 + Y**2))
  ax.plot_surface(X, Y, Z, cmap='viridis')
  plt.show()
  ```