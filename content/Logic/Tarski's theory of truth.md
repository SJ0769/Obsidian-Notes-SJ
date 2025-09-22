A truth predicate, denoted True($\lceil \phi \rceil$), or T($\lceil \phi \rceil$), denotes that a statement $\phi$ $\in$ $\mathscr{L}[\tau]$ (a class of $\mathscr{L}$-sentences of vocabulary $\tau$) is true.

Similarly, False($\lceil \phi \rceil$), or F($\lceil \phi \rceil$), denotes that a statement $\phi \in \mathscr{L}[\tau]$ is false.

Tarski's theory of truth is bivalent, meaning the set of truth values are $S=\{T, F\}$ (the truth states 'true' and 'false' are semantic objects), this set is defined in the metatheory of the object language (see below). Every statement is assigned a single truth value in $S$ (true or false).
## Semantic Laws
### Laws of Thought
**Law of Noncontradiction (LNC):** $\phi$ and $\neg \phi$ cannot both be true, otherwise the theory is inconsistent.

**Law of Excluded Middle (LEM):** Either $\phi$ is true, or $\neg \phi$ is true.
	**Note:** The law of excluded middle differs from the law of bivalence in the case of paraconsistent logic, where a sentence $\phi$ can be assigned multiple truth values (i.e., both true and false).

**Law of Identity:** For all statements $\phi$, $\phi=\phi$ (i.e., something its itself).

----------------

**Principle of Bivalence:** Every statement $\phi$ has a single truth state, that being true or false.
	It can be observed that the principle of bivalence implies the LEM as well as DNE (double negation elimination, see [Proof Theory](Logic/Proof%20Theory.md)), and in classical logic they coincide. However, the LEM does not imply the principle of bivalence, nor does DNE imply bivalence.

## Convention T
Inductively, it is defined as follows:
	i) True($\lceil \phi  \rceil$) $\leftrightarrow \phi$.
	i.e., let $\phi =$ "the snow is white", it is true that "the snow is white" if the snow is white.
	ii) True($\lceil \phi \wedge \psi \rceil$) $\leftrightarrow$ True($\lceil \phi \rceil$) $\wedge$ True($\lceil \psi \rceil$)
	iii) True($\lceil \phi \vee \psi \rceil$) $\leftrightarrow$ True($\lceil \phi \rceil$) $\vee$ True($\lceil \psi \rceil$)
	v) True($\lceil \neg \phi \rceil$) $\leftrightarrow$ False($\lceil \phi \rceil$)
	v) True($\lceil \phi \to \psi \rceil$) $\leftrightarrow$ True($\lceil \neg \phi \rceil$) $\vee$ True($\lceil \psi \rceil$)
	vi) True($\lceil \forall x \phi \rceil$) $\leftrightarrow \forall x$ True($\lceil \phi \rceil$)
	vii) True($\lceil \exists x \phi \rceil$) $\leftrightarrow \exists x$ True($\lceil \phi \rceil$)

