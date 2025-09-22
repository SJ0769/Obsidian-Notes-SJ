## Intuition
Proof theory is the syntactic side of model theory (or alternatively, model theory is the semantic side of proof theory).

Proof theory studies proofs as mathematical objects as defined below.
## Formalization
### Fundamental Notions
**Syntactic Consequence:** $\Gamma\vdash \varphi$ asserts that "$\varphi$ is provable from the set of assertions (axioms) $\Gamma$." Syntactic consequences of $\Gamma$ are also called theorems of $\Gamma$.

**Semantic Consequence:** $\Gamma\models \varphi$ asserts that "$\varphi$ is true in all models of the set of assertions $\Gamma$"
	The semantic relation '$\models$' deals w/ models and what is true w/in those models (i.e., $\Gamma\models\phi$ is $\phi$ correspond to the models where  holds). Thus, the semantic relation is based off of and w/ respect to models.

This can also be extended for individual sentences (i.e., let $\Gamma$ be a singleton set containing a single sentence).


**Proofs:** A proof is a sequence of formulas in a formal language $\Gamma$, starting with an axiom $\varphi\in \Gamma$ and with each successive element in the sequence being a syntactic consequence of the preceding element

**Note:** Trivially, a theorem or syntactic consequence is not an axiom



**Proof Theory:** A proof theory is a formal language (set of well-formed formulae from a given vocabulary and set of logical symbols) together w/ a set of inference rules.

**What is a 'valid' proposition?**
A proposition $P\vdash Q$ is valid if the truth of $Q$ follows from the premise $P$. Otherwise it is invalid if it is not (i.e., $P$ is true yet the conclusion $Q$ is false), in this case we derive a contradiction and assign the statement as '$\bot$'. Note that this is validity in the context of inference, there are other forms of validity in logic.

**Principle of Explosion:** The principle of explosion asserts that any proposition can be inferred or proven from a contradiction
	The following is a formal proof of the principle of explosion:
	- Premise: $P \wedge\neg P$
	- Conjunction Elimination: $P$
	- Conjunction Elimination: $\neg P$
	- Disjunctive Introduction: $P \vee Q$
	- Disjunctive Syllogism $Q$
	For $P \wedge \neg P$ to be true, both $P$ and $\neg P$ have to be true, we may consider either $P$ or $\neg P$ and consider another statement $Q$. From this we can derive the statement $P \vee Q$, but since $\neg P$ is true, then $P$ must be false and so for $P \vee Q$ to be true, then $Q$ must be true. Thus, we derive any statement from an inconsistent one.

An argument is sound if the premise is true and the conclusion is true. Thus, a sound argument is necessarily true.

A valid proposition does include arguments where the premise is false and the conclusion follows from the premise (in this case it is a valid but unsound argument).
i.e., Suppose $\neg P$ and $Q$ are true, then the argument $P\vdash Q$ is valid although unsound.

proving anything from a contradiction as in the principle of explosion.

**Notes:**
- A sentence is syntactically valid if it is a WFF as according to its syntactic rules for forming sentences (otherwise it is just a string of symbols).
- A sentence is semantically valid if it obeys the logics semantic laws (i.e., does not imply a contradiction).

-------------------------
### Inference Rules
**Propositional Calculus:**
	- **Modus Ponens:** If it is the case that $p\to q$ is true (or alternatively, $p \vdash q$), and $\varphi$ is true, then $q$ is true.
	- **Modus Tollens:** If it is the case that $p\to q$ and $\neg q$, then $\neg p$.
	- **Hypothetical Syllogism:** If is the case $p\to q$ and $q\to r$, then it is the case $p\to r$.
	- **Disjunctive Syllogism:** If it is the case $p\vee q$ and $\neg p$, then $q$.
	- **Double Negation Elimination (DNE):** $\neg\neg p\equiv p$.

