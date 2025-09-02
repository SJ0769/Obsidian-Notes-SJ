## Arithmetic Hierarchy
**Arithmetic Hierarchy:**
The arithmetic hierarchy classifies formulae of Peano Arithmetic by their complexity
- Limit stages are $\Sigma_{\omega}=\Pi_{\omega}=\Delta_{\omega}$ (= $\Sigma_{0}^1 = \Delta_{0}^1=\Pi_{0}^1$)
- Note that for all $n< \omega$, $\Delta_{n+1} = \Sigma_{n} \cap \Pi_{n}$
- $\Sigma_{0}=\Delta_{0}=\Pi_{0}$, if a formula $\phi$ is logically equivalent to some $\psi$ with bounded quantifiers (i.e., $\exists n<t$), then $\phi\in \Delta_{0}$.
- $\Delta_{1}$ is the set of all recursive sets.
- $\Sigma_{1}$ is the set of all recursively-enumerable sets, and $\Pi_{1}$ is the set of all co-recursively-enumerable sets

<img src="/static/attachments/Arithmetic-Hierarchy.png" alt="Arithmetic Hierarchy" width="300">

[Arithmetical hierarchy]([Arithmetical hierarchy - Wikipedia](https://en.wikipedia.org/wiki/Arithmetical_hierarchy))

- If a formula $\phi$ is logically equivalent to another formula of the form $\exists m_{1}\exists m_{2}\dots \exists m_{k} \psi$ where $\psi$ is a $\Pi_{n}^0$-formula, then $\phi$ is said to be $\Sigma_{n+1}^0$-formula (i.e., $\phi\in \Sigma_{n+1}^0$)
- If a formula $\phi$ is logically equivalent to another formula of the form $\forall m_{1}\forall m_{2}\dots \forall m_{k}\psi$ where $\psi$ is a $\Sigma_{n}^0$-formula, then $\phi$ is said to be a $\Pi_{n+1}^0$-formula (i.e., $\phi\in\Pi_{n+1}^0$)

That is, a $\Pi_{n}^0$-formula is equivalent to a formula that begins w/ a 'block' of universal quantifiers $\forall$ (i.e., $\forall m_{1}\dots \forall m_{k}$) and alternates $n-1$ times between series of $\exists$ and $\forall$ quantifiers. A $\Sigma_{n}^0$ is equivalent to a formula that begins w/ a block of existential quantifiers $\exists$ and alternates $n-1$ times between a series of $\exists$ and $\forall$ quantifiers.

From the above, a formula $\phi$ is a $\Delta_{n+1}^0$-formula if it is both $\Sigma_{n}^0$ and $\Pi_{n}^0$.

or each $n\in \mathbb{N}$:
	-$\Pi_{n}^0 \subset\Sigma_{n+1}^0$
	-$\Pi_{n}^0 \subset\Pi_{n+1}^0$
	-$\Sigma_{n}^0 \subset \Sigma_{n+1}^0$
	-$\Sigma_{n}^0 \subset \Pi_{n+1}^0$
And so, $\Delta_{n}^0 \subset\Pi_{n}^0$ and $\Delta_{n}^0 \subset \Sigma_{n}^0$.

**Note:** Because redundant quantifiers can be added once a formula is assigned the classification $\Sigma_{n}^0$ or $\Pi_{n}^0$ (or $\Delta_{n+1}^0$ if it is both), it will also be assigned the classification $\Sigma_{m}^0$ or $\Pi_{m}^0$ (or $\Delta_{m+1}^0$) for all $m>n$.

**Notation:** For e.g., $\Sigma_{n}^0$, the $n$ denotes the number of alternations between series of $\exists$ and $\forall$ quantifiers and the '$0$' denotes the type of the objects being quantified over. Type $0$ objects are natural numbers, and objects of type $1$ are function intaking natural numbers and outputting natural numbers. A type $i+1$ object are functions that map the set of objects of type $i$ to the natural numbers. This is related to higher-order objects, an arithmetic hierarchy for second-order arithmetic called the analytical hierarchy can be considered for object of type $1$ (see [Extensions of Recursion Theory](Computability%20Theory/Extensions%20of%20Recursion%20Theory.md)).
	$\Sigma_{n}^0$ is the same as $\Sigma_{n}\dots$,etc. it is only in extensions of the arithmetic hierarchy (i.e., the analytical hierarchy) that we use the notation $\Sigma_{n}^0$.

-----------------------

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

## References
[Turing Machines & Computability Theory](Computability%20Theory/Turing%20Machines%20&%20Computability%20Theory.md)
[Extensions of Recursion Theory](Computability%20Theory/Extensions%20of%20Recursion%20Theory.md)
[[Higher Recursion Theory.pdf]]
[Arithmetic Hierarchy]([Arithmetical hierarchy - Wikipedia](https://en.wikipedia.org/wiki/Arithmetical_hierarchy))
[Analytical Hierarchy](https://en.wikipedia.org/wiki/Analytical_hierarchy)