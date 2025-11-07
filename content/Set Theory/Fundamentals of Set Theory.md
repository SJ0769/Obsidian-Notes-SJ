## Ordinals, Cardinals & The Universe of Sets
**Von-Neumann Definition:**
The ordinals are defined recursively as follows:
	$0=\emptyset:=\{x|x\not=x\}$
		By the law of identity, there is no object which is not itself, hence this set is empty.
	$\alpha+1=\alpha\cup${$\alpha$}
	$\lambda=\bigcup\limits_{\alpha<\lambda}\alpha$
	$ORD := \bigcup\limits_{{\alpha \in ORD}}\alpha$

It can be observed that every ordinal is a set of all ordinals preceding it.

(**Note:** The definition of $ORD$ is in the context of class theory as it is a proper-class)

E.g., 1 = $\emptyset \cup${$\emptyset$} = {$\emptyset$}

The intuition of ordinals is that it is the set of all ordinals preceding it 
E.g., The ordinal $3=\{\emptyset, \{\emptyset\}, \{\emptyset, \{\emptyset\}\}\}=\{0, 1, 2\}$


**Ordinals as equivalence classes**
Ordinals (or order types) are defined as an equivalence class of well-ordered sets (i.e., given a set $x,$ the order type of $x$ would be defined as the set of all $y$ such that $y$ is order-isomorphic to $x$). However, these equivalence classes are too large to be sets and so must be forgone in set theories (i.e., $ZFC$)


**Zermelo Conception of an Ordinal:**
$0:=\emptyset$
$\alpha+1:= \{\alpha\}$
The issue with this conception is that it cannot extend beyond the ordinal $\omega$


**Rank:** The rank of a set $x$ is defined as the least ordinal $\alpha$ such that $x\in V_{\alpha+1}$


**Defining Cardinals:**
The cardinality of a set $X$ is the least ordinal number $\alpha$ such that there is a bijection $f:X\to \alpha$, this definition assumes the axiom of choice. In class theory, the cardinality of a set $X$ may be defined as the class $[X]$ of all sets that are equinumerous to $X$ (i.e., an equivalence class of all sets such that there is a bijection to the set $X$), but as it is the case for ordinals, this cannot be done within set theory.


**The Powerset:**
For an arbitrary set $X$, the powerset of $X$, denoted as $\mathcal{P}(X)$, is defined as follows:
	$\mathcal{P}(X):=${$S|S\subseteq X$}
Cantors proved that the cardinality of $\mathcal{p}(X)$ is strictly large than cardinality of $X$. More precisely, for $|X|=\kappa,$ then $|\mathcal{P}(X)|=2^\kappa$ (this can be proven by induction)

The intuition being combinatorically, we consider the set of states, let 0 denote that a set if not a subset, and 1 if a set is a subset, $\{0,1\}$. Then $|\mathcal{P}(X))|= |\{f|f:X \to \{0,1\}\}|=|\{0,1\}|^{|X|}=2^\kappa$. If $\kappa$ is infinite, then $2^\kappa=\mu^\kappa$ for all $1<\mu<\kappa$.

## Ordinal and cardinal arithmetic
Ordinal arithmetic is non-commutative in general (only commutative for finite ordinals). i.e., $\omega+1 \not= 1+\omega = \omega$. It is however associative, i.e., $(\omega+n)+\omega = \omega+(\omega+n)$


If $X$ and $Y$ are disjoint sets, then $|X|+|Y|$ is given by $|X\cup Y|$
Cardinal addition is:
	- Zero as an additive identity: $\kappa+0=0+\kappa=\kappa$
	- Associative: $(\kappa+\mu)+v=\kappa+(\mu+v)$ and;
	- Commutative: $\kappa +\mu=\mu+\kappa$.

Assuming the axiom of choice, addition of infinite cardinals is given by: $\kappa+\mu=max\{\kappa,\mu\}$. 

**Subtraction:** Given an infinite cardinal $v \text{ and } \mu$, there exists a cardinal $\kappa$ such that $\kappa+\mu=v \iff \mu \leq v$

**Multiplication:** $|X|\cdot|Y|=|X\times Y|$ where $\times$ is the Cartesian Product (i.e., $A\times B = \{(a,b)|a\in A \text{ and } b\in B\}$)

- $'1'$ is a multiplicative identity: $\kappa \cdot1=\kappa$
- Associative: $(\kappa \cdot \mu)\cdot v = \kappa \cdot(\mu \cdot v)$
- Commutative: $\kappa \cdot \mu=\mu \cdot \kappa$
- Distributive over addition: $\kappa \cdot(\mu+v)=\kappa \mu +\kappa v$

