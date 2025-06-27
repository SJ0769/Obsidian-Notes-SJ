## Results
$I(T,\kappa)$ denotes the number of isomorphism type of cardinality $\kappa$ of a theory $T$, this is also called the 'spectrum' of $T$

- $I(T, \kappa)=1 \implies$ $T$ has one unique model up to isomorphism, that is, $T$ is $\kappa$-categorical (all models of $T$ of cardinality $\kappa$ are isomorphic).
- By Morley's Categoricity Theorem, if $I(T, \kappa)=1$ for $\kappa$ is an uncountable cardinal and $T$ is a theory in a countable language, then $I(T, \lambda)=1$ for all $\lambda>\aleph_{0}$.
- Shelah's generalization, if $I(T, \kappa)=1$ for $\kappa>|\mathcal{L}|$, then $I(T, \lambda)=1$ for all $\lambda>|\mathcal{L}|$.
- The Löwenheim-Skolem Theorem $\implies$ that $I(T, \kappa)$, the number of isomorphism types of the first-order theory $T$ (in a countable language) of cardinality $\kappa$, is non-zero (i.e., $I(T, \kappa)\geq 1$) for an infinite cardinal, then it is nonzero for all infinite cardinals
	**Note:** This isn't constant throughout cardinals, if $I(T, \kappa)=\mu$ and $I(T, \lambda)=\delta$ such that $\kappa$ and $\lambda$ are infinite cardinals and $\kappa \not=\lambda$, then you can possibly have $\mu\not=\delta$. That is, the number of isomorphism types can change depending on the cardinal.
	This is due to the fact that for a model $\mathcal{M}$ and two elementary extensions $\mathcal{N}_{1} \succeq \mathcal{M}$ and $\mathcal{N}_{2} \succeq \mathcal{M}$ such that $|\mathcal{N}_{1}|=|\mathcal{N}_{2}|$ $\not\implies$ $\mathcal{N}_{1}\cong\mathcal{N}_{2}$ as the exact structure may not match, only the structure of $\mathcal{N}_{1}$ and $\mathcal{N}_{2}$ restricted to the domain $M$ of $\mathcal{M}$ will match, but not necessarily the same structure (although these structure will be elementary equivalent).
- If $I(T, \kappa)=0$, then $T$ is either inconsistent (and so has 'void' models, i.e., $T$ has no models) or $T$ only has finite models (categoricity and the notation $I(T, \kappa)$ is only considered for infinite cardinals, i.e., $\kappa\geq\aleph_{0}$).
## Łoś–Vaught test
**Łoś–Vaught test:** If a first-order $\mathscr{L}_{\omega, \omega}$ theory of vocabulary $\tau$ is $\kappa$-categorical for some $\kappa>|\tau|$ and has no finite models, then it is complete.

Working in the empty language (i.e., w/ just equality =), there is a single second-order sentence $\phi$ asserting that "the universe is infinite and does not have cardinality exactly $\aleph_{1}$". The theory $\{\phi\}$ is categorical in every cardinality except $\aleph_{1}$ but not complete due to the existence of non-standard models from assertions further restricting the size of the universe (i.e., "the universe is countable").
	$\to$ So you can find theories $T$ which are categorical in some infinite $\kappa<|\tau|$ and are not complete as it is not categorical in $\lambda \geq|\tau|$.

The Löwenheim-Skolem Theorem theorem is integral to the Łoś–Vaught test, thus, the logic must be $\mathscr{L}_{\omega, \omega}$ in order to show that for models $\mathcal{M}\models T$ and $\mathcal{N}\models T$ such that they are elementary equivalent ($\mathcal{M\equiv N}$), there are elementary extensions $\mathcal{M'}$ and $\mathcal{N'}$ such that $\mathcal{M'\cong N'}$.

