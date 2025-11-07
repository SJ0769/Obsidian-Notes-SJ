## Hyperarithmetical Theory
Hyperarithmetic theory is obtained via iterating the Turing Jump operator along the recursive ordinals ($\alpha< \omega_{1}^{CK}$), which contains the hyperarithmetic hierarchy, an extension of the arithmetic hierarchy with levels $\Sigma_{\alpha}^0$ and $\Pi_{\alpha}^0$. The limit of the hierarchy is the stage $\Sigma_{\omega_{1}^{CK}}^0 = \Pi_{\omega_{1}^{CK}}^0 = \Delta_{1}^1$ in the analytical hierarchy, which is the stage of the set of all hyperarithmetic sets, $'HYP'$. A subset if $\mathbb{N}$ is hyperarithmetical if it is a member of $L_{\omega_{1}^{CK}}$

Meta-recursion theory is the case in $\alpha$-recursion theory where $\alpha = \omega_{1}^{CK}$ (i.e., $\omega_{1}^{CK}$-recursion theory). A set if meta-arithmetic if it is a member of $L_{\omega_{1}^{CK}+1}$ and meta-finite if it is a member of $L_{\omega_{1}^{CK}}$ (the notion of a set being hyperarithmetical is the same as being meta-arithmetic).

The Hyperjump operator can be defined as follows:
	Consider a set $X \subseteq \mathbb{N}$, the set of natural numbers that are ordinal numbers relative to $X$ is denoted $\mathcal{O}^X$ (note the supremum of all ordinal that can be represented in $\mathcal{O}^X$ is denoted $\omega_{1}^X$). Then the hyperjump of $X$ is the function $f: X \to \mathcal{O}^X$.

The hyperjump of $X$ is $\mathcal{O}^X$. This means that $\mathcal{O}^X$ is $\Pi_{1}^1$ in $X$, and every set $\Pi_{1}^1$ in $X$ is many-one reducible to $\mathcal{O}^X$.

- If $X$ is hyperarithmetic hierarchy, then $X$ is $\Delta_{1}^1$
- The predicate, "$X\in HYP$" is $\Pi_{1}^1$

**Proposition:** $A\leq_{h}B \longleftrightarrow \mathcal{O}^A \leq_{m} \mathcal{O}^B$
That is, $A$ is hyper-reducible to $B$ if and only if the hyperjump of $A$ is $m$-reducible (many-one reducible) to the hyperjump pf $B$.
$\implies$ The hyperjump operation is well-defined for hyperdegrees.

**Proposition:** If $X, Y \in \Pi_{1}^1$ and $Y \not\in HYP$, then $X \leq_{h}Y$ (i.e., $X$ is hyper-reducible to $Y$)


A Turing reduction procedure $P$ consists of a recursively enumerable sequence of finite computations. A set $B$ is reduced by applying to $B$ those elements of $P$ that 'fit' $B$, those computations based on membership statements true of $B$.
$\to$ A hyperarithmetic reduction procedure $Q$ fails to resemble a $\Pi_{1}^1$ sequence of hyperarithmetic computations. If $Q$ (procedure) is applied to a non-hyperarithmetic $B$, then the resulting computations are hyperarithmetic in $B$ rather than hyperarithmetic.

- Suppose that a meta-recursively enumerable set is defined to be a $\Pi_{1}^1$ set of hyperarithmetic sets of numbers. Then a meta-recursive set is a meta-recursively enumerable set whose complement w/ respect to the domain of hyperarithmetic sets $HYP$ is also meta-recursively enumerable.
$\to$ A meta-finite set is a hyperarithmetic collection of hyperarithmetic sets.

**Notes:**
- Meta-recursively enumerable means $\Pi_{1}^1$ on $HYP$ 
- Meta-recursive means $\Delta_{1}^1$ on $HYP$
- Meta-finite is the same as being hyperarithmetic

**Meta-recursive:** Let $Q$ be a $\Pi_{1}^1$ set of unique notations of recursive ordinals. Let $n: \omega_{1}^{CK}\to Q$ take each recursive ordinal to its unique notation. Thus, $|n(\beta)|=\beta$.

The natural enumeration of a $\Pi_{1}^1$ set in $\omega_{1}^{CK}$ steps yields a hyperarithmetic set at each step (analogous to how the enumeration of recursively enumerable set yields a finite set as each step).

**Note:** Non-hyperarithmetic $\Pi_{1}^1$-sets have the same hyperdegree as Kleene's $\mathcal{O}$.


**Meta-computable function:** Let $\Phi \subseteq \omega_{1}^{CK}\times \omega_{1}^{CK}$ be a partial function. $\Phi$ is meta-computable if there exists a finite set $E$ of equations w/ principal function letter $f$ such that for all $\alpha,\beta<\omega_{1}^{CK}:$
	$\phi(\alpha)=\beta\leftrightarrow (f(\alpha)=\beta)\in C(E)$

## Analytical Hierarchy
The analytical hierarchy is an extension of the arithmetic hierarchy which includes formulas of second-order arithmetic and which quantify over sets of natural numbers $S\subseteq \mathbb{N}$ and equivalently, over functions $f:\mathbb{N}\to \mathbb{N}$. We have stages $\Pi_{\alpha}^1$ and $\Sigma_{\alpha}^1$ for $\alpha<\omega_{1}^{CK}$, as well as the stages from the hyperarithmetical hierarchy.

**Note:** $\Sigma_{0}^1=\Pi_{0}^1=\Delta_{0}^1$

