## Axiomatic Set Theories
**ZF (Zermelo-Frankel Set Theory)**

**Axioms:**
- Axiom of Extensionality: If the sets X and Y have the same elements, then X =Y
- Axiom of Pairing: For any set x, y, then there exists a set {x, y}
- Axiom Schema of Separation: Given any set Y and property $\varphi$, there is a subset X $\subseteq$ Y which contains exactly the elements in Y which satisfy $\varphi$
- Axiom of Union: For any set X, there exists a set Y = $\bigcup X$, the union of all elements of X (or the set of elements of the sets in X)
- Axiom of Powerset: For any set X, there exists a set Y = P(X), which the set of all subsets of X
- Axiom of Infinity: There exists an infinite set. Formally, $\exists I(\emptyset\in I\wedge \forall x(x\in I\implies(x\cup{x})\in I))$ (a set built this way is called an inductive set)
- Axiom Schema of Replacement: If class $F$ is a function, then for any set $X$ there exists a set $Y=F(X)=\{F(x)|x\in X\}$, i.e., for any definable-class function the image of a set under this function is also a set
- Axiom of Foundation: Every nonempty set has an $\in$-minimal element (i.e., $x\cap X=\emptyset$ for some $x\in X$). Formally, $\forall x(x\not=\emptyset\to(\exists y\in x)(y\cap x=\emptyset))$

Other axiom(s)
- Axiom of Choice: For every indexed family $(S_{i})_{i\in I}$ of nonempty sets, there exists an indexed set $(x_{i})_{i\in I}$ such that $x_{i}\in S_{i}$ for every $i\in I$. Formally, $\forall X[\emptyset\not\in X\implies \exists f:X\to\bigcup\limits_{A\in X}A \forall A\in X(f(A)\in A)]$
	Note: we must choose an element from each set in a family sets $S$ as required by the choice function $f$, however, if we wish to 'skip' a set we merely take a subset $A\subset S$ which does not contain that particular set which we wish to 'skip.'

$ZF+$ axiom of choice is denoted $ZFC$

**NBG (Von Neumann-Bernays-Gödel Set Theory)**

axioms:

**KP (Kripke-Platek Set Theory)**

**MK (Morse-Kelly Set Theory)**


## Properties of Theories


## References
[[jech_03.pdf]]
