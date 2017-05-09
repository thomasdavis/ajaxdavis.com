# ajaxdavis.com
I like this name

```js
import React from 'react'
import ReactDOM from 'react-dom'
import ReactWastageMonitor from 'react-wastage-monitor'
ReactWastageMonitor(React, ReactDOM)

ReactWastageMonitor(React, ReactDOM, {exclude: [
  /Connect\([^\)]*\)/,
  'SomeComponentName',
]})

```
