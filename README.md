react-toastr-basic
===
A simple react toastr for your application. Easy to install and easy to use. This application is based on react and flux

Basic Installation
---
```
npm install --save-dev react-toastr-basic
```

Demo
---
<a href="https://still-reaches-73675.herokuapp.com/">Live Demo</a>

Animation (reference or download animate.css)
---
```
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
```

Usage
---


---
CSS
```
<link rel="stylesheet" type="text/css" href="toastrStyle.css">
```

---
Import
```
import ToastrContainer from 'react-toastr-basic'
```

---
Add Markup to Index.html (or shell page)
```
<ToastrContainer />
```

---
Use
```
import {Toast} from 'react-toastr-basic';
```
```
Toast('my toast message');
```

Success Toast
---
```
import {ToastSuccess} from 'react-toastr-basic';
```
```
ToastSuccess('my successful toast');
```

Danger Toast
---
```
import {ToastDanger} from 'react-toastr-basic';
```
```
ToastDanger('my dangerous toast');
```
