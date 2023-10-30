以下是上述NumPy函数和方法的输出样例，采用Markdown格式：

1. 创建矩阵:

  ```python
  import numpy as np
  matrix = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
  ```

2. 获取矩阵的形状:

  ```python
  shape = matrix.shape
  ```

  输出样例：
  ```python
  (3, 3)
  ```

3. 访问特定位置的元素:

  ```python
  element = matrix[1, 2]
  ```

  输出样例：
  ```
  6
  ```

4. 切片矩阵:

  ```python
  submatrix = matrix[1:3, 0:2]
  ```

  输出样例：
  ```python
  array([[4, 5],
     [7, 8]])
  ```

5. 矩阵转置:

  ```python
  transpose_matrix = matrix.T
  ```

  输出样例：
  ```python
  array([[1, 4, 7],
     [2, 5, 8],
     [3, 6, 9]])
  ```

6. 矩阵相加:

  ```python
  result_matrix = matrix + other_matrix
  ```

  输出样例：（假设`other_matrix`已定义）

  ```python
  array([[ 2, 4, 6],
     [ 8, 10, 12],
     [14, 16, 18]])
  ```

7. 矩阵相乘:

  ```python
  result_matrix = np.dot(matrix, other_matrix)
  ```

  输出样例：（假设`other_matrix`已定义）

  ```python
  array([[20, 23],
     [47, 53],
     [74, 83]])
  ```

8. 计算矩阵的行和列的和:

  ```python
  row_sum = np.sum(matrix, axis=1)
  col_sum = np.sum(matrix, axis=0)
  ```

  输出样例：
  行和：
  ```python
  array([ 6, 15, 24])
  ```

  列和：
  ```python
  array([12, 15, 18])
  ```

9. 计算矩阵的逆:

  ```python
  inverse_matrix = np.linalg.inv(matrix)
  ```

  输出样例：（如果矩阵可逆）

  ```python
  array([[-0.94444444, -0.44444444, 0.05555556],
     [-0.11111111, 0.11111111, 0.33333333],
     [ 0.72222222, 0.55555556, -0.11111111]])
  ```

10. 计算矩阵的特征值和特征向量:

  ```python
  eigenvalues, eigenvectors = np.linalg.eig(matrix)
  ```

  输出样例：（eigenvalues和eigenvectors分别包含特征值和特征向量）

  特征值：
  ```python
  array([ 1.61168440e+01, -1.11684397e+00, -9.75918483e-16])
  ```

  特征向量：
  ```python
  array([[-0.23197069, -0.78583024, 0.40824829],
      [-0.52532209, -0.08675134, -0.81649658],
      [-0.8186735 , 0.61232756, 0.40824829]])
  ```