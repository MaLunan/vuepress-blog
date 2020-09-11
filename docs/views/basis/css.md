---
title: 基础知识-css常用属性
sidebar: true
---

# 基础知识-css常用属性

<ClientOnly>
<title-pv/>
</ClientOnly>

## 基础标签

opacity: 0-1 0全透明 元素里面所有属性透明  
                1表示完全不透明  
rgba(0,0,0,0.5); raba(0-255 0-255 0-255 opacity)  

display: block;块元素  

ul li:nth-child(odd) 选择奇数 li  

width              宽  
height             高  
background 背景   color颜色  
border：               边框宽  边框的线条类型  边框颜色   
    dotted           虚线      
margin		外边距  
padding:;		内边距  

display:inline;	 行内块  
浮动
float:left;		左浮动  
float:right		右浮动  
align="center"	居中  
 
margin : 0 auto；DIV居中   

font-size  			字体大小  

font-family		字体样式  

clear:both  		清除浮动  

solid  			 实线  

font-weight:bold 	加粗  

   normal   		 取消加粗  

font-style:italic 倾斜  

list-style:none;		清除  无序列表点  

text-decoration:none; 	 清除A标签下划线  
text-indent:2em;  		首行缩进2字符  

border:1px dashed		虚线  

font-style:italic 倾斜  

text-align:left 水平对齐方式  

vertical-align:top垂直对齐方式  

line-height   行高  


text-decoration:none:            没有修饰  
				underline:   		添加下划线  
				overline:			添加上划线  
				line-through:		添加删除线  

text-transform:none       

overflow：hidden；溢出内容为隐藏：  

a:link			{属性：属性值;}超链接的初始状态;  
a:visited		{属性：属性值;}超链接被访问后的状态;  
a:hover		{属性：属性值;}鼠标悬停，即鼠标划过超链接时的状态;  
a:active		{属性：属性值;}超链接被激活时的状态，即鼠标按下时超链接的状态  

Link--visited--hover--active。  

  target="_blank"链接在 新窗口打开  
_self  新窗口  


background-repeat    no-repeat不平铺  

background-position    位置  

background-attachment:scroll;  背景随内容一块滚动  fixed; 固定  

overflow-hidden;     父子不受影响  



letter-spacing:value;	字间距。  
word-spacing:value;	词间距。  
layout-flow:horizontal/vertical-ideographic;文本流控制  

list-style-type：  
				disc		(实心圆)  
				/circle	(空心圆)/  
				square	(实心方块)  
				/none	(去掉列表符号)；  

list-style-image：url	(所使用图片的路径及全称)；  
list-style-position:outside	(外边)  
					/inside	(里边)；  
list-style:none;			去掉列表符号  

