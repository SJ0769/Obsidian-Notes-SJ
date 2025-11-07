## Construction
**What are sets (philosophically)?**


The universe of sets V is defined recursively as follows
$V_0:=$  $\emptyset$
$V_{{\alpha + 1}} := \mathcal{P}(V_{\alpha})$
$V_{\lambda}:=\bigcup\limits_{\alpha < \lambda}  V_{\alpha}$ for all $\lambda$ is a limit ordinal
$V := \bigcup\limits_{\alpha \in O} V_{\alpha}$
(**Note:** The definition of $V$ is in the context of class theory as it is a proper-class)
<img src="/attachments/VNU.png" alt="Von Neumann Universe" width="300">

[Von Neumann universe]([Von Neumann universe - Wikipedia](https://en.wikipedia.org/wiki/Von_Neumann_universe))

The universe of sets $V$ is built up from the 'bottom-up', starting from $V_{0}$.

**Mandy's Maximum:** There does not exist a cut-off point where a collection ceases to be a set
$\rightarrow$ There does not exist a largest cardinality


**The Constructible Universe:**
$L_{0}:=\emptyset$
$L_{\alpha+1}:=Def(L_{\alpha})$
$L_{\lambda}:= \bigcup\limits_{\alpha<\lambda}L_{\alpha}$
	$\to$ Equivalently, for any ordinal $a\in ORD, L_{\alpha} = \bigcup\limits_{\beta<\alpha}L_{\beta}$
$L:= \bigcup\limits_{\alpha\in ORD}L_{\alpha}$
Where $Def(X)\subseteq \mathcal{P}(X)$ is the set of all definable subsets of an arbitrary set $X$. More precisely $Def(X)=\{Y\subset X|\text{ there is a formula } \varphi \text{ such that } x\in Y \iff (X,\in)\models \varphi(x)\}$

From this construction we derive $L\subseteq V$, the assertion (axiom) $V=L$ essentially states that all sets are constructible

$L$ is a minimal inner model (i.e., it is the smallest inner model, for any inner model $\mathcal{W},$ then $L \subseteq \mathcal{W}$).
Since $L$ is an inner model, it is a transitive model (if $y\in L$ and $x\in y$, then $x\in L$) and every ordinal (of $\mathcal{M}$) is an element of $L$.

**Note:** $L$ satisfies $GCH$ (global continuum hypothesis), $L=L^\mathcal{M}$

## Paradoxes
**Russell's Paradox:** Consider the set of all sets which do not contain themselves,  

$R =\{x|x\not\in x\}$

Case 1: 
$R$ is well-founded, that is, $R \not\in R$.
Then, by the definition of $R, R \in R,$ a contradiction

Case 2:
$R$ is non-well-founded, that ism $R\in R$
Then, by the definition of $R, R \not\in R,$ a contradiction.

And so, $R \in R \iff R \not\in R$

**Burali-Forti Paradox:** Consider the set of all ordinals $\Omega = \{\alpha|\alpha \text{ is an ordinal}\}$.

We can derive the following from the definition of $\Omega$:
	1. $\Omega$ us transitive because every element $\alpha\in \Omega$, and every element $\beta\in \alpha$ (as per the definition of Von Neumann Ordinals, for every $\beta < \alpha$), we derive that $\beta \in \Omega$.
	2. $\Omega$ is well-ordered by the membership relation, $\in$.
By 1. and 2. we have that $\Omega$ is an ordinal class, and thus an ordinal number by the initial assumption (all ordinal classes that are sets are also ordinal numbers).

$\implies \Omega\in \Omega$, that is, it is an element of itself.
and so, by the definition of Von Neumann Ordinals, $\Omega<\Omega$.
But no ordinal class is less than itself, so $\Omega \not< \Omega$ (and so, also $\Omega\not\in \Omega$), a contradiction.

Thus, we cannot have a 'set of all ordinals.'

**Cantor's Paradox:** An analogue of the Burali-Forti paradox for cardinals instead of ordinals.

Consider the set of all cardinals $C=\{ \kappa| \kappa \text{ is a cardinal}\}$

The cardinal numbers are totally ordered, meaning for any cardinals $\kappa, \mu ,\lambda$, then
	i) $\kappa \leq \kappa$ (reflexive)
	ii) If $\kappa \leq \mu$ and $\mu\leq \lambda$, then $\kappa \leq \lambda$ (transitive)
	iii) If $\kappa \leq \mu$ and $\mu \leq \kappa$, then $\kappa=\mu$ (anti-symmetric)
	iv) $\kappa \leq \mu$ or $\mu \leq \kappa$ for any two cardinal $\kappa, \mu$ (totality)
