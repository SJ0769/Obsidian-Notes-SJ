## Intuition
Proof theory is the syntactic side of model theory (or alternatively, model theory is the semantic side of proof theory).

Proof theory studies proofs as mathematical objects as defined below.
## Formalization
**Syntactic Consequence:** $\Gamma\vdash \varphi$ asserts that "$\varphi$ is provable from the set of assertions (axioms) $\Gamma$." Syntactic consequences of $\Gamma$ are also called theorems of $\Gamma$.

**Semantic Consequence:** $\Gamma\models \varphi$ asserts that "$\varphi$ is true in all models of the set of assertions $\Gamma$"

This can also be extended for individual sentences (i.e., let $\Gamma$ be a singleton set containing a single sentence).

**Proofs:** A proof is a sequence of formulas in a formal language $\Gamma$, starting with an axiom $\varphi\in \Gamma$ and with each successive element in the sequence being a syntactic consequence of the preceding element

**Note:** Trivially, a theorem or syntactic consequence is not an axiom


A proof theory is a formal language (set of well-formed formulae from a given vocabulary and set of logical symbols) together w/ a set of inference rules.


**Modus Ponens:** If it is the case that $\varphi\to \psi$ is true (or alternatively, $\varphi \vdash \psi$), and $\varphi$ is true, then $\psi$ is true.

**Generalization:** If it is the case that $\varphi$ is true, then $\forall x\varphi$ is true.

## References
