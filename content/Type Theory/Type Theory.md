The theory of types is an alternative foundation of mathematics to set theory which was developed to avoid Russell's paradox.
## Syntax
**Properties:**
- Every object has a type in type theory
	E.g.,
	- Boolean type $\to$ True, False
	- Integer type $\to 0, 1, 2, \dots$
- Type theory is the intersection between mathematics and computer science

**Constructing a Type:**
E.g., The type of natural numbers
	$0: \text{ Nat}$ ($0$ of type natural)
	$\uparrow: \text{ Nat} \to \text{Nat}$ (a function that takes a natural number and returns another natural number)
	
**Construction of Natural Numbers**
	$0$
	$1\equiv \uparrow(0)$
	$2\equiv\uparrow(\uparrow(0))$
	$3\equiv \uparrow(\uparrow(\uparrow(0)))$
	.
	.
	.
	(The function $\uparrow: \mathbb{N\to N}$ satisfy the laws of induction and recursion, allowing the entirety of the natural numbers to be defined).

Types can also be combined
	i.e., for types $A, B$
	$A\to B$
	$f: A \to B$
	$a: A$
	$f(a): B$
	(Takes an object of type $A$ and returns an object of type $B$)

A 'pair type' can also be formulated
	i.e., for types $A, B$
	$A\times B$ 
	$a:A$
	$b:B$
	$(a, b):A\times B$
	(Pair types are those whose elements are pairs composed of an element from $a$ of $A$ and an element $b$ of $B$

Sum function
	$Sum:(Nat \times Nat)\to Nat$
	This function takes two natural numbers and returns another natural number
	i.e., special cases
	$Sum(0, b) \to 0+b=b$
	$Sum(\uparrow a', b)\to \uparrow a'+b = \uparrow(a'+b)=\uparrow Sum(a',b)$

Types can be seen as logical propositions and members of these types are proofs of these propositions.
	i.e., $a:A\iff$proposition
	If a type has at least one element, then there is a proof of the logical proposition (there will be multiple ways to prove a proposition if the type contains more than one element). If a type has no elements then the proposition has no proof.


|             Type             |       Logic        |
| :--------------------------: | :----------------: |
|             $A$              |    Proposition     |
|            $a:A$             |       Proof        |
|           $A\to B$           |   $A\implies B$    |
|         $A\times B$          |    $A\wedge B$     |
|            $A+B$             |     $A \vee V$     |
|  $\underset{a:A}{\Pi}P(a)$   | $\forall(a:A)P(a)$ |
| $\underset{a:A}{\Sigma}P(a)$ | $\exists(a:A)P(a)$ |
E.g., of a proof in set theory
	$\forall(n:Nat) \exists(p:Nat)\text{ prime}(p) \wedge p\geq n$
	proof:
	$\underset{n:Nat}{\Pi}\underset{n:Nat}{\Sigma}\text{ prime}(p) \times p\geq n$
	i.e., find its corresponding type and find an element of it

**Equality Types**
The identity function takes two elements $a, b$ of the type $'Nat'$ and returns type $a=b$
Thus, there is a type for every possible equality proposition. Although not all of these types are valid.
	i.e., the type 1=2
	This type contains no members and thus is unprovable

## Semantics
The semantics of simple type theory $(STT)$ is based on 'standard' models.

The language of $STT$ is given by $\mathcal{L=}(\mathcal{C, \tau})$, a standard model of $STT$ is a triple $\mathcal{M}=\langle \mathcal{D},I,e\rangle$ where:
	i) $\mathcal{D}=\{D_{\alpha}|\alpha\in \mathcal{T}\}$ is the set of nonempty domains
	ii) $\mathcal{V}=\{T, F\}$ is the set of truth values
	iii) For $\alpha, \beta \in \mathcal{T}, D_{\alpha\to \beta}$ is the set of all total function from $D_{\alpha}$ to $D_{\beta}$
	iv) $I$ maps each $c\in\mathcal{C}$ to each $D_{\tau(c)}$
	v) $e$ maps each $\alpha\in\mathcal{T}$ to a member of $D_{\alpha}$

## References
[[Higher-Order Logics]]
[[Seven Virtues of Type Theory.pdf]]
[[A history of the theory of types.pdf]]