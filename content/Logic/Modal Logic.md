*Find a document on Modal logic which further clarifies notation and definitions*
## Background + Syntax
**Worlds:**
Possible 'worlds' refer to possible state of affairs/scenarios.
i.e., if an event $x$ could have happened, then it occurred in some possible world.

The 'actual' world, denoted as $w_{0}$, refers to the world which has been designated and from which we refer to possible worlds $w$ accessible from $w_{0}$ (i.e., it is what actually happened).
i.e., with $wRu$ we designate $u$ as the actual world from which we discuss other possible worlds from (through the accessibility relation $R$)

Modal logic adds the modal operators '$\Diamond$' and '$\square$'; where
- $\Diamond \varphi$ means "$\varphi$ is possible", i.e., there exists a world $w_{0} \in W$ where $\varphi$ is true ($\Vdash_{w_{0}}\varphi$)
- $\square \varphi$ means "$\varphi$ is necessary", i.e., for all worlds $w \in W$, $\varphi$ is true $\Vdash_{w}\varphi$

**Syntax:** The language $\mathcal{L}$, an extension of propositional logic with modal operators, can be defined recursively as follows:
	- If $\phi$ is an atomic formula, then $\phi$ is a formula of $\mathcal{L}$
	- If $\phi$ is a formula of $\mathcal{L}$, then so is $\neg \phi$
	- If $\phi, \psi$ are formulas of $\mathcal{L}$, then so is $\phi \wedge \psi$
	- If $\phi, \psi$ are formulas of $\mathcal{L}$, then so is $\phi \vee \psi$
	- If $\phi$ is a formula of $\mathcal{L}$, then so is $\Diamond \phi$
	- If $\phi$ is a formula of $\mathcal{L}$, then so is $\square \phi$
	We can construct conjunctive and disjunctive formula with modal operators (i.e., let $\psi = \square \phi$ or $\Diamond \phi$).
**Note:** Possibility may be defined in terms of necessity as, $\Diamond\phi:=\neg \square\neg \phi$ ("possibly $\phi$" is defined as "not necessarily not $\phi$")
## Many-World Semantics
**Semantics:** A relational models is defined as follows:
	- $\mathcal{M} =\langle W, R, v\rangle$
	- '$W$' is the universe, the set of all (possible) worlds.
	- '$R$' is a binary operation on $W$, called the 'accessibility relation', which regards the ability for worlds to 'see' each other (and their view on the formula $\phi$). i.e., the truth value of $\phi$ in $w$ can depend on the truth value of $\phi$ in another possible world $u$, this is denoted as $wRu$. More precisely, if $\phi$ is true at $w$ and $wRu$ ($w$ is 'accessible' from $u$), then $\Diamond\phi$ in $u$
		$\to$ If $w$ is not accessible from $u$, then "$\phi$ is true at $w$" $\to$ "$\Diamond \phi$ is true at $u$" does not follows
	- '$v$' is a valuation function which assigns a truth value to every pair of atomic formulae and world (i.e., $v: W \times F\to S$).
	(Alternatively, defined as $\mathcal{M}=\langle W, R, v, \mathcal{L}\rangle$, to specify the logic we are working in)
Where $S$ denotes the set of truth values (most notably $S=${0,1}) and $F$ the set of formulae.

We define the recursively the truth of formula at a world $w\in W$ in a model $\mathcal{M}$
- $\mathcal{M}, w \Vdash \phi \iff v(w, \phi)=\top$
- $\mathcal{M}, w \Vdash \neg \phi \iff w\not\Vdash \phi$
- $\mathcal{M}, w \Vdash (\phi \wedge \psi)\iff (w\Vdash\phi \wedge w\Vdash\psi)$
- $\mathcal{M}, w\Vdash \square \phi \iff \forall u\in W, wRu \implies u\Vdash \phi$
- $\mathcal{M}, w \Vdash \Diamond \phi \iff \exists u \in W,wRu \implies u \Vdash \phi$

This means that the truth of even the necessity (and possibility) of formulae is relative to a world $w,$
as $\square \varphi$ is true if for all worlds $u$ 'accessible' by $w$, $wRu$, $\varphi$ holds at $u$.

The difference between $\mathcal{M}\Vdash \varphi$ and $\mathcal{M}, w \Vdash \varphi$  is that the first means that $\forall w \in W,  \mathcal{M}, w\Vdash \varphi$ while with the next one it means that it is true at some world $w$ in $\mathcal{M}$. Likewise, the difference between  $\mathcal{M} \Vdash \square \varphi$ and $\mathcal{M}, w \Vdash \varphi$ is that $\forall w \in W, \mathcal{M}, w \Vdash \square \varphi$ while with the second it is the above example, if for all worlds $u$ accessible by $w$, $wRu$, $\varphi$ holds at $u$.

