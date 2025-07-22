## The Compactness Theorem
**The Compactness Theorem** asserts the following:
	A theory $T$ has a model if and only if every finite sub-theory $S \subseteq T$ has a model.
This is equivalent to a logic $\mathscr{L}$ having the strong compactness property.


Before doing the proof of the Compactness Theorem, there is an important result that is needed:
	**Result:** If $\phi$ is an $\mathcal{L}$-formula and $T\models \phi$, then there exists some finite $T_{0}\subseteq T$ such that $T_{0}\models \phi$


**Proof (Compactness Theorem):**
	We will start w/ the contrapositive of the Compactness Theorem: if $T$ is unsatisfiable, then there is some $T_{0}\subseteq T$ that is unsatisfiable.
	Since $T$ is not satisfiable, then $T\models \phi\wedge\neg \phi$ for some sentence $\phi$ of the (first-order) language $\mathcal{L}$.
	By the completeness theorem, $T\vdash(\phi \wedge\neg \phi)$
	$\implies$ There is some proof w/ assumptions (axioms) in $T$ and conclusion $\phi \wedge\neg \phi$.
	However, proofs (in first-order logic) are finite objects, and so there is some $T_{0}\subseteq T$ such that $T\vdash\phi \wedge\neg \phi$ by the above result.
	Then by the soundness theorem, $T_{0}\models \phi \wedge \neg \phi$, and so $T_{0}$ is satisfiable as required.


**Theorem (strengthened compactness):** If $T$ is a finitely-satisfiable $\mathcal{L}$-theory (i.e., for every finite subset $T_{0}\subseteq T$, then there exists a structure $\mathcal{M}$ such that $\mathcal{M}\models T_{0}$) and $\kappa$ is an infinite cardinal w/ $\kappa\geq|\mathcal{L}|$, then there is a model $\mathcal{N}\models T$ such that $|N|\leq \kappa$.
	**Proof:** 

## Other Notions of Compactness
**$\kappa$-Compactness:**
	A logic $\mathscr{L}$ is $\kappa$-compact if for a set of sentences $T \subseteq \mathscr{L}[\tau]$, such that $|T|\leq \kappa$, has a model if and only if every finite sub-theory $S \subseteq T$ (i.e., $|S|<\aleph_{0}$) has a model.

**The Countable Compactness Property:**
	A logic $\mathscr{L}$ is countably compact if for a countable theory $T\subseteq \mathscr{L}[\tau]$ (i.e., $|T| \le \aleph_{0}$) has a model if and only if every finite sub-theory $S \subseteq T$ has a model.
	$\to$ i.e., the case where $\kappa=\aleph_{0}$

**$(\kappa, \lambda)$-compactness:** 
	A logic $\mathscr{L}$ is $(\kappa, \lambda)$-compact if for all vocabularies $\tau$ and $\Phi \subseteq \mathscr{L}[\tau]$ such that $|\Phi|<\kappa$, if each subset $\Psi\subseteq \Phi$ such that $|\Psi|<\lambda$ has a model, then $\Phi$ has a model
## References
[[Model Theoretic Logics.pdf]]
[Model Theory D.Marker](Set%20Theory%20+%20Model%20Theory/Model%20Theory%20D.Marker.pdf)
[Soundness & Completeness](Model%20Theory/Soundness%20&%20Completeness.md)