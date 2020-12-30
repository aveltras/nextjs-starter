with import <nixpkgs> { };

{
  shell = mkShell { buildInputs = [ nixfmt nodejs nodePackages.pnpm ]; };
}