(Shows we cannot have incomparable cardinal pairs)

Let $\Omega$ denote the largest cardinal, then (via the Von Neumann definition of cardinals), $\Omega$ is a set.
$\implies$ has a powerset, $2^\Omega$
By Cantor's theorem $2^\Omega> \Omega$, and so $\Omega$ is not the largest cardinal, a contradiction.

This asserts that we cannot have a set of all cardinals

**Cantor's Absolute Infinity:** A hypothetical 'largest' cardinal, exceeding all finite and transfinite numbers. This hypothesized object cannot exist formally w/in mathematic, although informally can be considered the size of a proper-class (as the notion of 'size' and 'cardinals' inherently apply to sets or objects we are studying in the case of higher-order logic).
	$\to$ By implication, such an object would be larger than itself, analogously to Russell's paradox, as it itself is a cardinal number by definition.
	
- Absolute infinity is also commonly denoted as $\Omega$.
- Large cardinals can play the 'role' of absolute infinity, i.e., consider the model $V_{\kappa}$, for $\kappa$ is an inaccessible cardinal, restricting our universe to this model, then internally we view $V_{\kappa}$ as the universe of sets and the cardinal $\kappa$ is treated as absolute infinity (note: $|V_{\kappa}|=\kappa$).


These paradoxes informed what an axiomatic theory of sets should behave like (i.e., attempting to avoid these paradoxes).

## Internal vs External View
**Standard Model:** A model $\mathcal{M}$ of set-theory is 'standard' if the internal view of the structure (i.e., how the structure interprets symbols of the vocabulary), in this case the interpretation of the '$\in$'-relation, is the same as the structure of $V$, restricted to that domain of $\mathcal{M}$. This is when the internal and external view of a model 'agrees' on the interpretation and structure.

**Non-Standard Model:** A model $\mathcal{N}$ of set theory is non-standard if the interpretation of the $\in$-relation isn't the same as the interpretation of the universe of sets $V$, restricted to the domain of $\mathcal{N}$

(These notions may change for stuff like Peano Arithmetic, where a model is standard if it is isomorphic to another standard model).

The internal view of a model $\mathcal{M}$ (i.e., what $\mathcal{M}$ thinks of itself) may differ from what the universe of sets $V$ thinks of $\mathcal{M}$ (external view). Within set theory ($\tau = \{\in\}$), the $\in$-relation may differ between the internal and external view. The model's interpretation of the membership relation is denoted as $\in^{\mathcal{M}}$ or as $E$.

i.e., add constant symbol $c_{0}, c_{1}, c_{2},\dots, c_{n},\dots$ to the language of set theory (so, $\tau = \{ \in, c_{0}, c_{1}, c_{2}, \dots, c_{n},\dots\}$). Let $T$ be the theory obtained via adding sentences $c_{1}\in c_{0}, c_{2}\in c_{1},\dots,c_{n+1}\in c_{n},\dots$ to the $ZF$ axioms. If $ZF$ is consistent, then every finite subset of $T$ is consistent and so, by the compactness theorem, $T$ is consistent. Thus, any model of $T$ is a non-well-founded model of $ZF$

**Note:** The axiom of foundation holding in a models does not $\implies$ that there is no infinite descending $\in$-sequence of elements of the model, it instead means that such an infinite sequence can not be an element of the model (although you still have $c_{0} \ni^{\mathcal{M}}c_{1} \ni^{\mathcal{M}}\dots c_{n}^{\mathcal{M}} \ni c_{n+1}^{\mathcal{M}}\ni^{\mathcal{M}}\dots,$etc. w/in the model) as it would then not satisfy the foundation axiom. Thus, the model "thinks" it is well-founded, but viewed externally (by $V$) it is ill-founded.
 $\to$ **Clarification:** W/in the model (internally), there is no infinitely descending $\in$-sequence of elements, but as seen externally there is.
$\to$ The $\in$-relation of the model is not the real set-membership relation (at least assuming $V$ models $ZF$ and extensions of it, as most commonly believed), but rather the models interpretation of it.

What we take as '$\in$' (the real $V$) is $\in^V$. Whether the $\in$-relation is actually well-founded depends on the philosophical background of the set-theorist (w/ the meta-theory being an ill-founded set theory such as $NF$ then the $\in$-relation may be as ill-founded but interpreted as well-founded w/in a model of $ZFC$, often a well-founded meta-theory is used).

