## Trees
A tree is a partially ordered set $\langle T, <\rangle$ such that for each $t\in T,$ the set $\{s\in T| s< t\}$ is well-ordered by the strict partially ordered relation <.

For each $t\in T,$ the order type of $\{s\in T|s<t\}$ is the height of t, denoted by $h(t, T)$. The height of the tree $T$ itself is the least ordinal $\alpha>h(t, T), \forall t\in T$

The root of the tree is defined to be the minimal element, all trees are assumed to have a single minimal element.  The height of the root of a tree is 0.

For each ordinal $\alpha$, the $\alpha^{th}$-level of a tree $T$ is the set of all elements of $T$ of height $\alpha$.

A tree is a $\kappa$-tree, for an ordinal number $\kappa$ if and only if it has height $\kappa$, and every level has cardinality < $\kappa$. The 'width' of a tree is the supremum of the cardinalities of its levels.


**Suslin Trees:** A Suslin tree $T$ is a tree of height $\omega_1$ (i.e., $w_{1}>s$ for all $s\in T$) such that every branch and every antichain (see below) is countable. The existence of such a tree is independent of $ZFC$. Every Suslin tree is a Aronszajn tree.

**Aronszajn Trees:** An Aronszajn tree is a tree of uncountable height w/ no uncountable branches and no uncountable levels.
$\to$ For a cardinal $\kappa$, a $\kappa$-Aronszajn tree is a tree of height $\kappa$ in which all levels have size $<\kappa$ and branches have height $<\kappa$ (this is a generalization of the Aronszajn tree). König's lemma asserts that there are no $\aleph_{0}$-trees.
## Chains
**Chains:** A chain is a subset of a partially ordered set that is totally ordered (a partial order such that you can also compare any two elements in the set).

A branch of a tree is a maximal chain in the tree (i.e., any two elements of the tree not in the branch is incomparable w/ at least one element of the branch). The length of a branch is the ordinal $\alpha$ that is order-isomorphic (and isomorphism between two partially-ordered set) to the branch.


**Antichains:** An antichain is a subset of a partially-ordered set such that any two distinct elements in the subset are incomparable (i.e., for a partially-ordered set $P$ such that $x, y \in P$, then $x$ and $y$ are incomparable if $x\not\leq y$ and $y\not\leq$ x).
## Other
**Suslin Lines:** A Suslin line is a non-empty totally-order set $R$ which is not isomorphic to the real number line $\mathbb{R}$ w/ the following properties.
	i) $R$ does not have a least nor a greatest elements (i.e., that is, w/out endpoints)
	ii) The order on $R$ is dense (for any $a, b\in R$ and $a<b$, there is a $c\in R$ such that $a<c<b$, there is an element in $R$ between any other two elements in $R$).
	iii) The order on $R$ is complete, in the sense that every non-empty bounded subset has a supremum and infinitum.
	iv) Every set of mutually disjoint open intervals in $R$ is countable

**Suslin Hypothesis:** There are no Suslin lines; that is, all non-empty totally-ordered set w/ properties i) $\to$ iv) is isomorphic to $\mathbb{R}$. This was shown to be independent of $ZFC$ assuming $ZF$ is consistent (relative to $ZF$).

**Generalized Suslin Hypothesis:** For every infinite regular cardinal $\kappa$, every tree of height $\kappa$ either has a branch of length $\kappa$ or an antichain of cardinality $\kappa$ (also independent of $ZFC$).

## References