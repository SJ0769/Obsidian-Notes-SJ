A Theory $\Gamma$ is a nonempty set of $\mathscr{L}(\tau)$-sentences (where $\mathscr{L}(\tau)$ is a logic of vocabulary $\tau$), the sentences $\varphi\in \Gamma$ are called 'axioms.'
## Some notes on the nature of theories
**Consistent Theories:** A theory $T$ is consistent if $T \vdash \neg(\phi \wedge \neg \phi)$, or equivalently, $T\vdash (\phi \vee \neg \phi)$. That is, for a formula $\phi \in \mathscr{L}[\tau]$, $T$ can only prove either $p$ or $\neg p$, not both.
	$\to$ Inconsistent theories (i.e., T is inconsistent if T ($\vdash \phi \wedge \neg \phi$)) are complete as a consequence of the principle of explosion, the theory T becomes trivial, proving all statements w/in the language (including all $\phi$ and $\neg \phi$).

----------------------

**Complete Theories:** A theory $T$ is complete if $T\vdash \phi \vee\neg \phi$ for all $\phi\in\mathscr{L}[\tau]$.

E.g., the simplest example of a complete theory is to consider the set of all sentences true in the structure $\mathcal{M}$, denoted Th($\mathcal{M}$).

----------------------

**Deductively closed systems:** A theory T is deductively closed if every logical consequence (i.e., a theorem of T) is an axiom, that is, T is deductively closed if $T\vdash\phi$ and $\phi\in T$. This $\implies$ that we effectively cannot prove any 'new' statements which are not axioms.
$\rightarrow$ Recall: $\phi \in T$ is defined as "$\phi$ is an axiom of T."

-----------------

**Maximal Theories**: A maximal theory T is a theory T where either $\phi \in T$ or $\neg \phi \in T$ for any $\phi\in\mathscr{L}[\tau],$ this $\implies$ that either $\phi$ or $\neg \phi$ is an axiom. A maximal theory can also be defined as having the properties of being both complete and deductively closed.
$\rightarrow$ This is related to the maximal consistent extension of T

Note: Maximal theories are taken to be consistent

- Inconsistent theories are not necessarily maximal or deductively closed, as only the addition of a single contradictory statement is needed in order to prove any statement via explosion.
- $\rightarrow$ i.e., Consider the inconsistent theory $PA+\text{"0=1"}$

**Lemma:** Suppose $T$ is a maximal and finitely-satisfiable $\mathcal{L}$-theory. If $T_{0}\subseteq T$ is finite and $T_{0}\models \varphi$, then $\varphi\in T$.
	**Proof:** If $\varphi\not\in T$, then, since $T$ is maximal, $\neg \varphi\in T$. But this $\implies T\cup\{\neg \varphi\}$ is a finite unsatisfiable subset of $T$. Thus, a contradiction.


A maximal consistent extension of $T$ is an expansion of $T$ to a maximal theory $T'$ where formulas of the language are added as axioms to $T$ without there being inconsistencies/contradictions.
	An incomplete theory (that is, there is some $\varphi$ such that $\varphi$ is undecidable) will have multiple possible maximal consistent extensions as $T \cup \{\varphi\}$ and $T \cup \{\neg \varphi\}$ are both consistent.

## References
[[Logics, Structures & Models]]
[[Proof Theory]]
[[Model Theory D.Marker.pdf]]
[The Compactness Theorem](Model%20Theory/The%20Compactness%20Theorem.md)