## Chain Logic
- Chain Logic is denoted as $\mathcal{L}^c_{\kappa, \kappa}$
- There is no difference in the syntax between $\mathcal{L}_{\kappa, \kappa}$ and $\mathcal{L}^c_{\kappa, \kappa}$, instead there is a semantic difference. Take any model $\mathfrak{A}$ of power at least $\kappa$, $\mathfrak{A}$ will be seen as a filtration of $\omega$ subsets of its domain A ($Dom{(\mathfrak{A}}) = A$), that is $\bigcup_{n<\omega}A_{n}$ with $A_{n} \subset A_{n+1}$. The difference is in the interpretation of infinitary quantifiers:
	$\mathfrak{A} \models^c \exists \overrightarrow{x}\phi(\overrightarrow{x})) \iff$ there exists $n<\omega$ and $\overrightarrow{a} \in A_{n}$ with $\phi(\overrightarrow{x})$
	i.e., quantification is bounded by a level of the filtration
E.g., Impacts
$\mathcal{L}_{\kappa, \kappa}$ defined the well-order while in $\mathcal{L}^c_{\kappa, \kappa}$ you cannot.


## Infinitely Deep Logic
- Formulas of the language are regarded as trees of symbols.
	i.e., $\phi \in N_{\kappa, \mu}(\tau)$ is a triple $(T, <_{T}, f)$ where $(T, <_{T})$ is a tree-structure and $f: T \rightarrow At(\tau) \cup${$\bigwedge, \bigvee, \neg$} $\cup$ {$\forall,\exists$} $\times Var$ where $At(\tau)$ is the set of atomic formulas of with vocabulary $\tau$ and $Var$ is a set of 'enough' variables.
- The function $f$ must satisfy the following:
	- $g[T]$ will form a tree of symbols
	- if $g(t)$ is $\bigwedge$ or $\bigvee$ then $g(t)$ has $< \kappa$ immediate successors
	- when $g(t) \in$ {$\forall, \exists$}$\times Var, \cup${$\neg$}, then $g(t)$ has one immediate successor
	- for $g(t) \in At(\tau),$ then $g(t)$ has no successors
## Shelah's Infinitary Logic
- Shelah's Infinitary Logic is denoted as $\mathcal{L}^1_{\kappa}$
- $\mathcal{L}^1_{\kappa}$ has no syntax, instead it is defined via a variation of Ehrenfeucht–Fraïssé games (a technique to determine if two structures are elementary equivalent, via a back-and-forth game)
- Consider two models $\mathfrak{A}$ and $\mathfrak{B}$, and then define $\mathfrak{A} \sim \mathfrak{B}$. We want to prove that $\sim$ is an equivalence relation, so we define another relation $\equiv^1_{\kappa}$ which is the transitive closure of $\sim$. Each $\phi \in \mathcal{L}^1_{\kappa}$ is a union of $\equiv^1_{\kappa}$-equivalence relations. Formulas are equivalence classes consisting of models.
- Results: $\mathcal{L}_{\kappa, \omega} \subset \mathcal{L}^1_{\kappa} \subset \mathcal{L_{\beth(\kappa)\kappa}}$
- Approximation of syntax:
	$\forall \overrightarrow{x} \underset{f \in^{\omega} \kappa}{\bigvee} \underset {n < \omega}{\bigwedge} \varphi_{n}, \exists \overrightarrow{x} \underset{f \in^{\omega} \kappa}{\bigvee} \underset {n < \omega}{\bigwedge} \varphi_{n}$
## Sort Logic
- A many-sorted extension of second-order logic which can quantify and reason over its own structures (has the ability to "look outside" the model). 
	e.g., It can make references to objects outside of the domain
	$\rightarrow$ Consider a Turing machine, which is defined as a finite set of quadruples, to halt require reference to a tape potentially larger than the Turing machine itself
$\rightarrow$ Allows it to be stronger than $\alpha^{th}-$order logic for an arbitrary ordinal $\alpha$ (and set theory)
	i.e., Sort Logic allows for $\alpha$-iterations of the powerset over arbitrary sets, for $\alpha$ is an arbitrary ordinal. This is because the $\overset{\sim}{\exists}$-quantifier introduces new sorts of objects which may be arbitrary (not necessarily the powerset of the previous sort like how types are created [[Type Theory]]) . $\alpha^{th}$-order logic only allows $\alpha$-iterations of the powerset of a given  (initial) domain.
	$\implies$ Sort Logic describes sets that are not in the transitive closure of a model $\mathcal{M}$ (i.e., the least transitive set containing $M$ as a subset), TC($M$).  

