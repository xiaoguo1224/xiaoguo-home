// md文件批量引入
import JavaList1 from "../docs/集合01.md";
import JavaList2 from "../docs/集合02.md";
import JavaList3 from "../docs/集合03.md";
import PythonDefine from "../docs/Python变量类型.md";
import PythonIf from "../docs/Python条件语句.md";
import PythonFor from "../docs/Python循环语句.md";
import numpy from "../docs/numpy.md";
import pandas from "../docs/pandas.md";
import matplotlib from "../docs/matplotlib.md";
import matplotlib3D from "../docs/matplotlib三维图.md";
import matplotlibLine from "../docs/matplotlib交线图.md";
// 创建md组件同时设置文章其他信息，单独导出使用
export const components = {
    JavaList1: {
        id: 1,
        name: JavaList1,
        describe: "Python基础语法",
    },
    JavaList2: {
        id: 2,
        name: JavaList2,
        describe: "Java基础",
    },
    JavaList3: {
        id: 3,
        name: JavaList3,
        describe: "Java基础语法",
    },
    PythonDefine: {
        id: 4,
        name: PythonDefine,
        describe: "Java基础语法",
    },
    PythonIf: {
        id: 5,
        name: PythonIf,
        describe: "Java基础语法",
    },
    PythonFor: {
        id: 6,
        name: PythonFor,
        describe: "Py循环",
    },
    numpy: {
        id: 7,
        name: numpy,
        describe: "numpy"
    },
    pandas: {
        id: 8,
        name: pandas,
        describe: "pandas"
    },
    matplotlib: {
        id: 9,
        name: matplotlib,
        describe: "matplotlib"
    },
    matplotlib3D: {
        id: 10,
        name: matplotlib3D,
        describe: "matplotlib三维图"
    },
    matplotlibLine: {
        id: 11,
        name: matplotlibLine,
        describe: "matplotlib交线图"
    }
};
// 注册全部md组件
export const mdArticle = function (Vue, opts = {}) {
    Object.keys(components).forEach((key) => {
        Vue.component(key, components[key].name);
    });
};