## The Occurrence Number

$\mathscr{L}[\tau]=\bigcup\limits_{\substack{\tau_{0}\subset\tau \\ |\tau_{0}|\leq \kappa}}\mathscr{L}[\tau_{0}]$
Then $\kappa$ is the occurrence number of the logic $\mathscr{L}$

I.e., The class of $\mathscr{L}-$formulas, $\mathscr{L}[\tau]$ is the union of the formula-classes in some vocabulary $\tau_{0}$ such that $|\tau_{0}| < \kappa$.
$\implies \forall \varphi\in \mathscr{L}[\tau], \exists \psi\in\mathscr{L}[\tau_{0}]$ such that $\varphi \iff \psi$
(We can reduce all formulas of $\mathscr{L}[\tau]$ to that of a smaller sub-vocabulary $\tau_{0}, \mathscr{L}[\tau_{0}]$), given that the $occ(\mathscr{L}<|\tau|),$ via logical equivalence).


E.g., The number of formulas a (set-sized) logic can form is given by:
max{$|\tau|, \aleph_{0}$} for FOL, SOL, HOL,...,etc.

For infinitary logic it is given by:
	max{|$\tau$|, $\kappa_{L}$}$^{<\kappa_{L}}$
	Where $\kappa_{L}$ is the supremum (smaller upper bound) of the length of formulae allowed
	$\rightarrow$ For FOL, the number of possible formulae is $\aleph_{0}$ for $|\tau|\leq\aleph_{0}$ (i.e., a countable language), or $|\tau|$ if $|\tau|>\aleph_{0}$ (i.e., an uncountable language
	$\rightarrow$ For an infinitary logic $\mathcal{L}_{\kappa, \kappa}$ we have $\kappa^{\kappa_{L}}$ for $\kappa > |\tau|$ and $|\tau|^{\kappa}$ = $|\tau|$ for $|\tau|>\kappa_{L}$
	$\rightarrow$ It is known that the occurrence number of FOL (as well as SOL, HOL) is $\aleph_{0}$
		$\implies$ That finite vocabularies are enough to formulate any statement in FOL
		$\implies$ In the case of an uncountable vocabulary $\tau$ then there are uncountably many ($|\tau|-$ many) logically equivalent formulae for each sentence $\varphi\in\mathscr{L}[\tau_{0}]$ for $|\tau_{0}|\leq\aleph_{0}$
		Thus, the effective number of distinct formulas are given by:
			max{$|\tau|,occ(\mathscr{L})$} = max{$|\tau|, \aleph_{0}$}
			$\implies |\tau|-$many sentences for $|\tau|\leq\aleph_{0}$ for finitary logic


**Alternative Definition of Occurrence Number:**
An alternative definition to the occurrence number is the supremum of symbols allowed in a formula of the logic $\mathscr{L}$
E.g., Consider the infinitary logic $\mathcal{L}_{\kappa, \kappa}$ for $\kappa$ is a regular cardinal, then $occ(\mathcal{L}_{\kappa, \kappa}) = \kappa$ is the supremum of the length of formulae allowed since for $|\tau|<\kappa$, you can only have $\kappa$-many sentences...
$\rightarrow$ if $\kappa$ is singular, then $occ(\mathcal{L}_{\kappa, \kappa}) = \kappa^{+}$ (the successor of $\kappa$, assuming the axiom of choice)
$\rightarrow$ Since SOL,...,HOL only allows finitely-long formulae (note: second-order logic is referring to
$\mathcal{L}_{\kappa, \kappa}^2$), the occurrence number is the same as FOL, $\aleph_{0}$.

## Effective no. of Sentences
$\rightarrow$ **Note:** It can be seen that the infinitary definition of the number of formulae can be applied to FOL,
	max{$|\tau|, \kappa_{L}$}$^{<\kappa_{L}} =$ max{$|\tau|, \aleph_{0}$}$^{< \aleph_{0}} =$ max{$|\tau|, \aleph_{0}$}$^n$ for $n\in\mathbb{N}$
$\rightarrow |\tau|>\aleph_{0}$
	$\implies |\tau|^n = |\tau|$ since $|\tau|$ is infinite
$\rightarrow$ The effective number of distinct formulas (up to logical equivalence) is given by (general case):
	max{$|\tau|, occ(\mathscr{L})$}$^{< occ(\mathscr{L})}$
You could also define the number of formulas up to validity (perhaps using the dependance number instead?)


For $occ{(\mathscr{L})} > |\tau|$ we get the following:
i) $occ(\mathscr{L})\leq 2^{< occ(\mathscr{L})}$, then
$occ({\mathscr{L}})^{<occ(\mathscr{L})}=2^{< occ(\mathscr{L})}$ (this result in particular depends on the global continuum hypothesis
ii)  $occ(\mathscr{L})> 2^{< occ(\mathscr{L})}$
$occ(\mathscr{L})$

$\therefore 2^{<occ(\mathscr{L})}$ or $occ(\mathscr{L})$ distinctly many sentences

