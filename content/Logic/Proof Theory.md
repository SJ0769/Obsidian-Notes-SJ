## Intuition
Proof theory is the syntactic side of model theory (or alternatively, model theory is the semantic side of proof theory).

Proof theory studies proofs as mathematical objects as defined below.
## Formalization
### Fundamental Notions
**Syntactic Consequence:** $\Gamma\vdash \varphi$ asserts that "$\varphi$ is provable from the set of assertions (axioms) $\Gamma$." Syntactic consequences of $\Gamma$ are also called theorems of $\Gamma$.

**Semantic Consequence:** $\Gamma\models \varphi$ asserts that "$\varphi$ is true in all models of the set of assertions $\Gamma$"

This can also be extended for individual sentences (i.e., let $\Gamma$ be a singleton set containing a single sentence).

**Proofs:** A proof is a sequence of formulas in a formal language $\Gamma$, starting with an axiom $\varphi\in \Gamma$ and with each successive element in the sequence being a syntactic consequence of the preceding element

**Note:** Trivially, a theorem or syntactic consequence is not an axiom

**Proof Theory:** A proof theory is a formal language (set of well-formed formulae from a given vocabulary and set of logical symbols) together w/ a set of inference rules.

-------------------------
### Inference Rules
**Propositional Calculus:**
	- **Modus Ponens:** If it is the case that $p\to q$ is true (or alternatively, $p \vdash q$), and $\varphi$ is true, then $q$ is true.
	- **Modus Tollens:** If it is the case that $p\to q$ is true and $\neg q$ is true, then $\neg p$ is true.
	- **Hypothetical Syllogism:** If is the case $p\to q$ and $q\to r$, then it is the case $p\to r$.
	- **Disjunctive Syllogism:** If it is the case $p\vee q$ and $\neg p$ is true, then $q$ is true.
	- **Double Negation Elimination:** $\neg\neg p\equiv p$.

**First-order Logic:**
All the above as propositional calculus, as well as the following:
	- If it is the case that $\varphi$ is true, then $\forall x\varphi$ is true
	- If it is the case that $\varphi$ is true, then $\exists x\varphi$ is true

**Notes:**
- Inference rules are defined in the metalanguage/metatheory.
- Other logics may have a different set of inference rules, especially the case for non-classical logics (these inference rules are detailed in those respective pages, i.e., [Many-valued Logic and Fuzzy Logic](Logic/Many-valued%20Logic%20and%20Fuzzy%20Logic.md)]). These alternative logics also have their own proof theory by extension.

-------------------
## Other
**Equivalent Logical Statements:**
- Material Implication: $p\to q\equiv\neg p\vee q$
- $\neg(p\to q)\equiv p\not\to q\equiv\neg p \wedge q$


**Deduction Theorem:** The deduction theorem is a meta-theorem which asserts the following:
	If $\Gamma\cup\{A\}\vdash B$, then $\Gamma\vdash A\to B$


**Proof trees**
A proof tree is a visual representation of a proof, w/ each node being a theorem (logical consequence) and each brand the application of a particular inference rule (i.e., conjunction, if-then rules, double negation elimination). The 'root' is the desired result you wish to prove.

You first start w/ some premises and then the negation of the conclusion (root). A closed branch is one that ends w/ a contradiction to the premises. If all branches are closed, then it is a 'closed' tree. If a tree is closed, then there is a proof of the conclusion from the initial premises.
## References
[Proof Theory]([Proof theory - Wikipedia](https://en.wikipedia.org/wiki/Proof_theory))
[Many-valued Logic and Fuzzy Logic](Logic/Many-valued%20Logic%20and%20Fuzzy%20Logic.md)
[Rules of Inference](https://en.wikipedia.org/wiki/Rule_of_inference)
