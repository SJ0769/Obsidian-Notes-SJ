$\lambda$-Calculus is formal system for express computation, based in type theory.

- $x:$ A variable is a character or string representing a parameter

For $M$ and $N$ are terms:
- $(\lambda x.M):$ A lambda abstraction is a function definition which takes a bound variable $x$ as an input and returning the body $M$
- $(M \text{ } N):$ An application, applying a function $M$ to an argument $N$


**Reduction Operations**
- $(\lambda x.M[x])\to_{\alpha}(\lambda y.M[y]): \alpha$-conversion, which renames the bound variables in an expression
- $((\lambda x.M) N)\to_{\beta}(M[x:=N]):\beta$-reduction, replaces the bound variable w/ the argument expression in the body of the abstraction


Lambda calculus is Turing compete, meaning it can be used to simulate any Turing machine.

E.g., mapping of an input $x$ to an output $y$ is denoted as follows: $x \mapsto y$, in lambda-calculus this may be denoted as $\lambda x.y$, where the '$.$' symbol separates the input from the output.

E.g., of $\beta$-reduction
$(\lambda x.x+1)3\to_{\beta} 3+1 = 4$


**Note:** For $\lambda x.M(x\mapsto M)$, such a function is higher-order (i.e., functions themselves can be inputs to other functions, more precisely, a function of order $n$ can be an input for a function of order order $k$ where $k>n$. Similarly, functions can also be returned as outputs of higher-order functions).

Lambda calculus can achieve two inputs (or more) functions via the following:
	Consider the function $\lambda x.\lambda y.x+y$
	$\to$ Substituting in $1$, we derive
	$(\lambda x.\lambda y.x+y)1\to_{\beta}\lambda y.1+y$
	$(\lambda y.1+y)2\to_{\beta}1+2=3$
General form:
	$\lambda x.\lambda y.L$
	$\to$ w/ variables
	$(\lambda x.\lambda y.L)MN\to_{\beta}(\lambda y.L[M/x])N\to_{\beta}L[M/x][N/y]$
	**Note:** $M/x$ denotes '$M$ substituted into $x$'
This process is known as 'Currying' w/ functions returning functions to sequentially apply to multiple inputs (see [Type Theory](Type%20Theory/Type%20Theory.md)).


**Booleans & Conditionals:**
- $\text{True }=\lambda x.\lambda y.x$ (i.e., take two inputs and returns the first).

- $\text{False }=\lambda x.\lambda y.y$ (i.e., takes two inputs and returns the second).

- If then = $\lambda b.\lambda x.\lambda y.bxy$
	E.g.,  $(\lambda b.\lambda x.\lambda y) \text{ True }MN =M$; and $(\lambda b.\lambda x.\lambda y) \text{ False }MN =N$

i.e., consider $(\lambda b.\lambda x.\lambda y.bxy) \text{ True }MN$,
$\to$ plugging in 'True' for b we derive:
	$\to_{\beta} (\lambda x.\lambda y.\text{True } xy)MN$
$\to$ plugging in $M$ for $x$
	$\to_{\beta}(\lambda y. \text{True }My)N$
$\to$ Substituting $N$ for $y$
	$\to_{\beta}\text{True }MN$ (or equivalently, $(\lambda x.\lambda y.x)MN$)
$\to$ Substitute $M$ for $x$
	$\to_{\beta} (\lambda y.M)N$
$\to$ Substitute $N$ for $y$
	$\to_{\beta} M$


- Not $= \lambda b.$ if $b$ then $\text{False}$ else $\text{True}$; or
	$\lambda b.(\lambda b.\lambda x.\lambda y.bxy)b(\lambda x.\lambda y.y)(\lambda x.\lambda y.x)$

**Note:** We are working in bivalent logic, so "not $\text{True}$" = "$\text{False}$" and "not $\text{False}$" = "$\text{True}$"

For the not-function, there does not need to be a Boolean value $b$ as it would result in nonsensical statements as '$1$' is not a Boolean value
i.e., if $1$ then $\text{False}$ else $\text{True}=?$

This can be avoided by incorporating types from type theory
- Bool (for Boolean values)
- Num (for numeric values)
$\to$ E.g., of notation: $\text{True: Bool}$ reads "$\text{True}$ is of type Bool"


$\lambda x.M: A \to B$ (or equivalently we can specify the type of the variable, $\lambda x^A:M:A\to B$) where $x:A$ and $M:B$ 

The not function then can rewritten as $\lambda b^{\text{Bool}}.$ if $b$ then $\text{False}$ else $\text{True}$

----------------------

**Encoding:**
Encoding Numbers:
$3=\lambda f.\lambda x.f(f(fx))$

Encoding Recursion:
$Y=\lambda f.(\lambda x.f(x x))(\lambda x.f(x x))$

Encoding Pairs:
Pair $= \lambda x.\lambda y.\lambda p.pxy$

## References
[[Type Theory]]
[[Turing Machines & Recursion Theory]]
[Programming with Math]([Programming with Math | The Lambda Calculus](https://www.youtube.com/watch?v=ViPNHMSUcog&list=WL&index=19&t=589s))