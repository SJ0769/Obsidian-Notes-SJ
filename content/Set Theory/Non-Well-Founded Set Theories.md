Non-well-founded set theories allow 'self-referential' or circular sets which can refer to themselves in that they are elements of itself. Alternatively, infinitely descending $\in$-sequences 
(i.e., $x_{0}\ni x_{1}\ni\dots \ni x_{n-1}\ni x_{n}\ni\dots$)

i.e., $Q =${$1,2,3, Q$}

The Quine atom
$x =$ {$x$}

Non-well-founded sets cannot have the regular axiom of extensionality due to infinitely descending sequences we do not have a 'starting point' to show sets have the same elements.

## Quine's New Foundations(NF)
- Allows for a universal set $U:=\{x|x=x\}$, the set of all sets
	$\to P(U) = U$ and $P(U)\in U, U \in P(U)$
- Does not allow for quine atoms
- Utilizes stratified levels of formulae (similar to type theory)

Urelements are objects which are not sets, introducing them into set theory means it is no longer a 'pure' set theory
	$\to$ i.e., if $U$ is a urelement, then $x \in U$ makes no sense, although set can contain urelements, i.e., $U \in x$

**Stratification:** A formula $\varphi$ is stratified if it can be 'turned' into a WFF of STT (simple type theory) via assigning type subscripts to variables.
	$\to$For variables $x$ and $y$, $x_{n}\in y_{n+1}$ is well-formed while $x_{n}\in y_{n}$ is not well-formed as they are of the same level (only the equality symbol '=' can be used between variables of the same level).

**Axiom of Stratified Comprehension:** $\forall x\exists y\forall x(z\in y\leftrightarrow \Phi(x, z))$ for $\Phi$ is a formula of STT and $y$ is not free in $\Phi$
The formation of sets is restricted to stratified formulae.

- NF is inconsistent w/ the axiom of choice (that is NF $\vdash 2^{\aleph_{0}}\not=\aleph_{1}$)
- NF is finitely axiomatizable (finite number of axioms, no axiom schemas)
## Aczel's Graph Theory
- Any set that can be described by a graph is a valid set (allows for loops, and Quine atoms)
- Has a (proper) class of all sets rather than a universal set
- Bisimulations to replace axiom of extensionality

**Anti-Foundation Axiom (AFA):** AFA loosely asserts that any object than can be 'described' by a graph are sets. Naturally, this includes ill-founded sets which will contain loops.

**Bisimulation:** A bisimulation is a binary relation $R$ between two models of a theory (called systems w/in the context of computer science). The intuition behind it is that it acts as a notion of equality for non-well-founded sets.

$R$ is a bisimulation on a model or system $M$ if $R \subseteq R^+$
i.e., The class of ordered pairs $R$ is a subclass of the class of ordered pairs $R^+$ (recall that binary relations can be thought of as a class of ordered pairs).

A maximum bisimulation is the largest possible bisimulation between two structures, that is, it is not the subclass of another bisimulation relation. It is the union of all bisimulation relations between any two structures.

If $R$ is a bisimulation of $M$ then for all $a,b\in M$, then
	$aRb\implies a\equiv_{M}b$

**Proposition:** For each system $M$ the relation $\equiv_{M}$ is an equivalence relation on $M$ such that for all $a,b\in M$, then
	$a\equiv_{M}^+ b\iff a\equiv_{M}b$

If $M$ is a system, then for all $a, b\in M$
	i) $a_{M}=b_{M}\implies a\equiv_{M}b$
	ii) $Ma\cong Mb\implies a\equiv_{M}b$


A system $M$ is extensional if for all $a,b\in M$
	$a_{M}=b_{M}\implies a=b$

A system $M$ is strongly extensional if for all $a, b\in M$
	$a\equiv_{M}b\implies a=b$
## References
[[Philosophy of Sets & Proper-Classes]]
[Type Theory](Type%20Theory/Type%20Theory.md)
