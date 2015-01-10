# Proteins
## A project to aggressively refactor protein identification and data storage

The current state of protein identification codes is that of many disparate systems.
The most well known system as of this writing is the PDB system, which is actually not a universal identification code.
It is instead a identification number for a particular X-ray crystallograph of a particular crystallization of a protein.

This project sets out to refactor the situation of identification codes and data storage formats.
We propose a JSON-based system storing protein metadata, and a dual identifier system containing two sets of identifiers:
	* a global, long hexadecimal identifier
	* and a short, human-readable identifier

We've implemented this system in this repository.
To generate an ID from a JSON protein description file:
````
node makeid.js < ./test.json
````
