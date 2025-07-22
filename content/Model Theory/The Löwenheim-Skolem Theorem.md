## Result
If a first-order theory $T$ in a countable language (i.e., $|\tau|\leq \aleph_{0},$ for $\tau$ is the vocabulary) has an infinite model ($|N|\geq \aleph_{0}$) and no finite models ($|N| < \aleph_{0}$), then for every infinite cardinal $\kappa, T$ has a model $\mathcal{M} \models T$ such that $|M| = \kappa$. That is, $T$ has a model of every infinite cardinality.

**Note:** For a structure $\mathcal{M},$ then the domain of $\mathcal{M}$, dom($\mathcal{M}$), is denoted as $M.$

The above is an implication of the Löwenheim-Skolem theorem which asserts that for every vocabulary $\tau,$ every infinite $\tau$-structure $\mathcal{M}$ (i.e., $|M|\geq \aleph_{0}$) and every infinite cardinal $\kappa \geq |\tau|,$ there exists a $\tau-$structure $\mathcal{N}$ such that $|N| = \kappa$ and such that

- If $\kappa < |M|,$ then $N$ is an elementary substructure of $M$ (Downwards Löwenheim-Skolem Theorem)
- If $\kappa \geq |M|,$ then $N$ is an elementary extension of $M$ (Upwards Löwenheim-Skolem Theorem)

