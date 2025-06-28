## Background
Trivialism is the logical theory that all statements are true, that is we can derive any result following a valid logical procedure (by consequence, even contradictions such as $p$ and $\neg p$ for any 
statement $p$)

In symbolic logic it may be expressed as follows:
	$\forall p T(p)$, "for any statement p, it is true"
	An equivalent definition:
		$\forall p\in \mathscr{L}, \vdash p$

Trivialism allows for paradoxes such as the liar's paradox to be allowed (if meta-statements are introduced into the language, i.e., semantically closed).

**Invalid Trivialism:** A logically invalid trivialist system is one where every inference is true, but violates its own syntactic rules (these are internal to the logic). I.e., the trivialist system $PA +$ "0=1" in classical logic. Results in semantic collapse (i.e., cannot differentiate between truth or falsity)

**Valid Trivialism:** A system where every inference is true and is also logically valid according to its own syntactic rules. Results in a semantic collapse

**Types of trivialism:**
- (T0) Minimal trivialism; every proposition has a designated truth value at some world $w \in W$
- (T1) Pluralist trivialism; every proposition has a designated value in some worlds $w \subset W$
- (T2) Actualist trivialism; every proposition has a designated value in the actual world (the world we live in)
- (T3) Absolutist trivialism; every proposition has a designated value in all worlds
$\to$ T3 supports logical monism (the view that there is only one logic), rather than logical pluralism. That 
	is $\Diamond \varphi \iff \square \varphi \iff \varphi$

## Formalizing Trivialism
A (valid) Trivialist system can be formalized through the lenses of modal logic.


We define a zero-order modal logic via the following tuple:

$S_{L} = \langle F, \mathcal{V}, D^+, \{ f_c \}_{c \in C}, \,v \rangle$

Where
- $F$ is the set of formulas
- $\mathcal{V}$ is the set of truth values w/ a partial ordering $\leq$
	Suppose there is a truth value $x \in \mathcal{V}$ such that for every $y \in \mathcal{V}, y \leq x$. Then we say $x$ is true
- $D^+ \subseteq \mathcal{V}$ is the set of 'designated' truth values which satisfies the following conditions:
	i) $\top \in D^+$;
	ii) $\forall x,y \in \mathcal{V}$, if $x \in D^+$ and $y \notin D^+$ then $x \not< y$;
	iii) An inference is $D^+$ valid in $\mathscr{L}$, denoted as $\varphi \Vdash_{\mathscr{L}}^{D^+} \psi$ if and only if whenever $v(\varphi) \in D^+, v(\psi) \in D^+$ as well.
- $f_{c}$ is the set of truth functions for each connective $c \in C$ ($C$ is the set of connectives)
- $v$ is a valuation function assigning truth values
	**Note:** $v(\varphi)$ denotes the truth value of $\varphi$ (truth value assigned to $\varphi$)

$D^- \subseteq \mathcal{V}$ is the set of anti-designated truth values which satisfies the following conditions:
	i) $\exists x \in \mathcal{V}$ such that $\forall y \in \mathcal{V}, x \leq y$. Such an $x$ is 'false' (in bivalent logic) and denote it $'\bot', \bot \in D^-$;
	ii) $\forall x,y \in \mathcal{V},$ if $x \in D^-$ and $y \not\in D^-,$ then $y \not< x$;
	iii) An inference is $D^-$ valid in $\mathscr{L},$ denoted as $\varphi \Vdash_{\mathscr{L}}^{D^-} \psi,$ if and only if whenever $v(\psi) \in D^-, v(\varphi)\in D^-$ as well.
Sentences which are not assigned a designated truth value $x \in D^+$ or an anti-designated truth value $y \in D^-$ is an undefined statement (i.e., in 3-valued logic where $U =$ "neither true or false", $v(\varphi) \not\in D^+ \cup D^-$).

$\therefore$ The set of designated truth values $D^+$ is the set of 'truth-like' truth values, i.e., if $v(\varphi) \in D^+$, then $\varphi$ is considered 'valid.' On the other hand, the set of anti-designated truth values $D^-$, is the set of 'false-like' truth values, i.e., if $v(\varphi)\in D^-,$ then $\varphi$ is considered 'invalid'

