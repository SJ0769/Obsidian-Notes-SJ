## Hyperarithmetical Theory
Hyperarithmetic theory is obtained via iterating the Turing Jump operator along the recursive ordinals ($\alpha< \omega_{1}^{CK}$), which contains the hyperarithmetic hierarchy, an extension of the arithmetic hierarchy with levels $\Sigma_{\alpha}^0$ and $\Pi_{\alpha}^0$. The limit of the hierarchy is the stage $\Sigma_{\omega_{1}^{CK}}^0 = \Pi_{\omega_{1}^{CK}}^0 = \Delta_{1}^1$ in the analytical hierarchy, which is the stage of the set of all hyperarithmetic sets, $'HYP'$. A subset if $\mathbb{N}$ is hyperarithmetical if it is a member of $L_{\omega_{1}^{CK}}$

Meta-recursion theory is the case in $\alpha$-recursion theory where $\alpha = \omega_{1}^{CK}$ (i.e., $\omega_{1}^{CK}$-recursion theory). A set if meta-arithmetic if it is a member of $L_{\omega_{1}^{CK}+1}$ and meta-finite if it is a member of $L_{\omega_{1}^{CK}}$ (the notion of a set being hyperarithmetical is the same as being meta-arithmetic).

The Hyperjump operator can be defined as follows:
	Consider a set $X \subseteq \mathbb{N}$, the set of natural numbers that are ordinal numbers relative to $X$ is denoted $\mathcal{O}^X$ (note the supremum of all ordinal that can be represented in $\mathcal{O}^X$ is denoted $\omega_{1}^X$). Then the hyperjump of $X$ is the function $f: X \to \mathcal{O}^X$.

The hyperjump of $X$ is $\mathcal{O}^X$. This means that $\mathcal{O}^X$ is $\Pi_{1}^1$ in $X$, and every set $\Pi_{1}^1$ in $X$ is many-one reducible to $\mathcal{O}^X$

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
- Meta-finite means hyperarithmetic

**Meta-recursive:** Let $Q$ be a $\Pi_{1}^1$ set of unique notations of recursive ordinals. Let $n: \omega_{1}^{CK}\to Q$ take each recursive ordinal to its unique notation. Thus, $|n(\beta)|=\beta$.

The natural enumeration of a $\Pi_{1}^1$ set in $\omega_{1}^{CK}$ steps yields a hyperarithmetic set at each step (analogous to how the enumeration of recursively enumerable set yields a finite set as each step).

**Note:** Non-hyperarithmetic $\Pi_{1}^1$-sets have the same hyperdegree as Kleene's $\mathcal{O}$.


**Meta-computable function:** Let $\Phi \subseteq \omega_{1}^{CK}\times \omega_{1}^{CK}$ be a partial function. $\Phi$ is meta-computable if there exists a finite set $E$ of equations...
## Alpha-Recursion Theory
$\alpha$-recursion theory is an extension of recursion theory to subsets of admissible ordinals $\alpha$

**Admissible Ordinals:**
- An ordinal $\alpha$ is admissible if $L_{\alpha}\models KP$ (Kripke-Platek set theory).
- All admissible ordinals are limit ordinals and are countable, the first admissible ordinal is the Church-Kleene ordinal $\omega_{1}^{CK}$ (the supremum of all recursive ordinals)

A set $A \subseteq \alpha$ is said to be $\alpha$-recursively enumerable if it is $\Sigma_{1}$ definable over $L_{\alpha}$ (this may include parameter from $L_{\alpha}$ in the definition)

$A$ is $\alpha$-recursive if both $A$ and $\alpha$ \ $A$ are $\alpha$-recursively-enumerable (or alternatively, $\Delta_{1}$ definable over $L_{\alpha}$)

- $\alpha$-recursive sets are members of $L_{\alpha+1}$
- Members of $L_{\alpha}$ are called $\alpha$-finite
- Members of $L_{\alpha+1}$ are called $\alpha$-arithmetic

$\alpha$-recursion theory also has its own analogue of $\alpha$-jumps and $\alpha$-reducibility.

Partial functions

[[Turing Machines & Recursion Theory]]
[[Higher Recursion Theory.pdf]]
