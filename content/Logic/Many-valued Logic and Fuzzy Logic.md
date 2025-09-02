## Paracomplete Logic 
Paracomplete logics reject the law of excluded middle, that is, for a proposition $p$, either $p$ or $\neg p$ is true, and be extension the law of bivalence (every statement has exactly one truth value, that being true or false). Because of this, paracomplete logic have 3 truth values $S = \{F, U, T\}$ where $F$= "false", $U=$ "undefined" (i.e., neither true or false), and $T=$ "True."

If a formula $\varphi$ has truth value $U$, then $\mathcal{M}\not\models \varphi$ and $\mathcal{M}\not\models\neg \varphi$ for $\mathcal{M}$ is a model, and $v(\varphi)=v(\neg\varphi)=B,$ where $'v'$ is the valuation scheme (a valuation function assigning truth values to formulas). It remains true that if $v(\varphi)=T$, then $v(\neg \varphi)=F$ and vice versa.

Examples of paracomplete logics are Kleene's 3-valued logic, denoted $K_{3}$, and Łukasiewicz logic, denoted $L_{3}$ (this logic in particular was generalized to $n$-many truth values and furthermore $\aleph_{0}$-many truth values).
### Truth Tables

| A   | $\neg$ A |
| --- | -------- |
| F   | T        |
| U   | U        |
| T   | F        |
## Paraconsistent Logic
Paraconsistent logics are those which allow contradictions (i.e., $T \vdash (p \vee \neg p)$) w/out devolving into triviality (i.e., proving all statements of the language) via rejecting the principle of explosion, where any proposition can be inferred from a contradiction.

This is done by rejecting or modifying either the disjunctive introduction and/or the disjunctive syllogism (see [Proof Theory](Logic/Proof%20Theory.md))
	i.e., Paraconsistent logics reject the law of non-contradiction (LNC), that is, 'both $p$ and $\neg p$ cannot both be true'

In the same vain as paracomplete logic, paraconsistent logic achieves this with the additional truth value $B$ = 'both true and false.' Although, rather than truth value 'gaps', this is a truth value 'gluts'

Examples of paraconsistent theories: $LP$ (the logic of paradox), $RM_{3}$, which have truth values 
$S =${$F,B,T$}.
The logic $FDE$ (first-degree entailment) is both paraconsistent and paracomplete, having truth values $S =$ {$F,U,B,T$}

If $M\models \varphi$, and $\varphi$ has the truth value $'B'$ ($v({\varphi})=B$), then $\mathcal{M}\models \varphi$ and $\mathcal{M} \models \neg \varphi$ (or $\mathcal{M} \models (\varphi \wedge \neg \varphi)$), and $v(\varphi)=v(\neg \varphi)=B$. It also remains true that if $v(\varphi)=T$, then $v(\neg \varphi)=F$ and vice versa
($v(\varphi)=F$, then $v(\neg \varphi)=T$).

$B=T\cap F$ (for $T$ is the set of all true statements, $F$ is the set of all false statements, and $B$ is the set of true and false statements). 

==Mention exact specifications of paraconsistent and paracomplete theories.==


**Application to Set Theory:**
Consider the Comprehension Schema and Extensionality Principle
$\exists y\forall x(x \in y \leftrightarrow A)$
$\forall x(x\in y\leftrightarrow x\in z)\to y=z$

Inputting $A = 'y\not\in y'$ into the Comprehension Schema and instantiating the existential quantifier to an arbitrary object 'r' gives:

$\forall y(y\in r\leftrightarrow y\not\in y)$

Instantiating the universal quantifier to 'r' gives

$r\in r\leftrightarrow r\not\in r$

It then follows that $r\in r \wedge r\not\in r$
Thus, set hood can also be treated paraconsistently

## Fuzzy Logic
Fuzzy logic is a further extension of infinite-valued logic which attributes a unique truth state to every real number in the interval $[0,1]$. Thus, this logic allows $2^{\aleph_{0}}$-many truth values
$\to$ Applied to set theory, you have degrees of membership.

Maximum amount of possible truth states a logic can have?
$\rightarrow$ No limit, not necessarily bounded by the interval $[0,1]$ (i.e., $2^{\aleph_{0}}$ truth-states) as new systems of assigning truth values can be thought of.

i.e., 
- consider the field of surreal numbers where the interval $[0,1]$ is now a proper-class and assign a truth value to each $a\in [0,1]$.
- Assigning truth values to each ordinal $\alpha\in ORD$

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