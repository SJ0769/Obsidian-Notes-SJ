## The Notion of Types in Model Theory
Suppose $\mathcal{M}$ is an $\mathcal{L}$-structure and $A\subseteq M$. Let $\mathcal{L}_{A}$ be the language obtained by adding $\mathcal{L}$ constant symbols for each $a\in A$, $\mathcal{M}$ can be seen as a $\mathcal{L}_{A}$-structure by interpreting the new symbols. Let $Th_{A}(\mathcal{M})$ be the set of all $\mathcal{L}_{A}$-sentences true in $\mathcal{M}$.

**Types (Model Theory):** Let $p$ be the set of $\mathcal{L}_{A}$-formulas in free variable $v_{1},\dots,v_{n}$. We call $p$ an $n$-type if $p\cup Th_{A}(\mathcal{M})$ is satisfiable. We say that $p$ is a complete $n$-type if $\phi\in p$ or $\neg \phi\in p$ for all $\mathcal{L}_{A}$-formulas with free variable from $v_{1},\dots,v_{n}$. Let $S_{n}^\mathcal{M}(A)$ be the set of all complete $n$-types.
	$\to$ The intuition behind a type is that is a set of formulas which describe a possible element (or tuple of elements) in a model

Incomplete types are also referred to as 'partial' types

**Realizing and Omitting Types**
For $p$ is an $n$-type over a subset $A\subseteq M$, we say that $\overline{a}\in M^n$ realizes p if $\mathcal{M}\models \phi(\overline{a})$ for all $\phi\in p$. If $p$ is not realized in $\mathcal{M}$ ($\mathcal{M}\not\models\phi(\overline{a})$ for $\overline{a}\in M^n$), then we say that $\mathcal{M}$ omits $p$.


**Witnesses:** A witness is an instance of $t$ where when substituted into an existential formula $\exists x \varphi(x)$ then $\varphi(t)$ is true.

E.g., An (arithmetic) theory $T$ is inconsistent if there is a proof of $0=1$
Let $I(T)$ denote "$T$ is inconsistent"

$I(T)$ is thus an existential formula, and so a witness for this formula is a proof of $0=1$
## Types of Models in Stability Theory
**Homogeneous models:** Let $\kappa$ be an infinite cardinal. We say that $\mathcal{M}\models T$ is $\kappa$-homogeneous if whenever $A \subset M$ with $|A|<\kappa, f:A \to M$ is a partial elementary map, and $a \in M$, there is $f^* \supseteq f$ such that $f^*:A \cup\{a\}\to M$ is partial elementary. We say that $\mathcal{M}$ is homogeneous if it is $|M|$-homogeneous.

**Prime models:** We say that $\mathcal{M} \models T$ is a prime model of $T$ if whenever $\mathcal{N}\models T$ there is an elementary embedding $f: \mathcal{M\to N}$
	$\to$ A prime model is a model of a (complete) theory $T$ which elementary embeds into every other model of $T$

If $\mathcal{M}$ and $\mathcal{N}$ are prime models, then $\mathcal{M \cong N}$

**Atomic models:** We say that $\mathcal{M}\models T$ is atomic if tp$^\mathcal{M}(\overline{a})$ is isolated for all $\overline{a}\in\mathcal{M}^n$.

**Note**: prime models are atomic.

**Theorem:** Let $\mathcal{L}$ be a countable language and let $T$ be a complete $\mathcal{L}$-theory with infinite models. Then, $\mathcal{M}\models T$ is prime if and only if it is countable and atomic


**Theorem:** Let $\mathcal{L}$ be a countable language and $T$ a complete $\mathcal{L}$-theory with infinite models. Then the following are equivalent:
	i) $T$ has a prime model;
	ii) $T$ has an atomic model;
	iii) The isolated types in $S_{n}(T)$ are dense for all $n$


**Saturated models:** Let $\kappa$ be an infinite cardinal, we say that a model $\mathcal{M}\models T$ (for $T$ is some theory) is $\kappa$-saturated if, for all $A \subseteq M$, if $|A|< \kappa$ and $p \in S_{n}^\mathcal{M}(A)$, then $p$ is realized in $\mathcal{M}$.  We say that $\mathcal{M}$ is saturated if it is $|M|$-saturated.


**Stability:** Let $T$ be a complete theory in a countable language and let $\kappa$ be an infinite cardinal. We say that $T$ is $\kappa$-stable if whenever $\mathcal{M}\models T, A \subseteq M,$ and $|A|=\kappa$, then $|S_{n}^\mathcal{M}(A)|=\kappa$. We say that $\mathcal{M}$ is $\kappa$-stable if Th($\mathcal{M}$) is $\kappa$-stable.

**Theorem:** Let $T$ be a complete theory in a countable language. If $T$ is $\omega$-stable, then $T$ is $\kappa$-stable for all infinite cardinals $\kappa$.

## References
[[Model Theory D.Marker.pdf]]