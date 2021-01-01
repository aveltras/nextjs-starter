with import <nixpkgs> { };

{
  shell = mkShell {
    buildInputs = [
      nixfmt
      nodejs
      nodePackages.pnpm

      (writeShellScriptBin "dbmate" ''
        ${dbmate}/bin/dbmate $@ && zapatos
      '')
    ];
  };
}
