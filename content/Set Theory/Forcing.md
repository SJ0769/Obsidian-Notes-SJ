**Overview:** Forcing is an method to obtain a new model of a (set) theory from an old one.

More precisely it is a method to expand a model $\mathcal{M}$ to a larger model $\mathcal{M}[G]$ via adding a new 'generic' object $G$ to $V$. In this case $\mathcal{M}$ is said to be the 'ground' model, and $\mathcal{M}[G]$ is the generic extension of $\mathcal{M}$. We can also apply this to the universe of sets $V$, where we obtain a larger universe $V[G]$, this poses some philosophical questions about the nature of the universe of sets (i.e., one may argue that $V$ was never the 'true' universe since it could be extended)

**Forcing Relation:**
The forcing relation, '$\Vdash$' (not to be confused w/ the symbol for satisfaction in modal logic, although in some contexts they may be the same) is a relation between the forcing conditions and the sentence of a language, denoted as:
	$p\Vdash \varphi$ ($p$ forces $\varphi$)
The forcing relation is defined in a ground model $\mathcal{M}$ and is a generalization of the notion of satisfaction
	i.e., If $p\Vdash\varphi$ and $\varphi'$ is a logical consequence of $\varphi$ (i.e., $\varphi\vdash\varphi'$), then $p\Vdash\varphi'$

Forcing can be used to obtain different (truth) values for undecidable statements.
	E.g., Forcing can be obtain different values for the continuum hypothesis (CH) for different models of set theory (i.e., $2^{\aleph_{0}}=\aleph_{2}$). Via forcing, we can show that there are models $\mathcal{M, N}$ of set theory such that $\mathcal{M}$ believes CH is true ($2^{\aleph_{0}}=\aleph_{1}$) and where $\mathcal{N}$ believes CH does not hold. This results in the independence of CH (as well as w/ other techniques such as Gödel's constructible universe $L$).

--------------

**Filter:** A filter on a nonempty set $S$ is a collection $F\subset \mathcal{P}(S)$ such that
	i) $S\in F$ and $\emptyset\not\in F$
	ii) If $X\in F$ and $Y\in F$, then $X\cap Y\in F$ (i.e., closed under intersection)
	iii) If $X, Y \subset S, X\in F$, and $Y\subset X$, then $Y\in F$

The intuition of a filter is to 'filter' out sets that are too 'large.' 

An 'ideal' filter on a nonempty set $S$ is a collection $I \subset S$ such that:
	i) $\emptyset\in I$ and $S\not\in I$
	ii) If $X\in I$ and $Y\in I$, then $X\cup Y\in I$
	iii) If $X,Y\subset S, X\in I$, and $Y\subset X$, then $Y\in I$

If $F$ is a filter on $S$, then the set $I=\{S/X|X\in F\}$ is an ideal on $S$. Conversely, if $I$ is an ideal, then $F=\{S/X|X\in I\}$ is a filter. If this is the case, then $F$ and $I$ are 'dual' to each other.

E.g., 
- A trivial filter $F=\{S\}$
- A principal filter: Let $X_{0}$ be a nonempty subset of $S$. The filter $F=\{X\subset S|X_{0}\subset X\}$ is a principal filter.
- Consider the set of all sets that contain $2$ and $3$, then a filter on this set has the following properties:
	- Every superset of a set that contains $2$ and $3$ will also contain $2$ and $3$
	- The intersection of two sets that contain $2$ and $3$ will also contain $2$ and $3$
	- It does not include $\{2\}$ and the set of even numbers

**Lemma:**
i) If $\mathcal{F}$ is a nonempty family of filters on $S$, then $\bigcap\mathcal{F}$ is a filter on $S$
ii) If $\mathcal{C}$ is a $\subset$-chain of filters on $S$, then $\bigcap\mathcal{C}$ is a filter on $S$
iii) If $G\subset\mathcal{P}(S)$ has the ==finite intersection property==, then there is a filter $F$ on $S$ such that $G \subset F$

---------------

We say that $p$ is stronger than $q$ if $p<q$. The intuition behind this is that more (forcing) restrictions are applied to an object and so more information is provided about the object we wish to add to the universe via the generic filter.

If $p$ and $q$ are forcing conditions, and there exists an $r$ such that both $r\leq p$ and $r\leq q$, then $p$ and $q$ are compatible. Otherwise, they are not.

The forcing language (which is defined in the generic or 'base' model, as well as the forcing relation $\Vdash$) contains 'name' for every object in $M[G]$, including a constant $\dot{G}$. It is common notation for $\dot{x}$ to refer to the 'name' of the object $x$. 'Names' act as placeholders for objects which exist in the generic extension and allows us to talk about these objects from w/in the ground model

For $(P,<)$ is a nonempty partially ordered set, we call this set a 'notion' of forcing and its elements are forcing conditions.

**Filters:** A set $F\subset P$ (as defined above) is a filter on $P$ if:
	i) $F$ is nonempty
	ii) if $p\leq q$ and $p\in F$, then $q\in F$
	iii) if $p,q\in F$, then there exists $r\in F$ such that $r\leq p$ and $r\leq q$