As stated above, a condition for the Łoś–Vaught test is that $T$ has no finite models as there are $\mathscr{L}$-sentence $\varphi$ which states the size of the model. Furthermore, there is an $\mathscr{L}$-sentence $\phi$ that completely characterizes the model. Consider the following cases:
	i) Models $\mathcal{M}\models T$ and $\mathcal{N}\models T$ such that $M<N$;
	ii) $|M|<|N|$ where $\mathcal{M}$ is a finite model and $\mathcal{N}$ is a infinite model
For case i), then $\mathcal{M\cong N}$. For case ii) there is a contradiction as $\mathcal{N}$ would have to satisfy the formula $\phi$ characterizing $\mathcal{M}$ but it is also true that $|M|<|N|$, so they cannot be isomorphic.



**Proof (Łoś–Vaught test):**
We proceed by contradiction, assume $T$ is a theory which is not complete and has no finite models and is $\kappa$-categorical for $\kappa>|\tau|$.

Since $T$ is not complete, there must exist some sentence $\varphi$ such that $T\not\models\varphi$ and $T\not\models\neg\varphi$ (i.e., $\varphi$ is an independent statement).

$\implies$ That the theories $T\cup\{\varphi\}$ and $T\cup\{\neg \varphi\}$ have models.

Since $T$ has no finite models, then $T\cup\{\varphi\}$ and $T\cup\{\neg \varphi\}$ have only infinite models.

Since these theories have infinite models, and the language is of cardinality $\kappa$, then the (Upwards) Löwenheim-Skolem Theorem can be applied.

From the Upward Löwenheim-Skolem Theorem one can prove that there are models $\mathcal{M}_{\varphi}$ and $\mathcal{M}_{\neg \varphi}$ of $T\cup\{\varphi\}$ and $T\cup\{\neg \varphi\}$, respectively, of cardinality $\kappa$.

It can be observed that the models $\mathcal{M}_{\varphi}$ and $\mathcal{M}_{\neg\varphi}$ disagree about the truth value of the sentence $\varphi$.
$\implies$ That $\mathcal{M}_{\varphi}\not\cong\mathcal{M}_{\neg\varphi}$ as isomorphisms preserve the truth value of sentences.

Thus, $T$ is not $\kappa$-categorical. A contradiction, so $T$ must be complete by necessity.

## More Results
**Never Two Theorem:**
$I(T, \aleph_{0})\not=2$
i.e., Given $T$ is a first-order theory $T$ in a countable language then it cannot have exactly two isomorphism types for countably infinite models (i.e., there cannot be exactly two non-isomorphic models up to isomorphism).

**Morley:** If $I(T, \aleph_{0})$ is infinite, then it must equal $\aleph_{0}$ or $\aleph_{1}$ or $2^{\aleph_{0}}$. If the continuum hypothesis is false, it is not know if $I(T, \aleph_{0})=\aleph_{1}$. The Vaught conjecture asserts that $\aleph_{0}<I(T, \aleph_{0})<2^{\aleph_{0}}$

**Morley's Problem:** For $T$ is complete first-order theory, $I(T, \kappa)$ is non-decreasing in $\kappa$ for uncountable $\kappa$ (i.e., if $\kappa$ and $\lambda$ are uncountable cardinals such that $\kappa<\lambda$, then $I(T, \kappa)\leq I(T, \lambda)$).

**Shelah's (nigh) Complete Solution:**
For a complete first-order theory $T$ w/in a countable language, then either $I(T, 2^\kappa)$ for all uncountable cardinals $\kappa$, or $I(T, \aleph_{\xi})<\beth_{\omega_{1}}(|\xi|+\aleph_{0})$ for all ordinals $\xi$.


*Talk about stability in Classification Theory*
## References
[[Embeddings, Elementary Embeddings, and Isomorphisms]]
[[Categoricity]]
[[The Löwenheim-Skolem Theorem]]
[Łoś–Vaught test]([Łoś-Vaught Test - ProofWiki](https://proofwiki.org/wiki/%C5%81o%C5%9B-Vaught_Test))
[Spectrum of a Theory]([Spectrum of a theory - Wikipedia](https://en.wikipedia.org/wiki/Spectrum_of_a_theory))

