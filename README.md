

# g-watermark

### 水印功能

```javascript
import {Watermark} from 'g-watermark'
let nickName='user007'
Watermark.init(nickName)
```

### 保存至图片

```javascript
import {Canvas2some} from 'g-watermark'

//获取canvas 得base64缩略图 
Canvas2some.getHdThumbnail(canvas)
//canvas 导出png 并下载到本地
Canvas2some.canvas2hd('文件名', canvas)
```
