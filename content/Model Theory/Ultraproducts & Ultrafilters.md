## Ultraproducts


## Ultrafilters
**Definition:** A filter $U$ on a set $S$ is an ultrafilter if for every $X\subset S$, then either $X\in U$ or it's complement $S/X\in U$.

**Definition:** A filter $F$ on a set $S$ is maximal if there is no filter $F'$ on $S$ such that $F\subset F'$.

A filter $F$ on a set $S$ is maximal if and only if $F$ is an ultrafilter.

**Theorem:** Every filter can be extended to an ultrafilter.
	**Proof:** Let $F_{0}$ be a filter on a set $S$. Let $P$ be the set of all filters $F$ on $S$ such that $F \supset F_{0}$ and partially ordered set $(P, \subset)$. If $\mathcal{C}$ is a chain in $P$, then from [Forcing](Set%20Theory/Forcing.md), $\bigcup\mathcal{C}$ is a filter and so an upper bound of $\mathcal{C}$ on $P$. By Zorn's lemma there exists a maximal element $U\in P$. From the above, $U$ is an ultrafilter.
## References
[Forcing](Set%20Theory/Forcing.md)
[Ultrafilter]([Ultrafilter - Wikipedia](https://en.wikipedia.org/wiki/Ultrafilter))
[jech_03](Set%20Theory%20+%20Model%20Theory/jech_03.pdf)