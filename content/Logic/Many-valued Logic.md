Note that for the following logics modified proof systems must be used due to their non-classical nature.
## Paracomplete Logic 
Paracomplete logics reject the law of excluded middle, that is, for a proposition $p$, either $p$ or $\neg p$ is true, and be extension the law of bivalence (every statement has exactly one truth value, that being true or false). Because of this, paracomplete logic have 3 truth values $S = \{F, U, T\}$ where $F$= "false", $U=$ "undefined" (i.e., neither true or false), and $T=$ "True."

If a formula $\varphi$ has truth value $U$, then $\mathcal{M}\not\models \varphi$ and $\mathcal{M}\not\models\neg \varphi$ for $\mathcal{M}$ is a model, and $v(\varphi)=v(\neg\varphi)=B,$ where $'v'$ is the valuation scheme (a valuation function assigning truth values to formulas). It remains true that if $v(\varphi)=T$, then $v(\neg \varphi)=F$ and vice versa.

The liar sentence is avoided by assigning it the truth value $U$, $v(L)=U$

Examples of paracomplete logics are Kleene's 3-valued logic, denoted $K_{3}$, and Łukasiewicz logic, denoted $L_{3}$ (this logic in particular was generalized to $n$-many truth values and furthermore $\aleph_{0}$-many truth values).

Applied to something like set theory, you could have statements which asserts that $\neg(x\in X\wedge x\not\in X)$, thus we sets where it not defined whether it contains a certain element or not, something akin to partial membership (see *Fuzzy Logic* below) but not quite.
### Truth Tables

| **P** | **$\neg$P** |
| ----- | ----------- |
| F     | T           |
| U     | U           |
| T     | F           |

## Paraconsistent Logic
Paraconsistent logics are those which allow contradictions (i.e., $T \vdash (p \vee \neg p)$) w/out devolving into triviality (i.e., proving all statements of the language) via rejecting the principle of explosion, where any proposition can be inferred from a contradiction.

This is done by rejecting or modifying either the disjunctive introduction and/or the disjunctive syllogism (see [Proof Theory](Logic/Proof%20Theory.md))
	i.e., Paraconsistent logics reject the law of non-contradiction (LNC), that is, 'both $p$ and $\neg p$ cannot both be true.' However, paraconsistent logic does not reject the law of excluded middle (LEM), but does reject double negation elimination (DNE).

In the same vain as paracomplete logic, paraconsistent logic achieves this with the additional truth value $B$ = 'both true and false.' Although, rather than truth value 'gaps', this is a truth value 'gluts'

Examples of paraconsistent theories: $LP$ (the logic of paradox), $RM_{3}$, which have truth values 
$S =${$F,B,T$}.
The logic $FDE$ (first-degree entailment) is both paraconsistent and paracomplete, having truth values $S =$ {$F,U,B,T$}. In the logic $FDE$, the liar sentence is assigned the truth value '$B$' in order to satisfy the truth biconditional (T-schema) w/out devolving into an (invalid) contradiction.

If $M\models \varphi$, and $\varphi$ has the truth value $'B'$ ($v({\varphi})=B$), then $\mathcal{M}\models \varphi$ and $\mathcal{M} \models \neg \varphi$ (or $\mathcal{M} \models (\varphi \wedge \neg \varphi)$), and $v(\varphi)=v(\neg \varphi)=B$. It also remains true that if $v(\varphi)=T$, then $v(\neg \varphi)=F$ and vice versa
($v(\varphi)=F$, then $v(\neg \varphi)=T$).

$B=T\cap F$ (for $T$ is the set of all true statements, $F$ is the set of all false statements, and $B$ is the set of true and false statements).

**Note:** Undefined statements do not satisfy Tarski's T-schema: $\varphi\leftrightarrow T(\lceil \varphi \rceil)$ as it is true if and only if it is undefined (hence truth gap), the T-schema requires that either the truth state $T$ or $F$ is outputted and so fail when a statement is undefined. However, this does not lead to a contradiction and rather the 'truth gap' is admitted. This is in contrast to paraconsistent logic (see below) which does satisfy the truth biconditional as the liar sentence is true if and only if it is false, thus, it is assigned the truth value $B,$ "both true and false" (truth glut). In general for sentences which derive $T(\varphi)\leftrightarrow T(\neg \varphi)$ (given that $v(\varphi)\not=U$, or rather as Kripke would put it, $\varphi$ is a 'grounded' sentence), then $v(\varphi)=B$.
### Application of Paraconsistency to Set Theory
Consider the Comprehension Schema and Extensionality Principle
$\exists y\forall x(x \in y \leftrightarrow A)$
$\forall x(x\in y\leftrightarrow x\in z)\to y=z$

Inputting $A = 'y\not\in y'$ into the Comprehension Schema and instantiating the existential quantifier to an arbitrary object 'r' gives:

$\forall y(y\in r\leftrightarrow y\not\in y)$

Instantiating the universal quantifier to 'r' gives

$r\in r\leftrightarrow r\not\in r$

It then follows that $r\in r \wedge r\not\in r$
Thus, set hood can also be treated paraconsistently
### Categoricity in Paraconsistent Logics

**Theorem:** For any language $\mathscr{L}$, every set of $\mathscr{L}$-sentences has an $LP, RM_{3}$ and $FDE$-model (as they are paraconsistent, inconsistent set of $\mathscr{L}$-sentences have a model)

