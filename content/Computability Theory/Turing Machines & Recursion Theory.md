## Turing Machines
A Turing machine is a mathematical model of computation...

Formally, a Turing machine can be defined as a 7-tuple
	$M = \langle Q, \Gamma, b, \Sigma, \delta, q_{0}, F \rangle$
	Where
	- $\Gamma$ is a finite, nonempty set of alphabet symbols (on Turing tape)
	- $b\in \Gamma$ is the 'blank' symbol, which is the only symbol which is allowed to occur infinitely often at any step during the computation
	- $\Sigma \subseteq \Gamma$\{$b$} is the set of input symbols, the set of symbols which can appear in the initial tape contents
	- $Q$ is a finite set of states
	- $q_{0}$ is the initial state
	- $F \subseteq Q$ is the set of final states or accepting states
	- $\delta: (Q$\ $F) \times \Gamma \rightharpoonup Q \times \Gamma \times${$L, R$} is a partial function...

## Arithmetic Hierarchy
**Arithmetic Hierarchy:**
The arithmetic hierarchy classifies formulae of Peano Arithmetic by their complexity
- Limit stages are $\Sigma_{\omega}=\Pi_{\omega}=\Delta_{\omega}$ (= $\Sigma_{0}^1 = \Delta_{0}^1=\Pi_{0}^1$)
- Note that for all $n< \omega$, $\Delta_{n+1} = \Sigma_{n} \cap \Pi_{n}$
- $\Sigma_{0}=\Delta_{0}=\Pi_{0}$, if a formula $\phi$ is logically equivalent to some $\psi$ with bounded quantifiers (i.e., $\exists n<t$), then $\phi\in \Delta_{0}$

<img src="/static/attachments/Arithmetic-Hierarchy.png" alt="Arithmetic Hierarchy" width="300">