Limit stages: $\Pi_{\omega_{1}^{CK}}^1$ and $\Sigma_{\omega_{1}^{CK}}^1$

As in the arithmetic hierarchy, for each $\alpha$:
	-$\Pi_{\alpha}^1 \subset\Sigma_{\alpha+1}^1$
	-$\Pi_{\alpha}^1 \subset\Pi_{\alpha+1}^1$
	-$\Sigma_{\alpha}^1 \subset \Sigma_{\alpha+1}^1$
	-$\Sigma_{\alpha}^1 \subset \Pi_{\alpha+1}^1$
And so, $\Delta_{\alpha}^1 \subset\Pi_{\alpha}^1$ and $\Delta_{\alpha}^1 \subset \Sigma_{\alpha}^1$.

- A formula $\phi$ in the language of second-order arithmetic is said to be $\Sigma_{\alpha+1}^1$ if it is logically equivalent to a formula of the form $\exists X_{1}\dots \exists X_{k}\psi$ where $\psi$ is a $\Pi_{\alpha}^1$formula.
- A formula $\phi$ in the language of second-order arithmetic is said to be $\Pi_{\alpha+1}^1$ if it is logically equivalent to a formula of the form $\forall X_{1}\dots \forall X_{k}\psi$ where $\psi$ is a $\Sigma_{\alpha}^1$formula.
- $\Delta_{\alpha+1}^1=\Sigma_{\alpha+1}^1\cup\Pi_{\alpha+1}^1$, and so a formula $\phi$ is $\Delta_{\alpha+1}^1$ if it is logically equivalent to both a $\Sigma_{\alpha+1}^1$-formula and a $\Pi_{\alpha+1}^1$-formula.
**Recall:** '$X$' denotes a second-order variable.


E.g., For a relation $\prec$ on $\mathbb{N}^2$, the statement "$\prec$ is a well-order on $\mathbb{N}$" is $\Pi_{1}^1$.


We can further extend the analytical hierarchy to stages $\Sigma_{\alpha}^i$ and $\Pi_{\alpha}^i$ for $\alpha$ is recursive ordinal, and $i>1$ (for $i+1^{th}$ arithmetic).
i.e., a hierarchy of third-order arithmetic formulas would have stages $\Sigma_{\alpha}^2$ and $\Pi_{\alpha}^2$.
There have been papers talking about $\Delta_{1}^2$ well-orderings of the reals.
## Alpha-Recursion Theory
$\alpha$-recursion theory is an extension of recursion theory to subsets of admissible ordinals $\alpha$. What is usually considered as recursion theory is recursion on $\mathbb{N}$ or $\omega$.

**Admissible Ordinals:**
- An ordinal $\alpha$ is admissible if $L_{\alpha}\models KP$ (Kripke-Platek set theory).
- All admissible ordinals are limit ordinals and are countable, the first admissible ordinal is the Church-Kleene ordinal $\omega_{1}^{CK}$ (the supremum of all recursive ordinals).

A set $A \subseteq \alpha$ is said to be $\alpha$-recursively enumerable if it is $\Sigma_{1}$ definable over $L_{\alpha}$ (this may include parameter from $L_{\alpha}$ in the definition).

$A$ is $\alpha$-recursive if both $A$ and $\alpha$ \ $A$ are $\alpha$-recursively-enumerable (or alternatively, $\Delta_{1}$ definable over $L_{\alpha}$).

- $\alpha$-recursive sets are members of $L_{\alpha+1}$
- Members of $L_{\alpha}$ are called $\alpha$-finite
- Members of $L_{\alpha+1}$ are called $\alpha$-arithmetic

$\alpha$-recursion theory also has its own analogue of $\alpha$-jumps and $\alpha$-reducibility.

Partial functions

----------
There are even further extensions of recursion theory beyond $\alpha$-recursion theory
## Applications
- $\alpha$-recursion theory can be used to extend Gödel encoding ([Gödel's Incompleteness Theorems](Model%20Theory/Gödel's%20Incompleteness%20Theorems.md)), where instead of logical symbols being assigned to a natural number (an element of $\omega$), it is instead assigned to an element of $\alpha$ for $\alpha$ is an admissible ordinal.
$\to$ This has further application in defining provability and truth predicates. In a Tarski hierarchy (see [Tarski's theory of truth](Logic/Tarski's%20theory%20of%20truth.md)) we can effectively allow for an $\alpha$-many meta-levels and still be able to differentiate between truth predicates at each level. As mentioned though that even while employing $\alpha$-recursion theory, we would still only be able to differentiate between countably-many meta-levels (recall that all admissible ordinals are countable).

## References
[Turing Machines & Computability Theory](Computability%20Theory/Turing%20Machines%20&%20Computability%20Theory.md)
[Recursion Theory](Computability%20Theory/Recursion%20Theory.md)
[Gödel's Incompleteness Theorems](Model%20Theory/Gödel's%20Incompleteness%20Theorems.md)
[Tarski's theory of truth](Logic/Tarski's%20theory%20of%20truth.md)
[[Higher Recursion Theory.pdf]]
[Math.stackexchange post]([set theory - Is there any generalization of the hyperarithmetical hierarchy using the analytical hierarchy to formulas belonging to third-order logic and above? - Mathematics Stack Exchange](https://math.stackexchange.com/questions/245121/is-there-any-generalization-of-the-hyperarithmetical-hierarchy-using-the-analyti))
