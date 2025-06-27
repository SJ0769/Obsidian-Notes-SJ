## Categoricity + Key Theorems
A theory $T$ is categorical is there exists a unique model of $\mathscr{M} \models T$ up to isomorphism, that is, if $\mathscr{M}\models T$ and $\mathscr{N} \models T$, then $\mathscr{M} \cong \mathscr{N}$.

This implies that all models of $T$ are of the same size and furthermore, are elementary equivalent (categoricity $\implies$ completeness and under most conditions $\kappa$-categoricity $\implies$ completeness, see Łoś–Vaught test in [[Classification Theory]])

- There are no first-order categorical theories due to [[The Löwenheim-Skolem Theorem]] (there are no maximal infinite models)

**Note:** You can have first-order theories categorical in finite cardinalities (as the Löwenheim-Skolem Theorem does not apply), although these cases are often ignored, categoricity is only considered in infinite cardinals.

A theory $T$ is $\kappa-$categorical if there exists a unique model $\mathscr{M} \models T$ of cardinality $\kappa$ up to isomorphism
$\rightarrow$ if $\mathscr{M}\models T, \mathscr{N} \models T$  and |$\mathscr{M}$| = |$\mathscr{N}$|=$\kappa$, then$\mathscr{M} \cong \mathscr{N}$
$\rightarrow$ This is equivalent to $I(T, \kappa)=1$, that is, there is exactly one isomorphism type of cardinality $\kappa$ of the theory T (see [[Classification Theory]])

**Morley's Categoricity Theorem:** If a first-order ($\mathscr{L}_{\omega, \omega}$)-theory $T$ in a countable vocabulary 
($|\tau|\leq\aleph_{0}$), then is $\kappa$-categorical in some uncountable cardinal $\kappa> \aleph_{0}$, then it $\lambda$-categorical for all $\lambda>\aleph_{0}$. That is, if $T$ is categorical in some uncountable cardinal, then it is categorical in all uncountable cardinals.

**Shelah's Generalization** If a first-order ($\mathscr{L}_{\omega, \omega}$) theory $T$ in a vocabulary $\tau$ such that $|\tau|=\kappa\geq\aleph_{0}$, and if $T$ is $\lambda$-categorical for $\lambda\geq \kappa$, then it is $\mu$-categorical for all $\mu>\kappa$. That is, if $T$ is a first-order theory in an (uncountable) vocabulary of size $\kappa$, and is categorical in some cardinal $\lambda\geq \kappa$, then it is categorical in all cardinals greater than $\kappa$.

We say that a theory $T$ is $\omega$-categorical if it categorical in the cardinal $\aleph_{0}$. It can be shown, via Morley's categoricity theorem, that if a first-order theory $T$ in a countable language is $\omega$-categorical and $\kappa$-categorical for some uncountable cardinal $\kappa$, then $T$ is categorical in all infinite cardinalities.
## Other Notes
As mentioned previously, first-order theories cannot be categorical for infinite cardinalities. Although, for extensions of first-order logic $\mathscr{L}_{\omega, \omega}$ such as higher-order logic can infinitary logic $\mathscr{L}_{\kappa, \lambda},$ there can be as the Löwenheim-Skolem Theorem does not apply to these logics.

E.g., Consider second-order Peano Arithmetic, denoted $PA^2$. This theory is categorical, namely, all of it's models are isomorphic to the standard structure $\mathcal{N}=\langle\mathbb{N}, \mathcal{P}(\mathbb{N}), +, \cdot, S(x), 0\rangle$. This means that all of it's models have power $2^{\aleph_{0}}$ ($|\mathbb{N}|+|\mathcal{P}(\mathbb{N})|= \aleph_{0}+2^{\aleph_{0}}=2^{\aleph_{0}}$).

**Note:** Obviously, categoricity in all (infinite) cardinals is not the same as (full) categoricity as you can be categorical in all infinite cardinals in first-order logic but a theory cannot be fully categorical in first-order logic.

In this sense, we can have maximal models (w/ respect to cardinality) as if all models of $T$ are isomorphic, then all models of $T$ have the same cardinality, and thus the cardinality of models of $T$ are bounded and not arbitrarily large.

## References
[[Classification Theory]]
[[The Löwenheim-Skolem Theorem]]
[[Model Theory D.Marker.pdf]]