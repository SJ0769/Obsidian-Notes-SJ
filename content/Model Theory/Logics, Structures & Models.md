## Languages
**Vocabulary:** A vocabulary or language is a set which contains the following:
	i) A set of function symbols $\mathcal{F}$ and positive integers $n_{f}$ for each $f\in\mathcal{F}$
	ii) A set of relation symbols $\mathcal{R}$ and positive integers $n_{R}$ for each $R\in\mathcal{R}$
	iii) A set of constant symbols $\mathcal{C}$
The numbers $n_{f}$ and $n_{R}$ tell us a function $f\in \mathcal{F}$ is a function of $n_{f}$ variables and a relation $R\in \mathcal{R}$ is a relation of $n_{R}$ variables.

Let $\tau$ denote the the vocabulary or language, then trivially $\mathcal{F}\subseteq \tau$, $\mathcal{R}\subseteq \tau$, and $\mathcal{C}\subseteq \tau$. The vocabulary is often denoted as $\tau=\{f, R, c\}$ (and sort symbols for many-sorted logic).

The empty language $\tau=\{\}$, is the language of equality.
### Formulas and Sentences
$\tau$-terms:
	i) Constant symbols $c\in \tau$ are $\tau$-terms
	ii) Variable $v_{1},\dots,v_{n}$ are $\tau$-terms
	iii) If $v_{1},\dots,v_{n}$ are $\tau$-terms and $f\in \tau$ is a function symbol, then $f(v_{1},\dots,v_{n})$ are $\tau$-terms

We say that $\phi$ is an atomic formula if $\phi$ is either of the form:
	i) $t_{1}=t_{2}$ where $t_{1}$ and $t_{2}$ are terms
	ii) $R(t_{1},\dots,t_{n_{R}})$, where $R \in \mathcal{R}$ and $t_{1},\dots,t_{n_{R}}$ are terms

We say that $\phi$ is a $\mathcal{L}$-formula if $\phi$ is atomic and
	i) If $\phi$ is an $\mathcal{L}$-formula, then so it $\neg \phi$
	ii) If $\phi$ and $\psi$ are atomic, then $(\phi \wedge \psi)$ and $(\phi \vee \psi)$ are $\mathcal{L}$-formulas
	iii) $\exists v_{i} \phi$ and $\forall v_{i} \phi$ are $\mathcal{L}$-formulas, where $i\in I = \{1, 2,\dots \}$ (index)


**Note:** 'Complex' formulas (ones where no logical connectives: $\wedge, \vee, \neg, \to, \leftrightarrow$ are involved) may be logically equivalent to atomic formulas.
	E.g., Let $\phi$ be an atomic formula, then the complex formula $\neg\neg \phi$ (as the connective '$\neg$' is applied twice) is equivalent to $\phi$ as according to double negation elimination, this is denoted as $\phi\equiv\neg\neg \phi$.

**Free variables:** A formula has free variables if and only if some variables in it are not bound by quantifiers.
	$\to$ E.g., of a bound variable
	$\forall x(x>2)$, the expression "$x>2$" has the quantifier '$\forall$' attached to it.

