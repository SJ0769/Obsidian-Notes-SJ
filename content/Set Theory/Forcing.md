**Overview:** Forcing is an method to obtain a new model of a (set) theory from an old one.

More precisely it is a method to expand the universe of sets $V$ to a larger universe $V[G]$ via adding a new 'generic' object $G$ to $V$. This can 'force' different truth results of undecidable statements $\varphi$.


**Forcing Poset:**

**Generic Filters**
Generic filters are a way to 'filter out' large sets. Formally, a set $G$ is a generic filter on $\mathbb{P}$ relative to $M$. Since $G$ is a filter it must satisfy the following conditions:
	- $G\subseteq \mathbb{P}$
	- $1\in G$
	- if $p \geq q \in G$, then $p \in G$
	- if $p, q \in G$, then there exists an $r\in G$ such that $r\leq p,q$
	- If $D\in M$ is a 'dense' subset of $\mathbb{P}$ (i.e., for each $p\in\mathbb{P}$, there exists a $q\in D$ such that $q\leq p$), then $G\cap D=\emptyset$. This is a result of $G$ being 'generic' relative to $M$.

## References
[[Multiverse vs Universe View]]
[[Modal Logic]]
[jech_03](Set%20Theory%20+%20Model%20Theory/jech_03.pdf)