In general, this may be extended to any symbol in the vocabulary/language, where a structures interpretation of it differs from what it 'actually' is (according to $V$, which is taken to be the ultimate truth about sets via the iterative conception).
## Philosophy
### On The Iterative Conception
**Maximal Iterative Conception of Set:** The iterative conception of set asserts all sets belong to some initial segment $V_{\alpha}$ of the universe of sets $V$ (particularly as described in the construction of $V$ as per above). The maximal iterative conception asserts that the universe should be as large as possible (w/out containing contradicting notions), this is achieved by height and width maximality.
This supports the view that there is no 'point' where collections (of objects) cease to be sets (no limitation to the sizes of sets).


$V$ may be viewed as a 'plastic' object. This is different from a model $\mathcal{M}$ believing it is the universe of sets (i.e.,$\{x|x=x\}$ is satisfied) as it does still remain a set when viewed externally. Rather $V$ is a proper-class which may be extended by a forcing extension $V^* = V[G]$, but this then becomes the new '$V$'. This new $V$ will see the 'previous' one as a set (depending on how large of an extension is considered). That is, $V$ is not a fixed object, but rather a useful framework to wrap set theory in, and so can change when considering extensions (although it can be viewed as a complete object in some 'higher' realm of mathematical objects, Platonist view).

### Reflection Principles and Ineffability
**Reflection Principle:** The reflection principle asserts that if the universe of sets $V$ has a particular, then there is some other set (most notably, some $V_{\alpha}$) which also has that property. But this notion leads to a contradiction, consider the property of the universe that it contains all sets, by the reflection principle, some other set must also also have the property that it contains all sets
$\implies$ the ineffability of the structure of the universe of sets, as it cannot be uniquely characterized.
	$\to$ This also applies to the notion of the 'absolute infinite', despite already being contradictory via violating the powerset result ($|X|<|\mathcal{P}(X)|$ for all sets $X$), it can also be shown to be mathematically uncapturable (in the context of $ZFC$) as per the reflection principle. Consider the property of being the largest cardinal, then there must be some cardinal $\kappa < \Omega$ which also has that property, thus contradicting the initial assertion that $\kappa<\Omega.$

The 'ineffability' of $V$ is a proponent of the many differing views on what the universe should look like (especially towards the existence of large cardinals), and so the 'iterative conception' isn't fully determined.
	i.e., Since $ZFC$ cannot prove the existence of inaccessible and other large cardinals, this leads to the consideration of expansions of $V$ (to a new $V^*$ which is the universe of sets).
$\to$ **Note:** If a Platonist $P_{1}$ does not believe that inaccessible exists in the true mathematical 'reality', then from the perspective of another Platonist $P_{2}$ (whom does believe in inaccessible cardinals), then they believe that $P_{1}$ is restricting themselves to $V_{\kappa}$, for $\kappa$ is the least inaccessible cardinal. While $P_{1}$ will deny the existence that that there is such a stage $V_{\kappa}$.


First-order reflection principles are provable w/in ZFC.

Higher-order reflection principles are not provable w/in ZFC, and affirms the existence of large cardinals in the platonic universe of sets.

To express second-order properties of $V$ we need to move beyond $ZFC$ to von Neumann-Gödel-Bernays class theory $(NBG)$ w/ variables ranging over sets and variables and ranging over the collection of classes. The $\in$-relation applies between sets and classes, the comprehension scheme for formulas w/ only 'set-quantifiers' (but w/ both set and class variables). Thus, in $NBG$ we can quantify over classes but we cannot apply the comprehension schema to formulas containing such quantifiers.
	$\to$ Global choice is also included as an axiom, which says that there is a class function $F$ such that $F(x)$  is an element of $x$ for every nonempty set $x (\implies$ all proper-classes have the same size).


**Inner Model Hypothesis (IMH):** If a first-order sentence holds in an inner model of some outer model of $V$, then it also holds in some definable inner model of $V$.
	$\to$ IMH refers to outer models of $V$ which are not available from the Zermelo picture of $V$. This issue can be solved by not referring to the whole $V$, but rather to just some countable transitive model of $ZFC$.
	$\to$ Another solution is $V$-logic which enables one to express first-order properties of arbitrary outer models (almost) internally w/in $V$ in the same sense as first-order properties of set-forcing extensions of $V$ can be internalized using the forcing relation $\Vdash$.
**Note:** First-order properties of arbitrary outer models are 'almost' internally w/in $V$ as the new truth in outer models will not (in general) be first-order definable over $V$, but rather a small lengthening of $V$ (not a thickening) called $HYP(V)$ which is the least admissible set contain $V$ as a member.

As lengthenings are available in the Zermelian conception (i.e., height potentialism), this enables the expression of principles such as IMH w/out some loss of content.
$\to V$-logic allows us to make sense of IMH as if it were referring to the whole $V$.


