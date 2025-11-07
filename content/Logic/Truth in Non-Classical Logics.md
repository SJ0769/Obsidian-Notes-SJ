## Paraconsistent Hierarchy
Similar to Kripke's hierarchy of languages, there exists a paraconsistent hierarchy of languages. We start with the empty language

$\mathcal{L}_{0}:= \mathcal{L}_{\varnothing, \varnothing}$ 
does not contain its own truth predicate, the extension ($EXT = S_{1}$) and anti-extension
($ANT-EXT=S_{2}$) are the empty set $\varnothing$.

The hierarchy is then built up via extending the extension and anti-extension with new sentences, the difference from Kripke's theory of truth being that these sets are not mutually exclusive 
($S_{1} \cap S_{2}\neq \varnothing$) and $S_{1}\cup S_{2}$ may exhaust the domain of sentences, depending on the paraconsistent logic (i.e., purely paraconsistent logics such as $LP$ and $RM_{3}$, not $FDE$)
.
.
.
$\mathcal{L}_{\alpha_+1}:=$ The language $\mathcal{L}_{\alpha}$ with the truth predicate $T^*(x)$, a more define version of the 
.
.
.
$\mathscr{L}_{\lambda}=\bigcup\limits_{\alpha<\lambda}\mathscr{L}_{\alpha}$ for $\lambda$ is a limit ordinal
Similar to Kripke's hierarchy of languages, the paraconsistent hierarchy of languages has a fixed point $\mathcal{L}_{\sigma}$ (the point in the hierarchy where $\mathcal{L}_{\alpha} = \mathcal{L}_{\alpha+1}$). Unlike in Kripke's theory of truth, statements which have not been assigned the truth value $T=$'True' or $F=$ 'False' at any $\mathcal{L}_{\beta}$ 
(for $\beta < \sigma$) will be assigned the truth value  $B=$'Both True and False', instead of $U=$"neither true or false."
## The Strengthened Liar
Let $T(\lceil \phi \rceil)$ means "$\phi$ is true"
$F(\lceil \phi \rceil) = T(\lceil \neg \phi \rceil)$ means "$\phi$ is false"
$U(\lceil \phi \rceil)$ means "$\phi$ is undefined"

$\neg T(\lceil \phi \rceil) = F(\lceil \phi \rceil)$ or $U(\lceil \phi \rceil)$ (i.e., untrue)
$\neg F(\lceil \phi \rceil) = T(\lceil \phi \rceil)$ or $U(\lceil \phi \rceil)$ (i.e., unfalse)
$\neg U(\lceil \phi \rceil) = T(\lceil \phi \rceil)$ or $F(\lceil \phi \rceil)$ (i.e., defined)

**The Strengthened Liar/Revenge of The Liar:**
Consider the statement Q = "This sentence is false or undefined." Intuitively, if this statement is true then this results in a contradiction as it is not false or undefined. A longer evaluation can be seen below.

$Q \equiv F(\lceil Q \rceil) \vee U(\lceil Q \rceil)$
$T(\lceil Q \rceil) = T(\lceil F(\lceil Q \rceil) \vee U(\lceil Q \rceil) \rceil)$
i.e., Q is true is if it is false or undefined
$\implies (T(\lceil Q \rceil) \iff F(\lceil Q \rceil))$ or $(T(\lceil Q \rceil) \iff U(\lceil Q \rceil))$
$\implies (T(\lceil Q \rceil) \iff \neg T(\lceil Q \rceil))$ or $(T(\lceil Q \rceil) \iff \neg T(\lceil Q \rceil))$

If the $F(Q)$, then the statement $Q$ is true, a contradiction. This is the same case for when $Q$ is undefined.

