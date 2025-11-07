## Background + Syntax
Second-order logic allows for the quantifiers $\exists, \forall$ to range over subsets of sets (or rather subsets of elements), and so a model of second-order logic (SOL) would have domain $\langle M, \mathcal{P}(M) \rangle$.

$n^{th}$-order logic generalizes this to $n$-iterations of the powerset over the initial domain (quantifiers have range over $n$-nested subsets) and so a domain looks like $\langle M, \mathcal{P}(M), \mathcal{P}(\mathcal{P}(M)),\dots \rangle$ (a model will have this as the domain + extra syntax such as predicates symbols $X, Y, Z$ and predicates which predicate over predicates $X^2, Y^2, Z^2,\dots$etc.)

----------------------

**Note:** 'Higher-order logic' can also refer to $\omega^{th}$-order logic.

$n^{th}$-order logic for $n > 1$ lack the compactness (and by extension 
[[The Löwenheim-Skolem Theorem]]) as well as the completeness theorem since they are further extensions of first-order logic.

----------------------------------

The higher-order syntax is cumulative in that $n+1^{\text{th}}$-order syntax is $n^{\text{th}}$-syntax with additional $n+1^{\text{th}}$ variables.
	i.e., $3^{\text{rd}}$-syntax is $2^{\text{nd}}$-order syntax with the addition of $3^{\text{rd}}$-order variables and allowing for quantifiers to range over such variables.
	$\to$ $2^{\text{nd}}$-order variables are predicates and functions, so $3^{\text{rd}}$-order variables are predicate of predicates or functions of functions.
	E.g., $3^{\text{rd}}$-order logic over the structure $\mathcal{N}_{1}=\langle \mathbb{N}, +, \cdot \rangle$ is the same as the $2^{\text{nd}}$-order logic over the structure $\mathcal{N}_{2}=\langle \mathcal{P}(\mathbb{N}), \mathbb{N}, E, +, \cdot\rangle$, where $E \subseteq \mathbb{N}\times\mathcal{P}(\mathbb{N})$ is the relation $nEr\iff n\in r$. This is the same as first-order logic over the structure $\mathcal{N}_{3}=\langle\mathcal{P}(\mathcal{P}(\mathbb{N})), \mathcal{P}(\mathbb{N}), \mathbb{N}, E', E, +, \cdot\rangle$, where $E' \subseteq \mathcal{P}(\mathbb{N})\times\mathcal{P}(\mathcal{P}(\mathbb{N}))$ is the relation $rE'X \iff r\in X$. Moreover, $2^{\text{nd}}$-order logic over $\mathcal{N}_{1}$ is the same as the first-order logic over $\mathcal{N}_{2}$.

