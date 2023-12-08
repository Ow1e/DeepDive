export interface Atom {
    name : string;
    symbol : string;
    electronegativity : number;
}

export const atoms : Atom[] = [
    {
        name: "Hydrogen",
        symbol: "H",
        electronegativity: 2.2
    },
    {
        name: "Lithium",
        symbol: "Li",
        electronegativity: 0.98
    },
    {
        name: "Beryllium",
        symbol: "Be",
        electronegativity: 1.57
    },
    {
        name: "Boron",
        symbol: "B",
        electronegativity: 2.04
    },
    {
        name: "Carbon",
        symbol: "C",
        electronegativity: 2.55
    },
    {
        name: "Nitrogen",
        symbol: "N",
        electronegativity: 3.04
    },
    {
        name: "Oxygen",
        symbol: "O",
        electronegativity: 3.44
    },
    {
        name: "Fluorine",
        symbol: "F",
        electronegativity: 3.98
    },
    {
        name: "Sodium",
        symbol: "Na",
        electronegativity: 0.93
    },
    {
        name: "Magnesium",
        symbol: "Mg",
        electronegativity: 1.31
    },
    {
        name: "Aluminum",
        symbol: "Al",
        electronegativity: 1.61
    },
    {
        name: "Silicon",
        symbol: "Si",
        electronegativity: 1.9
    },
    {
        name: "Phosphorus",
        symbol: "P",
        electronegativity: 2.19
    },
    {
        name: "Sulfur",
        symbol: "S",
        electronegativity: 2.58
    },
    {
        name: "Chlorine",
        symbol: "Cl",
        electronegativity: 3.16
    }
];

export function getAtom(symbol: string): Atom {
    return atoms.find(atom => atom.symbol === symbol) as Atom;
}

export function getRandomAtom(): Atom {
    return atoms[Math.floor(Math.random() * atoms.length)];
}