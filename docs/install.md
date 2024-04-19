# 安装
## 1.安装组件
```bash
npm i greatbrick
```
## 2.引用组件
```javascript
// 全部引入
import 'greatbrick/dist/css/index.css'
import GreatBrick from 'greatbrick'
app.use(GreatBrick)
// 按需引入
import 'greatbrick/dist/css/button.css'
import {GButton} from 'greatbrick'
app.use(GButton)
```