![](/static/attachments/LS-T.png)
[Löwenheim–Skolem theorem]([Löwenheim–Skolem theorem - Wikipedia](https://en.wikipedia.org/wiki/L%C3%B6wenheim%E2%80%93Skolem_theorem))

**Downwards  Löwenheim-Skolem Theorem (Proof):**
If $\mathcal{M}$ is an $\mathcal{L}$-structure such that $\kappa\geq|\mathcal{L}|$ and $\kappa\leq |M|$, then there exists an elementary substructure $\mathcal{N\preceq M}$ such that $|N|=\kappa$.

Let $\mathcal{M}$ be a model of some set of $\mathcal{L}$-sentences $T$ ,we start by considering an arbitrary subset $M_{0} \subseteq M$ such that $|M|=\kappa$.
For any $\mathcal{L}$-formula $\varphi$ and tuple $a_{1},\dots,a_{n}\in M$ w/ $\mathcal{M}\models \exists x \varphi(a_{1},\dots,a_{n})$

We must add a witness to $M_{0}$ in order to apply the Tarski-Vaught test.
We extend $M_{0}$ to $M_{1}$ by adding witnesses to $M_{0}$. We can iterate this process so that we add witness to $M_{i}$ (for $i\in \mathbb{N}$) to obtain $M_{i+1}$.

We then define a universe $N:= \bigcup\limits_{i\in \mathbb{N}} M_{i}$
We must then verify that $N\subseteq M$ and apply the Tarski-Vaught test.


**Upwards  Löwenheim-Skolem Theorem (Proof):**
If $\mathcal{M}$ is an infinite $\mathcal{L}$-structure and $\kappa\geq$max$\{|\mathcal{L}|, |M|\}$, then there exists an elementary extension $\mathcal{N\succeq M}$ such that $|N|= \kappa$

We start with considering the $\mathcal{L}$-theory $T$.
We expand the language $\mathcal{L}$ by adding infinitely many constant symbols $c_{i}\in C$ such that $|C|=\kappa$. Let this language be denoted by $\mathcal{L^*}$

Let $S =\{c_1\not=c_{2}|c_{1} \text{ and } c_{2} \text{ are distinct elements of } C\}$.

We then consider the set of sentences $T\cup S$ in the expanded language $\mathcal{L^*}$.

Assume that $T$ has an infinite model $\mathcal{M}$. Then every finite subset of $T\cup S$ is satisfiable in the structure $\mathcal{M}$ (this is because since the domain $M$ is infinite, it has enough elements to satisfy the finite numbers of axioms from $S$).

Then by the Compactness Theorem, $T\cup S$ is satisfiable, and by the downward Löwenheim-Skolem Theorem it is satisfiable in some structure $\mathcal{N}$ of cardinality $\leq \kappa$.

Note that $|\mathcal{L^*}|=\kappa$ as $|\mathcal{L}|+\kappa=\kappa$ since $\aleph_{0}\leq|\mathcal{L}|\leq|\mathcal{L^*}|$. Hence, any model of $S$ has cardinality $\geq \kappa$, and so $\mathcal{N}$ has cardinality $\kappa$ (this is because the axiom $c_{i}\not=c_{j}$ in $S$ 'forces' us to interpret the w/ distinct objects as they are distinct constants). Then restrict $\mathcal{N}$ to the original language $\mathcal{L}$.

-----------------------
## Further Clarification
The minimum cardinality of an elementary sub-structure (and further more a model of $T$) than can be shown to exist using the Löwenheim-Skolem Theorem is given by:
	max$\{\aleph_{0}, |\tau|\}$ or $|\tau|+\aleph_{0}$
This derived from the result that if $\mathcal{M}$ is any infinite model of a first-order theory $T$ over a language of cardinality $\kappa$, (i.e., $|\mathcal{L}=\kappa|$) and $\mathcal{A} \subseteq_{S} \mathcal{M}$ is a substructure. Then there exists $\mathcal{N\preceq M}$ such that $|N| \leq |A| + \kappa$.

**Notation:** '$\subseteq_{S}$' denotes the substructure relation, if $\mathcal{A \subseteq_{S} B},$ then $\mathcal{A}$ is a substructure of $\mathcal{B}$

**Recall:** If the vocabulary $\tau$ is finite ($|\tau|=n$ for some $n \in \mathbb{N},$ or $|\tau| < \aleph_{0}$), then the language is infinite, in particular the language is countably infinite $|\mathcal{L}|=\aleph_{0}.$ In all cases the language is infinite.
$|\mathcal{L}|= |\tau|+\aleph_{0}$

- $\tau \subset \mathcal{L}$, as the language $\mathcal{L}$ is the set of logical & non-logical symbols (there are always $\aleph_{0}-$many logical symbols due to having an infinite number of variables,...etc., hence the $+\aleph_{0}$ )

Implications:
- No first-order theory with an infinite model has a unique model up to isomorphism (i.e., $T$ is not categorical).

**Lindström's Theorem:** First-order logic is the strongest logic with the compactness theorem and the downwards Löwenheim-Skolem Theorem property (i.e., having a Löwenheim number of $\aleph_{0}$)


The Löwenheim-Skolem Theorem fails for second-order logic due to second-order logic having 'access' to the semantics of set theory, allowing it to distinguish between of the infinite. Intuitively, second-order logic is based on the semantics of set theory (meaning it has a notion of cardinality up to a certain point, see [[The Hanf Number]]). It can be shown in the metatheory that first-order logic cannot distinguish between models of countable and uncountable cardinals.


The Hanf number of first-order $\mathscr{L}_{\omega, \omega}$ theory $T$ w/ a vocabulary $\tau$ of size $|\tau|=\kappa$, is $\kappa +\aleph_{0}$.
(i.e., $h(\mathscr{L}_{\omega, \omega})=\kappa+\aleph_{0}$ for $|\tau|=\kappa$, or $\kappa$ if the language $|\mathcal{L}|=\kappa$). This is also the case for the Löwenheim number of a logic and other extensions such Löwenheim-Skolem number and Löwenheim-Skolem-Tarski number.
$\to$ This is because if the logic $\mathscr{L}$ is of an uncountable signature, then there are 'gaps' in the cardinals for which the Löwenheim-Skolem Theorem applies to. The Löwenheim-Skolem Theorem can only guarantee models of size $\leq|\mathcal{L}|$, and not just elementary substructures or extensions of a model. Thus, since there are 'cardinality gaps' there does not necessarily exist models of any infinite cardinality.

E.g., if $|\tau|=\kappa>\aleph_{0}$, then for a first-order theory $T$ w/ vocabulary $\tau$ may not have have models of cardinality $\lambda$ for $\aleph_{0}\leq \lambda<\kappa$ (assuming it does not have finite models).

The statement "if a first-order theory $T$ has a model an infinite model then it has models of every infinite cardinality" is only true if $h(\mathscr{L})=\aleph_{0}$ which is only true for a countable vocabulary $\tau$.

## References
[[Model Theory/The Löwenheim Number]]
[[The Hanf Number]]
[[The Compactness Theorem]]
[[Logics, Structures & Models]]
[[Categoricity]]
[[Classification Theory]]
[Proof of Upward Löwenheim-Skolem Theorem]([logic - Proof of Upward Lowenheim-Skolem Theorem - Mathematics Stack Exchange](https://math.stackexchange.com/questions/2684914/proof-of-upward-lowenheim-skolem-theorem))
[Math 557]([Math 557 – The Löwenheim-Skolem Theorems](https://www.youtube.com/watch?v=RX3gMdvxLfE))