Assuming the axiom of choice: $\kappa \cdot \mu = max\{\kappa,\mu\}$

Exponentiation:
$|X|^{|Y|}=|X^Y|$, where $X^Y$ is the set of all functions from $Y$ to $X$ (i.e., $X^Y=\{f|f:Y \to X\} = |X|\times|X|\times \dots |Y|$-many times)

If $\kappa$ is infinite and $1<\mu<\kappa,$ then $\kappa^\mu=\kappa$

## Functions & Relations
Functions and relations definitions:

An $n$-ary relations $R$ on a domain $\mathcal{D}$ is a subset $R \subseteq \mathcal{D}^n$ (or $R \subseteq \{(x_{0}, x_{1},\dots x_{n})|x_{0},x_{1},\dots,x_{n} \in \mathcal{D}\}$.
	A binary relation $R$ is a 2-ary relation, more formally, $R \subseteq \mathcal{D^2}$ or $R\subseteq \{(x,y)|x,y\in \mathcal{D}\}$. For any two elements $x, y\in\mathcal{D}$ that satisfy the relation, that is, $(x,y)\in R$, we denote $xRy$ for $x,y \in \mathcal{D}$.
	E.g., of binary relations
	- $\leq$-relation
	- $=$-relation (equality)
	- $\equiv$-relation (used to denote any equivalence relation)

**Properties of Relations:**
Symmetric: $aRa$
Reflexive: If $aRb$, then $bRa$
Transitive: If $aRb$ and $bRc$, then $aRc$ as well

An equivalence relation is a relation which symmetric, reflexive and transitive

Let $\sim$ be an equivalence relation, an equivalence class on a set $X$ is defined as follows:
	$[X]=\{Y|X\sim Y\}$
It can also be defined on an element $a \in X$ as follows:
	$[a]=\{x\in X|a \sim x\}$

**Scott's Trick:** Scott's trick allows us to define a representative for equivalence classes (which may be proper-classes, i.e., meta-objects defined in the meta-theory of first-order set theory). Let $\sim$ be an equivalence relation on sets. Let $x$ be a set and $[x]$ be an equivalence class w/ respect to $x$. If $V\cap[x]$ is nonempty then a set can be defined which represents the class $[x]$ (even though it may be a proper-class), namely, least ordinal $\alpha$ such that $V_{\alpha}\cap[x]$ is non-empty. This intersection is a set and so can be taken as a representative of the class $[x]$. The axiom of foundation (see [Axiomatic Set Theories](Set%20Theory/Axiomatic%20Set%20Theories.md)) is equivalent to the assertion that $x\in V$ for all sets $x$, hence, $V_{\alpha}\cap[x]$ will be nonempty for all sets $x$ (so we can find a representative of any equivalence classes for any equivalence relation).
	Scott's trick has uses such defining a representative for isomorphism types and the equivalence class definition of cardinals

**Function:** An $n$-ary function $f$ is of the form $f:X^n\to Y$, that is, it maps n-tuples from $X$ ($X^n$ is the set of $n$-tuples on $X$) to a single member in the domain $Y$.
	An $n$-ary function is an $(n+1)$-ary relation with the additional property that if $(y, x_{0}, x_{1},\dots)=(y, z_{0},z_{1},\dots)$, then $x_{0}=z_{0}, x_{1}=z_{1},\dots$etc. i.e., each input is mapped to exactly one output


**Note:** Every function is a relation (but not vice versa),

**Injective Functions:** A function $f:X\to Y$ is injective or "one-to-one" if all elements $x\in X$ in the domain is mapped to exactly one element $y\in Y$ in the codomain. The element which $x$ is mapped to is denoted $f(x)$ and called the 'image' of $x$ . This $\implies|X|\leq |Y|$

**Surjective Function:** A function $f:X\to Y$ is surjective or "onto" if all elements $y\in Y$ are mapped to exactly one element $x\in X$ in the codomain. The image of $y$ is $g(y)=f^{-1}(y)$ .This $\implies |Y|\leq|X|.$

**Bijective Function:** A function $f:X\to Y$ is bijective or a "one-to-one correspondence" if it is both injective and surjective. This $\implies|X|=|Y|$
	Functions are bijective if and only if they are invertible. A function  is invertible if there is an inverse function such that their composition produces an identity function, i.e., $g\circ f(x)=g(f(x))=x$ and $f\circ g(y)=f(g(y))=y$. In the case that a function is invertible, the inverse is denoted $f^{-1}$ (so $g=f^{-1}$).

$|X|<|Y|$ if we can find an injection from $X$ to $Y$, but not a bijection. Note that we can find multiple different mappings from a domain $X$ to a codomain $Y$, some of which are injective, we can say $|X|=|Y|$ if we can find at least one bijection between them.
	E.g., $f:2\mathbb{N}\to \mathbb{N}$, an injective mapping would be to map each member of $2\mathbb{N}$ to an even natural number, a bijection would be to map each member of $2\mathbb{N}$ to its successor in $\mathbb{N}$.

**Note:** A constant is a 0-ary function as it does not take any inputs and always returns the same value.

**Cantor-Bernstein-Schröder Theorem:** Given two sets $X, Y$ if there exists an injection $f:X\to Y$ and an injection $g:Y\to X$, then there is a bijection $h:X\to Y$
	**Proof:**
	We begin inductively,
	- Let $A_{0}=A$\ $g[B]$
	- $A_{n+1}=gf[A_{n}]$
	- $A_{\infty}\bigcup\limits_{n=0}A_{n}$
	$\to$ We define a function $h:A\to B$ by $\begin{cases}  f(x) & \text{if } x\in A_{\infty} \\ g^{-1}(x) & \text{otherwise} \end{cases}$
	$\to$ We show that the function $h$ is a bijection. Firstly, we must show it is injective (i.e., $h(x)=h(y)\implies x=y$)
	- If $x,y\in A_{\infty}$ by the injectivity of $f$, 
	- If $x,y\not\in A_{\infty}$ by the injectivity of $g$,
	- If $x\in A_{\infty}$ but $y\not\in A_{\infty}$, then $x\in A_{n}$ for some $n$. Since $f(x)=g^{-1}(y)$ this means that $y=g\circ f(x)\in g\circ f[A_{n}]=A_{n+1}$, a contradiction. $\therefore h$ is injective.
	$\to$ We show that $h$ is surjective (i.e., for each $z\in B$ there is $x\in A$ with $h(x)=z$)
	Consider $x=g(z)$.
	- If $x\in A_{\infty}$, then $h(x)=g^{-1}(x)=z$
	- If $x\not\in A_{\infty}$, then $x\in A_{n}$ for some $n$. We need to show that $n>0$ since $x\in g[B]$
	 so $x\in g\circ f[A_{n-1}]$, that is, $x=g\circ f(x')$ for some $x'\in A_{n-1}$.
	 Now, $z=g^{-1}(x)= f(x')=h(x')$.
	 $\therefore$ h is surjective. This implies that $h$ is bijective as it has been shown that it is both injective and surjective (both required for bijectivity).
## Key Hypothesis in Set Theory
**Cantors Diagonal Argument:** (there exists larger infinities)

**Continuum Hypothesis:** The Continuum Hypothesis ($CH$) asserts that there does not exist a cardinals $\kappa$ such that $\aleph_{0}<\kappa<2^{\aleph_{0}}$, that is $\aleph_{1}=2^{\aleph_{0}}$ (equivalent to $\aleph_{1}=\beth_{1}$).
$\to$ This statement is provably independent of $ZFC$ (and by extension $ZF$). Thus we can find models $\mathcal{M,N}\models ZFC$ such that $\mathcal{M}\models CH$ and $\mathcal{N}\models \neg CH$ (i.e., $ZFC\cup\{CH\}$ and $ZFC\cup\{\neg CH\}$ are consistent).

**Global Continuum Hypothesis:** The Global Continuum Hypothesis ($GCH$) asserts that $\aleph_{\alpha+1}=2^{\aleph_{0}}$. This statement is also independent of $ZFC$.
$\implies$ All proper-classes are of the same 'size', that is, we can find a bijection between any two proper-classes (i.e., $f:ORD\to V$ for $f$ is a bijection).
## Other
**Transitive Closure:** The transitive closure of a set $X$ is the smallest transitive superset of $X$ (i.e., $X \subseteq TC(X)$ for $TC(X)$ denotes the transitive closure of $X$).

$TC(X)=\bigcup\left\{ X, \bigcup X, \bigcup \bigcup \mathbf{X}\dots\right\}$ where $\bigcup X$ is the union of all elements $x\in X$ 
(i.e., $\bigcup X = \{y|\exists x\in X \text{ such that } y\in x\}$), $\bigcup\bigcup X$ is an is the union of all elements $y\in x$ of elements $x\in X$ (i.e., $\bigcup\bigcup X=\{z|\exists x\in X \exists, y\in x \text{ such that }z\in y \}$).

**Note:** $V=L\implies V=HOD$
## References
[Axiomatic Set Theories](Set%20Theory/Axiomatic%20Set%20Theories.md)
