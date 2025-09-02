## 3-Valued Logic
[[Tarski's Theory of Truth]] is a 'typed' theory of truth which restrict what the truth predicate, True(x), can predicate over, notably only over statements of the lower level language in a Tarski hierarchy, creating an object vs meta-language distinction. While Kripke's Theory of Truth is 'type free', allowing truth predicates to have scope over themselves (although we define a new process to avoid the liar paradox).

Kripke's theory of truth operates on Kleene's strong 3-valued logic system (truth values = {T, U, F}) where U = 'undefined' or 'neither true or false' (a truth gap). Thus, the logic under the scope of the truth predicate is non-classical.
$\rightarrow$ Kleene's strong 3-valued logic is 'paracomplete' as it rejects the law of excluded middle (either $p$ or $\neg p$ is true)

See [[Many-valued Logic and Fuzzy Logic]]
## Kripkean Hierarchy of Languages
We obtain 'partially defined' (truth) predicates in that the predicate cannot range over all sentences of a language and so there some statements which are 'undefined' (have truth value U). This is in contrast to truth predicates in Tarski's theory of truth which predicates over all sentences of the (lower level) language.

$\rightarrow$ Sentences which cannot be attributed the 'true' or 'false' is assigned with the truth value of 'undefined.'

The Kripkean hierarchy of languages it defined (recursively) as follows
$\mathscr{L}_{0}= \mathscr{L}_{\varnothing, \varnothing}$; the truth predicate ranges over $\varnothing$ (i.e., the truth predicate is undefined $\rightarrow T(x)$ = undefined)
$\mathscr{L}_{\alpha+1}= \mathscr{L}_{\alpha}$ with the truth predicate $T^*(x)$ becoming more defined at this level (ranges over more sentences)
$\mathscr{L}_{\lambda}=\bigcup\limits_{\alpha<\lambda}\mathscr{L}_{\alpha}$ for $\lambda$ is a limit ordinal (or equivalently, $\mathscr{L}_{0}$ with the truth predicate defined at level $\lambda$).
Note: The hierarchy is effectively identical at every level w/ the exception that the truth predicate ranges over more sentences of said language as you move up levels in the hierarchy. Thus, there the hierarchy consists of a single language and single truth predicate. 
$\rightarrow$Since this hierarchy is recursive, you have levels $\mathscr{L}_{< {\omega^{CK}_{1}}}$, although it will be seen later that some of these levels are redundant.

E.g., If some statement is p is true in $\mathscr{L}_{0}$, then $T(\lceil p \rceil)$ is true in $\mathscr{L}_{1}$. Yet $T(x)$ will remain undefined as we can find some other sentences/proposition q for the truth value of $T(\lceil q \rceil)$ is undefined. Proceeding to $\mathscr{L}_{2}$, we can predicate truth over statements such as $T(\lceil \phi \rceil)$ by mapping it into a Gödel number $\lceil T(\lceil \phi \rceil) \rceil$ and applying the truth predicate $T(\lceil T(\lceil \phi \rceil) \rceil)$


**Codification of Rules:**
For any Gödel number $P$, a given proposition $T(\lceil P \rceil)$ is true in some $\mathscr{L}_{n}$ if and only if the correspond statement to the Gödel number (call it $Q$), $T(\lceil Q \rceil)$ is true in $\mathscr{L}_{n-1}$.
$\rightarrow$ This also applies for the case if $T(\lceil P \rceil)$ is false in some $\mathscr{L}_{n}$ if and only if the corresponding statement to the Gödel number (call it Q), $T(\lceil Q \rceil)$ is false in $\mathscr{L}_{n-1}$.


**The Fixed Point:** Eventually you get to a point in the hierarchy where $\mathscr{L}_{\alpha}=\mathscr{L}_{\alpha+1}$, denoted as $\mathscr{L}_{\sigma}$ and called the fixed point of the Kripkean Hierarchy of Languages. This the point in the hierarchy where the truth predicate $T(x)$ becomes as defined as it possibly can be and cannot be extended further as doing so would lead to inconsistency ($\implies$ you cannot add any new sentences at $\mathscr{L}_{\sigma}$).   $\therefore$ Considering something such as $\mathscr{L}_{\sigma+1}$ is redundant as it is the exact same as $\mathscr{L}_{\sigma}$. $\mathscr{L}_{\sigma}$ contains its own truth predicate $T(x)$.
$\rightarrow$ Note: The fixed point $\mathscr{L}_{\sigma}$ occurs before $\mathscr{L}_{\omega^{CK}_{1}}$.


**Groundedness:** A sentence $\phi$ is 'grounded' if it has a truth value in $\mathscr{L}_{\sigma}$
$\rightarrow$ A sentence is $\phi$ is ungrounded if it does not have a truth value in $\mathscr{L}_{\sigma}$. At the end of the construction of the Kripkean Hierarchy of Languages, any ungrounded statement is assigned the truth value of being 'undefined'

E.g., The liar sentence L = "This sentence is false" is ungrounded, that is, it is never gets assigned the truth value 'True' or 'False' at any stage in the hierarchy, so it is assigned the truth value 'undefined.' This is how Kripke's theory of truth avoids the Liar's paradox (and hence avoids Tarski's Undefinability Theorem as there is no longer a contradiction and not requiring a object vs meta-language distinction).

See [[Truth in Non-Classical Logics]]

## Partial Models
The following is from [Tarski and Kripke theory of truth](Set%20Theory%20+%20Model%20Theory/Tarski%20and%20Kripke%20theory%20of%20truth.pdf)


We introduce the notion of 'extension' and 'anti-extension'

**Extension:** The 'extension' is the set of all sentences that are true in a fixed point model (i.e., a model of Kripke's theory of truth, specifically in the level $\mathscr{L}_{\sigma}$)
i.e., EXT = {$\phi | T(\lceil \phi \rceil)$} holds in a fixed point model $M$

**Anti-Extension:** The 'anti-extension' is the set of all sentences that are false in a fixed point model.
i.e., ANT-EXT = {$\phi$ | $T(\lceil \neg\phi \rceil)$} holds in a fixed point model $M$

For the language $\mathscr{L}_{0}=\mathscr{L}_{\varnothing, \varnothing}$, the extension and anti-extension of the truth predicate is empty



A partial model is defined as follows:
- A non-empty domain $D$
- A pair of sorts ($S_{1}, S_{2}$) of disjoint n-place relation on the domain (disjoint subsets of $D$) which interprets an n-place predicate $P_{n}$, particularly, $S_{1}$ = EXT and $S_{2}$ = ANT-EXT and are mutually exclusive
	$\rightarrow$ For many-sorted logics, the variables of formula are restricted to a particular domain
	Note: $S_{1} \cup S_{2}$ (or $EXT \cup ANT-EXT$) does not exhaust the set of $\mathscr{L}-$sentences due to the existence of ungrounded sentences which are undefined
- A truth predicate $T(x)$ is defined w/ a pair ($S_{1}, S_{2}$) such that for any $\alpha$, the language $\mathscr{L}_{\alpha+1}$ is $\mathscr{L}_{\alpha}$ w/ $T(x)$ being interpreted by the pair ($S_{1}, S_{2}$) where $S_{1}$ is the set of Gödel numbers $\lceil \psi \rceil$ of sentences $\psi$ true in $\mathscr{L}_{\alpha}$ and $S_{2}$ is the set of Gödel numbers $\lceil \phi \rceil$ of sentences $\phi$ false in $\mathscr{L}_{\alpha}$
	$\rightarrow$ The higher level language $\mathscr{L}_{\alpha+1}$, the interpretation of $T(x)$ is extended by giving truth values for (some) cases that were undefined in $\mathscr{L}_{\alpha}$ and the construction process above (see Kripkean Hierarchy of Languages) applies.


E.g., of models of Kripke's Theory of Truth
A partial model must satisfy the following:
i) The partial model $A(S_{1}, S_{2})$ is an expansion of $A$ to the fixed point $\mathscr{L}_{\sigma}$
ii) $A(S_{1}, S_{2}) \models T(x[a])$, if the (truth) valuation of $x$ in $A$ under the assignment $a$ is a sentence of $\mathscr{L}$ and an element $S_{1}$ (i.e., $x$ is a true in $A$ under the assignment $a$)
iii)* $A(S_{1}, S_{2}) \models\neg Txt[a])$, if the value of $x$ sentence in $A$ under the assignment $a$ is not a sentence of $\mathscr{L}$ or an element of $S_{2}$ (i.e., $x$ is a false sentence in $A$ under the assignment $a$)
iv) $A(S_{1}, S_{2}) \models \neg\neg\phi[a]$, if $A(S_{1}, S_{2}) \models \phi[a]$ (double negation holds)
v) $A(S_{1}, S_{2}) \models \phi\wedge\psi[a]$ if $A(S_{1}, S_{2})\models\phi[a]$ and $A(S_{1}, S_{2})\models\psi[a]$
vi) $A(S_{1}, S_{2}) \models\neg (\phi \wedge \psi)[a]$, if $A(S_{1}, S_{2}) \models\neg\phi[a]$ or $A(S_{1}, S_{2}) \models\neg\psi[a]$
vii) $A(S_{1}, S_{2}) \models\exists x \phi$, if $A(S_{1}, S_{2}) \models\phi[a']$ for an assignment $a'$ differing from $a$ at most in the variable $x$
viii) $A(S_{1}, S_{2}) \models\neg\exists x \phi$, if $A(S_{1}, S_{2}) \models\neg\phi[a']$ for all assignment $a'$ differing from $a$ at most in the value of $x$


It was proven by Kripke that the finite levels $\mathcal{L}_{n}$ in the Tarskian hierarchy can be embedded into a sublanguage of the fixed point $\mathcal{L}_{\sigma}$. That is, there is a translation from any sentence $\varphi\in\mathcal{L}_{n}$ to a sentence $\psi\in\mathcal{L}_{\sigma}$. Thus, the fixed point can express or 'simulate' the stratified Tarskian hierarchy (at least for finite levels). More specifically, there is a recursive function $f_{\alpha}$ for any $\alpha<\omega_{1}^{CK}$ such that:
	$f(x) = \begin{cases}\neg f_{\alpha}(\phi)      & \text{if } n=(\neg \phi) \\f_{\alpha}(\phi)\wedge f_{\alpha}(\psi)    & \text{if} n = (\phi \wedge \psi) \\ \exists xf_{\alpha}(\phi)   & \text{if } n = (\exists x\phi) \\ Tf_{\alpha}(x)\wedge \text{Sent}_{\mathcal{L}(\beta)}(x) & \text{if } n = (T_{\beta_{\prec}}x) \text{ and } \beta>\alpha \\ n & \text{else} \end{cases}$
$\text{Sent}_{\mathcal{L}(\beta)}(x)$ means that $x$ in the language $\mathcal{L}$ expanded by all truth predicates $T_{i}$ such that $i<\beta_{\prec}$. The predicate $\text{Sent}_{\mathcal{L}(\beta)}(x)$ also depends on $\alpha$ as the ordering of indices of the truth predicates of $\mathcal{L}_{\alpha}$ is recursive. Thus, it is a two place predicate (takes in two variables).


There is also a translation from sentences in $\mathcal{L_{\sigma}}$ to $\mathcal{L}_{\omega_{1}^{CK}}$ using a similar recursion theorem.
## References
[[Tarski's Theory of Truth]]
[[Tarski and Kripke theory of truth.pdf]]
[[karacic_review_article.pdf]]