For $|\tau|>occ(\mathscr{L})$ we get the following:
i) $|\tau|\leq 2^{<occ(\mathscr{L})}$, then
$|\tau|^{< occ(\mathscr{L})}=2^{<occ(\mathscr{L})}$
For  $|\tau|\leq 2^{<occ(\mathscr{L})}$
ii) $|\tau|>2^{occ(\mathscr{L})}$, then
$|\tau|$
$\therefore 2^{<occ(\mathscr{L})}$ or $|\tau|-$many distinct sentences

- Since FOL, SOL,..., HOL are finitary logics (allow finitely-long formulae), then these logic have an occurrence number of $\aleph_{0}$ (sometime notated as $\omega$ instead)
	$\implies$ That finite vocabularies are 'enough' to formulate any statement in these logics (up to logical equivalence)
	$\implies$ In the case of an uncountable vocabulary $\tau$, then there are uncountably-many logically equivalent formulae to the formulae in $\mathscr{L}[\tau_{0}]$ (such that $\tau_{0} \subseteq \tau$ and $|\tau|<\aleph_{0}$)
	$\to$ $|\mathscr{L}[\tau]|>|\mathscr{L}[\tau_{0}]|$ for $|\tau_{0}|\leq occ(\mathscr{L})$
		i.e., For some $\varphi \in \mathscr{L}[\tau],$ there is some $\psi$ such that $\varphi \iff \psi$

**Note:**
- A logic $\mathscr{L}$ being set-sized (that is for a vocabulary $\tau, |\mathscr{L}[\tau]| \leq \lambda$ for $\lambda$ is a cardinal) $\implies \mathscr{L}$ has an occurrence number, $occ(\mathscr{L})$. Not necessarily vice versa, consider the following logic:
	$\mathscr{L}(Q_{\alpha})$, i.e., we add a cardinality quantifier for every cardinal $\aleph_{\alpha}$, this logic has an occurrence number but forms a proper class of formulae (given a vocabulary $\tau$).
- If a vocabulary $\tau,$ is proper-class sized (i.e., $|\tau|= \infty$, or more formally $|\tau|> \kappa$ for an arbitrarily large cardinal $\kappa$), then the class of $\mathscr{L}$-formulas, $\mathscr{L}[\tau]$, would also from a proper-class (i.e., $|\mathscr{L}[\tau]| = \infty$), no matter the logic (even if $\mathscr{L}=$ FOL), although as given above, the number of 'effective' formulae would be set-sized if $occ{\mathscr{L}}< \infty$.

Alternatively, the number of effective sentences may be given by the following construction:
	Let $\tau_{\varphi}=$ {$\varphi|\varphi \iff \psi$}
	For $\varphi, \psi \in \mathscr{L}[\sigma]$
	$\mathcal{K} = \bigcup\limits_{\varphi \in \mathscr{L}[\sigma]}\tau_{\varphi}$
	Then $|\mathcal{K}|$ is the effective number of sentences (number of logically distinct sentences) of the logic $\mathscr{L}$
The number of "semantically-distinct"	sentences may also be defined
	Let $\tau_{\varphi}=$ {$\varphi|\mathfrak{A}$ is a $\sigma$-structure and $\mathfrak{A} \models \varphi \iff \mathfrak{A} \models \psi$}
	For $\varphi, \psi \in \mathscr{L}[\sigma]$
	$\mathcal{K} = \bigcup\limits_{\varphi \subseteq \mathscr{L}[\sigma]} \tau_{\varphi}$
	Then $|\mathcal{K}|$ is the number of semantically distinct sentences of the logic $\mathscr{L}$

**Result:** For $\mathscr{L}$ is 'small' and assume $occ(\mathscr{L})<\infty$, then for all $\kappa$, $h_{\kappa}(\mathscr{L})<\infty$
proof:
	Set $\mu = \kappa,$ and let $\tau$ be a 'universal' vocabulary of power $\mu$ (i.e., $\tau$ contains $\mu$-many relation and function symbols of each arity). In order to investigate $h_{\kappa}(\mathscr{L})$, we can confine ourselves to $\tau$-sentences of $\mathscr{L}$
	Since $\mathscr{L}[\tau]$ is a set, we have
	$h_{\kappa}(\mathscr{L})=$ sup{$|\mathfrak{A}| \mathfrak{A}\models\varphi, \varphi\subseteq \mathscr{L}[\tau], |\varphi|\leq \kappa$ and $\varphi$ does not have arbitrarily large models} < $\infty$
i.e., $occ(\mathscr{L})< \infty \implies h_{\kappa}(\mathscr{L})< \infty$

Note: if $\mathscr{L}[\tau]$ is set-like and $occ(\mathscr{L}< \infty)$ then we also have:
	$occ(\mathscr{L_{\omega, \omega}}) = \omega \implies l(\mathscr{L})=\omega$


