with import <nixpkgs> { };

{
  shell = mkShell {
    buildInputs = [
      docker-compose
      nixfmt
      nodejs
      nodePackages.pnpm

      (writeShellScriptBin "dbmate" ''
        ${dbmate}/bin/dbmate $@ && zapatos
      '')
    ];
  };
}
