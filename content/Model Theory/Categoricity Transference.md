**Categoricity in Infinitary Logic**
If $T$ is categorical in $\lambda$ for $\lambda>h(T)$ then it is categorical in arbitrarily larger cardinals (larger than the Hanf number).

- If $h(\mathscr{L})=\infty$ (i.e., no weak upwards Löwenheim-Skolem property) then arbitrary categoricity is not guaranteed from any 'point' (cardinal).
E.g., $T$ may be $\lambda$-categorical for any infinite cardinal $\lambda$, but not categorical in any other cardinal. This may also occur for $\lambda<h'(\mathscr{L})=\kappa$ for $h'(\mathscr{L})$ denotes the Hanf number for the property of categoricity.

----------------------------------------------
## Background Information
**Shelah's presentation theorem:** If $\mathcal{K}$ is an AEC in a vocabulary $\tau$ w/ $|\tau|\leq LS(\mathcal{K})$, then there is a vocabulary $\sigma \supseteq \tau$ w/ cardinality $|LS(\mathcal{K})|$, a first-order ($\mathscr{L}_{\omega, \omega}$) theory $T$ of vocabulary $\sigma$, and a set $\Gamma$ of at most $2^{LS(\mathcal{K})}$ partial types such that:
	$\mathcal{K}=\{\mathcal{M} \upharpoonright \tau| \mathcal{M}\models T \text{ and } \mathcal{M} \text{ omits } \Gamma\}$

**Categoricity Transference:** Categoricity transference is a property where categoricity in a certain cardinal transfers ('implies') downwards or upwards to another cardinal (this is achieved via the Hanf number for categoricity).

**Notation:** $P(\mathcal{K}, \lambda)$ denotes a property $P$ that applies to an AEC $\mathcal{K}$ in cardinality $\lambda$

**Theorem:** For a fixed set of classes $\mathcal{K}$ of a given kind (e.g., the classes of models defined by the infinitary logic $\mathscr{L}_{\mu, v}$ for some fixed $\mu, v$ of a given vocabulary). For any 'property' $P(\mathcal{K}, \lambda)$ there is a cardinal $\kappa$ such that is $P(\mathcal{K}, \lambda )$ holds for some $\lambda>\kappa$, then $P(\mathcal{K}, \lambda)$ holds for arbitrarily large $\lambda$.
	**Proof:** 
	Let $\mu_{\mathcal{K}}=$ sup$\{\lambda|P(\mathcal{K}, \lambda) \text{ if such a max exists}\}$, then
	 $\kappa=$ sup$\mu_{\mathcal{K}}$ as $\mathcal{K}$ ranges over the set of all classes of a given type

Since there are a proper-class of sentences in $\mathscr{L}_{\infty, \omega}$ (that $\mathscr{L_{\infty, \omega}}[\tau]$ forms a proper-class for an arbitrary vocabulary $\tau$), there are a proper-class of AEC with a given vocabulary.

**Notation:** For any AEC $\mathcal{K}$, let $\kappa_{\mathcal{K}}=$sup$\{|\tau_{\mathcal{K}}|, LS({\mathcal{K}})\}$, where $\tau_{\mathcal{K}}$ denotes the vocabulary (or 'similarity type') of the AEC $\mathcal{K}$, and $LS(\mathcal{K})$ denotes the Löwenheim number of $\mathcal{K}$.

For any cardinal $\kappa$, there is only set-many AEC $\mathcal{K}$ with $\kappa_{\mathcal{K}}=\kappa$ since the AEC is determined via its restriction to model below the Löwenheim number.

A property $P$ is downwards closed if there is a $\kappa_{0}$ such that if $P(\mathcal{K}, \lambda)$ holds with $\lambda>k_{0}$, then $P(\mathcal{K}, \mu)$ holds if $k_{0}< \mu\leq \lambda$.

**Theorem:** If a property $P$ is downwards closed, then for any $\kappa$ there is a cardinal $\mu$ for any AEC $\mathcal{K}$ w/ $\mu_{\kappa}=\kappa$, if some model $\mathcal{M\in K}$ w/ property $P$ has cardinality greater than $\mu$ ($|M|>\mu$), then there is a model w/ property $P$ in all cardinals $\lambda>\mu$.
	$\to$ i.e., if an AEC is downwards closed for a property $P$, there is a Hanf number for $P$

**Hanf Number for Properties:**
The Hanf number for a property $P$ for an AEC w/ $\kappa_{\mathcal{K}}=\kappa$ is $\mu$ if there is a model $\mathcal{M\in K}$ w/ cardinality $> \mu$ that has property $P$, then there is a model $\mathcal{N\in K}$ in all cardinalities greater than $\mu$.
	$\to$ Hanf's argument can be applied via replacing $\kappa_{\mathcal{K}}$ w/ $|\tau|$, i.e., $H(|\tau|)$ instead of $H(\kappa_{\mathcal{K}})$

