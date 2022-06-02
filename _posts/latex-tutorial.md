---
title: latex tutorial
date: 2022-02-14 12:28:29
tags:
- latex
---

https://towardsdatascience.com/write-markdown-latex-in-the-jupyter-notebook-10985edb91fd



[List_of_LaTeX_mathematical_symbols](https://oeis.org/wiki/List_of_LaTeX_mathematical_symbols)



Todo : Environment

Example : {array}, {matrix}

# LaTeX

> Have you ever asked yourself, how they write complex maths and physics equations using computer? Well, it’s all about LaTeX.

The Jupyter Notebook uses [MathJax](http://www.mathjax.org/) to render LaTeX inside HTML / Markdown. Just put your LaTeX math inside `$ $`. Or enter in *display* math mode by writing between`$$ $$`.

```latex
To insert a mathematical formula we use the dollar symbol $, as follows:

Euler's identity: $ e^{i \pi} + 1 = 0 $

To isolate and center the formulas and enter in math display mode, we use 2 dollars symbol:
$$
...
$$


Euler's identity: $$ e^{i \pi} + 1 = 0 $$
```

![img](https://miro.medium.com/max/606/1*5fDoMZxcBEUgkUifg5W4wA.png)

Output Result: [Colab Notebook](https://colab.research.google.com/drive/18_2yFdH8G-6NXY_7fTcshMoScgJ-SYac#scrollTo=fiZwHP0czJyT)

[**Important Notes**](https://colab.research.google.com/drive/18_2yFdH8G-6NXY_7fTcshMoScgJ-SYac#scrollTo=1v3l2nNmNN7_)**:**

1. To add **little spacing** in math mode use `\,`
2. To add **a new line** when in math mode use `\\`
3. To display **fraction** use `\frac{arg 1}{arg 2}`
4. For **power** (superscripts text) use `^{}`
5. For **indices** (subscripts) use `_{}`
6. For **roots** use `\sqrt[n]{arg}`The `[n]`is optional.

```latex
$$
\frac{arg 1}{arg 2} \\
x^2\\
e^{i\pi}\\
A_i\\
B_{ij}\\
\sqrt[n]{arg}	
$$
```

![img](https://miro.medium.com/max/118/1*61TURcXZU6xJA68LsFC8UA.png)



Output Example: [Colab Notebook](https://colab.research.google.com/drive/18_2yFdH8G-6NXY_7fTcshMoScgJ-SYac#scrollTo=1v3l2nNmNN7_&line=7&uniqifier=1)

> *LaTeX file extension is .tex*

## • Greek Letters

To write greek letters, type `\` and the letter name:

```latex
Given : $\pi = 3.14$ , $\alpha = \frac{3\pi}{4}\, rad$
$$
\omega = 2\pi f \\
f = \frac{c}{\lambda}\\
\lambda_0=\theta^2+\delta\\
\Delta\lambda = \frac{1}{\lambda^2}
$$
```

![img](https://miro.medium.com/max/407/1*J4P7zpS42DGxFk4HEkzyuA.png)

[**Important Note**](https://colab.research.google.com/drive/18_2yFdH8G-6NXY_7fTcshMoScgJ-SYac#scrollTo=VFaCoSXvS-_H&line=6&uniqifier=1):
To write **Capital Greek Letter**, type the first case after the backslash `\`as an uppercase, for example:

```latex
\delta >>> δ 
\Delta >>> Δ
\omega >>> ω
\Omega >>> Ω
```

![img](https://miro.medium.com/max/299/1*l11lK7xDkF7buMsnqtM-Cg.png)

==<u>**As shown in this figure:**</u>==

![img](https://miro.medium.com/max/423/1*rvn-mNdprK7m1koOns8ilg.png)

Full Greek Letter List. [Source](http://tug.ctan.org/)

## • Roman Names:

<iframe src="https://towardsdatascience.com/media/f45cacf4481da7e050c5bfe1c0ea0a58" allowfullscreen="" frameborder="0" height="171" width="680" title="roman.tex" class="es ff fb fl v" scrolling="auto" style="box-sizing: inherit; width: 680px; position: absolute; left: 0px; top: 0px; height: 171px;"></iframe>

```latex
$$
\sin(-\alpha)=-\sin(\alpha)\\
\arccos(x)=\arcsin(u)\\
\log_n(n)=1\\
\tan(x) = \frac{\sin(x)}{\cos(x)}
$$
```



![img](https://miro.medium.com/max/215/1*bPZyBn2oRrBpMBAXUe9Bbw.png)

![img](https://miro.medium.com/max/385/1*7dib0gZYUE3_2Ac3CClazw.png)

[Source](http://tug.ctan.org/)

## • Other Symbols

```latex
#Other Symbols
## Angles:
Left angle : $\langle$

Right angle : $\rangle$

Angle between two vectors u and v	: $\langle \vec{u},\vec{v}\rangle$	

$$ \vec{AB} \, \cdot \, \vec{CD} =0  \Rightarrow  \vec{AB} \, \perp\, \vec{CD}$$ % \rightarrow = \to

##Sets and logic
$$\mathbb{N} \subset \mathbb{Z} \subset \mathbb{D} \subset \mathbb{Q} \subset \mathbb{R} \subset \mathbb{C}$$1
```

![img](https://miro.medium.com/max/689/1*7xOekNdZvG9NXBm-v0WZtw.png)

<img src="https://miro.medium.com/max/422/1*8qpYLNPmlvEoEMaoksfINA.png" alt="img" style="zoom:150%;" />

<img src="https://miro.medium.com/max/482/1*IgyFkP0Z9Dk6QQumL5sClQ.png" alt="img" style="zoom:150%;" />

Arrows: [Source](http://tug.ctan.org/)

<img src="https://miro.medium.com/max/429/1*ODvw1B-e_Kpgl4iQ93O86A.png" alt="img" style="zoom:150%;" />

Other Symbols: [Source](http://tug.ctan.org/)

## • Vertical curly braces:

To define a left vertical curly brace we use the attribute

```latex
\left\{
```

to close it we use

```latex
\right\}
```

```latex
\left\{\right\}
```

$\left\{\right\}$

```latex
$$
sign(x) = \left\{
    \begin{array}\\
        1 & \mbox{if } \ x \in \mathbf{N}^* \\
        0 & \mbox{if } \ x = 0 \\
        -1 & \mbox{else.}
    \end{array}					% "array" : Environment 
\right.							% Instead of "\right\" "\right." denoting vertical brace
$$

\\

$$
 \left.
    \begin{array} \\
        \alpha^2 = \sqrt5 \\
        \alpha \geq 0 
    \end{array}
\right \}=\alpha = 5 
$$
```

Example:
$$
\left\{
\begin{array}\\
1\\
0\\
-1\\
\end{array}
\right.
$$


<img src="https://miro.medium.com/max/294/1*ZKKN3XjaoAGY8_zVHWiGPA.png" alt="img" style="zoom:150%;" />

Output Result: [Colab Notebook](https://colab.research.google.com/drive/18_2yFdH8G-6NXY_7fTcshMoScgJ-SYac#scrollTo=XPXiLu3IE9gO)

## • Horizontal curly braces

For horizontal curly braces, we use :

```latex
\underbrace{...}
\overbrace{...}
```

$$
\underbrace{\ln \left( \frac{5}{6} \right)}_{\simeq -0.1823}
< \overbrace{\exp (2)}^{\simeq 7.3890}
$$



## • Derivative

```latex
First order derivative : $$f'(x)$$ 		% quotation mark
K-th order derivative  : $$f^{(k)}(x)$$
Partial firt order deivative	: $$\frac{\partial f}{\partial x}$$
Partial k-th order derivative	: $$\frac{\partial^{k} f}{\partial x^k}$$
```

![img](https://miro.medium.com/max/358/1*a2yMu9OEWwZzCkdXpeOHuA.png)

## • Limit

```latex
#limit
Limit at plus infinity	: $$\lim_{x \to +\infty} f(x)$$ 	% infty
Limit at minus infinity	: $$\lim_{x \to -\infty} f(x)$$	
Limit at $\alpha$  : $$\lim_{x \to \alpha} f(x)$$

Max : $$\max_{x \in [a,b]}f(x)$$	
Min : $$\min_{x \in [\alpha,\beta]}f(x)$$	
Sup : $$\sup_{x \in \mathbb{R}}f(x)$$	
Inf : $$\inf_{x > s}f(x)$$	
```

![img](https://miro.medium.com/max/700/1*GgKPC6Q81qWakh_FMzvC2w.png)

## • Sum

```latex
Sum from 0 to +inf:

$$\sum_{j=0}^{+\infty} A_{j}$$		$\sum^{+\infty_{j=0}A_j$	% my version  \sum^{TOP}_{BUTT}

Double sum:
$$\sum^k_{i=1}\sum^{l+1}_{j=1}\,A_i A_j$$	


Taylor expansion of $e^x$:
$$ e^x  = \sum_{k=0}^{n}\, \frac{x^k}{k!} + o(x^n) $$ 
```

![img](https://miro.medium.com/max/423/1*YimViHg--jbEkFQ7XaxeoA.png)

## • Product

```latex
Product:
$$\prod_{j=1}^k A_{\alpha_j}$$
Double product:
$$\prod^k_{i=1}\prod^l_{j=1}\,A_i A_j$$
```



![img](https://miro.medium.com/max/402/1*5DoptJOejq4ibQpNZDQ-8Q.png)

## • Integral

```latex
Simple integral:
$$\int_{a}^b f(x)dx$$

Double integral:
$$\int_{a}^b\int_{c}^d f(x,y)\,dxdy$$	

Triple integral:
$$\iiint$$	

Quadruple integral:
$$\iiiint$$	

Multiple integral :
$$\idotsint$$

Contour integral:
$$\oint$$	
```



![img](https://miro.medium.com/max/428/1*qCnCR1nvTXCEZWj_RqeMIA.png)

## • Matrix

```latex
Plain:

\begin{matrix}
1 & 2 & 3\\
a & b & c
\end{matrix}

Round brackets:
\begin{pmatrix}
1 & 2 & 3\\
a & b & c
\end{pmatrix}

Curly brackets:
\begin{Bmatrix}
1 & 2 & 3\\
a & b & c
\end{Bmatrix}	

Pipes:
\begin{vmatrix}
1 & 2 & 3\\
a & b & c
\end{vmatrix}

Double pipes
\begin{Vmatrix}
1 & 2 & 3\\
a & b & c
\end{Vmatrix}
```



![img](https://miro.medium.com/max/410/1*1TPj2AwcL518o4zU-H-1Sw.png)
