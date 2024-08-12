import type { DefaultTheme } from 'vitepress'
import fs from 'fs-extra'

const sidebarDailyNotes: DefaultTheme.SidebarItem[] =
  fs.readJSONSync('./scripts/daily-notes.json', { throws: false }) || []

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/web3/': [
    {
      text: 'Solidity 基础知识',
      collapsed: false,
      items: [{ text: '数据类型', link: '/web3/solidity/data-types' }],
    },
  ],
  '/web2/': [
    {
      text: 'JavaScript 基础',
      collapsed: false,
      items: [
        { text: '简介', link: '/web2/javascript/00-JavaScript简介' },
        { text: '数据类型', link: '/web2/javascript/01-数据类型' },
        { text: '面向对象', link: '/web2/javascript/02-面向对象' },
        { text: '迭代方法', link: '/web2/javascript/03-迭代方法' },
        { text: '函数式编程', link: '/web2/javascript/04-函数式编程' },
        { text: '异步流程控制', link: '/web2/javascript/05-异步流程控制' },
        { text: '设计模式', link: '/web2/javascript/06-设计模式' },
      ],
    },
    {
      text: 'Chrome V8',
      collapsed: false,
      items: [
        { text: '从V8的角度看JS', link: '/web2/javascript/07-从V8的角度看JS' },
        { text: 'V8如何执行JS代码', link: '/web2/javascript/08-V8如何执行JS代码' },
        {
          text: '从执行上下文到变量提升',
          link: '/web2/javascript/09-从执行上下文到变量提升',
        },
        { text: '作用域', link: '/web2/javascript/10-作用域' },
        { text: '闭包', link: '/web2/javascript/11-闭包' },
        { text: '执行上下文中的this', link: '/web2/javascript/12-执行上下文中的this' },
        {
          text: '从调用栈溢出到尾递归优化',
          link: '/web2/javascript/13-从调用栈溢出到尾递归优化',
        },
        {
          text: '从Chrome架构到新tab的进程协作',
          link: '/web2/javascript/14-从Chrome架构到新tab的进程协作',
        },
        { text: '从进程协作到事件循环', link: '/web2/javascript/15-从进程协作到事件循环' },
      ],
    },
    {
      text: 'HTML',
      collapsed: false,
      items: [
        { text: '语义化标签', link: '/web2/html/01-语义化标签.md' },
        { text: 'Meta标签', link: '/web2/html/02-Meta标签' },
        { text: 'DOCTYPE和浏览器渲染模式', link: '/web2/html/03-DOCTYPE和浏览器渲染模式' },
        { text: 'HTML5新增内容', link: '/web2/html/04-HTML5新增内容' },
      ],
    },
    {
      text: 'CSS',
      collapsed: false,
      items: [
        { text: 'Layout', link: '/web2/css/01-Layout' },
        { text: '1像素问题', link: '/web2/css/02-1像素问题' },
      ],
    },
    {
      text: '浏览器',
      collapsed: false,
      items: [
        { text: '01-从用户搜索开始', link: '/web2/browser/01-从用户搜索开始' },
        { text: '02-浏览器缓存', link: '/web2/browser/02-浏览器缓存' },
        {
          text: '03-数据请求：计算机网络基础',
          link: '/web2/browser/03-数据请求：计算机网络基础',
        },
        { text: '04-数据请求：TCP', link: '/web2/browser/04-数据请求：TCP' },
        { text: '05-数据请求：HTTP请求流程', link: '/web2/browser/05-数据请求：HTTP请求流程' },
        { text: '06-数据请求：HTTP与HTTPS', link: '/web2/browser/06-数据请求：HTTP与HTTPS' },
        { text: '07-页面渲染：从文件到页面', link: '/web2/browser/07-页面渲染：从文件到页面' },
        { text: '08-垃圾回收', link: '/web2/browser/01-从用户搜索开始' },
      ],
    },

    {
      text: '工程化',
      collapsed: false,
      items: [{ text: '前端监控', link: '/web2/engineering/前端监控' }],
    },
  ],
  '/notes&thoughts/finance/': [
    {
      text: '金融基础知识',
      collapsed: false,
      items: [
        { text: '01-金融的定义与演化', link: '/notes&thoughts/finance/01-金融的定义与演化' },
        { text: '02-金融机构的作用', link: '/notes&thoughts/finance/02-金融机构的作用' },
        {
          text: '03-个人资产配置的生命周期',
          link: '/notes&thoughts/finance/03-个人资产配置的生命周期',
        },
        { text: '04-货币与信用', link: '/notes&thoughts/finance/04-货币与信用' },
        { text: '05-银行与理财', link: '/notes&thoughts/finance/05-银行与理财' },
        { text: '06-生活中的银行', link: '/notes&thoughts/finance/06-生活中的银行' },
        { text: '07-发行承销', link: '/notes&thoughts/finance/07-发行承销' },
        { text: '08-兼并收购', link: '/notes&thoughts/finance/08-兼并收购' },
        {
          text: '09-金融创新-投行创新业务',
          link: '/notes&thoughts/finance/09-金融创新-投行创新业务',
        },
        { text: '10资产证券化', link: '/notes&thoughts/finance/10资产证券化' },
        { text: '11-基金', link: '/notes&thoughts/finance/11-基金' },
        { text: '12-另类投资', link: '/notes&thoughts/finance/12-另类投资' },
        { text: '13-基金业绩', link: '/notes&thoughts/finance/13-基金业绩' },
      ],
    },
  ],
  '/notes&thoughts/essay/': [
    {
      text: '杂文',
      collapsed: false,
      items: [
        { text: '洞穴奇案', link: '/notes&thoughts/essay/洞穴奇案' },
        { text: '哲学导论', link: '/notes&thoughts/essay/哲学导论' },
      ],
    },
  ],
  '/daily-notes': sidebarDailyNotes,
}