A set of conditions $G\subset P$ is generic over $\mathcal{M}$ if:
	i) $G$ is a filter on $P$
	ii) if a set $D$ is dense in $P$ and $D\in M$, then $G\cap D=\emptyset$


**The Generic Model Theorem:** Let $\mathcal{M}$ be a transitive model of $ZFC$ and let $(P, <)$ be a notion of forcing in $\mathcal{M}$. If $G\subset P$ is generic over $P$, then there exists a transitive model $\mathcal{M}[G]$ such that:
	i) $\mathcal{M}[G]\models ZFC$ (i.e., is a model of $ZFC$)
	ii) $M\subset M[G]$ and $G\in M[G]$
	iii) $ORD^{\mathcal{M}[G]}=ORD^{\mathcal{M}}$
	iv) If $\mathcal{N}$ is a transitive model of $ZF$ such that $M\subset N$ and $G\in N$, then $M[G]\subset N$


**The Forcing Theorem:** Let $(P, <)$ be a notion of forcing in the ground model $\mathcal{M}$. If $\varphi$ is a sentence of the forcing language, then for every $G\subset P$ generic over $\mathcal{M}$,
	$\mathcal{M}[G]\models\varphi\iff (\exists p\in G)p\Vdash \varphi$

**Properties of Forcing:** Let $(P, <)$ be a notion of forcing in the ground model $\mathcal{M}$, and let $M^P$ be the class (in $\mathcal{M}$) of all names
	i) 
		a) If $p\Vdash\varphi$ and $q\leq p$, then $q\Vdash\varphi$
		b) For any $p$, either $p\Vdash\varphi$ or $p\Vdash\neg \varphi$, not both.
		c) For every $p$ there is a $q\leq p$ such that $q$ decides $\varphi$ (i.e., either $q\Vdash\varphi$ or $q\Vdash\neg \varphi$)
	ii) 
		a) $p\Vdash\neg\varphi$ if and only if there is no $q\leq p$ such that $q\Vdash\varphi$
		b) $p\Vdash\varphi \wedge \psi$ if and only if $p\Vdash\varphi$ and $p\Vdash\psi$.
		 $p\Vdash\forall x\varphi$ if and only if $p\Vdash\varphi(\dot{a})$ for all $\dot{a}\in M^P$
		c) $p\Vdash\varphi \vee \psi$ if and only if $\forall q\leq p\exists r\leq q$ ($r\Vdash\varphi$ or $r\Vdash\neg \varphi$)
		$p\Vdash\exists x\varphi$ if and only if $\forall q\leq p \exists r\leq q\exists \dot{a}\in M^Pr\Vdash\varphi(\dot{a})$
	iii) If $p\Vdash\exists x\varphi$ then for some $\dot{a}\in M^P, p\Vdash\varphi(\dot{a})$

**Note:** 'Genericity' depends on the ground model


E.g., Adding a new subset of $\omega$
We first define the poset $P=Fn(\omega, 2)$ which consists of all finite partial functions from $\omega$ to $2=\{0, 1\}$. Then, $p\leq q$ (i.e., $p$ is at least as strong of a forcing condition as $q$) if $p \supseteq q$ as functions.
Let $p=\{(0, 1), (1, 0)\}$, this specifies the first two bits of the real number, w/ $r(0)=1$ and $r(1)=0$. Let $q=\{(0, 1)\}$, this only specifies $r(0)=1$.
It can be seen that $p$ further describes the object than the forcing condition $q$, hence $p<q$.

-------------
## Connection to Modal Logic
- All possible worlds of a model $\mathcal{M}$ are realized by a forcing extension $\mathcal{M}[G]$
$\to$ This extends to the 'universe' $V$ and forcing extension $V[G]$

- A statement of set theory $\varphi$ is forcible or possible ($\Diamond\varphi$) if it is true in some forcing extension $\mathcal{M}[G]$ of $\mathcal{M}$.
- A statement of set theory $\varphi$ is necessary ($\square \varphi$) if it holds in all forcing extensions $\mathcal{M}[G]$ of $\mathcal{M}$.
	$\to$ These modal operators are eliminable in set theory as there meaning can be expressed in the usual language of set theory by means of the forcing relation $\Vdash$ (and Boolean values).
	i.e., $\Diamond\varphi\implies$ there is some partial order $\mathbb{P}$ and (forcing) condition $p\in\mathbb{P}$ such that $p\Vdash_{\mathbb{P}}\varphi$ and $\square \varphi\implies$ all partial orders $\mathbb{P}$ and $p\in\mathbb{P}$ we have $p\Vdash_{\mathbb{P}}\varphi$. In this way, $\Diamond\varphi$ and $\square \varphi$ can be interpreted w/ in any models of set theory.

A mixed language of set theory ($ZFC$) w/ modal operators $\Diamond$ and $\square$ w/ the forcing interpretation can be used. Although the modal operators $\Diamond$ and $\square$ are eliminable, they are still retained in order to find out which modal operators obey.
	i.e., $\square \varphi\to \varphi$ is a valid principle of forcing because if $\varphi$ is true in all forcing extensions, then it is true as the universe is a (trivial) forcing extension of itself.