- Every model class definable in set theory is the class of models of a sentence of sort logic.
	i.e., For any model class $\mathcal{K}$ (of a $\Delta_{n}$-sentence), there exists a sentence $\varphi$ such that $\mathcal{M \in K \iff M\models \varphi}$
- Sort Logic retains the structuralist approach to mathematics.
	**Recall:** The structuralist perspective of mathematics asserts that mathematical theories describe structures of mathematics, structures are defined by their properties (i.e., s(n) = n+1 for the natural numbers $\mathbb{N}$). Different mathematical systems can interpret the same structure in different ways (i.e., the structure exists independently of the mathematical system, this is in contrast to views where structures are seen as relative or dependent on mathematical system). This is related to mathematical Platonism (a mathematical system - i.e., ZFC - describes the universe of sets). See [[Philosophy of Sets & Proper-Classes]]
- Considered the "strongest" model theoretic logic ($\implies$ any 'extension' is effectively redundant?)

The classes $\Delta_{n}$ (for $n < \omega$) of the Levy hierarchy of formulas can be considered as sub-logics (or more appropriately as sets of sentences of sort logic) of sort logic as it characterizes any $\Delta_{n}$ model class. The Hanf number and Löwenheim number of the logic $\Delta_{n}$ of is $\delta_{n}$ and $\sigma_{n}$ respectively. Thus, it can be observed that the canonical hierarchy of $\Delta_{n}$ climbs up the large cardinal hierarchy (in fact, up to Vopenka’s Principle) with reference to Hanf and Löwenheim numbers

The decision problem (see [[Turing Machines & Recursion Theory]]) of the logic $\Delta_{n}$ is the complete $\Pi_{n}$ set of natural numbers.

**Note:** Sort logic is a finitary logic (i.e., only allows finitely-long formulae) and thus has an occurrence number of $\aleph_{0}$. $\mathscr{L}$ is set-sized (i.e., $|\mathscr{L}[\tau]|< \lambda$ for $\lambda$ is some cardinal) due to having only two forms of quantification, first-order quantification and sort quantification. Thus, sort logic also has a Hanf and Löwenheim number ([[The Hanf Number]], [[Model Theory/The Löwenheim Number]]).

-  Sort logic is the 'strongest' logic relative to set theory (ZFC) as it can characterize model classes for any $\Delta_{n}-$formula of the levy hierarchy.
	**Note:** that characterizing (the size) a model $\not=$ characterizing a model class), i.e., capture and being able to differentiate between sizes of infinity.
	$\to$ Can consider an extension of sort logic which does characterize the size of it's models (sort logic being the 'strongest logic' seems to refer to its ability to characterize model classes specifically).
	**Recall:** Expressive power deals with elementary-classes and defining model classes...,etc. (for other notions of expressive power, see [[Logics, Structures & Models]]) .Thus, the notion of 'expressive strength' is tied to characterizing model classes. We are using a different 'measuring stick' when measuring expressive power by the characterizability of (individual) models through Hanf numbers and Löwenheim numbers. So this 'extension' will not increase expressive power.


Syntax: Sort Logic has the additional quantifiers $\overset{\sim}{\exists}$ and $\overset{\sim}{\forall}$, with '$\overset{\sim}{\exists} P \varphi$' meaning that there is a predicate $P$ of new sorts of elements of $\varphi$ such that (whatever)
	i.e., posits that there exists a new sort of objects not apart of the current model and a relation on such objects such that $\varphi$ holds. $\implies$ express the existence of a structure outside of the model, internally w/in the model you can formalize extensions of the universe.
**Note:** logic with multiple sorts allow for quantification over objects across multiple sorts

**Note:** Even though sort logic can 'see' outside of the model, it still follows Incompleteness theorem and Tarski's undefinability theorem (so it cannot define its own truth predicate and semantics).

- The Completeness Theorem holds for sort logic, meaning all statements true in a model of sort logic is provable.

What differentiates sort logic from set theory?
Sort logic and set theory are similar but sort logic is a logic, and sort logic treats mathematical structures up to isomorphism only (structuralist view)

## Cardinality Quantifier Logics
Added to the set of logical symbols
## References
[[Sort Logic.pdf]]