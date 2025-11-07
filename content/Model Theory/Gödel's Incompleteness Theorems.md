## The Process of Gödel Numbering
Gödel numbering is a function that assigns to each symbol (logical & the non-logical symbols of the vocabulary) and well-formed formula (WFF) to a unique natural number
i.e., $g: s \mapsto \mathbb{N}$
Where $g$ is the assigning function, and $s$ is the set of all WFF's

E.g., of Gödel encoding
The symbols (logical & non-logical) are assigned natural numbers
'(' = 2,
')' = 3,
'$\cdot$' = 4,
'+' = 5,
'$\forall$' = 6,
'$\exists$' = 7,
'$\wedge$' =8,
'$\vee$' =9,
'=' = 11,
.
.
.
'$y$' = 17,
.
.
.
The position of a symbol in a WFF is assigned a prime number

i.e.,  $\underset{2}{-}\underset{3}{-}\underset{5}{-}\underset{7}{-}\underset{11}{-}\underset{13}{-}\underset{17}{-}\dots$

Now consider the following the following formula
$\forall y(y=y)$

We utilize prime factorization to determine a Gödel number (the product of prime numbers) and get the following

$2^6 \times 3^{17}\times 5^2 \times 7^{17}\times 11^5 \times 13^{17} \times 17^3$

i.e., The number which is assigned to the logic & non-logical symbols are raised to the power of the numbers assigned to the position of a symbol in the WFF

**Notation:** The Gödel number of a formula $\varphi$ is denoted as $\lceil \varphi \rceil$

**Note:** Some Gödel's encodings processes switch the numbers around so that the number assigned to the position of a symbol in a WFF is raised to the numbers assigned to logical & non-logical symbols.

Prime factorization due to the fundamental theorem of arithmetic, that is "any natural number can be uniquely factored into prime factors." Thus, allowing us to reverse the Gödel encoding procedure to recover the original sequence of symbols from its Gödel number in order to effectively know what is exactly the WFF.

Gödel numbering allows us to encode formulae of the object theory into objects of the object theory (in this case arithmetic numbers). 'Internalization' is the process of expressing a meta statement w/in the object language. An example of this is seen below via considering the statement "$T$ proves the sentence $\varphi$", which can be encoded into the object language as $\exists y\text{Prf}(m, \lceil \varphi \rceil)$ where $m$ is the Gödel number of a proof in $T$ of the formula w/ Gödel number $n$.
These processes allows us to express self-referential statement which is integral to Gödel's Incompleteness Theorems and Tarski's Undefinability Theorem.

**Arithmetic Procedures on Gödel Numbers**
Consider the formulas $\varphi$ and $\psi$ of our formal language, let $\lceil \varphi \rceil$ and $\lceil \psi \rceil$ denote the Gödel numbers of the formulas respectively, if we take the rule of inference over 'and', then

$\varphi \wedge \psi \to \lceil \varphi \rceil \oplus \lceil \psi \rceil = \lceil \varphi \wedge \psi \rceil$
where '$\oplus$' is the natural sum

Let $\alpha = \omega^{\alpha_{1}} +\dots + \omega^{\alpha_{\kappa}}$ and $\beta = \omega^{\beta_{1}}+\dots+ \omega^{\beta_{\ell}}$ be in Cantor normal form (i.e., $\alpha_{1} \geq \dots \geq \alpha_{\kappa}$ and $\beta_{1} \geq\dots\geq \beta_{\ell}$). Let $\gamma_{1},\dots, \gamma_{\kappa+\ell}$ be the exponents $\alpha_{1},\dots,\alpha_{\kappa}, \beta_{1},\dots,\beta_{\ell}$ sorted in nonincreasing order. Then $\alpha \oplus \beta = \omega^{\gamma_{1}}+\dots+ \omega^{\gamma_{\kappa+\ell}}$.

A predicate can be constructed in taking arithmetic numbers and is true if they satisfy the arithmetic operation.

i.e., $P(\bar{x},\bar{y},\bar{z}) = \top \iff x\oplus y=z$
$\bar{x}= S\dots SO$ (successor applied x-times)

A binary predicate can be made which takes a number $S,$ which represents a set of formulas, and a formula $\varphi$ and checks whether each formula in $S$ is an axiom or theorem (derived statement from the axioms). Thus, it checks if $S$ is a proof of $\varphi$.

Denote it as
$\text{Prf}(S, \varphi): S$ is a proof of $\varphi$

**Note:** $\text{Prov}(x) \equiv \exists y(\text{Prf}(y, x))$
"$x$ is proven iff there exists $y$ such that $y$ is a proof of $x$"

**'Substitute' Function**
$\text{Sub}(\bar{m},n,\bar{x}): \lceil \lceil m \rceil_{\lceil x \rceil\mapsto n} \rceil$
"The Gödel number of the formula with Gödel number $m$, with every instance of the formula with Gödel number $x$ being replaced with $n$"
i.e., Suppose $\lceil y \rceil = 17,$ then consider $\text{Sub}(\bar{m}, y, \bar{17}) = m,$ that is, this instance of the substitute function is the identity function. This is because it takes the sentence with Gödel number $m$ and replaces every $y$ with $y$.