- $\neg \Diamond \varphi \leftrightarrow \square \neg \varphi$ is valid for forcing because a statement $\varphi$ is not forcible if all forcing extensions satisfy $\neg \varphi$.
- The principle $\square \varphi\to\square\square \varphi$ is valid because if $\varphi$ holds in all forcing extensions, then so does $\square \varphi$, since any forcing extension of a forcing extension is a forcing extension (this extends to $n$ number of '$\square$').
- $\square(\varphi\to \psi)\to(\square \varphi\to\square \psi)$ is valid.

A modal assertion is a formula of propositional modal logic (i.e., $\square q_{0}\to q_{0}$) expressed w/ propositional variable $q_{i}$, Boolean connectives $\wedge, \vee,\neg ,\to, \leftrightarrow$ and the modal operators $\Diamond, \square$.


**Definition:** A modal assertion $\varphi(q_{0},\dots,q_{n})$ is a valid principle of forcing if for all sentences $\psi_{i}$ in the language of set theory, $\varphi(\psi_{0},\dots,\psi_{n})$ holds under the forcing interpretation of $\Diamond$ and $\square$.
	$\to$ More specifically, $\varphi(q_{0},\dots,q_{n})$ is a $ZFC$-provable principle of forcing if $ZFC$ proves all such substitution instances $\varphi(\psi_{0},\dots,\psi_{n})$. This can be generalized to larger theories w/ the notion of $T$-provable notion of forcing. For any model $\mathcal{M}\models ZFC$, the modal assertion $\varphi(q_{0},\dots,q_{n})$ is a valid principle of forcing in $\mathcal{M}$ if all substitution instances $\varphi(\psi_{0},\dots,\psi_{n})$ are true in $\mathcal{M}$. So $\varphi$ is a valid principle of forcing if it is valid in the universe $V$ of all sets, and the $ZFC$-provable principles of forcing are those provable in $ZFC$ as schemes to be valid. 


**Theorem:** Every assertion in the theory $S 4.2$ is $ZFC$-provable principle of forcing.

**Proof:** The modal theory $S 4.2$ is obtained from the axioms:

| $K$  | $\square(\varphi\to \psi)\to(\square \phi\to\square \psi)$ |
| ---- | ---------------------------------------------------------- |
| Dual | $\neg \Diamond\varphi\to\square\neg \varphi$               |
| $S$  | $\square \varphi\to \varphi$                               |
| $4$  | $\square \varphi\to\square\square \varphi$                 |
| $.2$ | $\Diamond\square \varphi\to\square\Diamond\varphi$         |
by closing under modus ponens and necessitations (from $\varphi$, deduce $\square \varphi$). We observe that each axiom is a valid principle of forcing and as a scheme in $ZFC$. The $ZFC$-provable principles of forcing are closed under modus ponens as well as necessitation because is $\varphi(\psi_{0},\dots,\psi_{n})$ holds in all models of set theory, then so does $\square \varphi(\psi_{0},\dots,\psi_{n})$.

| $5$   | $\Diamond \square \varphi\to \varphi$                                                                                                                |
| ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| $M$   | $\square\Diamond\varphi\to\Diamond\square \varphi$                                                                                                   |
| $W 5$ | $\Diamond\square \varphi\to(\varphi\to \square \varphi)$                                                                                             |
| $.3$  | $\Diamond\varphi \wedge\Diamond\psi\to(\Diamond(\varphi \wedge\Diamond\psi)\vee\Diamond(\varphi\wedge\psi)\vee\Diamond(\psi \wedge\Diamond\varphi))$ |
| Dm    | $\square(\square(\varphi\to\square \varphi)\to \varphi)\to (\Diamond\square \varphi\to \varphi)$                                                     |
| Grz   | $\square(\square(\varphi\to\square \varphi)\to \varphi)\to \varphi$                                                                                  |
| Löb   | $\square(\square \varphi\to \varphi)\to \square \varphi$                                                                                             |
| $H$   | $\varphi\to\square(\Diamond\varphi\to \varphi)$                                                                                                      |
If $ZFC$ is consistent then none of the above modal assertions are a valid $ZFC$-provable principle of forcing.

If $ZFC$ is consistent, then none of the modal theories :$\text{S5, S 4W5, S4.3, S4.2.1, S4.1, Dm.2, Dm, K4H, GL}$ or $\text{Grz}$ are $ZFC$-provable principles of forcing, and are all invalid in the constructible universe $L$. The modal theories $\text{S4.1, S4.2.1, K4H, GL}$ and $\text{Grz}$ are invalid principles of forcing in every set theory.

If $ZFC$ is consistent, then the $ZFC$-provable principles of forcing are exactly those in the modal theory $\text{S4.2}$.
## References
[[Multiverse vs Universe View]]
[[Modal Logic]]
[[Philosophy of Sets & Proper-Classes]]
[[Trees]]
[jech_03](Set%20Theory%20+%20Model%20Theory/jech_03.pdf)
[The Modal Logic of Forcing](Set%20Theory%20+%20Model%20Theory/The%20Modal%20Logic%20of%20Forcing.pdf)