We derive that $T(\lceil Q \rceil)\iff\neg T(\lceil Q \rceil)$ as $U(\lceil Q \rceil = \neg T(\lceil Q \rceil))$
Thus, a purely paracomplete approach does not escape analogues of the liar paradox (and so Tarski's Undefinability Theorem applies, truth cannot be captured).

The gap-theorist argues that this is allowed, and it is only incorrect when $T(\lceil Q \rceil) \iff F(\lceil Q \rceil)$    (or $T(\lceil Q \rceil)\iff T(\lceil \neg Q \rceil)$). Although this reduces to paraconsistency as this would require a change in the negations laws and law of noncontradiction (LNC). 
	$\rightarrow$This has some philosophical implications ($\implies$) regarding the intent of such an approach (i.e., the original intent of a paracomplete solution is to escape analogues of the liar's paradox whilst preserving as much classical rules, so a paraconsistent result may be thought of as 'self-defeating')
	**Note:** With this paraconsistent response to the strengthened liar, you would be utilizing a paraconsistent (and paracomplete one) with the truth values $S=${${F,U,T}$} (rather than
	 $S=${$F,B,T$}).
Thus, the contradiction $T(\lceil \varphi \rceil)\iff \neg T(\lceil \varphi \rceil)$ is an invalid one.


Any (other) solution/response to the strengthened liar would also be non-classical (i.e., requiring additional or modified rules of logic, beyond the exclusion of the LEM).

This also holds for Kripke's Theory of Truth (which is based off of the paracomplete system of Kleene's strong 3-valued logic) where the strengthened liar results in a contradiction (even at the fixed point $\mathscr{L}_{\sigma}$).

In Kripke's theory of truth these exists statements which are true for $\mathscr{L}_{\sigma}$ which cannot be defined within $\mathscr{L}_{\sigma}$.
Consider the sentence "The liar sentence is undefined", this sentence is true in the fixed point $\mathscr{L}_{\sigma}$ yet cannot be defined within it. This is because at the fixed point $\mathscr{L}_{\sigma}$ the liar sentence L (which is ungrounded) is given the truth value of U = 'undefined.' This procedure exhausts all the effective levels of the Kripkean hierarchy of languages as $\mathscr{L}_{\sigma} = \mathscr{L}_{\sigma+1}$ ($\mathscr{L}_{\sigma}:=$ as the level $\mathscr{L}_{\alpha}$ such that $\mathscr{L}_{\alpha} = \mathscr{L}_{\alpha+1}$), the placement of sentences (whether in the extension or anti-extension or outside of both) and so new sentences which range over ungrounded statements such as the liar, and are of which are of a 'higher level', cannot be added. $\therefore$ To define such a statement we require a metalanguage, thus reverting back to a Tarskian hierarchy of languages.


'Not true' (or 'untrue') is a different context to truth values of statements in truth tables (i.e., if a statement $\varphi$ is undefined, then $\neg \varphi$ is also undefined), specifically referring to the truth predicates.


**The Strengthened Liar in Paraconsistent Logic:**
Consider the following statement in paraconsistent logic:
"Every sentence is either 'only true', 'only false' or 'both true and false'"
	Note: A statement $\varphi$ is 'only true' if it is true in L but not false in it (i.e., $\varphi \in S_{1}/S_{2}$) where $S_{1}=EXT$ and $S_{2}= ANT-EXT$
	A statement $\varphi$ is 'only false' if it is false in $\mathscr{L}$ but not true in it (i.e., $\varphi \in {S_{2}}/{S_{1}})$

The issue comes with the notion of 'only true' and 'only false', we can effectively recreate the liar statement: "this statement is only false", taking it as true we derive that this statement is 'only false' if and only if it is 'only true', resulting in triviality.
	**Note:** this statement cannot be both true and false as per the definition of being 'only true' and 'only false', we derive a contradiction which results in triviality (**recall:** paraconsistent logic only allows contradictions which don't result in triviality). Triviality is ensured (even though the proof system has been modified to avoid the principle explosion) from a meta-contradiction about how the truth predicate behaves in paraconsistent logic. This can still 'spread' (via the inference of new sentences) by analogues of Curry's paradox (a conditional statement) which only requires modus ponens and contraction.

The paracomplete and paraconsistent logic $FDE$ fails under the liar analogue "this sentence is not (only) true."

Thus, even a paraconsistent logic cannot capture truth/define its own truth predicate, and so Tarski's Undefinability Theorem holds. To prevent this you would have to remove very important inference rules — specifically, modus ponens ([Proof Theory](Logic/Proof%20Theory.md)) — which our notion of logic relies upon, and thus weakening the proof system extensively to the point where you cannot effectively derive anything. Even then you would still have 'isolated' sentences which do not stabilize at a single truth value (hence showing our idea of a truth predicate still fails just w/out the triviality).
$\to$ You can remove contraction instead and retain modus ponens, still significantly weakening the proof system but still usable, this will prevent usual Curry paradoxes. However, there are types of Curry paradoxes called 'v-Curry's' where validity is expressed w/in the system itself which are not avoided by proof systems where contraction is weakened

**Note:** The statement $\phi=$ "every sentence is either only true or only false or both true and false" is true in the fixed point $\mathcal{L}_{\sigma}$ of the paraconsistent hierarchy, although $\phi$ is not a sentence definable in the hierarchy. As in the case of the Kripkean hierarchy of languages, we have exhausted all sentences, we cannot add any more sentences after $\mathcal{L}_{\sigma}$.

Other views for the liar's paradox: it is just an error to say that it is well-defined
## Application to Gödel's Incompleteness Theorem 
Gödel's Incompleteness Theorem considers an analogue of the liar sentence about provability
"This sentences is unprovable"
(or equivalently, $G = \neg \text{Prov}(\lceil G \rceil)$). Within a 3-valued paracomplete logic system, the statement G would be assigned the 'undefined' truth state. However, this does not mean that paracomplete logic escapes the incompleteness theorem. Consider the following statement
	$G$ = "This sentence is not provable" 
	**Note:** 'not provable'= {unprovable, undefined}. The intuition behind this is that if $G$ is undefined then it is neither true nor false that $G$ is not provable and so $G$ isn't provable. In order for $G$ to be provable it must be false which results in a contradiction and so assigning $G$ the 'undefined' truth state still leads to incompleteness.
	$\rightarrow G \equiv (\neg \text{Prov}(\lceil G \rceil)) \vee U(\lceil G \rceil)$ 
	$\implies T(\lceil G \rceil) \iff \neg \text{Prov}(\lceil G \rceil) \vee T(\lceil G \rceil) \iff U(\lceil G \rceil)$
Thus, we get that it is not provable if and only if it is provable or undefined.
**Note:** $T(\lceil G \rceil) \iff U(\lceil G \rceil)$ will result in a contradiction unless negation rules and the LNC is modified.
Thus, it has been established that there are true statements which are unprovable. $\therefore$ the incompleteness theorem holds (we only require the existence of some true but unprovable statements for this).

**The Incompleteness Theorem in Paraconsistent Logic**
A paraconsistent system is inconsistent by definition (allowing a contradiction $p$ and $\neg p$ to both be true). Whether there are unprovable statements depends on if the system is complete or not (and also on the exact paraconsistent logic).
$\to$ Since the theory is inconsistent (but not trivial) it can prove the Gödel sentence

**Recall:** Gödel's first incompleteness theorem asserts that a theory cannot have all of the following:

i) Prove a sufficient amount of arithmetic (i.e., multiplication $\times$)
ii) Consistent
iii) Complete
iv) Recursively enumerable

