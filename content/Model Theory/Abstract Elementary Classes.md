## Definition + Intuition
$\langle \mathcal{K}, \prec_{\mathcal{K}} \rangle$, for $\mathcal{K}$ is a class of structures in some language in some language $L=L(\mathcal{K})$ is an AEC (Abstract Elementary Class) if it has the following properties:
- $\prec_{\mathcal{K}}$ is a partial-order on $\mathcal{K}$
- if $\mathcal{M \prec_{K} N}$ if $\mathcal{M}$ is a substructure of $\mathcal{N}$
- $\mathcal{K}$ is closed under isomorphisms, that is if  $\mathcal{M\in K}$ and $\mathcal{M\cong N}$, then $\mathcal{N\in K}$. Also, if $\mathcal{M, N, M', N' \in K, f:M \cong M', g: N\cong N'. g\subseteq f}$ and $\mathcal{M\prec_{K}N}$, then $\mathcal{M' \prec N'}$.
- If $\mathcal{M}_{1 \prec_{\mathcal{K}}} \mathcal{M}_{3}, \mathcal{M}_{2}\prec \mathcal{M}_{3}, M_{1} \subseteq M_{2}$, then $\mathcal{M}_{1}\prec_{\mathcal{K}}\mathcal{M}_{2}$
- Tarski-Vaught chain axioms: If $\gamma$ is an ordinal and {$M_{a}$ |  $\alpha<\gamma$} $\subseteq \mathcal{K}$ is a chain (i.e., $\alpha < \beta < \gamma \implies \mathcal{M}_{\alpha}\prec_{\mathcal{K}}\mathcal{M}_{\beta}$), then
	- $\bigcup\limits_{ \alpha < \gamma} \mathcal{M}_{\alpha}\in \mathcal{K}$
	- If $\mathcal{M}_{\alpha} \prec_{\mathcal{K}} \mathcal{N},$ for all $\alpha < \gamma,$ then $\bigcup\limits_{\alpha<\gamma}\mathcal{M}_{\alpha \prec_{\mathcal{K}}} \mathcal{N}$
- Löwenheim-Skolem axiom: There exists a cardinal $\mu \geq |L(K)|+ \aleph_{0,}$ such that if $A \subseteq Dom(M),$ then there is a $\mathcal{N}\in \mathcal{K}$ whose universe contains A such that $||N|| \leq |A| + \mu$ and $\mathcal{N} \prec_{K}\mathcal{M}.$ Let $LS(\mathcal{K})$ denote the least such $\mu$ and call it the Löwenheim-Skolem number of $\mathcal{K}$

Abstract elementary class allows us to study a class of objects w/out going into the specifics of logics (i.e., syntax). AEC's provide a diverse framework to work w/in to study semantics and model-theoretic properties of structures.

The relation $\prec_{\mathcal{K}}$ is a 'strong' substructure relation, which is analogous to a generalization of the elementary substructure relation (in the context of AEC's).

A simple example of an AEC is an elementary class. If T is a first-order theory, then Mod$(|T|)$ (the class of all models of $|T|$) together with elementary substructure forms an AEC w/ Löwenheim–Skolem number $|T|$.
## Useful Properties for AEC's
- It is often assumed that $AEC's$ do not contain maximal models (w/ respect to cardinality and the '$\preceq_{\mathcal{K}}$' relation), that is, it is assumed there does not exists a structure $\mathcal{N\in K}$ such that for all $\mathcal{M\in K, M \preceq_{k}N}$.

The following properties are also often assumed for AEC's:

**Tameness:** Fragment of compactness for AEC's

An AEC $\mathcal{K}$ is $(\chi, \mu)$-weakly tame if for any saturated model $\mathcal{N\in K}$ such that $|N|=\mu,$ if $p, q \in S(N)$ with $q\not=p$ then for some $\mathcal{M\preceq_{\kappa} N}$ w/ $|M|\leq\chi, p \upharpoonright \mathcal{M} \not= q\upharpoonright \mathcal{M}$.

**Notation:** $p\upharpoonright\mathcal{M}$ means the maximally consistent set of formulas $\varphi(a_{1},\dots,a_{n})$ that only has parameters $a_{1},\dots,a_{n}\in M$

i.e., Any two Galois types that differ have a small sub model $\mathcal{M}$ 

An AEC $\mathcal{K}$ is $(\chi, \mu)$-tame if the above holds for all $\mathcal{N}$ with cardinality $\mu$

**Joint Elementary Property:** An AEC $\mathcal{K}$ has the joint elementary property (JEP) if for any two structures $N_{1}, N_{2} \in \mathcal{K}$, then there exists a structure $M \in \mathcal{K}$ such that there are strong embeddings $f: N_{1} \to M$ and $g:N_{2}\to M$.

**Amalgamation Property:** If you have a structure $M \in \mathcal{K}$ and two extensions of $M, N_{1}, N_{2} \in \mathcal{K}$, then there exists another structure $N_{3}\in\mathcal{K}$ such that there is $f: N_{1}\to N_{3}$ and $g:N_2\to N_{3}$ over $M$.

**Note:** For elementary classes, the joint elementary property holds whenever the theory is complete. The amalgamation property and the non-existence of maximal models in $\mathcal{K}$ are consequences of the compactness property.



**Monster Model:** $\mathbb{M}\in\mathcal{K}$ is a monster model if it $\kappa$-saturated for a sufficiently large $\kappa$ ($\implies \kappa$-homogeneity), where all Galois types over substructures of size $<\kappa$ and by implication, any partial elementary map between 'small' ($<\kappa$) substructures extends to an automorphism of $\mathbb{M}$.

**Note:** 'Large enough' meaning larger than all models you intend to work over, and so every relevant structure $\mathcal{M}$ embeds into $\mathbb{M}$. Choosing $|\mathbb{M}|=2^\kappa$ for $\mathbb{M}$ is $\kappa$-saturated, or a strong inaccessible cardinal.

Embedding reducts.

[Abstract elementary class - Wikipedia](https://en.wikipedia.org/wiki/Abstract_elementary_class)]
[[AEClec.pdf]]
[[The Löwenheim number]]
[[Stability Theory]]
[[Logics, Structures & Models]]