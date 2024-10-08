# `DOCTYPE`和浏览器渲染模式

> 文档类型，一个文档类型标记是一种标准通用标记语言的文档类型声明，它的目的是要告诉标准通用标记语言解析器，它应该使用什么样的文档类型定义（DTD）来解析文档。 Doctype 还会对浏览器的渲染模式产生影响，不同的渲染模式会影响到浏览器对于 CSS 代码甚至 JavaScript 脚本的解析，所以 Doctype 是非常关键的，尤其是在 IE 系列浏览器中，由 DOCTYPE 所决定的 HTML 页面的渲染模式至关重要。

## 浏览器解析 HTML 方式

有三种解析方式:

- 非怪异（标准）模式
- 怪异模式
- 部分怪异（近乎标准）模式

在“标准模式”(standards mode) 页面按照 HTML 与 CSS 的定义渲染，而在“怪异模式(quirks mode) 模式”中则尝试模拟更旧的浏览器的行为。 一些浏览器（例如，那些基于 Mozilla 的 Gecko 渲染引擎的，或者 Internet Explorer 8 在 strict mode 下）也使用一种尝试于这两者之间妥协的“近乎标准”(almost standards) 模式，实施了一种表单元格尺寸的怪异行为，除此之外符合标准定义。

一个不含任何 DOCTYPE 的网页将会以** 怪异(quirks) 模式**渲染。

HTML5 提供的`<DOCTYPE html>`是标准模式，向后兼容的, 等同于开启了标准模式，那么浏览器就得老老实实的按照 W3C 的 标准解析渲染页面，这样一来，你的页面在所有的浏览器里显示的就都是一个样子了。
