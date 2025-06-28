We define a new notion of Hanf number for properties
	$\implies$ We can also do the same for Löwenheim numbers

Consider the Hanf number for the property of categoricity...
If a theory $T$ is categorical in a cardinal $\kappa$, then $T$ is categorical in all $\lambda>\kappa$


**Categoricity in Infinitary Logic**
If $T$ is categorical in $\lambda$ for $\lambda>h(T)$ then it is categorical in arbitrarily larger cardinals (larger than the Hanf number).

- If $h(\mathscr{L})=\infty$ (i.e., no weak upwards Löwenheim-Skolem property) then arbitrary categoricity is not guaranteed from any 'point' (cardinal).
E.g., $T$ may be $\lambda$-categorical for any infinite cardinal $\lambda$, but not categorical in any other cardinal. This may also occur for $\lambda<h'(\mathscr{L})=\kappa$ for $h'(\mathscr{L})$ denotes the Hanf number for the property of categoricity.

----------------------------------------------
## Categoricity Transference
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
	$\to$ Hanf's argument can be applied via replacing $\kappa_{\mathcal{K}}$ w/ $|\tau|$...

We may then consider the property of categoricity, that is, every model of cardinality $|M|$ is isomorphic to $\mathcal{M}$, and so consider a Hanf number for categoricity.


**Hanf Number Construction:**
i) A first-order type $p$ is a consistent set of first-order formulae in a fixed number of finite variables. We say that $p$ is a complete type over a set $A$ if every formula w/ parameters from $A$ (or it's negation) is in $p$
ii) Let $\eta(\lambda, \kappa)$ denote the least cardinal $\kappa$ such that if a first-order theory $T$ w/ $|T|=\lambda$ has models of every cardinality $< \mu$ which omit each of a set $\Gamma$ of types. We call $\eta(\lambda, \kappa)$ the Hanf function for omitting $\kappa$ types for theories of size $\lambda$
	It is often written $\eta(\kappa)$ in the case of $\eta(\kappa, \kappa)$
iii) We write $H(\kappa)$ for $\beth_{(2^\kappa)^+}$
iv) For a vocabulary $\tau, H(\tau)$ means $H(|\tau|)$. W/ a fixed $\mathcal{K}$, we write $H_{1}$ for $H(\kappa_{\mathcal{K}})=H(\text{sup}\{\tau_{\mathcal{K}}, LS(\mathcal{K})\})$

**Corollaries:**
- $\eta (\kappa, 2^\kappa)\leq H(\kappa)=\beth_{(2^\kappa)^+}$
- If $\mathcal{K}$ is an AEC and there is some $\mathcal{M\in K}$ such that $|M|\geq H_{1}=H(\kappa_{\mathcal{K}})$, then $\mathcal{K}$ has arbitrarily large models (i.e., There is a $\mathcal{N\in K}$ such that for all $\lambda>H_{1}=H(\kappa_{\mathcal{K}})$, then $|N|=\lambda$)

When $\kappa_{\mathcal{K}}= \text{max}(LS(\mathcal{K}), |\tau(\mathcal{K})|)$, then $H_{1}=H(\kappa_{\mathcal{K}})$ is often called the Hanf number of $\mathcal{K}$.
	**Note:** This is a bit misleading as a single AEC $\mathcal{K}$ cannot have a Hanf number, (a Hanf number is a maximum of all sentences and for all vocabularies of a given cardinality, as well as a fixed Löwenheim number for AEC's) .Rather the Hanf number for all AEC w/ the same $\kappa_{\mathcal{K}}$.
For any model $\mathcal{M}$ w/ $|M|\geq \eta(\tau)$ where $|\tau|=LS(\mathcal{K})$, there are models of all cardinalities in the class that omit all types omitted in $\mathcal{M}$.
## References
[[Categoricity]]
[[Abstract Elementary Classes]]
[[Stability Theory]]
[[The Hanf Number]]
[[Classification Theory]]
[[AEClec.pdf]]