**Notation:** '$\Vdash$' refers to semantic entailment ($\models$) specific to modal logic within the context of possible worlds, '$\models$' is also used.

**Frames:**
A (Kripke) frame is an ordered pair $\langle W, R\rangle$ where $W$ and $R$ is as defined above.

**Frame conditions:**
Frame conditions are conditions of the accessibility relation $R$ regarding how it should behave
- Reflexive: $wRw$
- Symmetric: if $wRu$, then $uRw$
- Transitive: if $wRu$ and $uRq$, then $wRq$
- Serial: For every $w\in W, \exists u\in W$ such that $wRu$
- Euclidean: For every $u,t,w \in W$, then $wRu \wedge wRt \implies uRt$ (as well as $tRu, tRt$, and $uR$u)

Syntax and semantics may change depending on the exact modal logic (although they must still use $\Diamond$ and $\square$ operators). 'Modal logic' in general refers to a family of logic rather than a particular one (similar to when referring to 'infinitary logic').

**Note:** Different models $\mathcal{M}$ of a modal logic may have a different number of worlds $w$ they have 'access' to (i.e., the number of worlds in $\mathcal{M}$ which satisfy something).

--------------

You cannot specify the number of worlds in the syntax as well, just have different frame conditions (which affect the accessibility relation $R$). Otherwise, you could consider an extension of modal logic which allows for quantification over worlds in the semantics of the language (hybrid logics adding nominal and world variables). The number of possible worlds may also depend on the syntax according to some philosophical papers (i.e., the cardinality of the vocabulary, how long sentences are allowed to be).

The total number of worlds is contentious, if one believe in modal realism (see [Philosophy](Miscellaneous/Philosophy.md)) then there are technically $0$ possible worlds as all worlds are actual (analogously, extended modal realism extends this further where impossible worlds are also actual). While some such as David Lewis may argue that there are at least $\beth_{2}$-many possible worlds (this is related to the result that there are $\lambda^\lambda$ possible sentences for a logic w/ vocabulary of size $\lambda$ and sentences of length $\lambda$, thus, we have have ${2^\lambda}^\lambda$ -many set of possible sentences), or even a proper-class of possible worlds (in this case, instead of considering a set of possible worlds $W$, we consider a proper-class of possible worlds, this may require a class theory as the meta-theory).

Other philosophical views (i.e., nominalism which denies metaphysics) may also believe the number of possible worlds is $0$ as they are simply linguistic tools and not actual abstract metaphysical worlds. Such views would also posit that the no. of actual worlds is $1$ and not maximally-many as in modal realism.

Actualism asserts that only actual worlds exist, this is in line w/ views such as modal realism.
## Axiomatic Modal Theories
The following are different systems of modal logic which have their own conditions on the accessibility relation $R$

- $K:=$ no conditions on $R$
- $D:= R$ is serial
- $T:= R$ is reflexive
- $B:= R$ is reflexive and symmetric
- $S4:= R$ is reflexive and transitive
- $S5:=R$ is reflexive and Euclidean
**Note:** Euclidean + reflexive yields symmetry and transitivity

These systems also have their own axioms. Since these theories have differing interpretations on the accessibility relation $R$, this affects what worlds can be accessed (e.g., whether a world can access all other possible worlds).
i.e., In the system $S5$, all other worlds can be accessed by each other (this means that the accessibility relation is universal).


The modal theory $S 4.2$ is obtained from the following axioms:

| $K$  | $\square(\varphi\to \psi) \to (\square \varphi\to\square \psi)$ |
| ---- | --------------------------------------------------------------- |
| Dual | $\neg\Diamond\varphi\to\square\neg \varphi$                     |
| $S$  | $\square \varphi\to \varphi$                                    |
| $4$  | $\square \varphi\to\square\square \varphi$                      |
| $.2$ | $\Diamond\square \varphi\to\square\Diamond\varphi$              |


**Additional axioms:**

| $5$        | $\Diamond \square \varphi\to \varphi$                                                                                                                |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| $M$        | $\square\Diamond\varphi\to\Diamond\square \varphi$                                                                                                   |
| $W 5$      | $\Diamond\square \varphi\to(\varphi\to \square \varphi)$                                                                                             |
| $.3$       | $\Diamond\varphi \wedge\Diamond\psi\to(\Diamond(\varphi \wedge\Diamond\psi)\vee\Diamond(\varphi\wedge\psi)\vee\Diamond(\psi \wedge\Diamond\varphi))$ |
| Dm         | $\square(\square(\varphi\to\square \varphi)\to \varphi)\to (\Diamond\square \varphi\to \varphi)$                                                     |
| Grz        | $\square(\square(\varphi\to\square \varphi)\to \varphi)\to \varphi$                                                                                  |
| Löb        | $\square(\square \varphi\to \varphi)\to \square \varphi$                                                                                             |
| $\text{H}$ | $\varphi\to\square(\Diamond\varphi\to \varphi)$                                                                                                      |


