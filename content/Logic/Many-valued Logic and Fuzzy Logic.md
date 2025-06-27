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
Paraconsistent logics are those which allow contradictions (i.e., $T \vdash (p \vee \neg p)$) w/out devolving into triviality (i.e., proving all statements of the language) via the principle of explosion.

This is done by rejecting either the disjunctive introduction and/or the disjunctive syllogism
	The following is a formal proof of the principle of explosion:
	- Premise: $P \wedge\neg P$
	- Conjunction Elimination: $P$
	- Conjunction Elimination: $\neg P$
	- Disjunctive Introduction: $P \vee Q$
	- Disjunctive Syllogism $Q$
	For $P \wedge \neg P$ to be true, both $P$ and $\neg P$ have to be true, we may consider either $P$ or $\neg P$ and consider another statement $Q$. From this we can derive the statement $P \vee Q$, but since $\neg P$ is true, then $P$ must be false and so for $P \vee Q$ to be true, then $Q$ must be true. Thus, we derive any statement from an inconsistent one.

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

## References
[[Truth in Non-Classical Logics]]
[[Kripke's Theory of Truth]]
[Fuzzy Logic]([Fuzzy logic - Wikipedia](https://en.wikipedia.org/wiki/Fuzzy_logic))