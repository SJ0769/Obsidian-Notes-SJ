**Intuition:** The Hanf number is a measure of (fragment of) the upwards Löwenheim-Skolem property of a logic

**Pinning Down Cardinals:**
$\Phi \subseteq \mathscr{L}[\tau]$ pins down the cardinal $\kappa$ if and only if $\Phi$ has a model of cardinality $\kappa,$ but such that $\Phi$ does not have models of arbitrarily high cardinalities (i.e., does not have a model of size $\lambda \geq \kappa$).

Let $h_{\kappa}(\mathscr{L})$ be the supremum of all cardinals that can be pinned down by a set of $\mathscr{L}$-sentences of power $\kappa$.

More formally,
Denote $\lambda_{\Phi}$ as the cardinals $\lambda$ pinned down by the set of $\mathscr{L}$-sentences $\Phi$. Then the Hanf number is defined as follows:
	$h_{\kappa}(\mathscr{L})=$sup{$\lambda_{\Phi}|\Phi$ is a set of $\mathscr{L}$-sentences $\leq \kappa$}
	$\to$ sup$_{\kappa \in CARD}h_{\kappa}(\mathscr{L})$ is defined as the supremum of all cardinals $\lambda_{\Phi}$ pinned down by an arbitrary set of $\mathscr{L}$-sentences (equivalent to the supremum of all $h_{k}(\mathscr{L})$ for each $\kappa$).
	A majority of logic will not have such a number since increasing the size of the vocabulary $\tau$, via adding additional non-logical symbols, will usually increase $h_{\kappa}(\mathscr{L})$

The Hanf number of a logic $\mathscr{L}$, denoted $h(\mathscr{L})$, is the case where $\kappa=1$, i.e., $h(\mathscr{L})=h_{1}(\mathscr{L})$
	That is, the supremum of all cardinals pinned down by an arbitrary $\mathscr{L}$-sentence $\varphi$.

Let $h(\mathscr{L})=\mu,$ if an arbitrary set of $\mathscr{L}$-sentences $\Phi$ has model $\mathcal{M}$ of power $\kappa \geq \mu$, the $\Phi$ has a model of size $\lambda$ for all $\lambda\geq\kappa$.

If $\mathscr{L}$ does not have a Hanf number, then $h(\mathscr{L})=\infty$

Per the definition of the Hanf number, if an arbitrary set of $\mathscr{L}$-sentences $\Phi$, of power $\leq \kappa$, has a model $\mathfrak{A} \models \Phi$ such that $\mathfrak{A} \geq h_{\kappa}(\mathscr{L})$, then $\Phi$ has a models of arbitrarily size $\lambda \geq h_{\kappa}(\mathscr{L})$. So intuitively, the Hanf number is the point/cardinal at which the existence of a model of this size or greater then guarantees arbitrarily size (i.e., the point at which models start to have arbitrarily large size).

**Note:** $h(\mathscr{L})\leq h_{\kappa}(\mathscr{L})$ always

**Proposition:** If $\Phi \subseteq \mathscr{L}[\tau]$  is an arbitrary set of $\mathscr{L}$-sentences such that $|\Phi|\leq \kappa$ and $\Phi$ has arbitrarily large models below $h_{\kappa}(\mathscr{L})$ (that is $\mathfrak{A} \models \Phi$ and such that $|\mathfrak{A}|= \lambda$  for every $\lambda <h_{k}(\mathscr{L})$), then $\Phi$ has arbitrarily large models, that is, $\Phi$ has a model of every cardinality.
	$\to$ i.e., The pattern doesn't stop

If $h(\mathscr{L})=\infty$, then models of arbitrarily large cardinality are not guaranteed. An implication of this is the existence of maximally large (w/ respect to cardinality) models of an arbitrary set of $\mathscr{L}$-sentences, $\Phi$. This existence of maximal models already occurs if all models of $\Phi$ have power less than $h(\mathscr{L})=\mu$ (for $\mu$ is some cardinal), then it will have maximally sized models. In first-order logic, if a theory has no infinite models, then it will have some maximally large model which is finite. $h(\mathscr{L})> \aleph_{0}$ allows for maximal models which are infinite in size
$\to$ This is equivalent to the logic $\mathscr{L}$ having no fragments of the upwards Löwenheim-Skolem property.
$\to$The larger $h(\mathscr{L})$ is, the more cardinals $\mathscr{L}$ can characterize between. If $h(\mathscr{L})=\infty$, then $\mathscr{L}$ can characterize (pinning down) all cardinals.
	$\implies$ the logic $\mathscr{L}$ can differentiate between the cardinalities of it's own models. i.e., in
	first-order logic, a consequence of the Löwenheim-Skolem theorem is that we can have uncountable models satisfying things such as "I am countable" (and vice versa), by pinning down more cardinals (and so increasing $h(\mathscr{L}))$), the more accurate the internal view of the models will match the external view w/ respect to its size. 

**Extension:**
A stronger form of Hanf number, $H_{\kappa}(\mathscr{L})$ can be defined which asserts that if an arbitrary set of sentences $\Phi$ of power $\leq \kappa$ has a model $\mathfrak{A}$ such that $|\mathfrak{A}|\geq H_{\kappa}(\mathscr{L})$ than said model has an elementary extensions $\mathfrak{B} \succeq \mathfrak{A}$ of arbitrarily large cardinality.
	$\to$ By said definition we derive $h_{\kappa}(\mathscr{L})\leq H_{\kappa}(\mathscr{L})$

**Hanf Number Results:**
- $h(\mathscr{L}_{\kappa^+, \omega})<\beth_{(2^\kappa)^+}$
- The Hanf number of first-order logic in vocabulary $\tau$ of size $\kappa$ is max$\{\tau, \aleph_{0}\}$

## References
[[The Löwenheim-Skolem Theorem]]
[[The Löwenheim number]]
[[Model Theoretic Logics.pdf]]
[[Categoricity]]
