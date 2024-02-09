---
outline: deep
---

# CSS 实现渐变字

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>渐变字</title>
    <style>
      @keyframes gradientText {
        0% {
          background-position: 0;
        }

        100% {
          background-position: 28000px;
        }
      }

      .gradient-text {
        display: inline-block;
        color: transparent;
        background: linear-gradient(
          30deg,
          #32c5ff 25%,
          #b620e0 50%,
          #f7b500 75%,
          #20e050 100%
        );

        background-size: auto;
        /* stylelint-disable-next-line property-no-vendor-prefix */
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: gradientText 300s infinite linear;
        /* 用户不可选择 */
        user-select: none;
      }
    </style>
  </head>

  <body>
    <div class="gradient-text">这是一段测试渐变字！！！！</div>
  </body>
</html>
```