**Sentence:** A sentence is a formula with no free variables (i.e., a formula is given by $\varphi(v_{1},\dots,v_{n})$, while a sentence is given by $\varphi$). For a sentence $\varphi$, we write $\mathcal{M}\models \varphi$ if $\varphi$ is true (or satisfied) in the structure $\mathcal{M}$.
### Clarification
Let $\phi$ be a formula w/ free variables from $\overline{v} =(v_{i_{1}},\dots,v_{i_{m}})$ and let $\overline{a}=(a_{i_{1}},\dots,a_{i_{m}})\in M^m$. $\mathcal{M}\models \phi (\overline{a})$ is defined inductively as follows:
	i) If $\phi$ is $t_{1}=t_{2}$, then $\mathcal{M}\models \phi(\overline{a})$ if $t_{1}^\mathcal{M} (\overline{a})=t_{2}^\mathcal{M}(\overline{a})$
	ii) If $\phi$ is $R(t_{1},\dots,t_{n_{R}})$, then $\mathcal{M}\models \phi(\overline{a})$ if $(t_{1}^\mathcal{M}(\overline{a}),\dots,t_{n_{R}}^\mathcal{M}(\overline{a}))\in R^\mathcal{M}$
	iii) If $\phi$ is $\neg\psi$, then $\mathcal{M}\models \phi(\overline{a})$ if $\mathcal{M}\not\models\psi(\overline{a})$
	iv) If $\phi$ is $(\psi \wedge\theta)$, then $\mathcal{M}\models\phi(\overline{a})$ if $\mathcal{M}\models \psi(\overline{a})$ and $\mathcal{M}\models\theta(\overline{a})$
	v) If $\phi$ is $(\psi \vee \theta)$, then $\mathcal{M}\models\phi(\overline{a})$ if $\mathcal{M}\models\psi(\overline{a})$ and $\mathcal{M}\models\theta(\overline{a})$
	vi) If $\phi$ is $\exists v_{j}\psi(\overline{v}, v_{j})$, then $\mathcal{M}\models\phi(\overline{a})$ if there is $b\in M$ such that $\mathcal{M}\models \psi(\overline{a}, b)$
	vii) If $\phi$ is $\forall v_{j}\psi(\overline{v}, v_{j})$, then $\mathcal{M}\models \phi(\overline{a})$ if $\mathcal{M}\models\psi(\overline{a}, b)$ for all $b\in M$

The vocabulary/signature $\tau$ is the set of non-logical symbols as defined above, the language $\mathcal{L}$ is the set of logical & non-logical symbols, and so $\tau \subset \mathcal{L}$. The set of logical symbols contains connectives, quantifiers and variables (i.e., $\{\wedge, \vee, \neg,\to, \leftrightarrow, \exists, \forall, v_{1},\dots\}$), these deal with the general syntax of the logic. There are a countably infinite number of logical symbols (unless one includes extensions to the logic w/ an uncountable amount of logical symbols). Thus, $|\mathcal{L}|\geq\aleph_{0}$, even when the vocabulary is finite, and hence, the $|\mathcal{L}|=\tau+\aleph_{0}$.
$\to$ 'Extensions' to first-order logic deal with the set of logical symbols and sentence formation rules, (i.e., in second-order logic we add infinitely-many second-order variables or predicates $P, Q, \dots,$etc. to the language).

**Note:** Sometimes the $\mathcal{L}$-formulas are used interchangeably with $\tau$-formulas especially is the logic (and set of logical symbols) has been fixed. Even though this isn't precise.
## Structures
**Structures:** An $\mathcal{L}$-structure $\mathcal{M}$ is given by the following:
	i) A nonempty set $M$, which is the domain or underlying set of the structure
	ii) A function $f^\mathcal{M}: M^{n_{f}}\to M$ for each $f\in\mathcal{F}$
	iii) A set $R^M\subseteq M^{n_{R}}$ for each $R\in\mathcal{R}$
	iv) A element $c^\mathcal{M}\in M$ for each $c\in\mathcal{C}$
$f^\mathcal{M}, R^\mathcal{M}$ and $c^\mathcal{M}$ denote the interpretation of the symbols $f, R, c$ in the vocabulary w/in the structure. A structure is often denoted $\langle M, f^\mathcal{M}, R^\mathcal{M}, c^\mathcal{M}\rangle$, the domain and interpretations of non-logical symbol (which are syntactic objects) are semantic objects as they live in the model.


Let '$\tau$' denote the vocabulary of the logic (set of non-logical symbols). The following are examples:
	E.g.,
	- The vocabulary/language of set theory is $\tau = \{\in\}$
	- The language of graph theory is $\tau = \{R\}$ where $R$ is a binary relation
	- The language of arithmetic $\tau = \{+ ,\times, S(x), 0\}$
	- The language of rings $\tau = \{+, -, \times, 0, 1\}$
	- The language of ordered rings $\tau = \{+, -, \times, <, 0, 1\}$
	- The language of pure set $\tau = \emptyset$
