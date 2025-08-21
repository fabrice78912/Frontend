#!/bin/sh
set -e

# Valeurs par défaut si les variables d'environnement ne sont pas définies
API_HOST=${API_HOST:-localhost}
API_PORT=${API_PORT:-8080}

# Génère le fichier env.js avec API_HOST et API_PORT
cat <<EOF > /usr/share/nginx/html/assets/env.js
(function(window) {
  window["env"] = window["env"] || {};
  window["env"]["API_HOST"] = "${API_HOST}";
  window["env"]["API_PORT"] = "${API_PORT}";
})(this);
EOF

# Exécute la commande passée au conteneur (ex: nginx)
exec "$@"