We may then consider the property of categoricity, that is, every model of cardinality $|M|$ is isomorphic to $\mathcal{M}$, and so consider a Hanf number for categoricity (see below).


**Hanf Number Construction:**
i) A first-order type $p$ is a consistent set of first-order formulae in a fixed number of finite variables. We say that $p$ is a complete type over a set $A$ if every formula w/ parameters from $A$ (or it's negation) is in $p$
ii) Let $\eta(\lambda, \kappa)$ denote the least cardinal $\kappa$ such that if a first-order theory $T$ w/ $|T|=\lambda$ has models of every cardinality $< \mu$ which omit each of a set $\Gamma$ of types. We call $\eta(\lambda, \kappa)$ the Hanf function for omitting $\kappa$ types for theories of size $\lambda$
	It is often written $\eta(\kappa)$ in the case of $\eta(\kappa, \kappa)$
iii) We write $H(\kappa)$ for $\beth_{(2^\kappa)^+}$
iv) For a vocabulary $\tau, H(\tau)$ means $H(|\tau|)$. W/ a fixed $\mathcal{K}$, we write $H_{1}$ for $H(\kappa_{\mathcal{K}})=H(\text{sup}\{\tau_{\mathcal{K}}, LS(\mathcal{K})\})$

**Corollaries:**
- $\eta (\kappa, 2^\kappa)\leq H(\kappa)=\beth_{(2^\kappa)^+}$
- If $\mathcal{K}$ is an AEC and there is some $\mathcal{M\in K}$ such that $|M|\geq H_{1}=H(\kappa_{\mathcal{K}})$, then $\mathcal{K}$ has arbitrarily large models (i.e., There is a $\mathcal{N\in K}$ such that for all $\lambda>H_{1}=H(\kappa_{\mathcal{K}})$, then $|N|=\lambda$)

When $\kappa_{\mathcal{K}}= \text{max}\{LS(\mathcal{K}), |\tau(\mathcal{K})|\}$, then $H_{1}=H(\kappa_{\mathcal{K}})$ is often called the Hanf number of $\mathcal{K}$. This is further equal to $\beth_{(2^{LS(\mathcal{K})})^+}$ assuming $|\tau_{\mathcal{K}}|\leq LS(\mathcal{K})$ (or $\beth_{(2^{|\tau_{\mathcal{K}}|})^+}$ for $LS(\mathcal{K})\leq|\tau_{\mathcal{K}}|$)
	**Note:** This is a bit misleading as a single AEC $\mathcal{K}$ cannot have a Hanf number, (a Hanf number is a maximum of all sentences and for all vocabularies of a given cardinality, as well as a fixed Löwenheim number for AEC's). Rather the Hanf number for all AEC w/ the same $\kappa_{\mathcal{K}}$.
For any model $\mathcal{M}$ w/ $|M|\geq \eta(\tau)$ where $|\tau|=LS(\mathcal{K})$, there are models of all cardinalities in the class that omit all types omitted in $\mathcal{M}$.

**Notes:**
- If the AEC is not fixed, then the Hanf number is a function of the (cardinality of the) vocabulary, $H_{1}=H(|\tau_{\mathcal{K}}|)$.
- $\tau(\mathcal{K})=\tau_{\mathcal{K}}$, use is different in the specific context
- $H(\kappa)=\beth_{(2^\kappa)^+}$ is an upper bound for the Hanf number (given it exists). Thus, it is possible for the Hanf number to smaller than $\beth_{(2^\kappa)^+}$, but not larger.
	$\to$ i.e., Considering first-order logic ($\mathscr{L}_{\omega, \omega}$) w/ in a countable language, $LS(\mathcal{K})=\aleph_{0}$ and so the upper bound is $H_{1}=\beth_{(2^{\aleph_{0}})^+}$, even though by Morley's categoricity theorem it is $\aleph_{0}$. By Shelah's generalization, the Hanf number for first-order logic in an uncountable language of size $\kappa$, is $\kappa$.
The reason for the use of Beth numbers is because it has been proven by Barwise that the Hanf number of any abstract logic corresponds to some Beth $\beth_{n}$, and the Hanf number for infinitary logics is the Beth of the successor.

Hanf numbers as described here: [The Hanf Number](Model%20Theory/The%20Hanf%20Number.md), is the Hanf number for the property of the existence of models.

----------------------
## Categoricity Transference
A larger Hanf number $H_{2}$ can be defined as follows:
	$H_{2}=H(H_{1})=H(H(\kappa_{\mathcal{K}}))=\beth_{(2^{H_{1}})^+}=\beth_{(2^{H(\kappa_{\mathcal{K}})})^+}$ if $\mathcal{K}$ is fixed.
Naturally this $\implies$ that we build a sequence of successively larger Hanf numbers where $H_{1}=H(\kappa_{\mathcal{K}})$ and $H_{n+1}=H(H_{n})$

The Hanf number $H_{1}$ is the Hanf number for arbitrarily large models (this 'depends' on the size of the vocabulary $|\tau_{\mathcal{K}}|$ and the Löwenheim Number $LS(\mathcal{K})$). While the Hanf number $H_{2}$ is used for tameness and locality assumptions, this can be used to show categoricity transference.
	i.e., For an AEC $\mathcal{K}$ that satisfies the amalgamation property (AP) and joint embedding property (JEP) and is categorical in $\lambda$ & $\lambda^+$, it can be shown that for some $\lambda\geq H_{2}$ then it is categorical in all $\mu\in[H_{2}, \lambda^+]$. Assuming $\mathcal{K}$ is $(\lambda, \infty)$-tame for some $\chi<H_{1}$ allows one to extend this conclusion to all categoricity in all $\mu\geq H_{2}$.

We apply the Hanf function again to yield $H_{2}$, the Hanf number for categoricity transference because below $H_{1}$, models of arbitrary cardinalities is not guaranteed.


**Downwards Categoricity Transference:**
Similar to how categoricity can be 'transferred' upwards from $\lambda$ to a successor cardinal $\lambda^+$ which can yield categoricity for an AEC $\mathcal{K}$ in arbitrarily large cardinals., categoricity can also be transferred downwards.

**Theorem 14.14:** Suppose $\mathcal{K}$ is categorical in some $\lambda^+$ w/ $\lambda\geq H_{2}$ and either
	i) $\mathcal{K}$ is $\lambda$-categorical; or
	ii) $\mathcal{K}$ admits $\lambda$-saturated unions