It can be observed that expanding the vocabulary $\tau$ to an expansion $\sigma \supset \tau$ will further increase the expressive power of the language as you are now able to talk about further intricacies of structure with the added function and relation symbols. It can also be observed that in this expanded language, the type of structure is further specified.
i.e., every non-empty vocabulary describes sets with additional attached structure, thus, the empty language $\tau = \emptyset$, describes the most general type of structure of pure sets.


**Model**: A model of nonempty set of sentences $T$ (i.e., a theory) is a structure $\mathcal{M}$ for which $T$ is true in $\mathcal{M}$, denoted $\mathcal{M}\models T$, "$\mathcal{M}$ satisfies $T$."


**Notation:** 
- $\mathscr{L}[\tau]$ or $\text{Sent}_{\mathscr{L}}(\tau)$ denotes the class of $\mathscr{L}$-sentences of vocabulary $\tau$
- $\text{Form}_{\mathscr{L}}(\tau)$ denotes the class of $\mathscr{L}$-formulas of vocabulary $\tau$
- $\mathscr{L}(\tau)$ denotes the logic $\mathscr{L}$ of the vocabulary $\tau$
- Str$[\tau]$ denotes the class of $\tau$-structures (if you want to specify the logic, then let Str$_{\mathscr{L}(\tau)}$ denote the class of $\mathscr{L}(\tau)$-structures)
- Mod$^{\tau}_{\mathscr{L}}(\varphi) = \{\mathfrak{A|\mathfrak{A} \models \varphi}\}$ for $\varphi$ is an $\mathscr{L}$-sentence (in the vocabulary $\tau$), this notation can be generalized to sets of sentences $T \subseteq \mathscr{L(\tau)}$, consider Mod$^\tau_{\mathscr{L}}(T)$.

## Logics
**Definition of a Logic:**
A logic $\mathscr{L}$ can be defined as a pair $(\mathscr{L}, \models_{\mathscr{L}})$ where $\mathscr{L}$ is a mapping defined on vocabularies $\tau$ such that $\mathscr{L}[\tau]$ is the class of $\mathscr{L}$-sentences of vocabulary $\tau$, and $\models_{\mathscr{L}}$, the satisfaction relation ,is a relation between structures and $\mathscr{L}$-sentences.
	i.e.,
	i) $\mathscr{L}: \tau \to \mathscr{L}[\tau];$ and
	ii) $\models_{\mathscr{L}}$ is a relation on ($Str_{\mathscr{L}(\tau)} \times \mathscr{L}[\tau]$)
Moreover, the following hold:
	i) if $\tau \subseteq \sigma$, then $\mathscr{L}[\tau]\subseteq \mathscr{L}[\sigma]$
	ii) if $\mathfrak{A} \models_{\mathscr{L}} \varphi,$ then $\varphi \in \mathscr{L}[\tau_{\mathfrak{A}}]$ where $\tau_{\mathfrak{A}}$ denotes the vocabulary of the structure $\mathfrak{A}$
	iii) **Isomorphism Property:** if $\mathfrak{A}\models_{\mathscr{L}} \varphi$ and $\mathfrak{A \cong B}$, then $\mathfrak{B}\models_{\mathscr{L}} \varphi$
	iv) **Reduct Property:** if $\varphi \in \mathscr{L}[\tau]$ and $\tau \subseteq \tau_{\mathfrak{A}}$, then
		$\mathfrak{A} \models_{\mathfrak{A}}\varphi \iff \mathfrak{A} \upharpoonright \tau \models_{\mathscr{L}} \varphi$
	v) **Renaming Property:** Let $\rho: \tau \to \sigma$ be a renaming. Then for each $\varphi \in \mathscr{L}[\tau]$ there is a sentence, $\varphi^\rho \in \mathscr{L}[\sigma]$ such that for all $\tau$-structures $\mathfrak{A}$, then
		$\mathfrak{A} \models_\mathscr{L} \varphi \iff \mathfrak{A^\rho} \models_{\mathscr{L}} \varphi^\rho$

