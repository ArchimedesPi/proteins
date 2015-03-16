# Proteins
## A project to aggressively refactor protein identification and data storage

The current state of protein identification codes is that of many disparate systems.
The most well-known system as of this writing is the GenBank Accession Code. However, GenBank codes correspond to a particular observation of a protein, meaning that for a single protein in a single organism, there are usually >10,000 accession codes **with the same sequence**. This is terrible for computer programs operating on an idealized protein, since a "standard" GenBank accession will have to be cherry-picked for each needed protein.

This project sets out to refactor the situation of identification codes and data storage formats.
We propose a JSON-based system storing protein metadata, and a dual identifier system containing two sets of identifiers:
  * a global, long hexadecimal identifier
  * and a short, human-readable identifier

We've implemented this system in this repository.
To generate an ID from a JSON protein description file:
````
node makeid.js < ./test.json
````