In general, for 'tame' languages ($\implies occ(\mathscr{L})<|\tau|$, for a sufficiently large $\tau$), the no. of sentences is at most $2^{|\tau|}$ (ignoring logical distinction and counting logically equivalent sentences as well).
## The Dependance Number:
**Dependance Number:**
	- The intuition behind the dependance number of a formula $\varphi\in\mathscr{L}[\tau]$ 'depends' only on a subset of the vocabulary $\sigma \subset \tau$
	- **Proposition:** Let $\mathscr{L}$ be a logic and $\varphi \in \mathscr{L}[\tau]$
		i) $\varphi$ depends only on the symbols in $\sigma\subset\tau$ if for all $\tau$-structures $\mathfrak{A},\mathfrak{B}$ such that $\mathfrak{A}\upharpoonright \sigma \cong \mathfrak{B} \upharpoonright \sigma$ we have $\mathfrak{A}\models\varphi\iff\mathfrak{B}\models\varphi$. (i.e., The validity of $\varphi$ depends only on $\sigma$ and in terms of semantics, the full vocabulary $\tau$ is redundant, that is, the truth value of $\varphi$ does not change going from $\sigma$ to $\tau$
		ii) A logic is weakly regular if $\mathscr{L}$ satisfies the basic closure properties and relativization property (see [[Logics, Structures & Models]])
The cardinal $\kappa > |\sigma|$ for which this occurs is the dependance number and is denoted as $o(\mathscr{L})$

The occurrence number and dependance number are two sides of the same coin. The occurrence number deals with syntax (**logical equivalence**: $\varphi \iff \psi$), while the dependence number deals with the semantics (**semantic equivalence:** $\mathfrak{A}\models\varphi\iff\mathfrak{B}\models\varphi$). 

In one-sorted logic, the occurrence number and dependance number are the same as the substitution property removes 'redundant' relation and function symbols (reducing it)

The occurrence number and dependance number differ in the many-sorted case as the substitution property does not enable us to remove redundant sort symbols.
	E.g., Consider the vocabulary with two sorts $S_{1}$ and $S_{2},$ and allows quantification over each sort separately (i.e., we have relation $R(x,y)$ where $x\in S_{1}$ and $y\in S_{2}$). Consider the following sentence
	$\varphi =\forall x\in S_{1}, \exists y\in S_{2}, R(x,y)$
	This sentence occurs syntactically in the full two-sorted vocabulary $\tau =${$S_{1}, S_{2}, R$}
	$\to$ Both $S_{1}$ and $S_{2}$ are required to state this sentence, thus $\varphi$ cannot be further reduced to single sorted logic.
	Semantically, only the sort $S_{1}$ and relation $R(x,y)$ (only $\sigma=${$S_{1}, R$} is required). Thus, $\varphi$ differs in the semantic case from the syntactic case, as it has been reduced to a single-sorted case, and so the dependance number differs from the occurrence number.
From this we can derive that $o(\mathscr{L})\leq occ(\mathscr{L})$ always (the occurrence number of a logic is at least that of the dependance number).

 - If $o(\mathscr{L}) = \omega,$ then $\mathscr{L}$ has the finite dependance property

**Proposition:** Let $\mathscr{L}$ be a logic with $o(\mathscr{L}) = \mu$ and $l_{\kappa}(\mathscr{L})=\kappa$ and $\tau$ be a vocabulary such that $\mu\leq|\tau| \leq \kappa$. Then there are up to logical equivalence, $2^{2^{\kappa}}$- many $\tau$-sentences.

**Proposition:** For every *weakly* regular logic $\mathscr{L}$ there is a logic $\mathscr{L}_{1}$ such that:
	i) $\mathscr{L}\equiv\mathscr{L}_{1}$; and
	ii) if $\varphi \in \mathscr{L}_{1}[\tau], \sigma\subset\tau$ and $\varphi$ depends only on $\sigma$, then there is a $\psi \in \mathscr{L}_{1}[\sigma]$ such that for every 
	$\sigma$-structure there $\mathfrak{A}, \mathfrak{A}\models \psi$ iff every expansion of $\mathfrak{A}$ to a $\tau$-structure $\mathfrak{A}_{1}, \mathfrak{A}_{1}\models\varphi$
Proof: Add new atomic sentences and consider them of being of the new required vocabulary.

Given a regular logic $\mathscr{L}$ we define a cardinal $OC(\mathscr{L})=\kappa$ to be the smallest number such that for every formula $\varphi \in \mathscr{L}[\tau]$ there is $\sigma \subset \tau$ with $|\sigma|< OC(\mathscr{L})$ and $\varphi \in \mathscr{L}[\sigma]$
$\to$ **Proposition:** Let $\mathscr{L}$ be a regular logic with dependance number $o(\mathscr{L})$. Then there is a regular logic $\mathscr{L}_{1}$ with $OCC(\mathscr{L}) = o(\mathscr{L})$ which is equivalent to $\mathscr{L}$
## References

[[The Hanf Number]]
[[Model Theory/The Löwenheim Number]]
[[Infinitary Logics]]
[[Logics, Structures & Models]]
[[Model Theoretic Logics.pdf]]
