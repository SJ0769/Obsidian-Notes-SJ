**Intuition:**
The well-ordering number can be seen as a measure of the compactness properties of a logic $\mathscr{L},$ in that the larger $w(\mathscr{L})$ is, then more fragments of compactness are lost


**Pinning Down Ordinals:**
A set of sentences $\Phi$ of a logic $\mathscr{L}$, $\Phi \subseteq \mathscr{L}[\tau]$, where $< \in \tau,$ pins down an ordinal $\alpha$ iff
	i) For all $\mathfrak{A} \models \Phi, <^{\mathfrak{A}}$ is a well-ordering of its field (domain) and
	ii) There is $\mathfrak{B} \models \Phi$ such that $<^{\mathfrak{B}}$ is of order type $\alpha$

$w_{\kappa}(\mathscr{L})=$ sup{$\alpha|\Phi$ pins down $\alpha$ and $|\Phi|\leq \kappa$}
	sup$_{\kappa \in ORD}w_{\kappa}(\mathscr{L})$ is defined as the supremum of all ordinals that are pinned down by an arbitrary $\Phi \subseteq \mathscr{L}[\tau]$. Equivalent to the supremum of all $w_{\kappa}(\mathscr{L})$ for arbitrary $\kappa$.

The well-ordering number of $\mathscr{L}$ is the case where $\kappa = 1$, i.e., $w(\mathscr{L})=w_{1}(\mathscr{L})$
$w(\mathscr{L}) =$ sup{$\alpha| \varphi$ pins down $\alpha$ and $\varphi$ is an $\mathscr{L}$-sentence}

If a logic $\mathscr{L}$ does not have a well-ordering number, then $w(\mathscr{L}) = \infty$

**Note:** $w_{1}(\mathscr{L})=w(\mathscr{L})=w_{\kappa}(\mathscr{L})$

E.g., Consider $\mathscr{L}_{\omega, \omega}$ first-order logic
The well-ordering number $w(\mathscr{L}_{\omega, \omega})$ is $\omega$ and in fact for any $\kappa\in ORD$, $w_{k}(\mathscr{L}_{\omega, \omega}) = \omega$.
	$\implies$ Consider the least uncountable ordinal $\omega_{1}$, for some uncountable subset $S\subseteq \omega_{1}$, then we will not be able to define $S$
**Note:** 'Definability' means that there is a WFF describing a set. i.e., a definable set $S$ satisfies a 
WFF $\varphi$.
$\to$ For a model $\mathfrak{A} \models \varphi, <^{\mathfrak{A}}$ is a well-ordering of order type $\alpha < w_{\kappa}(\mathscr{L})$
$\to$ For $\beta<\alpha, \beta$ is also characterized by $<^{\mathfrak{A}}$

**Note:** If $< \not\in \tau$, for $\tau$ is some vocabulary, then nothing can be said about a logic based on $\tau, \mathscr{L}(\tau)$, as the notion of well-ordering cannot be expressed w/in the language.

**Boundedness:**
- We say a logic $\mathscr{L}$ is bounded if it has a well-ordering number.
- A logic $\mathscr{L}$ is unbounded it has no well-ordering number, i.e., $w(\mathscr{L})=\infty$

**Strong Logics:**
A logic $\mathscr{L}$ is said to be strong if there exists an $\mathscr{L}$-sentence $\phi$ which pins down arbitrarily large ordinals, that is, $\phi$ characterizes the entire class of well-ordering


**Relation to The Well-Ordering Number:**
It can be observed that is $\mathscr{L}$ is strong, then $\mathscr{L}$ is unbounded by implication
	(i.e., $\mathscr{L}$ is strong $\implies w(\mathscr{L})=\infty$)
This is because if a single sentence can pin down arbitrarily large ordinals than the supremum of all ordinals pinned down by a set of $\mathscr{L}$-sentences does not exist (and no upper bounds as well!).
	This converse is not necessarily true
		i.e., $w(\mathscr{L})=\infty \not\implies \mathscr{L}$ is strong.

