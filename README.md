# vue3 Demo
## vue3更新优化

1、更好的代码管理方式：monorepo

    这样使得模块拆分更细化，职责划分更明确，模块之间的依赖关系也更加明确，
    开发人员也更容易阅读、理解和更改所有模块源码，提高代码的可维护性。另外
    一些 package（比如 reactivity 响应式库）是可以独立于 Vue.js 使用的，
    这样用户如果只想使用 Vue.js 3.0 的响应式能力，可以单独依赖这个响应式
    库而不用去依赖整个 Vue.js，减小了引用包的体积大小，而 Vue.js 2 .x 是
    做不到这一点的。
    
2、有类型的 JavaScript：TypeScript

    Vue由js => Flow => Typescript
    
3、源码体积优化

    首先，移除一些冷门的 feature（比如 filter、inline-template 等）；
    其次，引入 tree-shaking 的技术，减少打包体积。
    
4、数据劫持优化

    Object.defineProperty => Proxy API ,可以监听到对象的删除和添加，
    可以方便的实现深层的对象的监听
    
5、编译优化

    patch阶段的优化，在多节点，少动态节点的情况下。借助 Block tree，Vue.js
    将 vnode 更新性能由与模版整体大小相关提升为与动态内容的数量相关。除此之
    外，Vue.js 3.0 在编译阶段还包含了对 Slot 的编译优化、事件侦听函数的缓存
    优化，并且在运行时重写了 diff 算法。
    
6、语法 API 优化：Composition API

    可以实现逻辑复用，没有变量冲突，复杂的引入问题。可以达到逻辑相关
    代码紧凑。无this，都是函数调用，便于tree-shaking，便于类型推导。
    
7、引入 RFC：使每个版本改动可控
