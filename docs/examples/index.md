---
title: 基础示例
---

```tsx
import { CherryEditor } from '@sjognad/react-cherry-editor';
import * as echarts from 'echarts';
import MathJax from 'mathjax/es5/tex-svg';

const markdownSample = `# Markdown 语法说明
[[toc]]
# 行内语法

支持github emoji:+1::1st_place_medal:

## 字体样式
Paragraph Contents, **Bold** Text or  __Bold__  Text

*Italic* Text or  _Italic_  Text

字体样式\`\`行内代码console.log('hello \`world\`')\`\` ^上标^ ~~删除线~~ !!red 红色字体!!^^下标^^  !20 大号字体!

## 超链接
[百度](http://baidu.com)

[非法URL](javascrip&#116;&#58;alert&#40;0&#41;)不会被解析为链接

**引用链接** [refLink][引用注释]

![img #200px #auto][引用注释]
也可以用于图片引用

![img #200px#center#auto][引用注释]
图片可以居中

![img #200px#right][引用注释]
图片可以右对齐

----
![img #200px #float-left][引用注释]
图片可以悬浮左对齐
文字会在图片右侧


----
![img #200px #float-right][引用注释]
图片可以悬浮右对齐
文字会在图片左侧


---

[引用注释]: http://tiger.oa.com/dist/OTEAM-markdown/logo/logo-name-only--White-B.png

## 转义
should be a tag"/>


## 图片视频

-----
# 段落语法

## 分割线

--------


## 代码块


\`\`\`javascript
function hello() {
  //打印
  console.log('hello world');
}
hello();
\`\`\`

## 科学公式

行内公式：$e=mc^2$

多行公式：
$$
\\begin{aligned}
P(B|A)&=\\frac{P(AB)}{P(A)}\\
P(\\overline{B}|A)&=1-P(B|A)=1-\\frac{P(AB)}{P(A)}
\\end{aligned}
$$


## 表格

### 普通表格
| LeftAlignedCol | CenterAlignedCol | RightAlignedCol |
| :--- | :---: | ---: |
| 1 | 2 | 3 |
| **left**Text | centered Text | *right*Text |
| 1 | 2 | 3 |


### 带图表的表格
| :bar: {x,y} | 2019 | 2020 | 2021 |
| :--- | ---: | ---: | ---: |
| DAU | 100,100 | 200,200 | 300,300 |
| UV | 1,000,000 | 2,000,000 | 3,000,000 |
| PV | 10,000,000 | 20,000,000 | 30,000,000 |


| :line: {x,y} | 2019 | 2020 | 2021 |
| :--- | ---: | ---: | ---: |
| DAU | 100,100 | 200,200 | 300,300 |
| UV | 1,000,000 | 2,000,000 | 3,000,000 |
| PV | 10,000,000 | 20,000,000 | 30,000,000 |


## checklist

- [x] dd
- [ ] dd
- [ ] dd


无序列表
-------

- 无序列表
- 无序列表
    - 无序列表
- 无序列表


有序列表
------

1. 有序列表
1. 有序列表
    1. 有序列表
    1. 有序列表
        - 无序列表
        - 无序列表
    1. 有序列表
1. 有序列表


## 流程图
**说明**
> 访问[Mermaid 流程图](https://mermaid-js.github.io/mermaid/#/flowchart)参考具体使用方法。

**效果**
小明老婆让小明下班时买一斤包子，如果遇到卖西瓜的，买一个。

左右结构
\`\`\`mermaid
graph LR
    A[公司] -->| 下 班 | B(菜市场)
    B --> C{看见<br>卖西瓜的}
    C -->|Yes| D[买一个包子]
    C -->|No| E[买一斤包子]
\`\`\`
上下结构
\`\`\`mermaid
graph TD
    A[公司] -->| 下 班 | B(菜市场)
    B --> C{看见<br>卖西瓜的}
    C -->|Yes| D[买一个包子]
    C -->|No| E[买一斤包子]
\`\`\`

-------
## 时序图
**说明**
> 访问[Mermaid 时序图](https://mermaid-js.github.io/mermaid/#/sequenceDiagram)参考具体使用方法

**效果**

\`\`\`mermaid
sequenceDiagram
autonumber
A-->A: 文本1
A->>B: 文本2
loop 循环1
loop 循环2
A->B: 文本3
end
loop 循环3
B -->>A: 文本4
end
B -->> B: 文本5
end
\`\`\`


------
## 状态图
**说明**
> 访问[Mermaid 状态图](https://mermaid-js.github.io/mermaid/#/stateDiagram)参考具体使用方法

**效果**

\`\`\`mermaid
stateDiagram-v2
[*] --> A
A --> B
A --> C
state A {
    [*] --> D
    D --> [*]
}
B --> [*]
C --> [*]
\`\`\`


---
## UML图
**说明**
> 访问[Mermaid UML图](https://mermaid-js.github.io/mermaid/#/classDiagram)参考具体使用方法

**效果**
\`\`\`mermaid
classDiagram
Base <|-- One
Base <|-- Two
Base : +String name
Base: +getName()
Base: +setName(String name)
class One{
  +String newName
  +getNewName()
}
class Two{
  -int id
  -getId()
}
\`\`\`

-------
## 饼图
**说明**
> 访问[Mermaid 饼图](https://mermaid-js.github.io/mermaid/#/pie)参考具体使用方法

**效果**

\`\`\`mermaid
pie
title 饼图
"A" : 40
"B" : 30
"C" : 20
"D" : 10
\`\`\`

-----
## 甘特图
**说明**
> 访问[Mermaid 甘特图](https://mermaid-js.github.io/mermaid/#/gantt)参考具体使用方法

**效果[^甘特图红线解释]**
[^甘特图红线解释]:如果甘特图中出现红线，红线表示\`今天\`


\`\`\`mermaid
gantt
     title 敏捷研发流程
    section 迭代前
        交互设计     :a1, 2018-10-18, 4d
        UI设计        :after a1, 5d
        需求评审     : 1d
    section 迭代中
        详细设计      :a2, 2018-10-29, 2d
        开发          :2018-10-30, 7d
        测试          :2018-11-06, 5d
    section 迭代后
        发布: 1d
        验收: 2d
        回顾: 1d
\`\`\`

## 脚注和注释

[单行注释]: 这是一行注释
[^多行注释]:
这是一行注释
需要一个空行才能结束多行注释


[^脚注]: **脚注示例**：
- 脚注里可以使用的语法有
        - [x] 行内语法
        - [x] 列表语法
        - [x] 代码块
         ......


这里引用了一个脚注[^脚注]

# 快捷键

1级标题    \`Ctrl + 1\`
2级标题    \`Ctrl + 2\`
3级标题    \`Ctrl + 3\`
4级标题    \`Ctrl + 4\`
5级标题    \`Ctrl + 5\`
6级标题    \`Ctrl + 6\`

加粗    \`Ctrl + b\`
斜体    \`Ctrl + i\`\t
插入链接    \`Ctrl + l\`\t
插入代码块    \`Ctrl + k\`\t
插入图片     \`Ctrl + g\`\t
插入公式    \`Ctrl + m\`\t
`;

export default () => (
  <CherryEditor
    engine={{
      syntax: {
        table: {
          enableChart: true,
        },
        // mathBlock: {
        //   engine: 'katex',
        // },
        // inlineMath: {
        //   engine: 'katex',
        // },
      },
    }}
    externals={{
      echarts,
      MathJax,
    }}
    value={markdownSample}
  />
);
```