**Why is quantifying over predicates equivalent to quantifying over subsets of sets?**
When quantifying over predicates of arity $n$, we are essentially quantifying over relation over 
$n$-tuples of elements from the domain (i.e., quantifying over $R$ for $R\subseteq M^n$, for $M$ is our domain.
While something like first-order logic is only quantifying over elements $\alpha\in M$.

-------------------------------------------------------
### Monadic Second-Order Logic
Monadic second-order logic (MSOL) is a fragment of SOL where quantification is restricted over unary (or otherwise called 'monadic') predicates. This $\implies$ that MSOL can only quantify over sets of elements, rather than predicates and subsets of set as we are only quantifying over relations $R\subseteq M$.

From this intuition we can extend this to more expressive fragments of SOL, i.e., binary second-order logic, via restricting quantification over predicates of arity $2$ (quantifying over $R \subseteq M^2$).

-------------------------------------
## Full Semantics
Quantifiers range over all sets and functions of an appropriate sort. As mentioned above, a model of second-order logic w/ full semantics require that we quantify over the full powerset.
$\to$ If there are $\kappa$ objects, then that doesn't necessarily mean that there are $2^\kappa$ properties.


See [[Tarski's Theory of Truth]], higher-order logic can be interpreted as a meta-hierarchy with
${n+1}^{th}$-order logic being the metalanguage of $n^{th}$-order logic. Technically, this construction is cumulative, with $n^{th}$-order logic is the metalanguage (i.e., can interpret and formalize the semantics) of all $m$-order logic for $n>m$.
## Henkin Semantics
Henkin semantics is an alternative form of semantics of higher-order theories. The interpretation of the first-order quantifiers are the same as in standard semantics, but the interpretation of higher-order quantifiers differ. In Henkin semantics, the quantifiers are allowed to range over an arbitrary proper subset of the powerset $S \subset \mathcal{P}(M)$. Henkin semantics are also many-sorted (as in standard semantics), e.g., a model of second-order set theory in Henkin semantics would have domain $\langle  M, S, \in\rangle$.

The intuition behind this is that only 'required' objects and properties exists. Thus, we are restricting what we can quantify over.

The 'meaning' of higher-order domains is (only) partly determined by an explicit axiomatization. Henkin semantics is in fact a kind of many-sorted first-order semantics (that is, Henkin semantics can be reduced into many-sorted first-order logic, unlike full semantics of higher-order logics which cannot be reduced). Where there are a class of models of the axioms, instead of the semantics being fixed to just the standard model as in the standard semantics. A model in Henkin semantics will provide a set of sets or set of functions as the interpretation of higher-order domains.

Since Henkin semantics is effectively a many-sorted first-order semantics, the completeness and compactness theorems hold for it. Since the Löwenheim-Skolem Theorem also holds for Henkin semantics, Lindström's Theorem tells us that "Henkin models are first-order in disguise."

This means if we were to interpret something like second-order Peano arithmetic in Henkin semantics, then it would be effectively first-order and no longer categorical (by consequence of the Löwenheim-Skolem Theorem).

The distinction between full semantics and Henkin semantics for SOL is analogous to the distinction between provability in $ZFC$ and truth in the universe of sets $V$, in that the former obeys model-theoretic properties like the aforementioned theorems, and the latter has categoricity.
i.e., We cannot meaningfully tell whether the $V$ defined in $ZFC$ is the 'real' $V$, but if we 
re-formalize $ZFC$ w/in $ZFC$ then we can note that the re-formalized $ZFC$ has countable models and cannot be categorical.

- A common choice is the set of definable subsets $Def(S)\subseteq \mathcal{P}(S)$

**Note:** The choice of $S \subset \mathcal{P}(M)$ can be arbitrary, meaning we have many possible options to construct a Henkin model (from some method). Consider third-order models and beyond, we can have multiple different methods to 'choose' each domain, that is, doesn't have to be consistent for very domain of each order.
i.e., Consider third-order logic in the language $\tau=\{\in\}$ w/ Henkin semantics, a model of this theory would look as follows:
	$\langle M, N, S, \in \rangle$
we could have $N = Def(M)\subseteq \mathcal{P}(M)$ and $S = \mathcal{P}(N)/\{\emptyset\}$. Also for a third-order theory, we could have it be full second-order syntax in 'disguise' as well, i.e., $N = \mathcal{P}(M)$ is the full powerset, and $S$ is some arbitrary subset of $\mathcal{P}(N)$.
## Other
**Relation to set theory:** 
Set theory allows us to translate any sentence of higher-order logic into a first-order one in the language of sets ($\tau=\{\in\}$) due to the following:

- Set theory can be interpreted as $\alpha^{\text{{th}}}$-order logic for $\alpha$ is an ordinal, where sentences can quantify over sets of all rank. This allows for an embedding from sentences of $\alpha^{th}$-order logic into set theory
	$\to$ That is, for any formula $\varphi$ of $\alpha^{\text{th}}$-order logic, there is a formula $\psi(x)$ in $ZFC$ such that $\mathcal{M}\models \varphi \iff \psi(\mathcal{M})$, for $\mathcal{M}$ is some structure.

- Each initial rank segment of the universe $V_{\alpha}$ can be interpreted as a domain of $\alpha^{\text{th}}$-order objects.
	i.e., $V_{0}$ is the empty set $\emptyset$ , $V_{1}$ is the domain of first-order objects, $V_{2}$ for second-order objects,...

**Note:** Set theory isn't obviously equivalent to $\alpha^{\text{th}}$-order logic, but rather that each individual $V_{\alpha}$ as a domain and a translation amongst sentences (the actual syntax itself is different as you are missing higher-order variables,...,etc.).

The purpose of second-order set theory (i.e., $MK$ and $NBG$) is to have the second-order syntax w/in the language of set theory. This allows for proper-classes to be objects which can be quantified over (an object separate from the notion of set).

Many-sorted first-order logic can be interpreted as type theory ($STT$) as predicated ranging over different sorts correspond to 0-types, 1-types,...,etc. and expressions of $STT$ over distinct type levels (recall: iterative, not cumulative). This is different then the intricacies of higher-order logic which introduce new variables for which subsets of sets,...,etc. can be quantified over.


There is a clear distinction between syntax and semantics, a system cannot talk about any interpretation of itself (by Gödel's Incompleteness Theorems). Even if we can interpret it to be doin that, it is still an interpretation and not reality.
$\to$ We can 'interpret' that a system cannot talk about any interpretations about itself.

- A foundational formal system has to be one w/ a countable proof verifier (or equivalently, a theorem generator).
	- $\to$ Full semantics $PA^2$ is categorical, but the theory of $\mathbb{N}$ is incomputable. Thus, this notion is incompatible with $PA^2$ (full semantics).
Therefore, SOL will not suffice for many as an adequate foundation of mathematics and so must be a mathematical notion residing in our metatheory. Thus, no system captured by an object in the metatheory can 'pin down' the 'true' natural numbers because the mathematical notion of $\mathbb{N}$ itself is merely an object in the metatheory.

- Any 'reasonable' metatheory can prove (via the incompleteness theorems), that if the metatheory itself is consistent, then the metatheory has a model that is non-isomorphic to $\mathbb{N}$.
	$\to$ The categoricity of full semantics $PA^2$ is an 'illusion', while in Henkin semantics there is no illusion of categoricity.

**Interesting case of theory and metatheory:**
Consider where the object theory is Quine's New Foundation ($NF$) and the metatheory is $ZFC$.
	$\to$ The notion of a 'set' will have to be a metatheoretic one, otherwise there is merely a syntactic translation between the theories.
It is impossible for the set $U:=\{x|x=x\}$ in $NF$ to be a set in $ZFC$ w/ the same members since $U\in U$ in $NF$, which is contrary to the foundation of $ZFC$, there is a 'conflict' between the object ($NF$) theory and metatheory ($ZFC$) about the notion of 'set'. This causes the metatheory to view the object theory as inconsistent ($NF$ is not consistent relative to $ZFC$).

- The incompleteness theorems also holds for higher-order theory (even though diagonalization requires that the theory is first-order to construct a self-referential sentence) as they can internalize a first-order fragment (since they already contain first-order logic) and so can simulate the machinery of $PA$ (including processes like Gödel encoding). This is of course assuming that the higher-order system is also recursive. This is in contrast to something like [Infinitary Logics](Logic/Infinitary%20Logics.md) which allow uncountably-long formulae (and so syntax is non-recursive)
## Extensions
We may also consider extension of HOL (equivalent to $\omega^{th}$-order logic) such as $\omega+1^{th}$-order logic, $\omega+2^{th}$-order logic, as mentioned in [Tarski's theory of truth](Logic/Tarski's%20theory%20of%20truth.md), this process is recursive, so the upward limit is ${\omega_{1}^{CK}}^{th}$-order logic. Further extensions will require a syntax which is not recursive (this will result in difficulties in the semantics such as not being able to tell what level or 'order' a truth predicate belongs to, and perhaps even complete semantic collapse). This is also the case for transfinite type theory. However, further extensions can be re-interpreted into set theory 

## References
[[The Compactness Theorem]]
[[Soundness & Completeness]]
[Second-order logic](https://en.wikipedia.org/wiki/Second-order_logic)
[Second-order and Higher-order Logic]([Second-order and Higher-order Logic (Stanford Encyclopedia of Philosophy)](https://plato.stanford.edu/entries/logic-higher-order/))
[[Type Theory]]
[[Transfinite Type Theory]]
[Tarski's theory of truth](Logic/Tarski's%20theory%20of%20truth.md)
[Infinitary Logics](Logic/Infinitary%20Logics.md)