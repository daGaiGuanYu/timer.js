# haha-Timer
##### 功能
+ 开始计时
+ 暂停计时
+ 继续计时
+ 停止计时

##### 安装
```base
npm install haha-Timer
```

##### 使用
```js
import Timer from 'haha-Timer'

let timer = new Timer()
setTimeout( () => {
  timer.stop()
  console.log(timer.time())
}, 800)
```

```js
import Timer from 'haha-Timer'

let timer = new Timer()
setTimeout(() => timer.pause(), 800)
setTimeout(() => timer.continue(), 1800)
setTimeout(() => {
  timer.stop()
  console.log(timer.time())
}, 2000)
```

```js
import Timer from 'haha-Timer'

let timer = new Timer()
setTimeout(() => timer.pause(), 800)
setTimeout(() => timer.pause(), 1000)
setTimeout(() => timer.continue(), 1800)
setTimeout(() => timer.continue(), 1900)
setTimeout(() => {
  timer.stop()
  console.log(timer.time())
}, 2000)
```

```js
import Timer from 'haha-Timer'

let timer = new Timer()
setTimeout(() => timer.pause(), 800)
setTimeout(() => timer.continue(), 1800)
setTimeout(() => timer.pause(), 2800)
setTimeout(() => timer.continue(), 3800)
setTimeout(() => {
  timer.stop()
  console.log(timer.time())
}, 4000)

setTimeout(() => {
  timer.stop()
  console.log(timer.time())
}, 6000)
```