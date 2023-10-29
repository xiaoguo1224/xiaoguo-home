// md文件批量引入
import JavaList1 from "../docs/集合01.md";
import JavaList2 from "../docs/集合02.md";
import JavaList3 from "../docs/集合03.md";
import PythonDefine from "../docs/Python变量类型.md";
import PythonIf from "../docs/Python条件语句.md";
import PythonFor from "../docs/Python循环语句.md";
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
        describe: "Java基础语法",
    },
};
// 注册全部md组件
export const mdArticle = function (Vue, opts = {}) {
    Object.keys(components).forEach((key) => {
        Vue.component(key, components[key].name);
    });
};