**Reducts:** Consider two $\sigma, \tau$ such that vocabularies $\sigma \supseteq \tau$ and a $\sigma$-structure $\mathfrak{A}$, the $\tau$-reduct of $\mathfrak{A}$, denoted $\mathfrak{A} \upharpoonright \tau$ , is the structure obtained by the domain\underlying set $A$ interpreting the symbols in $\tau$, a subset of the full vocabulary $\sigma$.
	i.e., You are removing the symbol in $\sigma$\ $\tau$ and retaining the domain and the interpretation of symbols in $\tau$
E.g., Consider the field $R = \langle \mathbb{R}, +, \cdot, 0, 1, < \rangle$, and some sub-vocabulary $\tau = \{+, \cdot\}$ (the language of rings), then the $\tau$-reduct of $R, R \upharpoonright \tau = \langle \mathbb{R}, +, \cdot \rangle$, a ring (minus the constant symbols, constraints)

Similarly you may also define an 'expansion' by adding symbols to the vocabulary $\tau$ to obtain a new vocabulary $\sigma \supseteq \tau$, and for a $\tau$-structure $\mathfrak{A}$, the expansion to the vocabulary $\sigma$ is $\mathfrak{A' \succ A}$ (not to be confused with an elementary extension).

E.g., From the example above, consider the ring $R = \langle \mathbb{R}, +, \cdot \rangle$, then the expansion to the vocabulary $\sigma = \langle+, \cdot, 0, 1, < \rangle$ is the structure $R' = \langle \mathbb{R}, +, \cdot, 0, 1, < \rangle$
## Many-Sorted Logic
Many-sorted logic introduces sort symbols $s_{1},s_{2}\dots$ for every 'sort' of object. These symbols are added to the vocabulary of the logic. A vocabulary of many-sorted logic would look as follows:
	$\tau=\{s,\dots R,\dots,f,\dots c,\dots\}$
	for $s,\dots\in S$, the set of sorts, $R,\dots\in \mathcal{R}$, the set of relation symbols, $f,\dots\in\mathcal{F}$, the set of function symbols, $c,\dots\in\mathcal{C}$, the set of constant symbols ($0$-ary function symbols). As above, $S\mathcal{, R, F, C}\subseteq \tau$.
Sort symbols are assigned...

A many-sorted structure is given as follows:
	$\mathfrak{A}=\langle A_{s},\dots,R^\mathfrak{A},\dots,f^\mathfrak{A},\dots,c^\mathfrak{A} \rangle$
Where $A_{s}$ is the domain of each sort $s\in \tau$.

Let $R$ be a binary relation equipped w/ sort symbols $s_{1}, s_{2}$, $f$ a unary function symbol equipped w/ sort symbol $s_{2}$ whose argument place is equipped w/ $s_{1}$ and $c$ be a constant equipped w/ $s_{1}$. Then $\tau=\{s_{1},s_{2},s_{3}, R, f, c\}$ and so $R^\mathfrak{A}\subseteq A_{s_{2}}\times A_{s_{1}}$, $f^\mathfrak{A}: A_{s_{1}}\to A_{s_{2}}$, and $c^\mathfrak{A}\in A_{s_{1}}$.

Reducts may also be defined on many-sorted structures, and there may also remove sort symbols as well as relation, function and constant symbols.

E.g., $\mathfrak{A}=\langle A_{s_{1},A_{s_{2}}}, A_{s_{3}}, R^\mathfrak{A}, f^\mathfrak{A}, c^\mathfrak{A}\rangle \upharpoonright \{s_{1}, s_{2}, R\} = \langle A_{s_{1}}, A_{s_{2}}, R^\mathfrak{A} \rangle$ 
## Notion of (Model) Classes
### Model Class
A 'model class' is a general term for classes of structures (models) of a given vocabulary, these classes may be arbitrary and not definable within the logic.
### Elementary Class
Let $\mathscr{L}$ be a logic and $\mathcal{K}$ a class of $\tau$-structures ($\mathcal{K} \subseteq$ Str$[\tau]$), $\mathcal{K}$ is an elementary class (or $\mathcal{K}$ is elementary in $\mathscr{L}$) iff there is a $\varphi \in \mathscr{L}[\tau]$ such that $\mathcal{K}=$ Mod$^\tau_{\mathscr{L}}(\varphi)$. 
That is, $\mathcal{K}= \{\mathfrak{A}| \mathfrak{A} \models \varphi \text{ and } \varphi \in \mathscr{L}[\tau]\}$

Elementary classes are closed under isomorphisms (i.e., if $\mathfrak{A}\in \mathcal{K}$ and $\mathfrak{A} \cong \mathfrak{B},$ then $\mathfrak{B}\in \mathcal{K}$).

From the above fact, elementary classes may also equivalently be defined as a union of isomorphism types/classes.

$\mathcal{K} = \bigcup \limits_{\mathcal{A \in K}} [\mathcal{A}]$
Where $[\mathcal{A}]=$ {$\mathcal{A'}|\mathcal{A'}\cong\mathcal{A}$} and $[\mathcal{A}]\models \varphi$

Can also be seen as a union of sub-model classes (see below)

**Note:** Every Elementary class is a Model Class
### Projective Class
Given a logic $\mathscr{L}$ and a vocabulary $\tau$, we say that $\mathcal{K}$ is a projective class in $\mathscr{L}$ (more precisely, $\mathscr{L}(\tau)$) iff there is a vocabulary $\sigma \supseteq \tau$, having the same sort symbols as $\tau$ in the many-sorted case, and a $\mathscr{L}(\sigma)$-elementary class $\mathcal{K}$ such that $\mathcal{K}=\{\mathfrak{A}\upharpoonright \tau |\mathfrak{A}\in \mathcal{K'}\}$, the class of $\tau$-reducts of $\mathcal{K'}$

**Notes:**
- A $\mathscr{L}(\tau)$-elementary class (or projective class), is a class of $\tau$-structures elementary in the logic $\mathscr{L}$
- If a class $\mathcal{K}$ is elementary in $\mathscr{L}$, then it is projective in $\mathscr{L}$
	i.e., elementary class $\implies$ projective class
### Relative Projective Classes
Given a logic $\mathscr{L}$ and a vocabulary $\tau$, a class of $\tau$-structures $\mathcal{K}$ is a relative projective class (RPC) in $\mathscr{L}$ iff there is a vocabulary $\sigma \supseteq \tau$, a unary predicate $U\in \sigma$/$\tau$ and a class $\mathcal{K'}$ elementary in $\mathscr{L}(\tau)$ such that:
	$\mathcal{K}=\{\mathfrak{A}\upharpoonright \tau|U^\mathfrak{A}|\mathfrak{A}\in \mathcal{K'} \text{ and } U^\mathfrak{A} \text{ is } \tau\text{-closed in } \mathfrak{A}\}$
In the many-sorted case
	$\mathcal{K}=\{\mathfrak{A}\upharpoonright \tau |\mathfrak{A}\in \mathcal{K'}\}$

Every RPC is a projective class


**Summary:**
RPC $\implies$ Projective class $\implies$ Elementary class $\implies$ model class
## Expressive Power
**The Notion of Expressive Power:**
 - A logic $\mathscr{L}^*$ is at least as strong as $\mathscr{L}$, $\mathscr{L}\leq\mathscr{L}^*$, iff for every sentences $\varphi\in\mathscr{L}[\tau]$ ($\tau$ is some arbitrary vocabulary), there is a sentence of $\varphi^* \in \mathscr{L}^*[\tau]$ such that {$\mathfrak{A}| \mathfrak{A}\models\varphi$} = {$\mathfrak{A}|\mathfrak{A}\models\varphi^*$}. That is, for any $\mathscr{L}$-sentence $\varphi$ there is a $\mathscr{L^*}$-sentence $\varphi^*$ which has the same 'meaning' (semantically) as $\varphi$
- Structures that can be distinguished in $\mathscr{L}$ can be distinguished in $\mathscr{L^*}$

More formally,
Let $\mathscr{L, L^*}$ be logics, we say that $\mathscr{L^*}$ is at least as strong as $\mathscr{L}$, denoted $\mathscr{L \leq L^*}$, iff every elementary class in $\mathscr{L}$ is an elementary class in $\mathscr{L^*}$.
	$\mathscr{L}$ and $\mathscr{L^*}$ are equivalently strong, denoted $\mathscr{L\equiv L^*}$, if both $\mathscr{L \leq L^*}$ and $\mathscr{L^* \leq L}$
	$\mathscr{L^*}$ is stronger than $\mathscr{L}$, denoted $\mathscr{L< L^*}$, if $\mathscr{L\leq L^*}$ and $\mathscr{L \not\equiv L^*}$

A logic $\mathscr{L}^*$ is equivalently as strong as $\mathscr{L}, \mathscr{L}\leq_{\equiv} \mathscr{L}^*,$ if for every $\tau$-structure $\mathfrak{A}, \mathfrak{B}$, if $\mathfrak{A} \equiv_{\mathscr{L}^*} \mathfrak{B}$ then $\mathfrak{A} \equiv_{\mathscr{L}} \mathfrak{B},$ where $\equiv_{\mathscr{L}}$ is the relation asserting "satisfy the same $\mathscr{L}$-sentences" 
	i.e., If for every sentence $\varphi \in \mathscr{L}[\tau],$ then there is a sentence $\psi \in \mathscr{L}^*[\tau]$ which has the same meaning as $\varphi$.

The strongest logic is one which characterizes all model classes, that is, the logic has a sentence for every for every isomorphism-closed class of structures (a sentence for each model class)
For any structure $\mathfrak{A}$, there is a sentence $\varphi_{\mathfrak{A}}$ such that $\mathfrak{A'} \models \varphi_{\mathfrak{A}} \iff \mathfrak{A' \cong A}$


Such a logic would form a proper-class as already a logic which characterizes all structures is proper-classed size (e.g., $\mathscr{L}_{\infty, \infty}$ characterizes all structures up to isomorphism, $|\mathscr{L}_{\infty, \infty}[\tau]|= \infty$).

**Note:** Characterizing all model classes $\implies$ characterizing all structure Consider the following model class

$\mathcal{K}=${$[\mathcal{A}]$}, the model class of a single isomorphism type
To characterize a structure means to define the structure up to isomorphism (i.e., defining the isomorphism type)


For logics $\mathscr{L, L^*, L} \leq_{R(PC)} \mathscr{L^*}$ iff every class that is $R(PC)$ in $\mathscr{L}$, is $R(PC)$ in $\mathscr{L^*}$
## Other
**Beth's Definability Theorem:** For a first-order theory $T$ in the language $\mathscr{L}(\sigma)\supseteq \mathscr{L}(\tau)$ and a formula $\varphi\in \text{Form}_{\mathscr{L}}(\sigma)$, then the following are equivalent:
	i) For any two model $\mathcal{M,N}\models T$ such that $\mathcal{M}\upharpoonright\tau=\mathcal{N}\upharpoonright\tau$, it is the case that $\mathcal{M}\models\varphi[\overline{a}]\iff\mathcal{N}\models\varphi[\overline{a}]$ for all $n$-tuples $\overline{a}\in M^n$.
	ii) $\varphi$ is equivalent modulo $T$ to a formula $\psi\in \text{Form}_{\mathscr{L}}(\sigma)$
i.e., a property is implicitly definable in a theory $T$ of the language $\mathscr{L}(\tau)$ via a formula $\varphi$ of the extended language $\mathscr{L}(\sigma)$ only if that property is explicitly definable in the theory $T$ by a formula $\psi$ in the original language $\mathscr{L}(\tau)$.
## References
[[Model Theoretic Logics.pdf]]
[[Model Theory D.Marker.pdf]]
[Beth definability - Wikipedia](https://en.wikipedia.org/wiki/Beth_definability)