background-color:		颜色值;} 背景颜色 {  
background-image：url	(背景图片的路径及全称）；  
{background-repeat:no-repeat	不平铺/  
						repeat平铺/  
						repeat-x  X轴平铺/  
						repeat-y   Y轴平铺 }  
background-position:left/  
			center/right/数值 背景图的位置{     top/center/bottom/数值;}  

border：  边框宽度 边框风格 边框颜色;  

例如：{border:5px solid #f00;}  
border-width:		边框宽度：  
border-color:		边框颜色：  
border-style:solid	(实线)/  
		dashed	(虚线)  
		dotted	(点线)/  
		double	(双线)    
	transparent  				透明色  

section元素 表示页面中的一个内容区块  
article元素 表示一块与上下文无关的独立的内容  
aside元素 在article之外的，与article内容相关的辅助信息   
header元素 表示页面中一个内容区块或整个页面的标题  
footer元素 表示页面中一个内容区块或整个页面的脚注  
nav元素 表示页面中导航链接部分  
figure元素 表示一段独立的流内容，使用figcaption元素为其添加标题(第一个或最后一个子元素的位置)  

 
vertical-align:top  取消图片间距  

cellspacing="单元格与单元格之间的间距"  

cellpadding="单元格与内容之间的空隙"  

valign=" 		top顶对齐/  
				middle居中/  
				bottom底对齐/  
				baseline(基线);  
background-repeat    no-repeat不平铺  
background-position  背景图位置  
background-attachment:scroll;  背景随内容一块滚动   
					 fixed; 固定  
					local：滚动元素背景图滚动  
 background-image：url背景图设置  
alt  图片提示信息  
title  图片信息文字  

ackground: linear-gradient(to right, red , blue)线性渐变色  
font-family  字体样式  

font-style:italic 倾斜  

 text-decoration:	none:没有修饰  
					underline:添加下划线  
					overline:添加上划线  
					line-through:添加删除线  
letter-spacing:value字间距  

强制文本在一行内显示:white-space：nowrap;  
溢出内容为隐藏：overflow：hidden；  
溢出文本显示省略号：text-overflow：ellipsis;\  


overflow:  
				visible:默认值，溢出内容会显示在元素之外；  
				hidden：溢出内容隐藏；  
				scroll：滚动，溢出内容以滚动方式显示;  
				auto：如果有溢出会添加滚动条，没有溢出正常显示  
				inherit：规定应该遵从父元素继承overflow属性的值  
				overflow-x:X轴溢出；     
				 overflow-y:Y轴溢出  
white-space：  
			normal：默认值，空白会被浏览器忽略，  
			nowrap:文本不会换行，文本会在同一行上继续，直到遇到<br/>标签为止  
			pre：空白会被浏览器保留，其行为方式类似HTML中的pre标签；  
			pre-wrap：保留空白符序列，但是正常的进行换行；  
			pre-line:合并空白符序列，但是保留换行符；  
			inherit：规定应该遵从父元素继承White-space属性的值；  
		
text-overflow:  
				clip：不显示省略号（...）;  
				ellipsis：显示省略标记；  
dispaly:none  隐藏元素  

position:  定位  
			static:默认的定位方式 结果就是定位和不定位没啥区别  
			absolute:绝对定位  
			relative:相对定位   
			fixed：  固定定位  
			sticky：粘性定位  
z-index:	改变层叠关系  

opacity:    0-1  0全透明       元素里面所有透明属性  
			1表示完全不透明  
rgba(0,0,0,0.5);    raba(0-255 0-255 0-255 opacity）  
万能清除法：高度塌陷  
aftef{  
content:""  
display:block  
clear:both  
height:0px;  
overfolw:hidden;  
：first-letter:定义对象内第一个字符的样式  
：first-line:定义对象内第一行的样式。  
min-width:最小宽度     
max-height最大  
max-width  ：100%用手机占屏幕		  

calc( 100% - 90px)计算公式  有空格  

属性值+!important; 优先级高  

cursor:crosshair(十字架)pointer(手形)  

## 弹性盒

box-sizing:border-box   开启怪异盒模型    
boxsizing:content-box  默认标准盒模型  


dispaly:flex   设置为弹性盒  


display:inline-flex;行内块元素弹性盒  


flex-direction主轴排列方式  
				column  侧重排列  
				row默认水平方向  
				row-reverse  翻转横向排列  
				column-reverse  翻转纵向排列  
justify-content:主轴对齐方式  
				flex-start  默认 顶端对齐  
				flex-end  末端对齐  
				center居中对齐  
				space-berween两端对齐  中间自动分配  
				space-around  自动分配距离  
align-items :侧轴对齐方式  
				flex-start  侧轴顶端  
				flex-end  末端对齐  
				center:   居中对齐  
				baseline   和flex-start 效果相同  
flex-wrap:   nowrap  不换行  
				wrap:换行  
				wrap-reverse   翻转wrap排列  排列方式从左到右，改变位置  
				
				

align-content  改变多行子元素在侧轴的对齐方式   行与行之间对齐方式  
			   	flex-start   没有行间距 侧轴顶端对齐  
				flex-end  侧轴底端对齐  
				flex-center  侧轴中间对齐  
				spac-between  侧轴两端对齐  
				space-around  侧轴自由分配距离  
				stretch 默认值  项目被拉伸以适应容器  


子元素的对齐方式：  
align-items:stretch:拉伸子元素  
		align-self:   
				stretch  拉伸  
				Center  元素位于容器中心  
				flex-start元素位于容器开头  
				flex-end 元素位于容器的结尾	  


order : 数值   排序  


flex  子元素分配剩余空间  
flex -grow 拉伸  默认不拉伸  子元素的宽度和小于父元素的时候，拉伸元素  
flex-shrink 收缩    0-1  默认值收缩  当子元素的宽度大于父元素宽度时收缩  
flex-basis 长度  

column-count:3   分成几列  

column-width:   列宽  

column-gap  列之前的间距  

column-rule  列之间添加分割线 边框  
			-color颜色  
			-style样式  
			-width宽度  
colimn-span 是否横跨所有列     
			none不跨列  
			all横跨所有列  

column-fill设置所有列的高度是否统一   版本大多不支持  
		auto 列高度自适应  
		balance 所有列的高取值最高列的高度  

columns  复合属性  
列数  和列宽（大多数时候不写）  

columns-break-inside:avoid;防止列中断  

flex：0-1  子元素分配剩余空间  
flex -grow 拉伸  默认不拉伸  子元素的宽度和小于父元素的时候，拉伸元素  
flex-shrink 收缩    0-1  默认值收缩  当子元素的宽度大于父元素宽度时收缩  
flex-basis 长度

## 伪类选择器

### 结构性伪类选择器

X:first-child 匹配子集的第一个元素。IE7就可以支持  
X:last-child匹配父元素中最后一个X元素  
X:nth-child(n)用于匹配索引值为n的子元素。索引值从1开始  
X:only-child这个伪类一般用的比较少，比如上述代码匹配的是div下的有且仅有一个的p，也就是说，如果div内有多个p，将不匹配。  
X:nth-of-type(n)匹配同类型中的第n个同级兄弟元素X  
X:only-of-type匹配属于同类型中唯一兄弟元素的X  
X:first-of-type匹配同级兄弟元素中的第一个X元素  
X:nth-last-child(n)从最后一个开始算索引。  
X:nth-last-of-type(n) 匹配同类型中的倒数第n个同级兄弟元素X  
X:root匹配文档的根元素。在HTML（标准通用标记语言下的一个应用）中，根元素永远是HTML  
X:empty匹配没有任何子元素（包括包含文本）的元素X  
X:nth-of-type(n)匹配同类型中的第n个同级兄弟元素X  
X:only-of-type匹配属于同类型中唯一兄弟元素的X  
X:first-of-type匹配同级兄弟元素中的第一个X元素  
X:nth-last-child(n)从最后一个开始算索引。  
X:nth-last-of-type(n) 匹配同类型中的倒数第n个同级兄弟元素X  
X:root匹配文档的根元素。在HTML（标准通用标记语言下的一个应用）中，根元素永远是HTML  
X:empty匹配没有任何子元素（包括包含文本）的元素X  

### 目标伪类选择器  用于锚点

E:target 选择匹配E的所有元素，且匹配元素被相关URL指向  

### 否定伪类选择器

E:not(s) （IE6-8浏览器不支持:not()选择器。）  
匹配所有不匹配简单选择符s的元素E  

### UI 元素状态伪类选择器

E:enabled 匹配所有用户界面（form表单）中处于可用状态的E元素  
E:disabled 匹配所有用户界面（form表单）中处于不可用状态的E元素  
E:checked 匹配所有用户界面（form表单）中处于选中状态的元素E  
E:selection 匹配E元素中被用户选中或处于高亮状态的部分  

E:focus 用户行为选择器 选择匹配的E元素，而且匹配元素获取焦点  

## css3新增属性 阴影、图片

css3文本属性  
IE浏览器专属的CSS属性需添加-ms-前缀  
所有基于Gecko引擎的浏览器(如Firefox )专属的CSS属性需添加-moz-前缀  
shadowOpera浏览器专属的CSS属性需添加-0-前缀  
所有基于Webkit引擎的浏览器(如Chrome, Safari )专属的CSS需添前缀-webkit-  


box-shadow:盒子阴影  
h-shadow 水平阴影位置 允许负值  
v-shadow 垂直阴影的位置  允许负值  
blur 模糊距离  
spread 阴影大小  
color 阴影颜色  
inset 从外层的阴影（开始是）改变阴影内侧阴影  


text-shadow:字体阴影  

Word-wrap  
		属性值：  
				normal  只在允许的断字点换行（浏览器保持默认处理）  
break-word		属性允许长单词或 URL 地址换行到下一行。  
属性用来标明是否允许浏览器在单词内进行断句，这是为了防止当一个字符串太长而找不到它的自然断句点时产生溢出现象。  
Word-break  
属性值：  
break-all  
说明：它断句的方式非常粗暴，它不会尝试把长单词挪到下一行，而是直接进行单词内的断句  
Keep-all  
说明：文本不会换行，只能在半角空格或连字符处换行。  

3、Background-size 背景尺寸     
length  
        规定背景图的大小。第一个值宽度，第二个值高度。  

Percentage(%)  
以百分比为值设置背景图大小  

cover  
把背景图像扩展至足够大，以使背景图像完全覆盖背景区域  

contain  
把图像图像扩展至最大尺寸，以使其宽度和高度完全适应内容区域。  


1、Background-origin 背景原点   背景图片起始显示的位置  
padding-box 背景图像填充框的相对位置   
border-box 背景图像边界框的相对位置   
content-box 背景图像的相对位置的内容框   
2、Background-clip 背景裁切  
border-box 背景被裁剪到边框盒。  默认的样式  
padding-box 背景被裁剪到内边距框。  背景颜色发生了裁剪  
content-box 背景被裁剪到内容框	从content开始裁剪（背景颜色和背景图片同时发生变化）  

4、css3多背景属性  
Eg:p{ background:url(demo.gif) no-repeat; //这是写给不识别下面这句的默认背景图片  
background:url(demo.gif) no-repeat ,url(demo1.gif) no-repeat left bottom, url(demo2.gif) no-repeat 10px 15px; //这是高级浏览器的css多重背景，第一个最上面   
background-color:yellow; //这是定义的默认背景颜色，全部适合 }  


边框图像  border-imager:-url()  
border-image-slice(横向向图片的内部偏移的数量（没有单位）纵向象向图像里面偏移的数量（没有单位）  
border-image-repeat:stretch（拉伸）repeat（平铺）round(铺满)  
border-image-outset  边框图像区域超出边框的量  边框距离内容的距离  

圆角边框  
border-radius:1 2 3 4  
水平半径/垂直半径  

## 渐变和响应式

### 媒体查询

@media screen  and(max-width:320px)	  
@media screen  and(min-width:320px)	and(max-width:375px)  
@media screen  and(min-width:375px)	  

`<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"&gr;`
这段代码的几个参数解释：    视口  
常见设计图纸: 640px  
100vw=320px31.25vw=100px;  
常见设计图纸: 750px  
100vw=375px;  
26.67vw=100px;  
常见设计图纸: 1028px  
100vw=414px;  
24.15vw=100px;  

### 渐变

background:linear-gradient （to bottom，red,blue）从上往下渐变  

background:-webkit-linear-gradient(left,red,blue)兼容写法  相反    


线性渐变兼容 ：linear-gradient()前面加浏览器前缀  
标准模式（不加浏览器前缀）direction:to left   从右到左渐变  
兼容模式 direction :right  :从右到左渐变  

deg角度渐变  
direction(xdeg)标准模式+兼容模式=：90deg  

 bottom,   red  10%   yeloow 20% 颜色不均匀分布 百分比渐变  

bottom,   red  10%   yeloow 20% 颜色不均匀分布 百分比渐变  

径向渐变     加浏览器前缀  
 background: radial-gradient(center, shape, size, start-color, ..., last-color);  
说明：  
center：渐变起点的位置，可以为百分比，默认是图形的正中心。前面加方向  left  
中心点：  
横向的位置   纵向的位置  +center  
center			center  
left 			right  
top 			bottom  


大小和形状不能同时设置  
shape：渐变的形状，ellipse表示椭圆形，circle表示圆形。默认为ellipse，如果元素形状为正方形的元素，则ellipse和circle显示一样。  
size：渐变的大小，即渐变到哪里停止，它有四个值。 closest-side：最近边； farthest-side：最远边； closest-corner：最近角； farthest-corner：最远角。  

多颜色点均匀分布  

div { background: radial-gradient(red, green, blue); }   
以中心（50% 50%）为起点，到最远角（farthest-corner），从red到green、blue的均匀渐变  
div { background: -webkit-radial-gradient(50% 50%, farthest-corner, red, green, blue); }   或  
div { background: -webkit-radial-gradient(center, farthest-corner, red, green, blue); }  


多颜色节点不均匀分布  

div { background: radial-gradient(red 5%, green 15%, blue 60%); }  

重复性线性渐变  

div { background: repeating-linear-gradient(red, yellow 10%, green 20%); }  
重复性径向渐变  

div { background: repeating-radial-gradient(red, yellow 10%, green 20%); }  

### 动画

transition:    
				property  
检索或设置对象中参与过度的属性   all  
				duration  
过度的持续时间  
				delay	  
延迟过度的时间  
				timing-function  
检索或过度的动画效果    默认  ease  

linear均速  
ease逐渐慢下来  
ease-in加速  
ease-out减速  
ease-in-out先加速后减速  


贝塞尔曲线：  
属性值：cubic-bezier()  
贝塞尔曲线网址：http://cubic-bezier.com/  
逐帧动画：steps();  
Transition-timing-function:steps(5);表示分5步完成逐帧动画。  

### css3 2D

transform的属性包括：rotate() / skew() / scale() / translate(,) ，分别还有x、y之分，比如：rotatex() 和 rotatey()   
1、translate()    translateX(x轴位移的值 )    translateY(y轴位移的值)    
translate(X,Y) 位移的值可为负数，是加了单位的属性值 。  
将元素向指定的方向移动，类似于position中的relative。  


水平移动：向右移动translate(tx,0)和向左移动translate(-tx,0)；  
垂直移动：向上移动translate(0,-ty)和向下移动translate(0,ty);  
对角移动：右下角移动translate(tx,ty)、右上角移动translate(tx,-ty)、左上角移动translate(-tx,-ty)和左下角移动translate(-tx,ty)。  
	
scale(1,0.5)  X.Y的缩放  

让元素根据中心原点对对象进行缩放。默认的值1。因此0.01到0.99之间的任何值，使一个元素缩小；而任何大于或等于1.01的值，让元素显得更大。  
scaleX(x轴的缩放)   scaleY(Y轴的缩放)    
缩放scale()函数和translate()函数的语法非常相似，他可以接受一个值，也可以同时接受两个值，如果只有一个值时，其第二个值默认与第一个值相等。例如，scale(1,1)元素不会有任何变化，而scale(2,2)让元素沿X轴和Y轴放大两倍。  

scaleX()：相当于scale(sx,1)。表示元素只在X轴（水平方向）缩放元素，其默认值是1。  
scaleY()：相当于scale(1,sy)。表示元素只在Y轴（纵横方向）缩放元素，其默认值是１。  

3、rotate()  

旋转rotate()函数通过指定的角度参数对元素根据对象原点指定一个2D旋转。它主要在二维空间内进行操作，接受一个角度值，用来指定旋转的幅度。如果这个值为正值，元素相对原点中心顺时针旋转；如果这个值为负值，元素相对原点中心逆时针旋转。  

 rotateX(***deg) 方法，元素围绕其 X 轴以给定的度数进行旋转  
 rotateY() 方法，元素围绕其 Y 轴以给定的度数进行旋转  
rotate(50deg)代表的围绕Z轴旋转50度  
skew()  
倾斜skew()函数能够让元素倾斜显示。它可以将一个对象以其中心位置围绕着X轴和Y轴按照一定的角度倾斜。  

一个参数时：表示水平方向的倾斜角度  ；
两个参数时：第一个参数表示水平方向的倾斜角度，第二个参数表示垂直方向的倾斜角度  
transform-origin    例：transform-origin:100px top;  
transform-origin是变形原点，也就是该元素围绕着那个点变形或旋转，该属性只有在设置了transform属性的时候起作用；  
因为我们元素默认基点就是其中心位置，换句话说我们没有使用transform-origin改变元素基点位置的情况下，transform进行的rotate,translate,scale,skew等操作都是以元素自己中心位置进行变化的。  
先写平移  后写缩放  
先写平移 后写旋转  

## 表单指令

input type=text   文本框
		password密码框  
		submit提交按钮  
		reset重置按钮  
		checkbox复选框     	checked="checked"表示默认被选中，可简写成checked  
:checked伪类  
			disabled="disabled"表示禁用，可简写成disabled  
			enabled:可用状态   
		`<button></button>`按钮  
	下拉菜单  
`<select name="">`  
`<option name="" value=""></option>`  
`selected="selected"`默认 选中  
`</select>`  


多行文本框（文本域）  
`<textarea name="textareal" cols="字符宽度" rows="行数">`  
`</textarea>`  


`<iframe>` 标签   框架  
语法：`<iframe   src="" width="" height=""   frameborder="1/0"  name="iframe名称"     scrolling="yes/no/auto">   </iframe>`  
frameborder="1/0"  1代表有框架边框 /0代表无框架边框！  
滚动条：scrolling="yes/no/auto" yes :有   no:无    auto：自动  
`<a href="" target="name"></a>`表示超链接的目标地址在框架中打开  

表单字段区  
`<fieldset></fieldset>`  
字段级标题  
`<legend></legend>`  
上传文件框  
文件域：`<input type="file" />`  
图像域  
`<input type="image" src="" width="100" height="100" alt="上传图片" />`  

无内容单元格显示、隐藏  
empty-cells:show/hide;  

 video元素 定义视频`<video src="movie.ogg" controls="controls">Video元素</video>audio元素 定义音频<audio src="someaduio.wav">Audio元素</audio>`   

controls属性：如果出现该属性，则向用户显示控件，比如播放按钮。  
autoplay属性：如果出现该属性，则视频在就绪后马上播放。  
loop属性：重复播放属性。  
muted属性：静音属性。  
poster属性：规定视频正在下载时显示的图像，直到用户点击播放按钮。  

output输出  

multiple可以输出多个值     多文件上传

<ClientOnly>
  <leave/>
</ClientOnly/>