These functions are defined w/in the object theory (although what they actually mean semantically, is justified in the metatheory).
## Intuition
**Self-Referential Statements**
The goal is to construct a statement asserting "this statement is not provable" (an provability analogue of the liar's paradox).

e.g., $\lceil \neg \text{Prov}(\text{Sub}(y,y,17)) \rceil = n$
then let
$Sub(\bar{n},n,17)$
then,
$\neg \text{Prov}(\text{Sub}(\bar{n},n,17) = \neg \text{Prov} (G)$
$\implies$ Some sentence with Gödel number G does not have a proof

Recall: $\text{Sub}(\bar{n},n,17)$ takes every sentence with Gödel number $n$ and replaces every instance of $y$
($\lceil y \rceil = 17$) with $n$, from this we obtain the sentence $\neg \text{Prov}(\text{Sub}(\bar{n},n,17)$. Thus, 
$\lceil \neg \text{Prov}(\text{Sub}(\bar{n},n,17) \rceil = \text{Sub}(\bar{n},n,17) = G.$

This is essentially stating that a "a sentence with Gödel number G is unprovable, but this statement itself is the sentence with Gödel number G"

We will now consider the following sentence:


**Proof Outline:**
"this statement is not provable"
Formally, this is asserted as follows:

$G = \neg \text{Prov}(\lceil G \rceil)$
Consider $G$ as false 
$\implies$ $\neg G$ is true by the Law of Excluded Middle 
But since $\neg G$ is true then the theory $T$ proves $G$(note:$\neg G=$"$G$ is provable").

**Case 1:** 
	i) $T \vdash G$
	$\implies G$ is provable
	$\implies T$ is inconsistent as $T \vdash G$ and $T\vdash \neg G$. Thus, a contradiction.
	ii) $T \not\vdash \neg G$
	$\implies$ $\neg G$ is not provable
	Thus, we have obtained a true but unprovable statement.
**Case 2:** 
If $G$ is true, then $G$ is not provable ($T\not\vdash G$)

-------------

**The Diagonal Lemma:**
	$\forall F(x) \exists A (A \leftrightarrow F(\lceil A \rceil)$
	For $A$ is the fixed point of the function $F(x)$
This asserts the existence of self-referential statements in sufficiently powerful first-order axiomatic systems that have a recursive syntax (and must also obviously express Gödel encoding as seen above).

Gödel's First Incompleteness Theorem is the instance where $A = G$, where $G$ is defined as above
($G=\neg \text{Prov}(\lceil G \rceil)$) and $F$ is the function that asserts that it's argument $x$ is unprovable, 
i.e., $F(x) =\neg \text{Prov}(x)$. From this we derive

$\forall \neg \text{Prov}(x) \exists G(G \leftrightarrow \neg \text{Prov}(\lceil G \rceil))$

$Con(T)$ is the assertion that "$T$ is consistent", in (Peano) arithmetic, this is the same as asserting that "there is no proof of $0=1$ in PA" as $PA+$"$0=1$" is inconsistent.

Gödel's (partially) internalizes the metatheory (w/in the object theory), allowing us refer to it and talk about proofs over its own statements. This is limited access to the metatheory as via [Tarski's theory of truth](Logic/Tarski's%20theory%20of%20truth.md), the object language cannot refer to its own semantics or the semantics of any theory of a higher meta-level (as this would cause semantic collapse). Thus, we cannot encode semantic notions, only syntactic ones like proofs.

**Notes:**
- An internalization of the metatheory causes a divide between internal and external syntax (of the metatheory), where the internal syntax is the Gödel encoding of its symbols and expressions, while the external syntax is the actual syntax of the formal language.
- A theory $T$ Gödel encoding its own formulas and statements is equivalent to it being its own metatheory.
- Any theory which can express the diagonal lemma (and so Gödel encoding) can construct the sentence $G$.
## The Incompleteness Theorem
**Gödel's Incompleteness Theorem:**
	1) **Gödel's First Incompleteness Theorem:**
	Gödel's First Incompleteness Theorem asserts that any axiomatic theory cannot have all of the following properties:
		1) Proves/captures a sufficient amount of arithmetic (i.e., multiplication $\times$)
		2) Consistent (i.e., $\Gamma \vdash \neg (\varphi \wedge \neg \varphi)$ or equivalently, $\Gamma \vdash (\varphi \vee \neg \varphi)$)
		3) Complete (i.e., $\Gamma \vdash \varphi \vee \Gamma \vdash \neg \varphi$ for any formula $\varphi$)
		4) Recursively enumerable (i.e., we can list all of the theory's axiom by a valid algorithm)
	The proof of this is described in the section above w/ the assumptions that the theory is recursively enumerable and can assert and prove the diagonal lemma (i.e., a "sufficient" amount of arithmetic).
	2) **Gödel's Second Incompleteness Theorem:**
		Gödel's Second Incompleteness Theorem asserts that any consistent theory which is sufficiently powerful (i.e., captures basic arithmetic) cannot prove it's own consistency
		 ($\Gamma \not\vdash Con(\Gamma)$), this is equivalent to any axiomatic theory $\Gamma$ cannot prove that it has a model $\mathcal{M} \models \Gamma$ (since the existence of a model implies it's consistency via the soundness theorem, see [[Soundness & Completeness]])

**Note:** Adding every unprovable true formula to the theory $T$ will not obtain a complete theory as Gödelizing the extended system $T'$ ($T'=T+G$, for every unprovable $G$), we can find another formula with its own Gödel number $G'$ which is true but unprovable. This process goes on ad infinitum until you have exhausted all possible (consistent) choices for sentences. Then you obtain the maximal consistent extension of $T,$ denoted $T^*.$



