# auxiliary-outlets
Project to demonstrate an issue I'm running into.

## The Problem
I get an error when navigating from a route where I've defined a component for an auxiliary outlet to a child route where I've defined a different component for that outlet.

Error: `Cannot activate an already activated outlet`

The `admin` module is my original attempt and reproduction of the problem and the `clients` module represents an alternative approach I tried based on some googling. The second approach does not render the auxiliary outlet component on any but the root route for which it was defined.