**Note:**  $\lceil{\phi}  \rceil$ denotes the Gödel encoding of the sentence $\phi$.
## Tarski's Undefinability Theorem:
**Theorem (Tarski):** A sufficiently powerful language (capturing basic arithmetic such as multiplication $\times$ and diagonalization, see [[Model Theory/Gödel's Incompleteness Theorems]]) cannot define it's own truth predicate (within itself).

**Proof:**
Assume for contradiction that there is a predicate 'True(x)' which determines if x is true or not in a sufficiently powerful language $\mathscr{L}$ (can show diagonalization). Then True($\lceil \phi \rceil$) holds in a model $\mathcal{M}$ if and only if $\phi$ holds, for some arbitrary $\mathscr{L}$-sentence $\phi$.
(i.e., $\mathcal{M} \models$True($\lceil \phi \rceil) \iff \mathcal{M} \models \phi$)

Consider the statement $L=$ "this sentences is false"; if L is true, then we get that L is false.

We derive the contradiction (via diagonalization) $L$ $\iff \neg$True$(\lceil {L} \rceil)$, as this violates Tarski's convention T: True($\lceil \phi  \rceil$) $\iff \phi$. This is equivalent to:  True($\lceil L  \rceil$) $\iff \neg$ True$(\lceil L  \rceil)$ via convention T (it is true if and only if it false).

**Lemma:**
- This equivalent to $\neg ( \mathcal{M} \models T(\lceil \phi \rceil))$ for any model $\mathcal{M}$ (including the universe of sets, $V$) and for all $\phi$ in $\mathscr{L}$
- Tarski's Undefinability Theorem is equivalent to asserting that a consistent theory cannot be it's own metatheory as it would then range over its own semantics, allowing it to define its own truth predicate, resulting in a contradiction ('semantically closed').
- Not all instances of True($\lceil \phi \rceil$) $\iff \phi$ (convention T) are contained in $\mathscr{L}$.

This inability for a language to not define or capture truth within itself leads to a object-language vs meta-language distinction.
## Tarski Hierarchy of Languages:
The language $\mathscr{L}_{n+1}$ defines the truth predicate of the language $\mathscr{L}_{n}$ , denoted as $T_{n}(x)$, it is called the 'meta-language' of $\mathscr{L}_{n}$ as it describes it.
	$\rightarrow$ The meta-language is a language in which the syntax (symbols and rules) for manipulating the object language are formulated. The sentences of the object language are treated as objects which can be quantified over in the meta-language (i.e., $\forall \phi \in \mathscr{L}_{n}, \phi$ is provable in $\mathscr{L}_{n} \implies T_{n}(\phi)$), this can then be characterized as a sentence $\psi$ of $\mathscr{L}_{{n+1}}$.

Consider $\mathscr{L}_{0} = ZFC$ (Zermelo-Frankel set theory w/ the axiom of choice), $\mathscr{L}_{1} = PRA$
(Primitive Recursive Arithmetic). $PRA$ is strong enough to define Gödel numbering so it is a suitable meta-theory (in order to internalize the metatheory w/in the object language so we can refer to to its own statements and the provability of them..., etc.)

From the above example, we can also see that the syntax of the object language (i.e., formation rules for sentences, what constitutes a WFF, inference rules for proof and theorems ,..., etc. is defined in the meta-language) is also determined by the meta-theory (and so, would also affect the semantics from this).

E.g., of hierarchy

$\mathscr{L}_0 =$ object language
$\mathscr{L}_{1 =}$ meta-language, defines the truth predicate of the object language $T_{0}(x)$
$\mathscr{L}_{2} =$ meta-meta-language, defines $T_{1}(x)$
.
.
.
$\mathscr{L}_{n} =$ meta$^{n-1}$ -language, defines $T_{n-1}(x)$
.
.
.
This descends into infinite regress. The index is any $n \in \mathbb{N}$, hence the upward limit of this process is the language $\mathscr{L}_{\omega}$. Although this may be extended.


**Recursive Hierarchy of Languages:**
Start with the language $\mathscr{L}_{0}$;
$\mathscr{L}_{1} = \mathscr{L}_{0} \cup$ {$T_0(x)$}
$\mathscr{L}_{2} = \mathscr{L}_{1} \cup$ {$T_1(x)$}
.
.
.
$\mathscr{L}_{\omega}=\bigcup\limits_{n<\omega}\mathscr{L}_{n}$
$\mathscr{L}_{\omega+1}=\mathscr{L}_{\omega}\cup\{T_{\omega}\}$
.
.
.
$\mathscr{L}_{\omega_{1}^{CK}}=\bigcup\limits_{\alpha<\omega_{1}^{CK}}\mathscr{L}_{\alpha}$ (i.e., the union of all levels indexed by recursive ordinals). Limit stage

In general the process is as follows
$\mathscr{L}_{\alpha+1} = \mathscr{L}_{\alpha} \cup$ {$T_{\alpha}(x)$}
$\mathscr{L}_{\lambda} = \mathscr{L}_{0}\cup$ {$T_{\alpha}(x)$}  (or equivalently $\mathscr{L}_{\lambda} = \bigcup\limits_{\alpha<\lambda} \mathscr{L}_{\alpha}$); $\lambda$ is a limit ordinal

**Note:** These are considered different languages even though they are very similar (so semantic closure is avoided)... In this recursively defined hierarchy you do not have the freedom of choice of meta-language (i.e. cannot have $\mathscr{L}_{0} = ZFC$ and $\mathscr{L}_{1} = PRA$, instead $\mathscr{L}_{1} = ZFC \cup T_{0}^{ZFC}(x)$)
$\rightarrow$ where $T_{0}^{ZFC}(x)$ means the truth predicate of the theory ZFC at level 0 of the Tarski hierarchy.


We cannot have a meaningful extension of the Tarski hierarchy into uncountably-many meta-levels as this would result in the syntax of the external metalanguage — where the Tarskian hierarchy is defined — to be non-recursive. This means that we can no longer differentiate between the truth predicates $T_{\alpha}$ (i.e., on what level is the truth of a language defined) or to determine what metalanguage $\mathscr{L}_{\alpha}$ a sentence belongs to as a consequence of not being able to enumerate/index metalevels. Truth predicates intake a Gödel encoded sentence as an agreement, however the process of Gödel encoding (and so also diagonalization, see [Gödel's Incompleteness Theorems](Model%20Theory/Gödel's%20Incompleteness%20Theorems.md)) is a recursive one. 

We can still consider a metalanguage of the level $\mathscr{L}_{\omega_{1}^{CK}}$ but it would have a non-recursive syntax 
([Tarski Hierarchy](Set%20Theory%20+%20Model%20Theory/Tarski%20Hierarchy.pdf), pg., 12), at least in the particular case for the hierarchy given above where each stage was given by a recursive procedure. This is because $\mathscr{L}_{\omega_{1}^{CK}}$ is the limit stage of this process and defining further levels would have to be done by a non-recursive process. Thus, so you can't define a level $\mathscr{L}_{\omega_{1}^{CK}+1}=\mathscr{L}_{\omega_{1}^{CK}}\cup\{T_{\omega_{1}^{CK}}\}$ as this is a recursively given definition. However, this does not mean in the general case of a Tarskian hierarchy (not recursively defined and including previous levels in its definition) that such a metalanguage defining it is non-recursive as seen in the example below (but indexing the stages will not be done by a recursive process), rather taking the Tarskian hierarchy (of length ${\omega_{1}^{CK}}^{+}$) as a whole as a language, via union of its stages as done in limit stages such as the level $\mathscr{L}_{\omega_{1}^{CK}}$, would mean that such a language has a non-recursive syntax. 
	$\to$ E.g., a Tarskian hierarchy of length $\alpha$ (for $\alpha\in ORD$) could be defined in set theories such as ZFC by transfinite recursion (specifically by a class function $\alpha\to\mathscr{L}_{\alpha}$), however this is not a recursive procedure. Hence why ZFC is often called equivalent to $\alpha^{th}$-order logic.
**Summary:** The metalanguage to a Tarski hierarchy may still have a recursive syntax, however suitably 'checking' if a sentence or truth predicate belongs to a certain level $\mathscr{L}_{{\alpha}}$ is recursive and so still cannot be carried in such a language (although it would be able to define such truth predicates $T_{\alpha}$ and level $\mathscr{L}_{\alpha}$). Thus a non-recursive meta hierarchy can sill be studied and is not ineffable, but we still miss out on an important feature of being able to verify and differentiate effectively (recursiveness).

**Note:** An uncountable Tarski hierarchy (or rather one where we can no longer enumerate meta-levels due to being non-recursive) does not cause a semantic collapse even though we cannot differentiate between the level at which truth predicates are defined. Rather a language being non-recursive means that a truth predicate cannot be defined via the usual method of Gödel encoding (as well as encoding in the liar sentence). Thus, semantic collapse depends on if a language can internalize the metatheory's semantics.

## Further Notes on Metalanguages
**Metavariable:** A metavariable is a symbol which belongs to the metalanguage and represents some elements of the object language
	$\to$ I.e., Consider
	 "Let $\phi$ and $\psi$ be sentences of the language $\mathscr{L}$",
	Then $\phi, \psi$ are metavariables
Axiom schemas are formulae of the metalanguage where one or more metavariables occur in it. More specifically, they are a rule of formulae in the meta-theory which generates axioms of the object language.
$\to$ **Note:** Axioms themselves are formulae in the object languages, when we say that a theory has the an axiom schema, we mean it has all instances of the axiom schema, rather than the actual axiom schema itself (which is a formula of the meta-language).


A language is semantically closed if it can define it's own truth predicate (or it's own semantics), as shown by Tarski' Undefinability Theorem this (usually, see: [[Truth in Non-Classical Logics]]) leads to inconsistency.
$\rightarrow$ Circularity in a Tarski hierarchy is not allowed, a language cannot appear more than once at any point in the hierarchy of languages (i.e., $\mathscr{L}_{\alpha_{1}} \neq \mathscr{L}_{\alpha_{2}}$ for any $\alpha_{1}, \alpha_{2} \in \mathbb{N}$ such that $\alpha_{1} \neq \alpha_{2}$, or $\alpha_{1}, \alpha_{2} \in \omega_1^{CK}$ for recursively defined hierarchies) as this implies the language can define it's own semantics (semantically closed), violating Tarski's Undefinability Theorem. I.e., if $\mathscr{L}_{1}=\mathscr{L}_{3}$, then since $\mathscr{L}_{3}$ defines the semantics of $\mathscr{L}_{2}$ which in turn defines the semantics of $\mathscr{L}_{1}$, so it effectively can define it's own semantics (w/ extra steps).
This $\implies$ that not only can a language $\mathscr{L}_{n}$ not define it's own truth predicate $T_{n}(x)$ but also the truth of any higher level language (i.e., $T_{n+1}(x),\dots,etc$).

Not only is a semantically-closed language have no definable semantics, it may also have range over its own syntax, given it can define Gödel encoding as this would allow it to manipulate it's own syntax from w/in itself. This is because syntactic expressions can be represented as a Gödel encoding and allows for syntactic expressions to be an object of the language for it to have range over. Thus, we can represent new symbols and constructions through a bottom-up process (we internally add it to the object language, which is the same as the meta-language).

**Note:** A semantically closed language means that it is effectively it's own meta-language (this may be direct or indirect as seen above where there are some levels between the occurrence of the same language). This effectively reduces to an infinite meta-hierarchy of languages (it is its own meta-language, and so it is the meta-language of the meta-language..., $\mathscr{L}_{\alpha}=\mathscr{L}_{\alpha+1}$).
	$\to$ We can study the entirety of this meta-hierarchy at the level $\mathscr{L}_{\omega}$, which is the metalanguage to the meta-hierarchy (this includes a semantically closed meta-hierarchy since $\mathscr{L}_{\omega}$ is the limit stage).


Higher-order logic (HOL) can form a Tarski hierarchy of languages as $(n+1)^{th}$-order logic can formalize the semantics of $n^{th}$-order logic
i.e.,
$\mathscr{L}_{0} =$ First-order Logic (FOL)
$\mathscr{L}_{1} =$ Second-order Logic (SOL)
.
.
.
$\mathscr{L}_{n} =$ $(n-1)^{th}$-order Logic
$\mathscr{L}_{n+1} =$ $n^{th}$-order Logic
.
.
.
This hierarchy is similar to a recursive Tarskian hierarchy

**Note:** We cannot have a Tarski hierarchy where $n+1^{th}$-order logic is the object language and the $n^{th}$-order logic is the metalanguage, as then $n^{th}$-order logic would be able to define its own truth predicate and capture its own semantics (recall that $n+1^{th}$-order logic defines the semantics of $n^{th}$-order logic), resulting in semantic collapse.


The metalanguage "presupposes" the object language in that in order to talk about the object language you must first assume the metalanguage which describes the syntax (WFF, inference rules) and the semantics of the object language. The metalanguage may also "inform" the choice of axioms of the object language, by the metalanguage determining what can be formulated (as an axiom), and what it 'should' look like (i.e., philosophically, your choice of axioms should reflect what the metalanguage consider as valid and consistent). Due to the limitations imposed [[Model Theory/Gödel's Incompleteness Theorems]], the metalanguage also justifies the choice of axioms (validity and meaning of the axioms) as the object language cannot.


**Philosophical Implications:** Since 'truth' effectively cannot be captured, the notion of 'truth' becomes relative and based upon a shaky bottom.
Logical foundations (i.e., set theory, category theory, topoi theory, propositional calculus) may interpret each other, although in the framework of a Tarski hierarchy does not allow this circularity.
$\to$ The meta-language presupposes the object language, that is, it is assumed to exist, the Tarski hierarchy framework itself is 'linear', although in reality, mathematics (as defined by mathematicians) is often defined circularly (we define other foundational theories from each other).
Rather than a circular bottom, it is more like we cannot pin down mathematics on a solid foundation, we presuppose the metatheory to justify the object language, but to justify the metatheory we must first presuppose and justify the meta-metatheory. It can be seen that this devolves into an infinite process (due to an infinite Tarski hierarchy) with no proper starting point.

## Other
**Curry's Paradox:** A semantic paradox which arises when considering a conditional statement of the form $\varphi=\varphi\to \psi$  ("if it is the case that , then ") for  and $\psi$ are sentences in the language. This paradox doesn't directly rely on a self-contradictory statement, but rather claiming that the truth of an arbitrary sentence. This paradox is also blocked by Tarski's framework since the statement still requires a truth predicate (which the object language cannot define) as the sentence $\varphi$ = "if it is the case that $\varphi$, then $\psi$" is equivalent to "if this sentence is true, then $\psi$."
## References:
- [[Tarski and kripke theory of truth.pdf]]
- [[Tarski Hierarchy.pdf]]
- [[fulltext.pdf]]
- [Semantic theory of truth - Wikipedia](https://en.wikipedia.org/wiki/Semantic_theory_of_truth)
- [Tarski's Undefinability Theorem - Wikipedia](https://en.wikipedia.org/wiki/Tarski%27s_undefinability_theorem)
- [Metavariable]([Metavariable - Wikipedia](https://en.wikipedia.org/wiki/Metavariable))
- [Metalanguage](https://en.wikipedia.org/wiki/Metalanguage)
- [Proof Theory](Logic/Proof%20Theory.md)