**Notation:**
- $Con(ZFC+\varphi)=$ "$ZFC + \varphi$ is consistent"
- $Icon(ZFC+\varphi)=$ "There is an inner model of $ZFC+\varphi$"
Consistency result: $Con(ZFC+LC)\to Con_{9}ZFC+\varphi$
Internal consistency result: $Icon(ZFC+LC)\to Icon(ZFC+\varphi)$

**Note:** A statement can be consistent w/out being internally consistent relative to some large cardinals.

The case of IMH is analogous to that of Martin's axiom (MA), a principle of set-forcing. There are many formulations of MA, i.e., MA$_{\aleph_{1}}$ asserts:
	Whenever $V[G]$ is a generic extension of $V$ by a partial order $\mathbb{P}$ w/ the countable chain condition in $V$, and $\varphi(x)$ is a $\Sigma_{1}$-formula that is a subset of $\omega_{1}$ as parameters, if in $V[G]$ there is a $y$ such that $\varphi(y)$ holds, then there is also such a $y\in V$.
### Philosophical Views
**Actualist View of The Universe:** The universe is fixed and cannot be extended (width and height). This view may not be incompatible with views such as $V$ being 'plastic' in that the actualist will claim that $V \subset V^*$ was never the 'true' universe of sets.
	**Platonic view of The Universe:**
	Sets exist in actuality in some sort of metaphysical realm/reality of abstract mathematical objects independent of physical reality,  rather than sets being just mathematical expressions (as seen below in **Formalism**). This means, that there is a 'true' universe of sets $V$ which does have a definite conception of set (i.e., what properties sets actually have), mathematical statements also have an objective truth value. This view of the universe supports the actualist view of $V$, that the universe of sets $V$ is a complete object (related to 'actual infinity'). According to this view, the purpose of set-theorists is axiomatize mathematics so that it best fits in accordance to this platonic conception


**Potentialist View of The Universe:**
The universe of sets $V$ is not a complete static object, but rather a dynamic one which actively grows (this can be shown by the process of extending the cumulative $V_{\alpha}$ to $V_{\alpha'}$ for $\alpha'> \alpha$).
	**Zermelo's View of The Universe:**
	An instance of the potentialist view where the height of the universe is extendible, but the width is fixed and cannot be extended.


**Formalism:** Mathematics is simply a game of manipulating mathematical symbols and expressions. According to formalism, mathematical truths are not about numbers, sets, or structures, but not about anything at all.

**Structuralism:** Axiomatic theories describe mathematical structures rather than merely objects.
	E.g., according to the structuralist view the number '2' is defined as the second number in the natural numbers $\mathcal{N}=\{\mathbb{N},+, \times, S(x), 0 \}$. Thus, objects are defined in relation to mathematical structures.
	E.g., sets are not objects with the property of being 'set-like' (whatever this means depends on the background philosophy and axioms chosen) but rather things related by the $\in$-relation to some set-theoretic model.
Structuralists also maintain that mathematical statements have a definite truth value in actuality (rather than being an merely 'unknowable' or 'undecidable'). It is also maintained in the structuralist view that two structures are essentially the same if they are isomorphic. This intuition fits more w/ category theory which emphasizes morphisms and relations over mathematical objects.

-----------------------------
## Ordinal Definability
Formally, a set $S$ is ordinal definable if there is some set of ordinals $\alpha_{1},\dots,\alpha _n$ and a first-order formula $\varphi$ which takes $\alpha_{2},\dots,\alpha_{n}$ as parameters such that $S$ is uniquely defined as an element of $V_{\alpha_{1}}$. That is, $S$ is the unique object validating $\varphi(S, \alpha_{1}, \alpha_{2})$.

The class of all ordinal definable sets is denoted as $OD$.

A set if hereditarily ordinal definable if it is ordinal definable and all elements of its transitive closure is ordinal definable.

The class of all hereditarily ordinal definable sets is denoted $HOD$

$HOD$ is an inner model which can contain all known large cardinals (except for the ones inconsistent w/ choice in the context $ZFC$).
## References
[[Fundamentals of Set Theory]]
[[Forcing]]
[Russell's Paradox]([Russell's paradox - Wikipedia](https://en.wikipedia.org/wiki/Russell%27s_paradox))
[Burali-Forti Paradox]([Burali-Forti paradox - Wikipedia](https://en.wikipedia.org/wiki/Burali-Forti_paradox))
[Cantor's Paradox]([Cantor's paradox - Wikipedia](https://en.wikipedia.org/wiki/Cantor%27s_paradox))
([Ordinal Definable Set](https://en.wikipedia.org/wiki/Ordinal_definable_set))