Strong vs $w(\mathscr{L})=\infty$
$w(\mathscr{L})=w_{1}(\mathscr{L})=\infty$ means that all ordinals can be pinned down by some (potentially different)
$\mathscr{L}$-sentence $\varphi$ (i.e., consider an ordered sequence of ordinals being pinned down, if the logic is proper-class sized, there can be a sentence for every pinned down ordinal, there doesn't exist a supremum and not a single sentence pins down all sentences). While a logic is strong if there exists a single $\mathscr{L}$-sentence $\varphi$ which does pin down all ordinals and thus, characterizes the class of well-orderings (i.e., a definition of well-ordering, and where the class of well-orderings is elementary in $\mathscr{L}$).


E.g., Consider the infinitary logic $\mathscr{L}_{\infty, \omega}$, $\mathscr{L}_{\infty, \omega}$ does not have a well-ordering number
(i.e.,$w(\mathscr{L})=\infty$) and so is unbounded. This is because the class of $\mathscr{L}_{\infty, \omega}$-sentences forms a proper-class, even in finite vocabularies ($|\tau|< \omega$), but $\mathscr{L}_{\infty, \omega}$ is not strong.
	Consider the disjunction of the proper-class of $\mathscr{L}_{\infty, \omega}$ formulae, $\bigvee\limits_{\alpha \in ORD} \varphi_{\alpha}$, this pins down every ordinal $\alpha$ and so defines the entire class of well-orderings $WO$. But this is not expressible as a single $\mathscr{L}_{\infty, \omega}$-sentence, and so the logic $\mathscr{L}_{\infty, \omega}$ is not strong.
$\to \mathscr{L}_{\infty, \omega}$ not being strong is due to the class $WO$ not forming a projective class ($PC$) in $\mathscr{L}_{\infty, \omega}$.
($w(\mathscr{L}_{\infty,\omega})=\infty$ and yet $\mathscr{L}_{\infty, \omega}$ not being strong can be interpreted that a vestige of compactness is still preserved for this logic)

Proof:

E.g., A logic which is strong is Second-Order Logic, $\mathscr{L^2}$. This is because the notion of well-ordering can be expressed as a single sentence in $\mathscr{L^2}$, that is, it contains a definition of well-ordering and so characterizes all of $WO$
$\to$ and by implication of $\mathscr{L^2}$ being strong, $w(\mathscr{L^2})=\infty$


We define by recursion:
	i) $\beth_{0}(\kappa)=\kappa$
	ii) $\beth_{\alpha+1}(\kappa)=2^{\beth_{\alpha}(\kappa)}$
	iii) $\beth_{\lambda}(\kappa)=$ sup{$\beth_{\alpha}(\kappa)|\alpha< \lambda$} for $\lambda$ is a limit ordinal
$\to$ The size of these Beth numbers can be illustrated via a modification of the Von Neumann universe 
	i) $V_{0}^*(A)=A$
	ii) $V_{\alpha+1}(A)^*=\mathcal{P}(V_{\alpha}^*(A))$
	iii) $V_{\lambda}^*(A)=\bigcup\limits_{\alpha<\lambda} V_{\alpha}^*(A)$ for $\lambda$ is a limit ordinal

**Note:** For all $\alpha$, we have $|V_{\alpha}^*(A)|=\beth_{\alpha}(\kappa)$

Assume that $\lambda<h_{\kappa}(\mathscr{L})$ is pinned down by a set $\Phi \subseteq \mathscr{L}[\tau]$ of power $\leq \kappa$. The vocabulary, $\tau$, can be chosen relational with new binary relation symbols $v, \varepsilon$ and constants $c_{0}, c_{1}$. Let $\Phi'$ consist of the following:
	i) $\exists z vc_{0}z\wedge \forall z(vc_{0}z \vee v c_{1} z);$
	ii) $\varphi^{\left\{ x|v c_{0} z \right\}}$ for $\varphi \in \Phi;$
	iii) $\forall x,y(\forall z(z \varepsilon x \leftrightarrow z \varepsilon y)\to x =y);$ that is, "$\varepsilon$ is s extensίonal";
	iv) $\forall z(vc_{1}z \leftrightarrow \forall u \varepsilon v c_{0}z)$
Then for any models $\mathfrak{A} \models \Phi'$, we have $\mu_{i}=$|{$a \in A|c_{i},a \in v^{\mathfrak{A}}$}| such that $|A|\leq \mu_{0}+\mu_{1}$, where $\mu_{0} >h_{\kappa}(\mathscr{L})$ and $\mu_{1} \leq \beth_{1}(\mu_{0})$. Hence $\Phi'$ pins down cardinals and $h_{\kappa}(\mathscr{L})>\beth_{1}(\lambda)$

**Theorem:** Given that each ordinal $\alpha<w_{\kappa}(\mathscr{L})$ can be pinned down by a set $\Psi_{\alpha}$ of sentences, $|\Psi_{\alpha}|\leq\kappa$ having a model $\mathfrak{A}$ of power $< h_{k}(\mathscr{L})$ where $<^{\mathfrak{A}}$ if of order type $\alpha$. Then for every $\lambda<h_{\kappa}(\mathscr{L}), h_{\kappa}(\mathscr{L})\geq\beth_{w_{\kappa}(\mathscr{L})}(\lambda)$
$\to$ The Hanf number depends on the well-ordering number

Compactness properties yield small Hanf numbers, while large well-ordering numbers cause compactness properties to 'fade away' (i.e., less fragments of compactness), which, as a result, yields large Hanf numbers.


[[The Hanf Number]]
[[Model Theoretic Logics.pdf]]
[[gupea_2077_25506_1.pdf]]

