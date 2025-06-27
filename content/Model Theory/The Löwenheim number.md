**Intuition:**
The Löwenheim number is a measure of the downwards Löwenheim-Skolem property for logics

**The Löwenheim number:**
The Löwenheim number of a logic $\mathscr{L}$, denoted $\ell(\mathscr{L})$, is the smallest cardinal $\mu$ such that if any arbitrary sentence $\varphi$ of $\mathscr{L}$ has a model, the sentence has a model no larger than $\kappa$ (i.e., if $\mathcal{M}\models \varphi,$ then $|M|\leq\mu$)

Formally,
Let $\kappa_{\varphi}$ denote the smallest cardinality of a model of $\varphi,$ otherwise if $\varphi$ doesn't have a model than $\kappa_{\varphi}=0$. Then the The Löwenheim number is defined as the following
	$\ell(\mathscr{L})=$sup{$\kappa_{\varphi}|\varphi$ is sentence in $\mathscr{L}$}
If $\mathscr{L}$ doesn't have a Löwenheim number, then we way $\ell(\mathscr{L})=\infty$

We can generalize this definition to a set of sentence $\leq \kappa$

**The Löwenheim-Skolem number:**
$\ell_{\kappa}(\mathscr{L})$ is the least cardinal $\mu$ such that any satisfiable set of $\mathscr{L}$-sentences has a model of power $\leq \kappa$ has a model of power $\leq \mu$ provided that such a cardinal $\mu$ exists, otherwise $\ell_{\kappa}(\mathscr{L}) =\infty$.

Let $\lambda_{\Phi}$ denote the smallest cardinality of a model of $\Phi$, where $\Phi$ is a set of sentences of power $\leq \kappa$. Then the Löwenheim-Skolem number is defined as follows:
	$\ell_{\kappa}(\mathscr{L}) =$sup{$\lambda_{\Phi}|\Phi$ is a set of sentences of power $\leq \kappa$}
	$\to L(\mathscr{L})$ sup$_{\kappa\in CARD} l_{\kappa}(\mathscr{L})$ is defined as the supremum of all cardinals $\lambda_{\Phi}$ such that an arbitrary set of $\mathscr{L}$-sentences, $\Phi$, has a model of power $\leq$ $L(\mathscr{L})$. Equivalent to being the supremum of $\ell_{\kappa}(\mathscr{L})$ for any $\kappa$.

The Löwenheim number is the case where $\kappa = 1$ (a single sentence rather than sets of sentences), i.e., $\ell(\mathscr{L}) = \ell_{1}(\mathscr{L})$

**Note:** 'Cardinality' refers to the size of a single domain, while power refers to the size of the overall structure, that is the sum of the cardinality of each domain. i.e., they differentiate in the case of many-sorted structures

**The Löwenheim-Skolem-Tarski number:**
The Löwenheim-Skolem-Tarski number of the logic $\mathscr{L}$ is the smallest cardinal such that if $\mathcal{M}$ is a
$\tau$-structure, then there is an elementary substructure of $\mathcal{M}$ of power $\leq \kappa$.
$\to$ This requires that the logic has a suitable notion of 'elementary substructure' (and elementary extension).

Denoted as $LST(\mathscr{L})$

**Note:** $\ell(\mathscr{L})\leq \ell_{\kappa}(\mathscr{L})\leq LST(\mathscr{L})$ always

E.g., 
- For $\mathscr{L}$ is first-order logic in a countable language, then
	$\ell(\mathscr{L})=\ell_{\kappa}(\mathscr{L})=LST(\mathscr{L})=\aleph_{0}$
	This is a result of the Löwenheim-Skolem Theorem
- 

**Relation to Hanf numbers:**
$\ell(\mathscr{L}) \leq \ell_{\kappa}(\mathscr{L}) \leq LST(\mathscr{L}) \leq H(\mathscr{L})$;
$\ell(\mathscr{L}) \leq h(\mathscr{L}) \leq h_{\kappa}(\mathscr{L}) \leq H(\mathscr{L})$;
$\ell_{\kappa}\leq h_{\kappa}(\mathscr{L})\leq H(\mathscr{L})$
## References
[[The Löwenheim-Skolem Theorem]]
[[The Hanf Number]]
[[Model Theoretic Logics.pdf]]
[Löwenheim number](https://en.wikipedia.org/wiki/L%C3%B6wenheim_number)

