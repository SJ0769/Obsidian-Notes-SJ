Self-verifying theories are theories which can prove their own consistency w/out becoming inconsistent

The class of sentences $\Pi^-_{1}$ is defined as the class of all $\Psi$ such that $\Psi$ is mapped to any $\Pi^0_{1}$-sentence $\phi$ where the addition (+) and multiplication ($\times$) symbols are replaced with subtraction (-) and division ($\div$) symbols.

Gödel encoding is usually defined via addition, + and multiplication, $\times$ via prime factorization (i.e., $p_{1}^{n_{1}} \times p_{2}^{n_{2}} \times\dots$,etc. where  is a prime number which is assigned to the position of a symbol in the sentences , and $n_{i} \in \mathbb{Z}^+$ assigned to a particular logical symbol and $i \in \mathbb{N}$ is an index), see [[Model Theory/Gödel's Incompleteness Theorems]]. This is needed to express diagonalization:

$\forall F(x) \exists \phi(\phi \iff F(\lceil \phi \rceil))$

where $F(x)$ is intended to be a self-referential predicate.

Thus, a self-verifying theory $\alpha$ cannot express self-referential statements such "this sentence is not provable" (from which Gödel's Incompleteness Theorem is derived) and "this sentences is false" (for which Tarski's Undefinability Theorem is derived)

**Canonical Reflection Principle:**
$\{\exists yPrf_{\alpha}(\lceil \Psi \rceil, y)\}\supset\Psi$

**Tangible Reflection Principle:**
$\forall x\{\lceil \exists yPrf_{\alpha}(\lceil \phi \rceil, y) \wedge \text{Tangible}(x) \rceil\}\supset \Psi^x$

Intuitively, 'tangible' means not being of unusually large size.

Can self-verifying theories define their own truth predicates? Placement in a Tarski hierarchy.


 Thus, a terminating Tarskian hierarchy can only be made for equivalently strong or weaker theories.

Tarski's undefinability theorem requires diagonalization in order to express self-referential statements such as the liar statement $L=$"this sentence is false". Since self-verifying theories are too weak to express diagonalization (yet strong enough to express Gödel encoding), Tarski's undefinability theorem does not fully apply. It should be noted that Dan Willard's theory allows for a truth predicate to be defined for sentences whose parameters are 'tangible' numbers. Thus, it can only capture truth in a restricted form and in this sense only partially escapes the undefinability theorem. This means that we cannot really have finite or terminating Tarskian hierarchies as it cannot (fully) justify its own truth, let alone stronger object theories and so isn't too useful in this sense. A terminating hierarchy could only be made in the case that the object theories only contain sentences w/ tangible parameters ($\Pi_{1}^-$-sentences?)

The tangible reflection principle only allows us to fully escape the incompleteness theorems and is too weak to completely avoid other self-referential results.
## References
[[Self-Verifying Theories.pdf]]
[Self-Verifying Theories]([Self-verifying theories - Wikipedia](https://en.wikipedia.org/wiki/Self-verifying_theories))