Since it isn't consistent, the other 3 conditions can be met (at most).

**The Löwenheim-Skolem Theorem:**
The Löwenheim-Skolem Theorem states that a first-order theory (in a countable language) will have models of every infinite cardinality given that it has an infinite model and no finite models. W/in paraconsistent logic you may have a theory $T$ which has a model of every infinite cardinality and have finite models.

[[Model Theory/Gödel's Incompleteness Theorems]]

## Other
There are further theories of truth and conceptions as mentioned below
### The Revision Theory of Truth (RTT)
Introduces the notion of 'stability', in this view paradoxical statements are not contradictory but rather unstable in that they oscillate between truth values.

Consider the liar sentence $L$ = "This sentence is false"

$L$ dynamically oscillates between the truth values 'true' and 'false':
- A sentence stabilizes if it is assigned a definite truth value at a given level
- A sentence is unstable if it is not assigned a definite truth value at any stage

Still suffers from analogues of the liar's paradox. Consider the following statement:
"This sentence is not stably true."

-------------------------------------
**Non-prime Disjunction:** A statement w/ a non-prime disjunction may be true even though none of the individual disjuncts are true. This has applications to 'impossible worlds' in extensions of modal logic. This also does not prevent the liar's revenge.
E.g., the sentence $\varphi \vee \psi$ may be true even if it is the case that $\neg \varphi$ and $\neg \psi$ (i.e., $\varphi$ and $\psi$ are false).
## References
[[Tarski's Theory of Truth]]
[[Kripke's Theory of Truth]]
[[Logic/Many-valued Logic]]
[Proof Theory](Logic/Proof%20Theory.md)
[[Model theory of DeMorgan Logics.pdf]]
[[karacic_review_article.pdf]]
[The Strengthened Liar and Paradoxes of Incompleteness](https://www.youtube.com/watch?v=5LWQPGjAs3M&list=WL&index=5&t=744s)
[Paraconsistent Logic](https://plato.stanford.edu/entries/logic-paraconsistent)
 