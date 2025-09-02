## Ultrafilters
**Definition:** A filter $U$ on a set $S$ is an ultrafilter if for every $X\subset S$, then either $X\in U$ or it's complement $S/X\in U$.

**Definition:** A filter $F$ on a set $S$ is maximal if there is no filter $F'$ on $S$ such that $F\subset F'$.

A filter $F$ on a set $S$ is maximal if and only if $F$ is an ultrafilter.

**Theorem:** Every filter can be extended to an ultrafilter.
	**Proof:** Let $F_{0}$ be a filter on a set $S$. Let $P$ be the set of all filters $F$ on $S$ such that $F \supset F_{0}$ and partially ordered set $(P, \subset)$. If $\mathcal{C}$ is a chain in $P$, then from [Forcing](Set%20Theory/Forcing.md), $\bigcup\mathcal{C}$ is a filter and so an upper bound of $\mathcal{C}$ on $P$. By Zorn's lemma there exists a maximal element $U\in P$. From the above, $U$ is an ultrafilter.

## Ultraproducts
Let $U$ be an ultrafilter on a set $X$, $\tau$ a vocabulary, and $(\mathcal{M}_{\alpha})_{\alpha\in X}$

An ultraproduct is defined as $\mathcal{M} = \left( \prod_{\alpha \in X} \mathcal{M}_{\alpha} \right) / U$

**Domain:** $M=\{g:X\to\bigcup\limits_{\alpha \in X}M_{\alpha}| g(\alpha)\in M_{\alpha} \text{ for all } \alpha \in X\}/\sim$
For $\sim$ is an equivalence relation obtained from the ultrafilter.

$g\sim g'\iff\{\alpha\in X|g(\alpha)=g'(\alpha)\}\in U$, i.e., two functions $g$ and $g'$ are equivalent if and only if the set of indices such that $g(\alpha)=g'(\alpha)$ is in the ultrafilter $U$

For a constant symbol $c\in \tau$, then $c^\mathcal{M}:=[\alpha\mapsto c^{\mathcal{M}_{\alpha}}]_{\sim}$, i.e., the ultraproducts interpretation of a constant symbol is defined as the equivalence class (for the relation $\sim$) of the function which maps and index $\alpha$ to the interpretation of the constant symbol in $\mathcal{M}_{\alpha}$

For a relation symbol $R\in \tau$ of arity $k$, then $R^\mathcal{M}([g_{1}]_{\sim},\dots,[g_{k}]_{\sim})\iff\{\alpha\in X|R^{\mathcal{M}_{\alpha}}[g_{1}(\alpha)],\dots,[g_{k}(\alpha)]\}\in U$

For a function symbol $f\in \tau$ of arity $k$, then
$f^\mathcal{M}([g_{1}]_{\sim},\dots,[g_{k}]_{\sim})=[g_{0}]_{\sim}\iff\{\alpha\in X|f^{\mathcal{M}_{\alpha}}(g_{1}(\alpha),\dots,g_{k}(\alpha))=g_{0}(\alpha)\}\in U$
$\to$ The atomic formula is true in the ultraproduct if it is true in 'almost' all factors $\mathcal{M}_{\alpha}$
$\to$ This can also be applied to other filters (not just ultrafilters) although the product is a 'reduced' product and not an ultraproduct.


**Łoś Theorem (ultraproducts):** For a formula $\varphi(x_{1},\dots,x_{n})$ of vocabulary $\tau$ (in the language $\mathcal{L}$, which we are working in) and elements $[g_{1}],\dots,[g_{k}]\in\mathcal{M}:=\prod\limits_{\alpha\in X}\mathcal{M}_{\alpha}/U$, then $\mathcal{M}\models\varphi([g_{1}],\dots,[g_{k}])\iff \{\alpha\in X|\mathcal{M}_{\alpha}\models\varphi(g_{1},\dots,g_{k})\}\in U$

**Proof:** Induction over the 'shape' of the formula $\varphi$.
$\varphi$ of the form $R(x_{1},\dots,x_{k})$ for $R\in \tau$:
- $\mathcal{M}\models(\varphi \wedge \psi)(\bar{[g]})\iff\mathcal{M}\models\varphi(\bar{[g]})$ and $\mathcal{M}\models\psi(\bar{[g]})$
(i.e., $\iff \{\alpha\in X|\mathcal{M}_{\alpha}\models(\varphi \wedge \psi)(\bar{g(\alpha)})\}\in U$

- $\mathcal{M}\models\neg \varphi(\bar{[g]})\iff\mathcal{M}\models\varphi(\bar{[g]})$
(i.e., $\iff\{\alpha\in X|\mathcal{M_{\alpha}}\models\varphi(\bar{g(\alpha)})\}\not\in U$ or equivalently, $\iff \{\alpha\in X| \mathcal{M_{\alpha}}\not\models \varphi(\bar{g(\alpha)})\}\in U$)

- $\mathcal{M}\models(\exists x .\varphi)(\bar{[g]})\iff$ there is $[f]\in\mathcal{M}$ w/ $\mathcal{M}\models\varphi([f], \bar{[g]})$

- **Special case:** $A^X :=\prod\limits_{\alpha\in X} A$ and $A^X/U := \prod\limits_{\alpha\in X}A^X/U$

**Corollary:** Th($A^X/U$) = Th($A$)

**Interesting case:** Let $U$ be a non principal ultrafilter on $\omega$, then the arithmetic structure $\mathcal{N}=\{\mathbb{N}, +, \cdot, < , 0, 1\}^\omega/U$ has infinitely large members (larger than other integers)

Ultraproducts can be used to give an alternate proof of the compactness theorem.
## References
[Forcing](Set%20Theory/Forcing.md)
[Ultrafilter]([Ultrafilter - Wikipedia](https://en.wikipedia.org/wiki/Ultrafilter))
[jech_03](Set%20Theory%20+%20Model%20Theory/jech_03.pdf)