## Defining Transfinite Types
Types are separated into distinct types (i.e., $0$-types, $1$-types,...,etc.) and corresponding universes $U_{0}, U_{1},\dots, U_{n}, U_{n+1},\dots$etc. where $U_{n}$ for $n\in \omega$ contain all $n$-types.
- Objects of type $0$ are individuals
- Objects of type $1$ are sets of individuals
- Objects of type $2$ are sets of sets of individuals
.
.
.
This process can be seen as iterative but not cumulative due to types belonging to distinct levels

## Ramified Type Theory
The hierarchy of properties relations is '$2$-dimensional' where properties and relations are distinguished first by their 'order' (level) and then by their type w/in each order.
$\to$ i.e., Ramified type theory ($RTT$) allows for the 'mixing' of order and types as you can have statements such as $a_{n}\in b_{n}$, where $a$ and $b$ are of different type but are of the same order '$n$.' So not only do you have a hierarchy of types, but more precisely a hierarchy of types w/in each order.

This is in contrast to Simply Type Theory ($STT$) which is '$1$-dimensional' in the sense that there is only a hierarchy of types and where properties are only distinguished by their level/type.

**Axiom of Reducibility:** Every function of order $n$ is functionally equivalent to a function of order $1$. More formally, if $\phi$ is of type $\tau$ and of order $n$, then there exists a function $\psi$ of type $\tau$ and order $1$ such that:
	$\forall x(\phi(x)\leftrightarrow \psi(x))$
## Transfinite Type Systems
**Hao Wang's system $\Sigma$:** The two distinctions of 'order' and 'type' as in $RTT$, are replaced by a single concept of 'order.' This allows for a mixing of types via the following:
	- The $0^{th}$-order consist of some denumerable totality (i.e., positive integers or all finite sets built up from the empty set $\emptyset$). The $1^{st}$-order consists of everything in the $0^{th}$-order together w/ those sets that can be defined by properties that refer to at most the totality of all sets of the $0^{th}$-order. The $n+1^{th}$-order contains all sets of order $n$ together w/ sets defined by formulas w/ bound variables from the $n^{th}$ and lower order.
	$\to$ This can be further generalized to recursive ordinals $\alpha$.
	**Note:** The 'orders' are constructed cumulatively and in accordance to the viscous circle principle (i.e., for ordinals $\alpha_{0}, \alpha_{1},\dots<\beta$, sets of order $\beta$ consist of all and only those sets of orders $\alpha_{1},\alpha_{1},\dots$).
	$\Sigma=\bigcup\limits_{\alpha < \omega_{1}^{CK}} \Sigma_{\alpha}$.
	- $STT$ is roughly equivalent to $\Sigma_{\omega}$ (w/out variables of order $\omega$).
	**Note:** $\Sigma$ allows the mixing of types like $RTT$, however it distinguishes properties by their order ($STT$). The use of transfinite types (orders) replaces the axiom of reducibility.


**Myhill's System:**
- Contains 'cumulative' types
- Myhill's hierarchy is 'inverted.' Thus, type $0$ is all inclusive and classes have members of higher types then themselves.
- Able to viscous circles principles by stating if quantifications are made over the $n^{th}$-type in a formula, then that formula belongs to the $n-1^{th}$ at its highest. It follows that there is no quantification over the $0^{th}$-type.
- Myhill's system fails to be constructive since a non-finitary consequence relation is used. This allows for certain formulae to be regarded as consequences of certain classes of formulas
- Myhill's system is non-existential (i.e., no notion of equality =)

**Recall:** Viscous circle principles state that no totality can contain members definable only in terms of that totality (i.e., no self-referential definitions).

## References
[[Type Theory]]
[[Higher-Order Logics]]
[[Transfinite Type Theory.pdf]]
[[A transfinite type theory with type variables.pdf]]
[Ramified Theory of Types]([Theory of types - Routledge Encyclopedia of Philosophy](https://www.rep.routledge.com/articles/thematic/theory-of-types/v-1/sections/ramified-type-theory))
