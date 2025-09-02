## Formal vs Natural Languages
Natural languages do not have a well-defined syntax like formal languages (i.e., there isn't a procedure to construct new words, some words are just arbitrarily adopted and assigned a loose meaning), nor a deductive system to infer statements (this is in part to the ambiguity of its semantics). Natural languages can then be thought of a means to express ideas (either about the physical world or the immaterial in our own mental faculties) via informal means.

A formal system has a syntax (which is often referred to as a formal language) and semantics, as well as a deductive system to infer new theorems

Natural languages cannot define truth as we can formulate the sentence "this sentence is false" as shown by Tarski's undefinability theorem, this is the reason for formal languages and the Tarskian framework where truth is able to be defined in the metatheory (although we run into the problem of infinite regress and truth not being 'grounded'). This does not result in a full semantic collapse as natural language does not have inference rules like formal languages in order to prove everything, rather there is ambiguity surrounding the meaning behind specific words and semantics become context-based.

The reason why a trivial language can define truth by allowing the liar's paradox is because they are still a formal language (just ones w/ contradictory syntax and semantics) and so truth is formally defined via Tarski's T-schema ($T(\lceil \phi \rceil)\leftrightarrow \phi$), semantic collapse then follows from a language being able to define its own truth predicate. Meanwhile natural languages do not have an adequate definition of truth due to ambiguous and vague semantics (although it can still express the liar's sentence).

**Note:** Metalanguages are not just used for formal languages, but also natural languages, although a full semantics for natural language cannot be fully defined due to containing contradictory and self-referential statements like the liar sentence.
E.g., consider studying the language Spanish, the object language is Spanish and the metalanguage is English as we are translating a Spanish word to English to obtain its meaning.

There are partial reductions of natural language to formal languages (i.e., Montague grammar), although a full reduction can likely never be done due to the ambiguity in meaning of expressions (i.e., context dependent) and can express the liar's sentence (or analogues of it), while formal languages (which are not trivial) cannot by Tarski's undefinability theorem. Truth is partially captured Tarskian hierarchies although this is 'ungrounded' as its truth is always dependent on being defined by a metatheory (see [Tarski's theory of truth](Logic/Tarski's%20theory%20of%20truth.md)).

Natural languages have a 'self-extending' syntax as they often adopt new words, although this does not mean it is not syntactically-closed (i.e., cannot talk about its own formation rules and method of adding new words, especially since natural language syntax is not well defined) and doesn't undergo syntactic collapse.

Syntactically-closed languages can (internally) expand their syntax to be non-recursive

It was shown by Noam Chomsky that formalized natural language grammars (based off of English) is at least recursively-enumerable. There is no formal definition of what constitutes a natural language (it could be anything which can be used to express concepts and discuss the world,...etc. which is not a formal language), this means we can have particular languages w/ a non-recursive syntax or even those which can infinitely-long sentences (via embedding infinitary logic into natural language by some methods, or allowing infinitary logic to be the metatheory). Natural language can essentially talk about anything

-------------------------------
Formal language (syntax) comprises of a set of symbols called an 'alphabet' (in the context of mathematics, specifically model theory, this is instead called a vocabulary), formation rules to forms WFF's, and a set of WFF's (which is a subset of all possible strings that can be formed).

A 'logic' is syntax + semantics, a full formal system is a logic with a proof theory (inference rules).
## Classification of Formal Grammars
### Defining Formal Grammars
Formally, a grammar is defined as the following:
	**Grammar:** A grammar is a 4-tuple $G=(N, \Sigma, P, S )$, where
	- $N$ is the set of non-terminating symbols, symbols which cannot be appear in the formal language produced by a formal grammar.
	- $\Sigma$ is the set of terminal symbols
	- $P$ is the set of production rules (functions map a string of symbols, which could bee terminating or non-terminating, to another string of symbols).
	- $S$ is the starting symbol

E.g., Suppose we have the production rules:
	$S\to aSb$
	$S\to \varepsilon$ (the empty string)
	then, the following strings can be outputted
	$ab$
	$aabb$
	$aaabbb$
	...etc.

**Notes:**
- The starting symbol is always a non-terminal symbol.
- Each production rules is of the form $(\Sigma \cup N)^*N(\Sigma \cup N)^*\to(\Sigma\cup N)^*$, where '$*$' is the Kleene star operator.

### Chomsky Hierarchy
Type 3: Regular language; recognized by a finite state automaton
Type 2: Context-free Language; recognized by a non-deterministic pushdown automaton
Type 1: Context-sensitive Language; recognized by a linear bounded automaton
Type 0: Recursively-enumerable; recognized by a Turing machine


**Note:** Formal grammars do not have a semantics, only a formal syntax which has been generated. Meanwhile, something like Montague grammar has both a syntax and semantics.

## Montague Grammar

## References
[Tarski's theory of truth](Logic/Tarski's%20theory%20of%20truth.md)
[Trivialism](Miscellaneous/Trivialism.md)
[Proof Theory](Logic/Proof%20Theory.md)
[Logics, Structures & Models](Model%20Theory/Logics,%20Structures%20&%20Models.md)
[Formal Grammar](https://en.wikipedia.org/wiki/Formal_grammar)