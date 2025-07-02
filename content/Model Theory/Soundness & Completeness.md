## The Soundness Theorem
**Soundness:** $T \vdash \phi \rightarrow T \models \phi$
That is, all proven statements of T are semantically true ($M \models \phi$ whenever $M \models T$, for $\phi$ is a theorem of $T$)

This is equivalent to satisfiability $\rightarrow$ consistency


**Relative Soundness**: A theory is $T$ is sound if all of its syntactic consequences of $T$ (i.e., theorems of $T$) are true in the 'intended model'

E.g., The intended model of arithmetic is the structure N = $\langle \mathbb{N}, \times, +, s(x), 0 \rangle$. So Peano Arithmetic is sound relative to the structure N as all theorems of PA are true in the structure N.

$\rightarrow$ In this instance there may be 'unsound' theories (even in first-order logic) where theorems are not true in the intended model (although they are true in all models of said theory).
E.g., Consider the theory $PA$ + $\neg Con(PA)$ . This theory is unsound relative to the structure N as $\neg Con(PA)$ is not true in N ($\implies N \not\models PA + \neg Con(PA)$)

$\rightarrow$ What is the intended model of set theory?
	The intended model of set theory is $\langle V, \in \rangle$ although this is not well-defined as $V$ is a proper-class (see [[Philosophy of Sets & Proper-Classes]])

**Role of Soundness in Complete Theories**:
Recall: A theory $T$ is complete if $T\vdash \phi$ and $T \vdash \neg \phi$ for any sentence $\phi \in \mathscr{L}[\tau]$. By applying the soundness theorem we also get that this is equivalent to $T$ being complete if $T\models\phi$ and $T\models\neg\phi$ (this notion becomes different in unsound theories). 

## The Completeness Theorem
**(Semantic) Completeness**: $T \models \phi \rightarrow T \vdash \phi$ 
That is, all semantically true statements of the theory T are proven

This is equivalent to consistency $\rightarrow$ satisfiability

Note: This is not to be confused with syntactic completeness which refers to the property of a theory T proving either $\phi$ or $\neg\phi$ for all $\phi$ in the language. (see [[Types of Theories]])
## Soundness iff Completeness 

With both the soundness theorem and the completeness theorem, we can then derive the statement "A theory is consistent if and only if it is satisfiable" (consistency $\equiv$ satisfiability)
$\rightarrow$ Note: This statement is true for first-order logic


Proposition: For a first-order theory $\Gamma$ $\subseteq \mathscr{L}[\tau]$, $\Gamma$ is consistent if and only if $\Gamma$ is satisfiable
i.e., $\Gamma$ is Consistent $\iff \Gamma$ is satisfiable for some $\Gamma \subseteq \mathscr{L}[\tau]$.

Proof:

i) Consistency $\rightarrow$ Satisfiability
	Suppose $\Gamma$ is consistent but is not satisfiable, meaning there is no such $M$ such that $M\models\Gamma.$ So for every structure $M$, $M \not\models\Gamma$. 
	$\implies$ If $M\models\Gamma$, then $M\models\bot$ (i.e., a 'void' model)
	Applying the completeness theorem we get that $\Gamma \vdash \bot$ (i.e., $\Gamma$ proves a contradiction), this only occurs if there is some statement $p$ such that $\Gamma \vdash (p \wedge \neg p)$. This a contradiction to the initial assumption that $\Gamma$ is consistent. $\therefore$ $\Gamma$ must be satisfiable if it is consistent.