**Strength of Modal Theories:**

<img src="/static/attachments/Modal-Logic.png" alt="Modal Theories" width="400">

[the-set-theoretic-multiverse](Set%20Theory%20+%20Model%20Theory/the-set-theoretic-multiverse.pdf)]

This depicts a hierarchy of strength for modal theories, where an a modal theory $T$ point to another modal theory $T'$ if every modal principle valid in $T'$ is valid in $T$ (i.e., $T$ is stronger than $T'$).
## Philosophy
Relation to multiverse view of set theory

Logical pluralism can be formalized with modal logic (i.e., different worlds may operate on different logical systems, even those which may seem as 'absurd' such as paraconsistent logics or even trivialist logics).

Other 'modal-like' logics:
- Deontic Logic:
	Adds the new symbols $O, P$ and $F$, which are interpreted as follows
	- $O=$ "It is obligatory that..."
	- $P=$ "It is permitted that..."
	- $F =$ "It is forbidden that..."
- Temporal Logic:
	Adds the new symbols $G, F, H$ and $P$, which are interpreted as follows:
	- $G =$ "It will always be the case that..."
	- $F=$ "It will be the case that..."
	- $H=$ "It has always been the case that..."
	- $P=$ "It was the case that..."


**Extensions:**
'Modal logic' usually refers to the alethic modality (i.e., the study of possibility and necessity), there are other modalities such as:
- Temporal modality deals w/ truth of a formula at a specific position in time, introduces the following modal operators:
	- Until $\mathcal{U}$: $\varphi\mathcal{U}\psi$ means that $\psi$ holds in a current or future position and $\varphi$ has to hold until reaching that position.
	- Release $\mathcal{R}$: $\varphi\mathcal{R}\psi$ means that  'releases' $\psi$ if $\psi$ is true up until and including the first position $\varphi$ is true
	- Next $\bigcirc$: $\bigcirc\varphi$ means that $\varphi$ must be true in the next state
	- Future $F$: $F\varphi$ means that $\varphi$ holds somewhere on the subsequent (time) path, i.e., $\varphi$ is true at some future state
	- Global $G$: $G\varphi$ means that $\varphi$ holds on the entire subsequent path, i.e., $\varphi$ is true in all future states
	- All $A$: $A\varphi$ means that $\varphi$ is true on all paths starting from the current state
	- Exists $E$: $E\varphi$ means that there is at least one path from the current state where  $\varphi$ holds.
	Temporal logic embeds an idea of 'timelines.' It can be observed that the difference between the future and global modal operators and the all and exists operators, respectively, is that the first two apply to a single timeline, while the last two quantify over all timelines
- Deontic modality deals w/ morality and so introduces the modal operators obligation $O$, permission $P$ and forbidden $F$ (i.e., morally ideal accessibility).
- Doxastic modality which is based off of belief and so introduces the 'belief' operator $\mathcal{B}$. i.e., $\mathcal{B}\varphi$ means that "the agent believes $\varphi$ is true."
- Epistemic modality which is based off of knowability and so introduces the 'knows' operator $\mathcal{K}$. i.e., $\mathcal{K}\varphi$ means that "the agent knows $\varphi$ is true."
All of these alternative modalities have a conception of a 'possible world', but rather than modelling possibility and necessity, they are modelling other modal operators.


Multi-modal logics (i.e., degrees of possibility and necessity)
Infinitary modal logic (modal logic + infinitary logic), allows for infinitely (even uncountably) many worlds


## References
[Philosophy](Miscellaneous/Philosophy.md)
[Modal Logic](https://en.wikipedia.org/wiki/Modal_logic)
[Kripke Semantics](https://en.wikipedia.org/wiki/Kripke_semantics)
[Plato Stanford - Modal Logic]([Modal Logic (Stanford Encyclopedia of Philosophy)](https://plato.stanford.edu/entries/logic-modal/))
[[the-set-theoretic-multiverse.pdf]]
[[A Natural Model of the Multiverse Axioms.pdf]]
[Possible Worlds and the Upper Bound Problem]([apa2021central-000039.pdf](https://cdn.ymaws.com/www.apaonline.org/resource/resmgr/central2021/papers/apa2021central-000039.pdf))