E.g., Consider the paraconsistent LP, which has $\mathcal{V}=${$F, B, T$}, then

$D^+ =${$B, T$}; and
$D^- =${$F, B$}

As a statement $\varphi$ such that $v(\varphi)= B$ is both valid and invalid, and so, $v(\varphi) \in D^+ \cap D^-$


A modal model is defined as the following tuple:

$\mathcal{M} = \langle W, O, R, S_{\mathscr{L}}, v \rangle$

Where
- $W$ is the set of possible worlds
- $O \subseteq W$ is the set of 'ordinary' worlds (may or may not be prevalent depending on the type of trivialist system), i.e., the set of non-trivial worlds.
- $R \subseteq W \times W$ is the 'accessibility' relation, interpreting modal operators $\Diamond$ and  $\square$
- $S_{\mathscr{L}}$ is defined above as the logic
- $v : F \times W \to V$ is a valuation function
	Maps the set of ordered pairs {$(\varphi, w)| \varphi \in F$ and  $w \in W$} to a truth value $x \in V$

The accessibility relation $R$ allows for worlds to refer to each other;
i.e., $wRw'$ means that when evaluating the truth state of formulas at $w$, we can consider what's true at $w'$.
Context: 
- $\Diamond \varphi$ is true at $w$ iff $\varphi$ is true in at least one accessible world $w'$ , i.e., there exists at least a single $w'$ such that $wRw'$
- $\square \varphi$ is true at $w$ iff $\varphi$ is true in all worlds $w'$, i.e., for all $w',$ $wRw'$


