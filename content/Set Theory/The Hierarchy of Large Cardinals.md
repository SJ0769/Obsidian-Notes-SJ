Large cardinals are cardinals whose existence cannot be proven within $ZFC$ (independent of $ZFC$).

The large cardinal hierarchy is relative to $ZFC$, meaning the large cardinals are ranked by the consistency strength of $ZFC+$ some large cardinal.
Other theories may have different hierarchies (although the key large cardinals imply each other, so they should still remain in the same relative position, unless the theory is inconsistent).
### Worldly Cardinals
A cardinal $\kappa$ is worldly if:
	$V_{\kappa}\models ZFC$

Considered the 'smallest' large cardinal
### Inaccessible Cardinals
A cardinal $\kappa$ is (weakly) inaccessible, if:
	i) $\kappa$ is an uncountable cardinals
	ii) $\kappa$ is a regular cardinal
	$\kappa$ is a weak limit cardinal

A cardinal $\kappa$ is (strongly) inaccessible, if:
	i) $\kappa$ is an uncountable cardinal
	ii) $\kappa$ is a regular cardinal
	iii) $\kappa$ is a strong limit cardinal

Recall:
- $\kappa$ is a weakly limit cardinal if it is not a successor cardinal and the limit of all smaller cardinals (i.e., for all $\lambda<\kappa,$ then $\lambda^{+}<\kappa$) 
- $\kappa$ is strong limit cardinal if it a weakly limit cardinal and if it is closed under the powerset operation (i.e., for all $\lambda<\kappa,$ then $2^\lambda<\kappa$)
These cardinals are equivalent if $GCH$ (global continuum hypothesis) holds

- A cardinal $\kappa$ is 'regular' if $cf(\kappa)=\kappa$, where '$cf(\kappa)$' denotes the cofinality of $\kappa$.
	i.e., a cardinal $\kappa$ is regular if and only if every unbounded subset $C \subseteq \kappa$ has cardinality $\kappa$.
	A subset $S \subseteq A$ is unbounded it for all $\alpha\in A, \exists\beta \in S$ such that $\alpha < \beta.$

A cardinal $\kappa$ can be considered as an initial ordinal [[Fundamentals of Set Theory]]

- Every inaccessible cardinal is worldly

**Hyper-Inaccessible cardinals:**
1-inaccessible cardinals:
Let $\kappa$ denote the least inaccessible cardinal, then $\delta$ is a 1-inaccessible cardinal if $\delta$ is the $\kappa^{th}$-strongly inaccessible cardinal

$\alpha$-inaccessible cardinals:
Let $\kappa$ denote the $\alpha^{th}$ inaccessible cardinal, then $\delta$ is a $\alpha$-inaccessible cardinal if $\delta$ is the $\kappa^{th}$-strongly inaccessible cardinal

Notion of hyper-hyper-inaccessible, hyper-hyper-hyper-inaccessible,... can also de defined. A Mahlo cardinal is all of these.

Inaccessible cardinals are taken as cutoffs to build Grothendieck universes
### Mahlo Cardinals

### Compact cardinals
**Weakly Compact Cardinals:**
A cardinal $\kappa$ is weakly-compact if $\kappa$ is an inaccessible cardinal and the infinitary language $\mathscr{L}_{\kappa, \kappa}$ (or $\mathscr{L}_{\kappa, \omega}$) satisfies the weak compactness theorem


### Measurable Cardinals:
Given an elementary embedding $j: V \to M$,  where $V$ is the universe of sets and $M$ is a transitive class such that $M \subseteq V$ ,we say that the critical point of such an embedding, $crit(j)$, is a measurable cardinal.'

**Notes:**
- $M$ must be transitive in order to contain all the ordinals and so to have a critical point.
- We are dealing with an elementary embedding between proper-classes, most notably we can show that there is an injection from $M \to V$ and another from $V \to M$ via mapping the ordinal to all sets in $V$ and $M$. Thus, injectivity is not violated

$V=L$ fails. That is, $ZFC$ + "V=L" + "There exists a measurable cardinal" is inconsistent
(i.e., $ZFC$ + "There exists a measurable cardinal" $\vdash V \not= L$)

### Reinhardt Cardinals
It can be observed that the strength of large cardinals increases as we consider (non-trivial) elementary embeddings between 'similar' structures $\mathcal{M}$ and $\mathcal{N}$ ($\mathcal{M}=\mathcal{N}$). This further increases as we consider non-trivial elementary embeddings between $V$ and a structure that is 'close to' to $V$. Thus, the ultimate peak of this construction is given below:

Given a non-trivial elementary embedding $j: V \to V$, we say that the critical point of such an embedding, $crit(j)$ is a Reinhardt cardinal.

It has been proven that the existence of a non-trivial embedding from the universe of sets into itself is inconsistent with choice. Thus, in $ZFC$, this would be an inconsistent principle (meaning maximum consistency strength). Hence we must move to an alternative theory (i.e., $ZF$, given that a Reinhardt cardinal is consistent with it) to rank these cardinals.

Stronger cardinals are also incompatible with choice as by the notion of being 'stronger', implies proving Reinhardt cardinals.
### Berkeley Cardinals
### Limit of the Large Cardinal Hierarchy
Consistency strength of a theory $T$ is determined by how many formulas of the language it can prove. Thus, inconsistent theories, which can prove any statement of the language, has maximal consistency strength.'

**Identity Crisis:**
The large cardinal hierarchy orders large cardinals by their consistency strength (relative to $ZFC$), but this ordering does not necessarily align with the 'size' of a large cardinal. The identity crisis is an instance of the mismatching of large cardinals between their strength and their size (cardinality)

E.g., The consistency of a huge cardinal implies the consistency or a supercompact cardinal, even though the least huge cardinal is smaller then the least supercompact cardinal.

E.g., it is consistent that the least strongly compact cardinal is the least measurable cardinal, and it is also consistent that the least strongly compact cardinal is the least supercompact cardinal. Even though, from the hierarchy above supercompact $\implies$ strongly compact $\implies$ measurable, as well as the fact that a supercompact cardinal has many measurable cardinals below it

## References
[set theory - Ordering of large cardinals by cardinality - MathOverflow](https://mathoverflow.net/questions/219132/ordering-of-large-cardinals-by-cardinality?noredirect=1&lq=1)
[set theory - Large cardinal consistency strength and size - MathOverflow](https://mathoverflow.net/questions/218414/large-cardinal-consistency-strength-and-size)