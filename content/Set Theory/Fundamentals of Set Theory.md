**Defining Ordinals**

**Von-Neumann Definition:**
The ordinals are defined recursively as follows
$0:=\emptyset$
$\alpha+1:=\alpha\cup${$\alpha$}
$\lambda:=\bigcup\limits_{\alpha<\lambda}\alpha$
$ORD := \bigcup\limits_{{\alpha \in ORD}}\alpha$

It can be observed that every ordinal is a set of all ordinals preceding it.

(**Note:** The definition of $ORD$ is in the context of class theory as it is a proper-class)

E.g., 1 = $\emptyset \cup${$\emptyset$} = {$\emptyset$}

The intuition of ordinals is that it is the set of all ordinals preceding it 
E.g., The ordinal $3=\{\emptyset, \{\emptyset\}, \{\emptyset, \{\emptyset\}\}\}=\{0, 1, 2\}$


**Ordinals as equivalence classes**
Ordinals (or order types) are defined as an equivalence class of well-ordered sets (i.e., given a set $x,$ the order type of $x$ would be defined as the set of all $y$ such that $y$ is order-isomorphic to $x$). However, these equivalence classes are too large to be sets and so must be forgone in set theories (i.e., $ZFC$)


**Zermelo Conception:**
$0:=\emptyset$
$\alpha+1:= \{\alpha\}$
The issue with this conception is that it cannot extend beyond the ordinal $\omega$


**Defining Cardinals:**


**The Powerset:**
For an arbitrary set $X$, the powerset of $X$, denoted as $\mathcal{P}(X)$, is defined as follows:
	$\mathcal{P}(X):=${$S|S\subseteq X$}
Cantors proved that the cardinality of $\mathcal{p}(X)$ is strictly large than cardinality of $X$. More precisely, for $|X|=\kappa,$ then $|\mathcal{P}(X)|=2^\kappa$ (this can be proven by induction)

The intuition being combinatorically, we consider the set of states, let 0 denote that a set if not a subset, and 1 if a set is a subset, $\{0,1\}$. Then $|\mathcal{P}(X))|= |\{f|f:X \to \{0,1\}\}|=|\{0,1\}|^{|X|}=2^\kappa$. If $\kappa$ is infinite, then $2^\kappa=\mu^\kappa$ for all $1<\mu<\kappa$.


**Ordinal and cardinal arithmetic**
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


An $n$-ary function is an $(n+1)$-ary relation with the additional property that if $(y, x_{0}, x_{1},\dots)=(y, z_{0},z_{1},\dots)$, then $x_{0}=z_{0}, x_{1}=z_{1},\dots$etc.


Every function is a relation (but not vice versa)

A constant is a 0-ary function.


**Cantors Diagonal Argument:** (there exists larger infinities)

**Continuum Hypothesis:** The Continuum Hypothesis ($CH$) asserts that there does not exist a cardinals $\kappa$ such that $\aleph_{0}<\kappa<2^{\aleph_{0}}$, that is $\aleph_{1}=2^{\aleph_{0}}$ (equivalent to $\aleph_{1}=\beth_{1}$).
$\to$ This statement is provably independent of $ZFC$ (and by extension $ZF$). Thus we can find models $\mathcal{M,N}\models ZFC$ such that $\mathcal{M}\models CH$ and $\mathcal{N}\models \neg CH$ (i.e., $ZFC\cup\{CH\}$ and $ZFC\cup\{\neg CH\}$ are consistent).

**Global Continuum Hypothesis:** The Global Continuum Hypothesis ($GCH$) asserts that $\aleph_{\alpha+1}=2^{\aleph_{0}}$. This statement is also independent of $ZFC$.
$\implies$ All proper-classes are of the same 'size', that is, we can find a bijection between any two proper-classes (i.e., $f:ORD\to V$ for $f$ is a bijection).

## References