Truth conditions for every $w \in W$:
	i) $v_{w}(\varphi) \in V$
	ii) $v_{w}(\neg \varphi) = f_{\neg}(v_{w}(\varphi)) = \top \iff v_{w}(\varphi) = \bot;$ otherwise $f_{\neg}(v_{w}(\varphi)) = v_{w}(\varphi)$
	iii) $v_{w}(\varphi \wedge \psi) = f_{\wedge}(v_{w}(\varphi), v_{w}(\psi)) =$ Inf$(v_{w}(\varphi), v_{w}(\psi))$
	iv) $v_{w}(\varphi \vee \psi) = f_{\vee}(v_{w}(\varphi), v_{w}(\psi)) =$ Sup$(v_{w}(\varphi), v_{w}(\psi))$
	v) $v_{w}(\square \varphi) = f_{\square}(\varphi)=$ Inf{$v_{w'}(\varphi)|wRw'$}
	vi) $v_{w}(\Diamond \varphi)= f_{\Diamond}(\varphi)=$ Sup{$v_{w'}(\varphi)| wRw'$}
If $w \in W/O$ (the set of trivial worlds) then there may be further truth conditions with the only condition that they do not imply the violation of truth conditions above.

**Notes:** 
- Negation ($\neg$) doesn't switch between distinct values , allowing $\top= \bot$
- $\varnothing, \bot,${$\bot, \top$},$\top$ stands for 'neither true nor false', '(just)false', 'both true and false', '(just)true' respectively (equivalent to truth values $U, F, B, T$)

Non-normal modal logics (semantics):

Both of these could hold at the non-normal modal world $w^*$
$v_{w*}(\square \varphi)= \bot$  (It is necessary that $\varphi$ is false in the world $w^*$)
$v_{w*}(\Diamond \varphi)=\top$ (It is possible that $\varphi$ is true in the world $w^*$)

T0: 
	- $\exists t \in W$ such that $\forall \varphi, v_{t}(\varphi) \in D^+$ ;
	- $O \not= \emptyset$
	i.e., there is one trivial world (**Minimal Trivialism**)
T1: 
	- $\forall w \in W, \exists t\in W$ such that $wRt$ and $v_{t}(\varphi)\in D^+$ ;
	- $O \not= \emptyset$
	i.e., there are many trivial worlds (**Pluralist Trivialism**)
T2: 
	- The actual world $w_{0}\in W$ such that $\forall \varphi, v_{w_{0}}(\varphi) \in D^+$;
	- $w_{0}\not\in O$
	i.e., the actual world is trivial (**Actual Trivialism**)
T3: 
	- $\forall w \in W, \forall \varphi, w_{w}(\varphi)\in D^+$;
	- $O = \emptyset$
	i.e., all worlds are trivial (**Absolute Trivialism**)


(#) For every $\varphi$ and world $w$, there is a $w'$ such that $wRw'$ and $v_{w'}(\varphi) \in D^+$
**Note:** $v_{w'}(\varphi)$ means that the sentence $\varphi$ is 'valid' (has a valid truth value) in the world $w'$
$\to$ From (#) and the satisfaction condition for $\Diamond \varphi$ above (see vi) ) we derive that any model $\mathcal{M}$ where (#) holds, then $\mathcal{M} \Vdash \Diamond \varphi$ for every $\varphi$


The above notions of models are compatible with the following:
(1) For every formula $\varphi$ and world $w, v_{w}(\varphi) \in D^+$
	$\implies$For every $\varphi$ and world $w, v_{w}(\varphi) = \top$, in the bivalent case
(2) For every $\varphi, \mathcal{M} \Vdash \varphi$
(3) $\top = \bot$
(All equivalent forms of trivialism)

Thus, a modal-theoretic framework can be used to equate trivialism. A simple model of trivialism is one where $W$ consists of a unique world $w$ in which every formula has a designated truth value (or where every inference is valid). Let $t$ denote such a world a trivialist world.


**Construction 1:** 
Consider a model $\mathcal{M}$ where $W =${$w$} and $V =${$\top$}, then trivially (via proving R is reflexive) $v_{w}(\varphi)=\top$ for all $\varphi \implies$ $\mathcal{M} \Vdash \Diamond \varphi$, as well as $\mathcal{M} \Vdash \varphi$ and $\mathcal{M}\Vdash \square \varphi$ (enable absolute trivialism).

**Construction 2:**
Model contains a world $t \in W/O$ and the valuation $v$ is defined so as to contain the clause "if $w = t,$ then $v(\varphi) \in D^+$ for every $\varphi$" (enables partial trivialism).

**Construction 3:**
There is also a model with exactly two worlds $w$ and $w'$ and one of them is $t$ ($t =w$ or $t=w'$). In such a case, it suffices that $wRt$ and $tRt$ satisfy (#)

**Construction 4:**
Let $W$ contain no trivial worlds and $\mathcal{V} =${$F,U,B,T$}. W/in this logic there is no $\varphi$ such that for every $v$, $v({\varphi}) \not\in D^+$. Thus, for every $\varphi$, there is some $v$ such that $v(\varphi)\in D^+.$ From this a model $\mathcal{M}$ can be constructed where (#) holds. 
This $\implies$ that $\mathcal{M},$ Inf{$v_{w'}(\varphi)| wRw'$} $\in D^+.$ Thus,, for every world $w, v_{w}(\Diamond \varphi) \in D^+$ and as a consequence, so $\mathcal{M} \Vdash \Diamond \varphi$


Consider the statement $\psi =$"$\varphi$ is undefined", since in trivialism all statements are true we get that $\varphi$ is undefined iff $\psi$ is true, and $\varphi$ must also be true as well. So not only are all formulas assigned designated truth values, they can be assigned any truth value.
	$\to$ The above construction uses modal logic as the meta-system. The statement $\psi$ is a meta-statement and cannot be expressed within the trivialist object language. Thus, this formalization of trivialism is still bounded by what it can express, although combining it with other frameworks such as Tarski' hierarchy of meta-languages, can overcome this (see below).
	**Summary:** By letting the trivialist logic be it's own meta-language (semantic closure is not an issue if formalized correctly, as the logic is already 'trivial') any formula can be assigned any truth value and not necessarily just designated truth values.


If we combine the possibilist axiom $\Diamond \varphi$ with another axiom
i.e., $\Diamond \square \varphi \supset \varphi$ ($)
Then there is a problem

Consider the following proof:
1. $\Diamond \varphi$ - possibilist axiom
2. $\Diamond \square \varphi \supset \varphi$ - Axiom ($)
3. $\Diamond \square \varphi$ - From step 1 by uniform substitution
4. $\varphi$ - From 2 and 3 by detachment
**Notation:** $\psi \supset \varphi$ means that $\psi$ is a super-formula of $\varphi,$ or equivalently, $\varphi$ is a sub-formula of $\psi$
Let $\varphi$ be the proposition "every statement is true", then consider the following axiom schemes:

(5) $\Diamond \square \varphi \supset \square \varphi$
(T) $\square \varphi \supset \varphi$

We can then derive the following proof:
1. $\Diamond \varphi$ - possibilist axiom
2. $\Diamond \square \varphi \supset \varphi$ - Axiom ($)
3. $\square \varphi \supset \varphi$ - Axiom (T)
4. $\Diamond \square \varphi$ - From step 1 by uniform substitution
5. $\square \varphi$ - From step 2 and 4 by detachment
6. $\varphi$ - From step 3 and 5 by detachment

Absolute necessity (truth in every world, denoted as $\square ^+$) and relative necessity (truth in every other world than the trivial world $t,$ denoted as $\square$) can be shown to be equivalent. As in classical modal logic, there are truths of the form $\square \varphi$ in the model. This $\implies$ that absolute necessity and absolute possibility (denoted $\Diamond^+$) are interdefinable (defined in terms of each other).

Suppose there is a truth $\square^+ \varphi$. Given that $\diamond ^+ \neg \varphi$ for every $\varphi,$ if $\square^+ \varphi \implies \neg \Diamond^+ \neg \varphi,$ then the collection of valid formulas would be inconsistent, a contradiction as it is not. Thus, $\square^+ \varphi \not\implies \neg \Diamond^+ \neg \varphi.$

$\therefore$ the derivations above, in terms of absolute modalities, are invalid. Because ($) does not hold for absolute modalities in the model, $\Diamond^+ \square^+ \varphi$ is true as $\square^+ \varphi$ is true at least in $t$ (which is trivial, and so everything is true), but $\varphi$ might be false in a world other than $t$. Similar consideration apply as to the invalidity of (5). (T) in turn holds even for absolute modalities.

i.e., combining the possibilist axiom and axiom schema ($) leads to a derivation that collapses modal distinctions, forcing all statements to be true across all worlds, trivializing the logic (Absolutist Trivialism). Note that this is an invalid case of trivialism, not a (valid) trivialist logic.

In the case that $\mathcal{V}$ consists of one truth state
1) For all $\varphi, v(\varphi)=\top$
 Since $\top \in D^+,$ we derive
2) For all $\varphi, v(\varphi) \in D^{+}$
3) $\top = \bot$
and hence
1*) For all $\varphi, v(\varphi) = \bot$
2*) For all $\varphi, v(\varphi) \in D^-$
2*) $D^+ = D^-$
4) For all $\varphi, v(\varphi) \in D^+$ and $v(\varphi) \in D^-$
5) For all $\varphi, v(\varphi) = \top$ and $v(\varphi) = \bot$
## Ideas
Hierarchy construction?
Going up the hierarchy, each level has more logically valid contradictions (derived from internal inference rules)