**Theorem:** For a language $\mathscr{L}$, let $\mathfrak{A}^{\mathscr{L}}$ denote the unique model of $\mathscr{L}$ up to isomorphism
	$Th^{LP}(\mathfrak{A}^{\sim}) \supseteq Th^{CL}(\mathfrak{A})$
$\to$ DLO is not $\aleph_{0}$-categorical w/ respect to the class of $LP$-structures

**Theorem:** If some theory $T$ is categorical in some cardinal $\kappa$ in classical logic and has no finite models, then it is $\kappa$-categorical w/in $K_{3}$ and $L_{3}$
$\to$ DLO is $\aleph_{0}$-categorical w/ respect to the class of $K_{3}$ and $L_{3}$-structures
The paracomplete logics $K_{3}$ and $L_{3}$ preserve categoricity (namely, Morley's categoricity theorem is preserved).
### Truth Tables

| **A** | **$\neg$A** |
| ----- | ----------- |
| F     | T           |
| B     | B           |
| T     | F           |

## Fuzzy Logic
Fuzzy logic is a further extension of infinite-valued logic which attributes a unique truth state to every real number in the interval $[0,1]$ where the truth state '$0$' is interpreted as "completely false" and '$1$' is interpreted as "completely true", all number between these two are partial truths. Thus, this logic allows $2^{\aleph_{0}}$-many truth values or 'degrees' of truth. The truth values in fuzzy logic are 'degrees of truth' (hence the intention to map them to real numbers in the interval $[0,1 ]$) rather than truth states which are inherently 'truth gluts' or 'truth gluts' or further extensions (see below).
$\to$ Applied to set theory, you have degrees of membership.


For $v(\varphi)=x$ and $v(\psi)=y$ for some $x,y\in[0,1]$, then truth states are assigned as follows:
	- $v(\neg \varphi)=1-x$
	- For $\rho=(\varphi \wedge \psi)$, then $v(\rho)=\text{min}\{x, y\}$
	- For $\rho=(\varphi \vee \psi)$, then $v(\rho)=\text{max}\{x, y\}$
	(This is the same as how it is defined in paracomplete and paraconsistent logics).
In fuzzy logic '$\wedge$' is referred to as the t-norm operator, '$\vee$' is referred to as the t-conorm operator. These are adaptations of the conjunction and disjunction to fuzzy logic where they are continuous truth functions. The t-norm and t-conorm evaluations can be different than those given above in a different fuzzy logic system where they are interpreted differently.


Fuzzy logic is used to measure 'vagueness' and to model things like probability.

The liar's sentence $L$ is assigned the value $0.5$.
	$v(L)=|1-v(L)|=1-v(L)$ (can reject negative case as that results in a contradiction intuitively).
	$\implies 2v(L)=1$ or 
	$\therefore v(L)=0.5$
The general strategy for how fuzzy logic avoids analogues of the liar sentence is too assign another truth value to them. It has been shown that for a finite set of liar sentences, there is a solution where they all stabilize. However it is unknown for an infinite set of liar sentences (which can be constructed even from a countable vocabulary). Fuzzy logic is propositional (i.e., no quantifiers) and hence cannot define Gödel encoding and so a truth predicate cannot be defined.

--------------------
Maximum amount of possible truth states a logic can have?
$\rightarrow$ No limit, not necessarily bounded by the interval $[0,1]$ (i.e., $2^{\aleph_{0}}$ truth-states) as new systems of assigning truth values can be thought of.

i.e., 
- consider the field of surreal numbers where the interval $[0,1]$ is now a proper-class and assign a truth value to each $a\in [0,1]$.
- Assigning truth values to each ordinal $\alpha\in ORD$.
	**Question:** Does having arbitrarily-many truth values reduce to trivialism?
	No but our model theory will break down as the valuation function $v:\text{Form}_{\mathscr{L}}\to V$ requires that the set of truth states is a set (i.e., no longer set-definable). This problem persists even when considering a proper-class of truth states via higher-order class theories (and so the valuation function is a class-definable one), this is because mathematics cannot capture Cantor's absolute infinity (i.e., arbitrarily-many).

We also have generalizations to $n$-many truth values for $n<\omega$, and $\aleph_{0}$-many truth values.


Different truth states can be modelled using modal logic w/in the metatheory (i.e., a different truth state for every combination of worlds where a sentence $\varphi$ is true).
i.e., the $B=\{w_{1} ,w_{2}\in W|v_{w_{1}}(\varphi)=T \wedge v_{w_{2}}(\varphi)=F\}$, $U$ may also be defined like this, although it is obvious that these two truth states cannot both be in a language using this modal definition. Thus, we have effectively meta-mathematically constructed a new truth state from a bivalent system. Further definitions of truth states would require the meta-language to have more truth states.

New truth states can be made from conjunctions of previous ones and truth table combinatorics.
E.g., we define the new truth state 'inaccessible' as $I=B\wedge U$ (both true and false as well as neither true and false). An extended paraconsistent system would use this truth value in its language.

## References
[[Truth in Non-Classical Logics]]
[[Kripke's Theory of Truth]]
[[Modal Logic]]
[Proof Theory](Logic/Proof%20Theory.md)
[Fuzzy Logic]([Fuzzy logic - Wikipedia](https://en.wikipedia.org/wiki/Fuzzy_logic))