## Consistency Results
We say that a theory $S$ is consistent relative to another theory $T$ if $Con(T) \to Con(s)$
$\to$Where $Con(T)$ denotes that $T$ does not prove a contradiction (i.e., $T \vdash (\varphi \wedge \neg \varphi)$ for some $\varphi$ in the language of $T$)

Consistency Strength

We say that a theory $T$ is stronger than some theory $S$, denoted $T \geq S$ ,if $T \vdash Con(S)$


**Note:** Consistency results are meta theorems

## Interpretability Hierarchy
Let $T_{1}$ and $T_{2}$ denote recursively enumerable sets of axioms. We say that $T_{1}$ is interpretable in $T_{2}$, denoted $T_{1}\leq T_{2}$, if there is a translation $\tau$ from the language of $T_{1}$ to the language of $T_{2}$ such that for each sentence $\varphi$ of $T_{1}$, $T_{1}\vdash \varphi \implies T_{2}\vdash\varphi$.

$T_{1}< T_{2}$ if $T_{1}\leq T_{2}$ and $T_{2} \not\leq T_{1}$ ($T_{2}$ can interpret $T_{1}$, but $T_{1}$ cannot interpret $T_{2}$)

$T_{1}\equiv T_{2}$, denotes that $T_{1}$ and $T_{2}$ are mutually interpretable, that is, $T_{1}\leq T_{2}$ and $T_{2}\leq T_{1}$ (i.e., they interpret each other). The equivalence class of all theories mutually interpretable with $T$ is called the interpretability degree of $T$.


Connection to Relative Consistency...

## Proof-Theoretic Ordinals
An alternative way to determine the consistency strength of a theory.

The proof theoretic ordinal of a theory $T$ is the supremum of the order types of all ordinal notations that $T$ can prove is well-founded. That is, the supremum of all ordinal $\alpha$ for which there exists a notation $o$ such that $T$ proves that $o$ is an ordinal notation.

Let $\alpha$ be the proof theoretic ordinal of the theory $T$ and $\beta$ the proof-theoretic ordinal of another axiomatic theory $S$. If $\alpha \leq \beta$, then $T\leq S$ in consistency strength ($S$ is at least as strong as $T$).

Theories with the same proof-theoretic ordinals are equiconsistent.

**Note:** By necessity, the ordinal notations must be recursive, and so the supremum of proof-theoretic ordinals is the Church-Kleene ordinal $\omega_{1}^{CK}$. If a theory has a proof-theoretic ordinal equal or greater than $\omega_{1}^{CK}$, then it is inconsistent.

## References
[[The Hierarchy of Large Cardinals]]
[[Model Theory/Ultraproducts & Ultrafilters]]
[Ordinal Analysis]([Ordinal analysis - Wikipedia](https://en.wikipedia.org/wiki/Ordinal_analysis))
