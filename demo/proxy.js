function updateView () {
  console.log('更新视图')
}

function isObject(t) {
  return typeof t === 'object' && t !== null
}

const options = {
  set(target, key, value, reciver) {
    if(target.hasOwnProperty(key)){
      updateView()
    }
    return Reflect.set(target, key, value, reciver)
  },
  get(target, key, reciver) {
    const res = Reflect.get(target, key, reciver)
    if(isObject(target[key])){
      return reactive(res)
    }
    return res
  },
  deleteProperty(target, key) {
    return Reflect.deleteProperty(target, key)
  }
}

const toProxy = new WeakMap()

function reactive(target) {
  if(!isObject(target)){
    return target
  }
  if(toProxy.get(target)){
    return toProxy.get(target)
  }
  let proxyed = new Proxy(target, options)
  toProxy.set(target, proxyed)
  return proxyed
}

let obj = {
  name: 'wfl',
  age: 18,
  city: ['北京', '大兴']
}

let reactivedObj = reactive(obj)

reactivedObj.city.push('亦庄')

// 数组按照下标赋值还是不会触发更新