then,
	i) $\mathcal{K}$ is categorical in every $\theta$ w/ $H_{2}\leq \theta\leq \lambda^+$;
	ii) If $\mathcal{K}$ is also $(H_{2}, \infty)$-weakly tame $\mathcal{K}$ is categorical in every $\theta$ w/ $H_{2}\leq \theta$.


**Theorem 15.11:** Suppose $LS(\mathcal{K})<\lambda$ and that $\mathcal{K}$ has arbitrarily large models, the amalgamation property, and joint embedding property. Suppose $\mathcal{K}$ is $\lambda^+$-categorical, then
	i) $\mathcal{K}$ is categorical in all cardinals $H_{2}\leq \mu\leq \lambda^+$
	ii) If $\mathcal{K}$ is $(\chi, \infty)$-tame for some $\chi<\lambda^+$, then $\mathcal{K}$ is $\mu$-categorical for all $\mu\geq \lambda^+$
Where $\chi=H_{1}=\beth_{(2^\kappa)^+}$


**Conclusion 15.13:** There is a cardinal $\mu$ depending on $\kappa$ such that if $\mathcal{K}$ is an AEC $\kappa_{\mathcal{K}}=\kappa$, and $\mathcal{K}$ is categorical in some successor cardinal $\lambda^+>\mu$, then $\mathcal{K}$ is categorical in all cardinal greater than $\mu$.

**Proof:** There are only set-many AEC $\mathcal{K}$ w/ $\kappa_{\mathcal{K}}$. Let $\mu_{\mathcal{K}}=\text{ sup}\{\lambda^+|\mathcal{K} \text{ is } \lambda^+ \text{-categorical}\}$ given that such a supremum exists. Then let $\mu$ be the maximum of $H_{2} (=H_{2}(\kappa))$ and $\text{sup}\{\mu_{\mathcal{K}}|\kappa_{\mathcal{K}}=\kappa\}$. If $\kappa_{\mathcal{K}}=\kappa$ and $\mathcal{K}$ is categorical in some successor cardinal greater than $\mu$, then $\mathcal{K}$ is categorical in arbitrarily large successor cardinals and in all cardinals greater than $H_{2}$ via theorem 15.11.


**Notes:** 
- The smallest possible lower bound for an arbitrary infinitary sentence to be categorical is $\beth_{\omega_{1}}.$ For any $\alpha< \aleph_{1}$ there is a sentence $\psi_{\alpha}$ of $\mathscr{L}_{\omega_{1}, \omega}$ w/ no models in cardinals greater than $\beth_{\alpha}$ and w/ many models in each cardinal below $\beth_{\alpha}$. If $\psi$ asserts that the language contains only equality, then $\psi_{\alpha}\vee \psi$ is $\lambda$-categorical for $\lambda\in(\beth_{\alpha}, \infty)$ (this property fails the amalgamation and joint embedding properties).
- Since $H_{1}< H_{2}$. If $H_{1}=\infty$ (i.e., there isn't a point where arbitrarily large models are guaranteed), then $H_{2}=\infty$ (i.e., there isn't a point where categoricity isn't transferred arbitrarily upwards) and vice versa as $H_{2}=H(H_{1})=\beth_{(2^{H_{1}})^+}=\infty$.
## References
[[Categoricity]]
[[Abstract Elementary Classes]]
[[Stability Theory]]
[[The Hanf Number]]
[[Classification Theory]]
[[AEClec.pdf]]
