## Important Notions
**Equisatisfiability:** Two sentences $\varphi$ and $\psi$ are equisatisfiable, if whenever there is a model of $\varphi$, then there is also a model of $\psi$ (note that these are not necessarily the same models and may not also be of the same theory).

**Logical Equivalence:** Two sentences $\varphi$ and $\psi$ are logically equivalent if whenever $\mathcal{M}\models \varphi$ then also $\mathcal{M}\models\psi$.

These two notions are important in the context of translating sentences (specifically, translating sentences between different logics).

-------------------------------------------------------
## Result
It is obviously true that ${n+1}^{th}$-order logic has greater expressive power than $n^{th}$-order logic (by means of being $n^{th}$-order syntax + extra syntax, and defining the semantics of $n^{th}$-order logic), yet the following has been proven by Hintikka.
	**Result:** The Hanf number and Löwenheim number of higher-order logic (HOL) is the same as the Hanf number and Löwenheim number of second-order logic (SOL) (which is the same as  those of a $\Pi_{1}^1 -$fragment).


**Note:** $D$ is a constant formula of the second-order functional calculus and $\xi(D)$ is the translation of $D$ into a formula of the second-order function calculus (this translation follows ==certain rules==).


Let $K$ be any formula of the theory of types. The formula $\chi(K)$ denotes the formula
	($T_{\tau_{1}}(\xi(q_{1}^{\tau_{1}}))\wedge\dots \wedge T_{\tau_{\kappa}}(\xi(q_{\kappa}^{\tau_{\kappa}}))$)
	of the second-order functional calculus, where $q_{1}^{\tau_{1}}\wedge\dots \wedge q_{\kappa}^{\tau_{\kappa}}$ are all constants of $K, \tau_{1},\dots \tau_{\kappa}$ are typed variables of levels $1$ to $\kappa$ (correspond to a domain in the type-theoretic hierarchy of universes).


**Theorem III:** A formula $K$ of the theory of types is valid (that is, $K$ is true in all models of the theory of types) if and only if $(D\wedge \chi(K))\implies \xi(K)$.

For a closed formula $K$, theorem III asserts that $K$ is valid (i.e., true in all models) if and only if $(D\implies \xi(K))$ is valid.


**Theorem IV:** $K$ is logically false (not true in any model of the theory of types) if and only if $(D\wedge \chi(K))\implies \neg \xi(K)$ is valid.

- Theorem IV asserts that $K$ is satisfiable if and only if  $\neg(\neg(D\wedge \chi(K))\vee \neg \xi(K))$ is logically false.
- The latter formula, $\neg(\neg(D\wedge \chi(K))\vee \neg \xi(K))$, has a strong model set if and only if the formula $D\wedge \chi(K)\wedge \xi(K)$ has a strong model set.
- If every $K$ is satisfiable if and only if $(D\wedge \chi(K)\wedge \neg \xi(K))$ is satisfiable, then $\neg K$ is satisfiable if and only if $(D\wedge \chi(\neg K)\wedge \xi(\neg K))$ is satisfiable. The satisfiability of the last formula is equivalent to the non-validity (logically false) of $(D\wedge \chi(K))\implies\neg\xi(K)$.


These two formulas together imply that for $K$ is a closed formula, $K$ is valid if and only if $D\implies \xi(K)$ is valid and that $K$ is logically false if and only if $D\implies \neg\xi(K)$ is valid. This effectively depicts a type reduction from the Simple Theory of Types ($STT$) to SOL.

**Theorem V:** A formula of the form $X(L)$ (where $X$ is a monadic predicate and $L$ is a formula of the first-order functional calculus) is satisfiable in the standard sense if and only if it has a general model set $\mu$ with the following properties.
	i) Each member of $\mu$ satisfies one of the following conditions w/ respect to $\{X(L)\}$
		- $L$ is a sub-formula of a formula satisfied by a standard model set v
		- $L$ is a negation of a sub-formula of a formula satisfied by v
		- $L$ is an atomic formula whose proper symbols all have a type less 'complicated' than the type of some variable occurring in a formula satisfied by v.
		- $L$ is an identity whose constant(s) satisfy the above condition.
	ii) $\mu/\{X(L)\}\cup\{(\exists X) \neg L\}$ has no general model set, all the individual constants of which occur in the formulae satisfied by $\mu$

Theorem V shows that there is a reduction from the second-order functional calculus (for which there is a reduction from the theory of types via a translation preserving satisfiability and validity) to monadic second-order logic (recall that monadic second-order logic only for quantification over unary or 'monadic' predicates).

**Note:** The notion of a 'general model set' closely resembles the notion of 'model' used in usual model theory since 'non-standard' models are allowed. The notion of 'standard model set' as described in the paper is more restrictive (and a further restrictive model is considered, called a 'strong model set').

(This adapted notation, where in Hintikka's papers $p\supset q$ is equivalent to $p \implies q$ and $\sim$ is equivalent to $\neg$).


**Relation between monadic second-order logic (MSOL) and the classes $\Pi_{1}^1$ and $\Sigma_{1}^1$:**

- MSOL $\subset \Sigma_{1}^1 \cup \Pi_{1}^1$
$\to$ Thus, a reduction to MSOL $\implies$ that the classes $\Sigma_{1}^1$ and $\Pi_{1}^1$ have enough expressive power (i.e., to have the same Hanf number as full second-order logic and higher-order logic).

-----------------
Let $L$ be a vocabulary, $E$ a binary predicate and $U$ a unary predicate such that $E, U \not\in L$. Let $\theta$ be the $\Pi_{1}^1$-formula $\forall X(\phi_{1}\wedge \phi_{2}\wedge \phi_{3})$, and where, 
	$\phi_{1}$ is $\forall x \forall y(\forall z(E(z, x)\leftrightarrow E(z, y))\to x =y)$
	$\phi_{2}$ is $\forall x\forall y(E(x, y)\to (U(x)\wedge\neg U(y)))$
	$\phi_{3}$ is $\forall x(X(x)\to U(x))\to \exists y\forall z(X(z)\leftrightarrow E(z, y))$
It can be observed that models of $\theta$ are, up to isomorphism, models $\mathfrak{M}$ where $M = U^\mathfrak{M}\cup\mathcal{P}(U^\mathfrak{M}), U^\mathfrak{M}\cap \mathcal{P}(U^\mathfrak{M})=\emptyset$ and for all $a, b\in M, E^\mathfrak{M}(a,b) \leftrightarrow a \in b$. Such models allows for monadic second-order formulas $\phi$ over $Y^\mathfrak{M}$ to be reduced to first-order formulae $\phi^*$ over $M$. Thus, $\Pi_{1}^1$-formulas alone are enough to express any second-order property (and by extension, of higher-order as well).

A consequence of this is that checking the validity of a second-order sentence $\phi$ can be reduced recursively to checking the validity of the $\Sigma_{1}^1$-sentence $\theta\to \phi^*$. Similarly, checking whether a second-order sentence $\phi$ has a model of cardinality $\kappa$ can be reduced to asking whether the $\Pi_{1}^1$-sentence $\theta \wedge \phi^*$ has a model of cardinality $2^\kappa$.


## References
[[The Hanf Number]]
[[Model Theory/The Löwenheim Number]]
[[Higher-Order Logics]][[Two_papers_on_symbolic_logic_Form_and_content_in_quantification_theory_and_Reductions_in_the_theory_of_types_K_Jaakko_J_Hintikka_01_01_1955.pdf]]
[[Higher-order logic.pdf]]
[[Proceedings of the 1963 International Symposium at Berkeley.pdf]] (pg., 251 - 264)