ii) Satisfiability $\rightarrow$ Consistency
	We must first obtain a (guaranteed) complete theory.  For each formula $\phi$ w/ one free variable $x$ and such that $\Gamma\vdash\exists\phi(x)$ we add a new constant symbol $c_{\phi}$ to the language $\mathscr{L}$. Let $\mathscr{L'}$ be the obtained extended language. We may assume $\Gamma$ is complete, choose any completion $\Gamma'$ of $\Gamma$ in the language $\mathscr{L'}$. A model of $\Gamma \implies$ a model of $\Gamma'$. Let $Terms$ be the set of $\mathscr{L'}-$terms and consider the following equivalence relation on $Terms$:
	$t \sim t': \iff \Gamma'\vdash t=t'$
	Let $M:=Terms/$$\sim$ be the domain of our model
	Let $c \in \mathscr{L'}$ be a constant symbol, it is interpreted as the equivalence class $c^M:= c^{\sim} \in M$
	Let $f \in\mathscr{L}$ be any function symbol. It's interpretation is the well-defined function $f^M:$
		$f^M \begin{matrix} M^n & \mapsto & M \\(t_1^{\ \sim}, \dots, t_n^{\ \sim}) & \mapsto & (ft_1, \dots, t_n)^\sim\end{matrix}$
	Let $R\in\mathscr{L}$ be any n-ary relation symbol. Its interpretation is the set $R^M \subseteq M^n$ defined as follows:
		$R^M := \{(t_1^{\ \sim}, \dots, t_n^{\ \sim}) \in M^n \ \big| \ \Gamma'\vdash R t_1,\dots,t_n\}$
	It is well-defined in the sense that whenever $u_{i} \sim t_{i}$ for $1\leq i\leq n$, you have $(t_1^{\ \sim}, \dots, t_n^{\ \sim})\in R^M \Leftrightarrow (u_1^{\ \sim}, \dots, u_n^{\ \sim}) \in R^M$
	An $\mathscr{L'}-$structure defined this way is a model of $\Gamma'$ and hence a model of $\Gamma$ as $\Gamma'$ is an expansion $\Gamma$ so that it is complete

The reason why we need to extend it to a complete theory is in order to consider any such $p$ or $\neg p$. Assuming $\Gamma$ is complete we get the following simplified argument:
	Suppose $\Gamma$ is satisfiable and inconsistent. Since $\Gamma$ is inconsistent, $\Gamma \vdash (p \wedge \neg p)$ for some $p \in \mathscr{L}[\tau]$, or equivalently $\Gamma \vdash \bot$,  then via the Soundness Theorem we get that $M \models (p \wedge \neg p)$ (or equivalently $M\models\bot$ ) for $M \models \Gamma$. But from the definition of a model, we get that for any $M, M \models \top$ always, (also $M\models \neg(p \wedge \neg p)$ via the Law of Excluded Middle (LEM) which is in contradiction to $M\models p \wedge \neg p$), so $\Gamma$ must have a 'void' model. Thus, a contradiction, $\Gamma$ must not have any models $M$ if it is inconsistent. $\therefore \Gamma$ must be consistent if it satisfiable.


This result shows that the Soundness Theorem, together w/ the Completeness Theorem, ensures that the syntax and the semantics of formal system are equivalent as all proven statements are true and all true statements are proven (i.e., there is no mismatch between them).
## Interesting Results

Proposition: If $\Gamma$ is consistent and $\Gamma \vdash p$, for some $\Gamma \subseteq \mathscr{L}[\tau]$ and $p\in\mathscr{L}[\tau]$

- Soundness cannot be defined internally w/in a theory via Tarski's Undefinability Theorem ([[Tarski's Theory of Truth]]) since the Soundness Theorem regards the inference rules and truth in the system (this is the same for the Completeness Theorem), this also applies to relative soundness which regards truth in some intended model. This is in contrast to consistency and (syntactic) completeness which can be defined w/in the system as this does not regard truth but provability, although this cannot be proved w/in the theory (see [[Gödel's Incompleteness Theorems]]).

Extensions of first-order logic contain logically valid or 'absolute' statements (i.e., $\phi$ is absolute if $T\models\phi),$ that is, $M\models T \iff M\models\phi$) which do not have proofs $\implies$ these statements are independent of T (although not undecidable since they are logically valid). This due to these logics lacking the completeness theorem.
	E.g., Consider the theory ${PA}^2$ (Second-Order Peano Arithmetic, not to be confused with 'Second-Order Arithmetic' which is first-order in disguise, see [[Higher-Order Logics]]) and the statement $\Psi$= "There exists an infinitely large number." Models of $PA^2$ (which are isomorphic as $PA^2$ is categorical) satisfy $\neg \Psi$ as there are only finite numbers in $PA^2$, yet $\Psi$ is independent ($PA^2 \not\vdash \neg \Psi$ and $PA^2 \not\vdash \Psi$).

$\rightarrow$ A further result of this is that we have consistent theories which do not have any models
	E.g., Consider the second-order theory in the language $\mathscr{L} =${$\leq$} which states
		i) $(A, \leq)$ is a linear order w/out a maximal element
		ii) Every non-empty set has a minimal element (axiom of foundation)
		iii) Every bounded set has a maximal element
	This $\implies$ that $(A, \leq)$ is isomorphic to N = $\langle \mathbb{N}, \leq \rangle$. Now add uncountably many constant symbols $c_{i}$ to the language $\mathscr{L}$ for $i \in I$ ($I$ is some uncountable index set) 
		i.e., $\mathscr{L}$ = {$\leq, c_{0}, c_{1}, c_{2},\dots$}
	and add the axioms $c_{i} \not= c_{j}$ for each $i \not= j$. 
	This theory cannot have a model since it would be isomorphic to $\mathbb{N}$  (the theory is categorical) yet will have uncountably many elements. But given any finite number of axioms we can interpret them in the usual order on $\mathbb{N}$, so they cannot prove a contradiction. $\therefore$ the theory is consistent.
	$\rightarrow$ Alternatively, doing this in an countable language, add $c_{i}$ for $i \in \mathbb{Z}$\ $\mathbb{N}$ and claim that $c_{i} < c_{j}$ whenever $i < j$
	$\rightarrow$ Or for a finite language, just add a single constant symbol $c$ and add axioms stating that $c$ is not the minimal element, not the successor of a minimal element,...,etc.

Since these logics lack completeness (Consistency $\rightarrow$ Satisfiability), we no longer get the relation Consistency $\equiv$ Satisfiability, but instead the relation Satisfiability $\rightarrow$ Consistency.

- First-order logic, [[Higher-Order Logics]], [[Infinitary Logics]],...,etc. are always sound (that is, they have the soundness theorem). 
- Unsoundness: $\neg(\Gamma\vdash\phi\rightarrow\Gamma\models\phi)$ 
			$\implies \neg(\neg(\Gamma\vdash\phi)\vee (\Gamma\models\phi))$
			$\implies \Gamma\vdash\phi\wedge\neg(\Gamma\models\phi)$
So we get that a logic that isn't sound can prove logically invalid sentences (i.e., nonsense). Note that this does not necessarily mean that all proven statements are logically invalid but only some.
If a proof system is complete but unsound then it is necessarily inconsistent as all logically valid statements $\phi$ of $T$ ($T\models\phi$) have a proof in $T$ (i.e., $T\vdash\phi$) by the completeness theorem. But as $T$ is unsound then there must be some proof of some logically invalid sentences $\Psi$ i.e., $T\vdash\Psi$ yet $T\not\models\Psi$, and so $T\vdash\Psi\iff T\models\neg\Psi$ by LEM. The idea is that we can find some $\phi$ and $\Psi$ such that $\Psi=\neg\phi$ and so there is a crossover in the proof system ($T\vdash(\phi\wedge\neg\phi)$) and so is inconsistent. Thus, a proof system which is both unsound and complete is always inconsistent.

$\rightarrow$ While something like an unsound and incomplete proof system is not necessarily inconsistent (although this can happen) as there may not be a 'crossover' due to the lack of the completeness theorem.

$\rightarrow$Using the equivalent definition of Unsoundness: Satisfiability$\not\rightarrow$ Consistency. This $\implies$ that we can find inconsistent theories with models. One such example is paraconsistent logics (which can be either unsound and complete or unsound and incomplete), see [[Truth in Non-Classical Logics]].

## References
- [[Model Theory D.Marker.pdf]]
- [[Types of Theories]]
- [[Tarski's Theory of Truth]]
- [[Truth in Non-Classical Logics]]
- [[Gödel's Incompleteness Theorems]]
- [Prove that a theory is consistent if and only if it is satisfiable ](first order logic - Prove that a theory $\Gamma$ is consistent if and only if there is a structure $M$ so that $M$ $\models$ $\Gamma$. - Mathematics Stack Exchange](https://math.stackexchange.com/questions/2044775/prove-that-a-theory-gamma-is-consistent-if-and-only-if-there-is-a-structure)
- [logic - What's an example of a theory that's consistent yet has no model?](https://math.stackexchange.com/questions/1005283/whats-an-example-of-a-theory-thats-consistent-yet-has-no-model)