**Proof (Second Incompleteness Theorem):**
The proof of the second incompleteness theorem follows us by formalizing the proof of the first incompleteness theorem w/in the system $T$ itself.

Let $G$ be the Gödel sentence as defined above ($G=\neg Prov(\lceil G \rceil)$) and assume for the case of contradiction that $T\vdash Con(T)$. Now consider the sentence $C = Con(T)\implies \neg Prov(\lceil G \rceil)$, that is, if $T$ is consistent then $G$ is not provable. Then $T\vdash C$, this follows from the assumption that $T\vdash Con(T)$. Thus, $T$ proves the statement "this statement is not provable" is provable and from the first incompleteness theorem, a contradiction (as $G$ is the sentence we construct to be unprovable).

The second incompleteness theorem is an instance (and implication) of the first incompleteness theorem.

---------------

**Extensions of Gödel numbers:**
$\to$ Encoding in set theory
E.g.,
- $\lceil \neg \varphi \rceil = (4, \lceil \varphi \rceil)$
- $\lceil \varphi \vee \psi \rceil = (5, \lceil \varphi \rceil, \lceil \psi \rceil)$
- $\lceil \varphi \wedge \psi \rceil = (6, \lceil \varphi \rceil, \lceil \psi \rceil)$
- $\lceil \varphi\to \psi \rceil = (7, \lceil \varphi\rceil, \lceil \psi \rceil)$
- $\lceil \varphi \leftrightarrow \psi \rceil = (8, \lceil \varphi \rceil, \lceil \psi \rceil)$
- $\lceil \exists v\varphi \rceil = (9, \lceil \varphi \rceil, \lceil \psi \rceil)$
- $\lceil \forall v\varphi \rceil = (11, \lceil \varphi \rceil, \lceil \psi \rceil)$
- $\lceil \bigvee f\rceil = (12, \lceil f \rceil)$
- $\lceil \bigwedge f \rceil=(13, \lceil f \rceil)$

Where in this case
$'\neg' = 4'$
$'\vee'=5$
$'\wedge'=6$
$'\to'=7$
$'\leftrightarrow'=9$
$'\exists'=9$
$'\forall'=11$
$'\bigvee'=12$
$'\bigwedge'=13$

A Gödel encoding requires an ordered system (i.e., based off of prime factorization) so the procedure can be reserved to obtain the original formula (which has been encoded).

**Note:** Although a consistent theory $T$ cannot prove its own consistency, it can define/formulate the consistency of itself w/in $T$ (i.e., $\text{Con}(T) = \neg \text{Prov}(\bot)$). This is in contrast to asserting the soundness of $T, \text{Sound}(T)$, not only cannot be proven w/in $T$, but also cannot be defined w/in it. As soundness is dealing w/ truth rather than consistency via Tarski's Undefinability Theorem.
$\to$ Soundness is asserted as follows:
	$\forall \varphi(\text{Prov}_{T}(\varphi)\to \text{True}(\varphi))$
	For $'\text{Prov}_{T}(\varphi)'$ meaning "$\varphi$ is a theorem of $T$"
$\to \text{Con}(T)$ is a syntactic notion can be formulated
$\to \text{Sound}(T)$ is a semantic notion cannot be formulated
$\to \text{Com}(T)$ is a syntactic notion can be formulated

Note: There are obviously theories which are consistent and complete, they just sacrifice either the property of expressing a sufficient amount of arithmetic or being recursively enumerable.

E.g., For $\mathcal{M}$ is some structure, the theory Th($\mathcal{M}$), the set of all sentences true in $\mathcal{M}$, is complete, consistent, and can express a sufficient amount of arithmetic, but is not recursively enumerable (i.e., we cannot list down all of its axioms)

E.g., Presburger arithmetic is a theory which is consistent, complete and recursively enumerable, but is so weak in expressive power that it does not capture Gödel encoding. The 'rough' point where a theory can express Gödel encoding is at the theory $PRA$ (primitive recursive arithmetic).

There are also instances where the second incompleteness does not apply where there are theories that can prove their own consistency (see [Self-Verifying theories](Miscellaneous/Self-Verifying%20theories.md)).

## References
[Paradoxes of Completeness, Definability and Computation](https://www.youtube.com/watch?v=JfNh1CSuB28&list=WL&index=7&t=865s)
[Gödel's incompleteness theorems](https://en.wikipedia.org/wiki/G%C3%B6del%27s_incompleteness_theorems))
[[Tarski's Theory of Truth]]
[[Self-Verifying theories]]