$\mathcal{L}_{0}:=$ Classical Logic
$\mathcal{L}_{1}:=$ A (minimal) paraconsistent logic with some logically valid contradictions
.
.
.
$\mathcal{L}_{\alpha}:=$ Paraconsistent logic with a lot of a valid contradictions
$\mathcal{L}_{\alpha+1}:=$ A Paraconsistent logic with more valid contradiction than level $\mathcal{L}_{\alpha}$
.
.
.
$\mathcal{L}_{\lambda}:=$ All contradictions valid in $\mathcal{L}_{\alpha}$ for $\alpha<\lambda$ is valid in $\mathcal{L}_{\lambda}$. $\lambda$ is a limit ordinal.
.
.
.
$\mathcal{L}_{\sigma}:=$ The fixed point, a fully trivialist logic where all contradictions are logically valid and so all statements are true

Could consider a contradiction scheme, where e.g.,

$C_{0}= \emptyset$
$C_{1} =${$\varphi \wedge \neg \varphi$| $\varphi$ is an atomic formula}
$C_{2}=${$\varphi \wedge\neg \varphi$| $\varphi$ is a formula of depth $\leq 2$}
.
.
.
$C_{n}=${$\varphi \wedge \neg \varphi| \varphi$ is a formula of depth $\leq n$}
.
.
.
$C_{\sigma}=$ includes all (well-formed) contradictions, fixed point

