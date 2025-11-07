## Relativity of Truth
It can be observed that the statement "all truths are relative" is an analogue of the liar's paradox

Let the predicate $R(\varphi)$ mean "the statement $\varphi$ relatively true", and the predicate $A(\varphi)$ to mean "$\varphi$ is absolutely true." Note that:
	$\neg A(\varphi)= \begin{cases} R(\varphi) & \text{relatively true} \\ A(\neg \varphi) & \text{absolutely false}\end{cases}$
	(we exclude the possibility of an 'undefined' state, although this could possibly be interpreted as relative truth given the metalanguage is some modal system).
In this context as a statement that is absolutely true (true independent of context) cannot be true relative/dependent to some context (this matches the intuitive linguistic use of 'absolute' and 'relative'). 
We view this from a universal view w/ access to all contexts, otherwise it could be true in some contexts that all truths are relative (i.e., some subset of possible worlds), this is related to the internal vs external view. Although for this 'internal' view to occur we require that the statement "all truths are relative" to be evaluated outside this subset in order to not repeat the contradiction.

(we can abstract this further via considering different subsets of worlds as contexts in the metatheory).

We can thus represent that statement "all truths are relative" as $\forall xR(x)$ for $x$ is a 'truth' ($x= T(\varphi)$?)

$A(\forall xR(x))\leftrightarrow R(\forall xR(x))$
$\to \exists xA(x)$
which is a contradiction to the initial statement as there is now an absolute truth (which is not relative).

**Note:** If $A(\neg \varphi)$ ($\neg \varphi$ is absolutely true), then $\varphi$ is absolutely false.

This can be modeled using modal logic (although we must reject the axiom $K:$ $\square \varphi\to\Diamond\varphi$ to use the word 'relative' in the intuitive sense as an absolute truth cannot be a relative truth, we must also use a modal system where the accessibility relation has access to all worlds (i.e., $S5$) in order to talk about 'true' relativity or absolute statements across all worlds, otherwise, limiting the accessibility relation we can get the instance explained above).

We can formulate this internal view via considering the sentence $\varphi=\forall xR_{w}(x)$ (i.e., all truths are relative in the world $w$, we may also be able to consider $R_{S}(x)$ for $S\subset W$) which is true in some world $u$, we require that the accessibility relation $R$ is not commutative (i.e., $wRu\leftrightarrow uRw$) so only $u$ can 'access' $w$. This is in order to not devolve into a contradiction. Thus this becomes relative truth relative to a world/context. An alternative approach is also to have the metalanguage be some modal system so we evaluate relative truth about the worlds $w$ in the object language from some meta-world $w'$.

Axiomatic theories are used to model intuitive notions, background notions and philosophies are used to inform the choice of theory.
i.e., The intuitive notion of 'relative' and linguistic use of it was used to inform the choice of modal theory to model it (i.e., w/out axiom $K$). Further examples include how we do not see objects which contain or refer to themselves in reality, thus informing the choice of the axiom of foundation.

-----------

We can further specify relative truth via defining a two-place predicate $R(\varphi, C)$ meaning $\varphi$ is true relative to some context $C$. Absolute truth can then be defined as follows: $A(\varphi)=\forall C.R(\varphi, C)$, however this does not mean that absolute truth is also relative (as this would not require the linguistic definition and use of the word), rather for a truth to be relative, we require it to be not true in all context $C$.
	$\to$ Formalizing the internal view, we could take $R(\varphi, C)$ to mean "$\varphi$ is relative to some context." Considering $\neg \forall C. R(\varphi,C)\equiv \exists C. \neg R(\varphi, C)\to \exists C.A(\varphi, C)\vee \exists C(\neg \varphi, C)$, meaning there is some context where $\varphi$ is absolutely true or absolutely false, thus, we have absolute truth relative to some context.

We can have relativized truths about absolute objects as well as absolute truth about relative objects, but not absolute truths about absolute objects (universal truth).
## Theories of Truth (Philosophy)
**Correspondence Theory of Truth:** Something is true if it corresponds to (matter of) fact/reality (states of affairs).

**Deflationary Theory of Truth:** Truth is linguistic tool rather than some metaphysical or ontological property
E.g., The statement "snow is white" is true if and only if snow is white
Tarski's T-schema: $T(\lceil \varphi \rceil)\leftrightarrow \varphi$ is an example of the deflationary theory of truth (also can be used for the correspondence theory of truth). This view is adopted in much of mathematical logic.

**Coherence Theory of Truth:** A set of propositions true if they fit together w/out any contradictions between them. Truth is characterized by a whole system of propositions rather than just a single one.

**Pragmatic Theory of Truth:** Truth is determined by its practical utility. This view of truth is dynamic since it can vary depending on the person and situation.

**Supervaluationism:**

## References
[Philosophy](Miscellaneous/Philosophy.md)