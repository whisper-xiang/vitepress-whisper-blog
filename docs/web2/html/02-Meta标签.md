# Meta 标签

## 核心

提供给页面的一些元信息（名称 / 值对），有助于 `SEO`。

## 属性值

- name  
  名称 / 值对中的名称。`author、description、keywords、generator、revised、others`。 把 `content` 属性关联到一个名称。
- http-equiv  
  没有 `name` 时，会采用这个属性的值。content-type、expires、refresh、set-cookie。把 `content` 属性关联到 `http` 头部
- content  
  名称 / 值对中的值， 可以是任何有效的字符串。 始终要和 `name` 属性或 `http-equiv` 属性一起使用
- scheme  
  用于指定要用来翻译属性值的方案。