The notion of depth refers to the notion of formulas being trees and refers to the complexity of the sentence (i.e., the no. of conjunctives in the formula).
## Meta-Trivialist Logics
The formalization of trivialism above is also a formalization of extended modal realism (in the construction where you have both trivial and non-trivial worlds)
### Semantically-Closed Trivialist Logic

A full 'god logic' which can refer to anything is an infinite meta-hierarchy consisting of the trivial logic at all stages in the hierarchy.
I.e., We allow a semantically closed trivialist logic.
- The differentiation between the types of trivial logics (T0-3) is done in the meta-languages (which is non-trivial).
$\to$ This trivialist system would be 'infinitely complex', in that it forms an infinite Tarski hierarchy due to being semantically closed (kind of).


Trivialist logics are all 'absorbing', meaning if you introduce any new statements (even if it is contradictory, meta or self-referential, paradoxical), it will then be affirmed as true.

**Objective:** Make trivialist logic semantically closed, if the logic is truly 'trivial', then adding any new 'meta-statements' will not result in logically invalid (i.e., by inference rules) contradictions as from above.
$\to$ Introduce a truth predicate within the language so that it may have full reigns over it's own system and statements. Trivialist logics do not inherently contain their own truth predicate and so first needs added into the language in order to be expressed (and 'absorbed').

Thus, we have a limitation of constructing a 'god logic' (i.e., talking about and affirming anything), in that the language must still have the expressive power and necessary syntax, which has to be added externally from the meta-theory.

Not only is trivialist logic 'all-absorbing', but it is also 'self-extending'. Assuming the trivialist logic is strong enough to express Gödel-encoding and diagonalization, and given it is semantically closed, then since it has range over it's own semantics, it would be able to encode new syntactic expressions into the language (i.e., internally adding new symbols in the language or internally simulating its own expansions). This newly defined syntax would be automatically be accepted as true due to trivialist logics being able to 'absorb' anything introduced. We would then require a separate notion of internal syntax (which can't exactly be pinned down due to trivialist logic proving anything about its own system, that is, we would have a syntactic collapse internally due to introduced contradictory syntax), and an external syntax defined w/in some outside meta-theory (which is assumably not trivial as to not cause a syntactic collapse externally as well).

**Note:** We can have a notion of internal vs external syntax but not a notion of internal vs external semantics, as the semantics of language is inherently meta-theoretic.

### Uncountable Meta-hierarchy
**Note:** You would still be able to study this semantically closed language at the level $\mathscr{L}_{\omega}$ which acts as the metalanguage for all $\mathscr{L}_{n}$ and where the framework of the Tarski hierarchy is formalized at the this level (you can always consider a further metalanguage). Thus, even though the language is semantically closed (and can consider essentially anything, including $n$-meta statements) and trivial, you can still study this language at an 'external' meta-language (usually, limit stages as given above), so it is not completely ineffable (assuming said metatheory is non-trivial).
If it were completely ineffable, w/in the modal logic framework, you wouldn't be able to 'know' if the logic is any of the T0-3 (i.e., consider the meta-statement "This logic is not T3"). Furthermore, you wouldn't be able to tell if it is an invalid or valid trivialist logic (as these are semantic notions).

$\to$ Even if we consider an uncountable (and non-recursive) Tarski hierarchy construction, it is not totally ineffable.
Recall:
	A Tarski hierarchy with uncountably-many levels uses a non-recursive syntax (and so is undecidable, the index of the levels can no longer be effectively enumerated).
	$\implies$ We cannot differentiate between different levels (i.e., cannot say if $\varphi \in \mathscr{L}_{\alpha}$). Although, we 'know' that such a hierarchy technically consists one language.

This is really only an issue for Tarski hierarchy with uncountably-many 'distinct' languages, and not the case of semantically-closed language where we can collapse the Tarski hierarchy to finitely-many levels (two levels will suffice, where both $\mathscr{L}_{0}=\mathscr{L}_{1}$) since it is really just a single language with range over it's own truth predicate. 
	i.e., just don't consider an uncountably long Tarski hierarchy

 In this context, a semantically closed trivial logic is not 'ineffable.'

## References
[[Philosophy]]
[[Modal Logic]]
[[Models of Possibilism and Trivialism.pdf]]
[Trivialism](https://en.wikipedia.org/wiki/Trivialism)