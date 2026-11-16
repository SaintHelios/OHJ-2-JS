# flask module <SW1>

## Install the flask module via pip:

```
> $ pip install Flask
```

or via **nix-shell**:

```nix
let
  pkgs = import <nixpkgs> {};
in pkgs.mkShell {
  packages = [
    (pkgs.python3.withPackages (python-pkgs: [
      python-pkgs.flask
    ]))
  ];
}
```

**Run with**: 
````
> $ python3 main.py
````