{pkgs ? import <nixpkgs> {
    inherit system;
  }, system ? builtins.currentSystem, nodejs ? pkgs."nodejs-14_x"}:


let
  nodeDependencies = (pkgs.callPackage ./default.nix {}).shell.nodeDependencies;
  gitIgnore = pkgs.nix-gitignore.gitignoreSourcePure;

in
with pkgs;
stdenv.mkDerivation {
  name = "my-webpack-app";
  src = gitIgnore [./.gitignore] ./.;
  buildInputs = [nodejs pkgconfig vips];
  buildPhase = ''
    ln -s ${nodeDependencies}/lib/node_modules ./node_modules
    export PATH="${nodeDependencies}/bin:$PATH"

    mkdir -p $out
    next build
    cp -r .next $out/
    cp schema.gql $out/schema.gql
  '';
  installPhase = ''
    ln -s ${nodeDependencies}/lib/node_modules $out/node_modules  
  '';
}