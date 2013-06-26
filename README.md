In this dojo, we will get comfortable with javascript and jasmine.

# Introduction

Javascript is a ubiquitous language that is available in every browser. It is often used to give sites interactivity.

Jasmine is a behavior-driven development (BDD) framework for testing JavaScript code. It does not depend on any other JavaScript frameworks. It does not require a DOM. And it has a clean, obvious syntax so that you can easily write tests.

BDD refers to the tests describing behavior instead of implementation details of the code under test. For more information see (http://dannorth.net/introducing-bdd/)

# The Exercise

For this, we have multiple exercises. The first exercise is easier and the second is more difficult to complete.

## Exercise 1: Prime Factors

From Uncle Bob: http://butunclebob.com/ArticleS.UncleBob.ThePrimeFactorsKata

You want to create a factor method such that:

> factor(1) == []

> factor(2) == [2]

> factor(4) == [2,2]

> factor(6) == [2,3]

> factor(10) == [2,5]

## Exercise 2: Roman Numerals

From http://codingdojo.org/cgi-bin/wiki.pl?KataRomanNumerals

You want to create a romanNumeralFor method such that:

> romanNumeralFor(1) == I

> romanNumeralFor(2) == II

> romanNumeralFor(7) == VII

> romanNumeralFor(9) == IX

> romanNumeralFor(52) == LII

> romanNumeralFor(114) == CXIV

> romanNumeralFor(500) == D

> romanNumeralFor(1000) == M

> romanNumeralFor(2999) == MMCMXCIX

Hint: 5_000 and 10_000 are not needed but you can use the following to represent them in case your algorithm needs them: 5_000 = Y, 10_000 = Z

We should not need to convert numbers larger than 3000.
