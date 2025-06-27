## (Elementary) Embeddings & Isomorphisms
**Embedding:** Suppose $\mathcal{M}$ and $\mathcal{N}$ are $\tau$-structures with domain $M$ and $N$ respectively, an embedding $\eta: \mathcal{M\to N}$ is an injective (one-to-one) mapping which preserves the interpretation of all symbols in $\tau$ (the vocabulary).
	More precisely, the following:
	i) $\eta(f^\mathcal{M}(a_{1},\dots,a_{n_{f}}))= f^\mathcal{N}(\eta(a_{1}),\dots,\eta(a_{n_{f}}))$ for all function symbols $f\in \mathcal{F}$ ($\mathcal{F}\subseteq \tau$ which contains all function symbols) and $a_{1},\dots,a_{n_{f}}\in M$ (sometimes denoted as $\overline{a}\in M$)
	ii) $a_{1},\dots, a_{n_{R}}\in R^\mathcal{M}\iff \eta(a_{1}),\dots,\eta(a_{n_{R}})\in R^\mathcal{N}$ for all relation symbols $R\in\mathcal{R}$ ($\mathcal{R}\subseteq \tau$ which contains all relation symbols) and $a_{1}\dots a_{n_{R}}\in M$
	iii)$\eta_({c^\mathcal{M}})=c^\mathcal{N}$ for all constant symbol $c\in \mathcal{C}$ ($\mathcal{C\subseteq F \subseteq \tau}$ which contains all constant symbols, that is, 0-ary function symbols)

**Isomorphism:** An isomorphism $g:\mathcal{M\to N}$ is a bijective embedding ($|M|=|N|$)

Note that $\eta:\mathcal{M\to N\implies M\cong f(M) \subseteq_{s} N}$ and so trivially it can be shown that an isomorphism is a surjective embedding $\mathcal{M\cong f(M) =N}$ (injectivity + subjectivity $\implies$ bijectivity). '$\mathcal{M\subseteq_{s}N}$' denotes that $\mathcal{M}$ is a substructure of $\mathcal{N}$.

**Automorphism:** An automorphism $h:\mathcal{M\to N}$ is an isomorphism where $\mathcal{M=N}$ (it is an isomorphism from a structure into itself).


**Elementary Embedding:** For $\mathcal{M}$ and $\mathcal{N}$ are $\tau$-structures, then an elementary embedding $j:\mathcal{M\to N}$ is an embedding such that
	$\mathcal{M}\models \varphi(a_{1},\dots,a_{n})\iff \mathcal{N}\models \varphi(j(a_{1}),\dots,j(a_{n}))$
	For all formulas $\varphi(v_{1},\dots,v_{n})\in\mathscr{L}[\tau]$ and $a_{1},\dots,a_{n}\in M$

An elementary embedding is an embedding which also preserves the truth of first-order formulae (i.e., elementary equivalent). All models of complete theories are elementary equivalent $\implies$ all embeddings between models of complete theories are elementary embeddings.

'$\mathcal{M\preceq N}$' denotes that $\mathcal{M}$ is an elementary substructure $\mathcal{N}$

**Notes:** 
- An elementary embedding between two structures $\eta:\mathcal{M\to N}$ does not imply that $\mathcal{M}$ is a substructure of $\mathcal{N}$, this only occurs when $\mathcal{M=f(M)\subseteq_{s}N}$ (this likewise goes for elementary embeddings)
- You can possibly have embeddings between structures of different vocabularies

**Partial Embeddings:** Let $A\subseteq M$ be a subset of $M$.
$j:A\to\mathcal{N}$ is a partial embedding if and only if it is an injective map $j: A \to N$ which preserves all interpretations of all symbols in the vocabulary $\tau$  applied to elements of $A$. More formally,
	i) $j(f^\mathcal{M}(a_{1},\dots,a_{n_{f}}))=f^\mathcal{N}(j(a_{1}),\dots, j(a_{n_{f}}))$ for all function symbols $f\in\mathcal{F}$ and $a_{1},\dots,a_{n_{f}}\in A$
	ii) $(a_{1},\dots, a_{n_{R}})\in R^\mathcal{M}\iff (j(a_{1}),\dots,j(a_{n_{R}}))\in R^\mathcal{N}$ for all relation symbols $R\in\mathcal{R}$ and $a_{1},\dots,a_{n_{R}}\in A$
	iii) $j(c^\mathcal{M})=c^\mathcal{N}$ for all constant symbols $c\in\mathcal{C}$

**Partial Elementary Maps:** $j:A \to \mathcal{N}$ is a partial elementary embedding if and only if it is a partial embedding which preserves truth of elements $a_{1},\dots,a_{n}\in A \subseteq M$.
	i.e., $\mathcal{M}\models \phi(a_{1},\dots,a_{n})\iff \mathcal{N}\models \phi(j(a_{1}),\dots,j(a_{n}))$

A partial map and a partial elementary map may not necessarily be injective.
## Additional Information
**Tarski-Vaught Test:**
If $\mathcal{M}$ and $\mathcal{N}$ are both $\tau$-structures and $j:\mathcal{M\to N}$ is an elementary embedding. Then $\mathcal{M}$ is an elementary substructure of $\mathcal{N}$ if and only if for every $\mathcal{L}$-formula $\phi(m, \overline{v})$ and for every $\overline{a}\in M$ 
	if there exists an $n\in N$ such that $\mathcal{N}\models\phi(n, \overline{a})$, then there exists an $m\in M$ such that $\mathcal{N}\models \phi(m, \overline{a})$

**Proof:**


**Trivial & Non-Trivial Embeddings:**
Consider an embedding $j: \mathcal{M}\to\mathcal{N}$, if $\mathcal{M=N}$, then $j(x)=x$ is a embedding from $\mathcal{M}$ to itself (identity mapping). This type of embedding is called a trivial embedding. A non-trivial embedding is an embedding where there exists $x\in M$ such that $x\not=j(x)$

**Note:** A non-trivial embedding can be done even in the case where $\mathcal{M=N}$, it is just different from the identity mapping

**Critical points:** The critical point of a non-trivial elementary embedding is the least such ordinal $\alpha$ such that $\alpha\not=j(\alpha)$.
The intuition being that $\alpha$ is the least such ordinal 'moved' by the elementary embedding $j$.

**Note:** For the critical point $j(\alpha)> \alpha$ always (every smaller ordinal is mapped to itself, i.e., for $\beta<\alpha, \beta=j(\beta)$ and an elementary embedding is injective, so you cannot map two separate elements in the domain to the same image in the codomain).
## References
[[Logics, Structures & Models]]
[[Types of Theories]]
[[Model Theory D.Marker.pdf]]