**First-order Logic:**
All the above as propositional calculus, as well as the following:
	- $\forall x \phi(x)\to \phi(a)$, i.e., if it is the case for all $x$ that $\phi(x)$, then it is the case that $\phi(a)$ for some instance $a$
	- $\phi(a)\to \exists x \phi(x)$, i.e., if it is the case that $\phi(a)$ (where $a$ is a witness of $\phi$), then there exists some $x$ such that $\phi(x)$ (most notably $a$)
(This is assuming natural-deduction style proof systems, in Hilbert-style proof systems there are axioms defining the quantifiers). Hilbert-style proof systems only contain modus ponens as an inference rule and instead contain 'logical axioms', as opposed to natural-deductive proof systems, (which only has inference rules). Thus, when dealing w/ a logical system we have two different sets of axioms, a set of logical axioms which are located w/in the (Hilbert-style) proof system, and a set of non-logical axioms (e.g., axioms of ZFC). In such a case ZFC runs on the Hilbert style proof system (even though both live in the object language) as some sort of logical machinery in order to determine its theorems.

**Notes:**
- Inference rules, syntactic rules, semantic rules are all defined in the metalanguage/metatheory.
- Other logics may have a different set of inference rules, especially the case for non-classical logics (these inference rules are detailed in those respective pages, i.e., [Many-valued Logic](Logic/Many-valued%20Logic.md)]). These alternative logics also have their own proof theory by extension.

-------------------
## Other
**Equivalent Logical Statements:**
- Material Implication: $p\to q\equiv\neg p\vee q$
- $\neg(p\to q)\equiv\neg p \wedge q$ which is informally equivalent to $p\not\to q$
	The intuition behind this is that $p\to q$ is only false when the premise $p$ is true and $q$ is false (hence $\neg q$ is true).
- Biconditional: $p\leftrightarrow q\equiv(p\to q)\wedge(q\to p)$

**Note:** Material equivalence $p\leftrightarrow q$ is where both $p$ and $q$ have the same truth value, this is a weaker form of logical equivalence which is tautological ($p$ will always have the same truth value as $q$ across all models. The confusion arises specifically because both are written the same.


**Deduction Theorem:** The deduction theorem is a meta-theorem which asserts the following:
	If $\Gamma\cup\{A\}\vdash B$, then $\Gamma\vdash A\to B$


**Interpolation Theorem:** The interpolation theorem is a result between formulae of different logical theories in the language of the propositional calculus. It can be expressed as follows:
	Let,
	 $\varphi=\neg(P\wedge Q)\to(\neg R \wedge Q)$
	 $\psi=(S\to P)\vee(S\to\neg R)$
	 It can be observed that $\varphi$ tautologically implies $\psi$ as $\varphi\equiv(P\wedge\neg R)\wedge Q$. Thus, if $\varphi$ holds then so does $\rho=(P\wedge \neg R)$. $\rho$ then implies $\psi$. This means that $\rho$ is the interpolant of $\varphi$ and $\psi$ as the propositional variables $P\wedge\neg R$ occur in both $\varphi$ and $\psi$.



**Proof trees**
A proof tree is a visual representation of a proof, w/ each node being a theorem (logical consequence) and each brand the application of a particular inference rule (i.e., conjunction, if-then rules, double negation elimination). The 'root' is the desired result you wish to prove.

You first start w/ some premises and then the negation of the conclusion (root). A closed branch is one that ends w/ a contradiction to the premises. If all branches are closed, then it is a 'closed' tree. If a tree is closed, then there is a proof of the conclusion from the initial premises.

## References
[Proof Theory]([Proof theory - Wikipedia](https://en.wikipedia.org/wiki/Proof_theory))
[Many-valued Logic](Logic/Many-valued%20Logic.md)
[Rules of Inference](https://en.wikipedia.org/wiki/Rule_of_inference)
[Craig's Interpolation Theorem](https://en.wikipedia.org/wiki/Craig_interpolation)