[Arithmetical hierarchy]([Arithmetical hierarchy - Wikipedia](https://en.wikipedia.org/wiki/Arithmetical_hierarchy))

## Computability Theory
**Recursive:**
A language $\mathcal{L}$ is called recursive (or equivalently, decidable) if there is some algorithm (or program) is able to 'decide' if a sequence (or string) of symbol in $\mathcal{L}$ is a $\mathcal{L}$-formula. 'Decide' meaning the algorithm will return true or false (either way this algorithm will 'halt').
	In terms of computable functions:
	A language $A\subseteq \Sigma^*$ is called recursively enumerable if, $A=\emptyset$ or if there exist a total computable function $f:\mathbb{N}\to \Sigma^*$ with $A=\{f(0),f(1),\dots\}:= f(\mathbb{N})$. Then $f$ enumerate $A$.

We say that a theory $T$ is recursive if there is an algorithm that when given an $\mathcal{L}$-sentence $\phi$ as an input, decides whether $\phi\in T$.


**Recursively-enumerable:**
A language is called recursively-enumerable (or equivalently, semi-decidable) if there is some program which when given a string in the language as an input, returns true, and if given a string not in the language, returns false **or** loops forever.
	Trivially, it can be shown that every language that is recursive is also recursively-enumerable.

We say that a theory $T$ is recursively-enumerable if there is an algorithm that will halt if $T\vdash\phi$ and not halt for $T\not\vdash\phi$


**Proposition:** If $\mathcal{L}$ is a recursive language and $T$ is a recursive $\mathcal{L}$-theory, then $\{\phi|T\vdash \phi\}$ is recursively-enumerable.

We say that a theory $T$ is decidable if there is an algorithm that when given an $\mathcal{L}$-sentence $\phi$ as an input decides whether $T\models\phi$ 
	**Lemma:** Let $T$ be a recursive complete satisfiable theory in a recursive language $\mathcal{L}$. Then $T$ is decidable

-------------------------
**The Halting Problem:** The Halting Problem is a decision problem showing the fundamental limitation of computation. Consider plugging in the following question into a Turing machine, "will an arbitrary computer program either halt or loop for any given input", it turns out a Turing machine will not halt given this decision problem. This means that the Halting Problem is undecidable (i.e., there is no algorithm which that solves the halting problem)

**Oracle Machine:** An oracle machine is a kind of abstract machine which operates as 'black box', meaning it takes in an input (decision problem) and instantly solves, returning an output. An 'oracle' refers to an entity which can solve the decision problem (note this is not necessarily an algorithm).


**Turing Degree:** The Turing degrees measure the level of algorithmic unsolvability of a set of natural numbers. 
- A set $X$ is said to be Turing-reducible to a set $Y$, denoted $X \leq_{T} Y$ (or alternatively, $[X]\leq[Y]$), if there is an oracle Turing machine which decides membership in $X$ when given an oracle (machine) for membership in $Y$.
- Two sets $X, Y$ are Turing equivalent, denoted $X \equiv_{T} Y$ (or alternatively, $[X] \equiv [Y]$), if $X \leq_{T} Y$ and $Y \leq_{T} X$. The relation '$\equiv_{T}$' is an equivalent relation. A Turing degree is then an equivalence class of the relation $\equiv_{T}$.
	**Properties of Turing Degrees:**
	- Each Turing degree is countably infinite, i.e., it contains exactly $\aleph_{0}$-many (Turing-equivalent) sets.
	- There are $2^{\aleph_{0}}$ distinct Turing degrees
	- Turing degrees are partially ordered ($\leq$), 

**Turing Jump:** The Turing jump operator is a function which increases the Turing degree of a decision problem (i.e., given a problem $X$, then the problem $X'$ is not Turing-reducible to $X$ if $X$ is of a higher Turing degree). More precisely, it is an operation which asserts to each decision problem $X$ a (successively) harder decision problem $X'$ such that $X'$ is not decidable by an oracle machine with an oracle for $X.$
	Formally, given a set $X$ and a Gödel numbering $\varphi_{i}^X$ of the $X$-computable functions, the Turing jump $X'$ of $X$ is defined as follows:
		$X' = \{x|\varphi_{x}^X (x) \text{ is defined}\}$
$X^{(0)}=X,$
$X^{(n+1)}=X^{(n)'}$
$X^{(\omega)}=\{p_{i}^\kappa| i \in \mathbb{N} \text{ and } \kappa\in X^{(i)}\}$, i.e., the effective joint of the sequence of sets $X^{(n)}$ for $n \in \mathbb{N}$

- The Turing jump operator is defined for all recursive ordinals $\alpha< \omega_{1}^{CK}$, and extends beyond decidability.
- The Turing jump $0'$ of the empty set is Turing equivalent to the Halting Problem
- For each $n$, the set $0^{(n)}$ is m-computable at the level $\Sigma_{n}^0$

**Many-One Reduction**
A many-one reduction is a reduction which converts instances of a decision problem (i.e., an instance in $L_{1}$) to another decision problem (an instance in $L_{2}$) using a computable function. The reduced instance is in the language $L_{2}$ if and only if the initial instance is in its language $L_{1}$.

Many-one reductions are a special case of Turing reductions (and a stronger form of it).

Formally, suppose $A$ and $B$ are formal languages over the alphabets $\Sigma$ and $\Gamma$ (set of symbols), respectively. A many-one reduction from $A\to B$ is a total computable function $f: \Sigma^*\to\Gamma^*$ that has the property that each word $w\in A$ iff $f(w)\in B$. If such a function $f$ exists, $A$ is many-one reducible ($m$-reducible) to $B$ is denoted as $A\leq_{m}B$.
$\to$ For subsets of natural numbers $A, B \subseteq \mathbb{N}$, then $A\leq_{m}B$ if there exists a computable function $f$ w/ $x\in A \iff f(x)\in B$.

- If the many-one reduction $f$ is injective, then this is a one-one reduction, denoted $A\leq_{1}B$.
- If the one-one reduction $f$ is surjective, then $A$ is recursively isomorphic to $B$ ($f$ is totally computable and bijective, $f(A)=B$), this is denoted as $A\equiv B$.

**Note:** $A\equiv B \iff A \equiv_{1} B$ (that is, '$\equiv$' and '$\equiv_{1}$' have the same equivalence classes).

- The equivalence class of $\equiv_{1}$ are called $1$-degrees
- If both $A\leq_{m}B$ and $B\leq_{m}A$, then $A$ is many-one equivalent (or $m$-equivalent) to $B$, denoted as $A\equiv_{m}B$.

**Many-One Completeness**
A set $B$ is many-one complete (or $m$-complete) if and only if $B$ is recursively enumerable and every recursively enumerable set $A$ is $m$-reducible to $B$ ($A$ and $B$ are both of degree of $m$).
$\to$ The equivalence classes of $\equiv_{m}$ are called $m$-degrees and forms a partially ordered set $D_{m}$ (w/ the order induced by $\leq_{m}$).
## Ordinal Notation
**Ordinal Notation:**
An ordinal notation is a partial function which maps the set of all finite sequences of symbols (which are members of an alphabet) to a countable set of ordinals.

E.g., Gödel numbering is a type of ordinal notation which maps the set of all well-formed formulae (WFF) of some language to the natural numbers.
	$\to$ if a Gödel numbering is fixed, then the subset relation on the ordinals induces an ordering on WFF which in turn induces a well-ordering on the subset of natural numbers.

**Kleene's $\mathcal{O}$**
Kleene's $\mathcal{O}$ is the set of ordinal notation for computable/recursive ordinals. It is a canonical subset of the natural numbers
$\to$ For $p\in \mathcal{O}, p$ is an ordinal notation for the ordinal $|p|$.

The following holds for $(\mathcal{O}, <_{\mathcal{O}})$
	- $0\in\mathcal{O} \wedge|0|=0$
	- $i\in\mathcal{O}\wedge|i|=\alpha\to 2^i\in\mathcal{O}\wedge |2^i|=\alpha+1\wedge i<_{\mathcal{O}} 2^i$
	- For $\{e\}$ is the $e^{th}$-partial computable function (a formalized analogue of the intuitive notion of algorithms). If $e$ is the total and range$(\{e\}) \subset \mathcal{O} \wedge\forall n(\{e\}(n)<_{\mathcal{O}}\{e\}(n+1))$, then $3\cdot 5^e\in\mathcal{O}\wedge\forall n, \{e\}(n)<_{\mathcal{O}}3 \cdot5^e \wedge|3 \cdot 5^e|=\underset{k}{lim}|\{e\}(k)|$
	- $p<_{\mathcal{O}}q \wedge q<_{\mathcal{O}}r \to p<_{\mathcal{O}}r$ (transitive)

**Computable Functions**

**Constructive Ordinals**
The function $||:\mathcal{O}\to$ ordinals is defined by transfinite recursion on $<_{\mathcal{O}}$
	$|1|=0$
	$|2^u|=|u|+1$
	$|3 \cdot 5^e|=\underset{n\to \infty}{lim}|\{e\}(n)|=\omega$

- If $u\in \mathcal{O}$, then $u$ is said to be a notation for the ordinal $|u|$. An ordinal $\delta$ is constructive if $\delta=|u|$.
- There are no 'gaps' in the constructive ordinals
- There exists a $\Pi_{1}^1$-subset of $\mathcal{O}$, linearly ordered by $<_{\mathcal{O}}$, and order type $\omega_{1}^{CK}$
- Every ordinal constructive in a set $X$ is recursive in $X$, and every ordinal recursive in $X<$ some ordinal constructive in $X$
- Kleene's $\mathcal{O}$ is a complete $\Pi_{1}^1$-set (i.e., $\mathcal{O}$ is $\Pi_{1}^1$ and every $\Pi_{1}^1$-set is Turing-reducible to $\mathcal{O}$).

## References
[[Higher Recursion Theory.pdf]]
[Turing Machine](https://en.wikipedia.org/wiki/Turing_machine)
[Halting Problem](https://en.wikipedia.org/wiki/Halting_problem)
[Turing Degrees](https://en.wikipedia.org/wiki/Turing_degree)
[Kleene's O](https://en.wikipedia.org/wiki/Kleene%27s_O)
[Many-One Reduction]([Many-one reduction - Wikipedia](https://en.wikipedia.org/wiki/Many-one_reduction))
[Model Theory D.Marker](Set%20Theory%20+%20Model%20Theory/Model%20Theory%20D.Marker.pdf)